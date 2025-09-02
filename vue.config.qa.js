const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const path = require('path');

module.exports = {
    outputDir: '/srv/www',
    chainWebpack: config => {
        config.optimization.minimize(false);
        config.module
            .rule('i18n')
            .resourceQuery(/blockType=i18n/)
            .type('javascript/auto')
            .use('i18n')
            .loader('@intlify/vue-i18n-loader')
            .end();

        config.resolve.fallback = {
            stream: require.resolve('stream-browserify')
        };

        if (process.env.NODE_ENV === 'test') {
            const scssRule = config.module.rule('scss');
            scssRule.uses.clear();
            scssRule
                .use('null-loader')
                .loader('null-loader');
        }
    },
    configureWebpack: {
        plugins: [
            new NodePolyfillPlugin()
        ],
        resolve: {
            extensions: ['.js', '.ts', '.vue', '.json'],
            alias: {
                '@pictaccio/admin-gui': path.resolve('src')
            }
        },
    },
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                @use "sass:math";
                @import "@pictaccio/admin-gui/src/scss/variables.scss";
                @import "@pictaccio/admin-gui/src/scss/mixins.scss";
                @import "@pictaccio/admin-gui/src/scss/functions.scss";
                @import "@pictaccio/admin-gui/src/scss/style.scss";
                `
            }
        }
    }
}
