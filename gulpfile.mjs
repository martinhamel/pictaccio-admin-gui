import { exec, spawn } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import { homedir } from 'node:os';
import { join } from 'node:path';
import gulp from 'gulp';
import gulpConcat from 'gulp-concat';
import { Transform } from 'stream';

const dirs = {
    in: {
        index: './public/index.html'
    },
    out: {
        index: './public/'
    }
}

function getCurrentTag() {
    return new Promise((resolve, reject) => {
        const git = spawn('git', ['describe', '--contains', '--tags'], {stdio: ['pipe', 'pipe', 'pipe']});
        let stdout = '';
        let stderr = '';

        if (git && git.stdout) {
            git.stderr.addListener('data', (chunk) => {
                stderr += chunk.toString();
            });
            git.stdout.addListener('data', (chunk) => {
                stdout += chunk.toString();
            });
            git.stdout.addListener('end', () => {
                if (stderr !== '') {
                    reject(new Error('Missing tag on current branch'));
                } else {
                    resolve(stdout);
                }
            });
        }
    });
}

function dockerBuild(targetName, dockerfile, variables) {
    return new Promise((resolve, reject) => {
       const docker = spawn(
           'docker',
           ['build', '-f-', '-t', targetName, '../../'],
           {stdio: ['pipe', process.stdout, process.stderr]}
       );

       if (docker && docker.stdin) {
           for (const [key, value] of Object.entries(variables)) {
               dockerfile = dockerfile.replaceAll(`<%= ${key} %>`, value);
           }
           docker.addListener('close', () => {
               resolve();
           })
           docker.stdin.addListener('error', (error) => {
               reject(error);
           })
           docker.stdin.write(dockerfile);
           docker.stdin.end();
       }
    });
}

export async function buildAlpha() {
    try {
        const alpha = (await readFile(join('.', 'Dockerfile.alpha'))).toString();

        await dockerBuild('pictaccio-admin-gui-alpha', alpha, {
            APP_BUILD: process.env.APP_BUILD || await getCurrentTag(),
            NPMRC: (await readFile(join(homedir(), '.npmrc'))).toString().replaceAll('\n', ';')
        });
    } catch (error) {
        throw error;
    }
}

export async function buildBeta() {
    try {
        const beta = (await readFile(join('.', 'Dockerfile.beta'))).toString();

        await dockerBuild('pictaccio-admin-gui-beta', beta, {
            APP_BUILD: process.env.APP_BUILD || await getCurrentTag(),
            NPMRC: (await readFile(join(homedir(), '.npmrc'))).toString().replaceAll('\n', ';')
        });
    } catch (error) {
        throw error;
    }
}

export async function buildProd() {
    try {
        const prod = (await readFile(join('.', 'Dockerfile.prod'))).toString();

        await dockerBuild('pictaccio-admin-gui-prod', prod, {
            APP_BUILD: process.env.APP_BUILD || await getCurrentTag(),
            NPMRC: (await readFile(join(homedir(), '.npmrc'))).toString().replaceAll('\n', ';')
        });
    } catch (error) {
        throw error;
    }
}

export async function buildWinter24() {
    try {
        const fall23 = (await readFile(join('.', 'Dockerfile.winter24'))).toString();

        await dockerBuild('pictaccio-admin-gui-winter24', fall23, {
            APP_BUILD: process.env.APP_BUILD || await getCurrentTag(),
            NPMRC: (await readFile(join(homedir(), '.npmrc'))).toString().replaceAll('\n', ';')
        });
    } catch (error) {
        throw error;
    }
}

export async function buildTest() {
    try {
        const fall23 = (await readFile(join('.', 'Dockerfile.test'))).toString();

        await dockerBuild('pictaccio-admin-gui-test', fall23, {
            APP_BUILD: process.env.APP_BUILD || await getCurrentTag(),
            NPMRC: (await readFile(join(homedir(), '.npmrc'))).toString().replaceAll('\n', ';')
        });
    } catch (error) {
        throw error;
    }
}

export function writeAppBuild() {
    const appBuild = process.env.APP_BUILD;

    return gulp.src(dirs.in.index)
        .pipe(new Transform({
            objectMode: true,
            transform(object, encoding, callback) {
                if (object.contents) {
                    object.contents = Buffer.from(
                        object.contents.toString().replace('<%= VUE_APP_BUILD %>', appBuild)
                    )
                }
                callback(null, object);
            }
        }))
        .pipe(gulpConcat('index.html'))
        .pipe(gulp.dest(dirs.out.index));
}

/* MERGES */
function switchBranch(remote, branch) {
    return new Promise((resolve, reject) => {
        exec(`git switch ${remote}/${branch} -C ${remote}.${branch}`, (error) => {
            if (error) {
                reject(new Error(error.message));
            } else {
                resolve()
            }
        });
    });
}

function fetchRemote(remote) {
    return new Promise((resolve, reject) => {
        exec(`git fetch ${remote}`, (error) => {
            if (error) {
                reject(new Error(error.message));
            } else {
                resolve()
            }
        });
    });
}

function mergeBranch(remote, branch) {
    return new Promise((resolve, reject) => {
        exec(`git merge ${remote}/${branch}`, (error) => {
            if (error) {
                reject(new Error(error.message));
            } else {
                resolve()
            }
        });

    });
}

function pushBranch(remote, branch) {
    return new Promise((resolve, reject) => {
        exec(`git push ${remote} ${remote}.${branch}:${branch}`, (error) => {
            if (error) {
                reject(new Error(error.message));
            } else {
                resolve()
            }
        });

    });
}

export const mergeAlphaBeta = gulp.series(
    switchBranch.bind(null, 'origin', 'beta'),
    mergeBranch.bind(null, 'origin', 'alpha'),
    pushBranch.bind(null, 'origin', 'beta'),
    switchBranch.bind(null, 'origin', 'alpha'),
    mergeBranch.bind(null, 'origin', 'beta'),
    pushBranch.bind(null, 'origin', 'alpha')
);

export const mergeAlphaBetaProd = gulp.series(
    fetchRemote.bind(null, 'origin'),
    switchBranch.bind(null, 'origin', 'prod'),
    mergeBranch.bind(null, 'origin', 'beta'),
    // pushBranch.bind(null, 'origin', 'prod'),
    switchBranch.bind(null, 'origin', 'beta'),
    mergeBranch.bind(null, 'origin', 'prod'),
    mergeBranch.bind(null, 'origin', 'alpha'),
    // pushBranch.bind(null, 'origin', 'beta'),
    switchBranch.bind(null, 'origin', 'alpha'),
    mergeBranch.bind(null, 'origin', 'beta'),
    // pushBranch.bind(null, 'origin', 'alpha')
);

export const mergeHotfixes = gulp.series(
    switchBranch.bind(null, 'origin', 'beta'),
    mergeBranch.bind(null, 'origin', 'prod'),
    pushBranch.bind(null, 'origin', 'beta'),
    switchBranch.bind(null, 'origin', 'alpha'),
    mergeBranch.bind(null, 'origin', 'prod'),
    pushBranch.bind(null, 'origin', 'alpha')
);
