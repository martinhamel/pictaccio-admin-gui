import BaseService from '@pictaccio/admin-gui/src/services/base_service';
import { store } from '@pictaccio/admin-gui/src/store';

const PING_INTERVAL = 10000;

class AppService extends BaseService {
    private checkCounter = 0;
    private authCounter = 0;

    public async debugGetDbQueries(): Promise<any> {
        const response = await this.request({
            method: 'get',
            tryAuthenticated: true,
            url: 'app/debug-get-db-queries'
        });
        const data = await response.json();

        return data.queries;
    }

    public async debugGetJobs(): Promise<string[]> {
        const response = await this.request({
            method: 'get',
            tryAuthenticated: true,
            url: 'app/debug-get-jobs'
        });
        const data = await response.json();

        return data.jobs;
    }

    public async debugRunJob(jobName: string): Promise<void> {
        await this.request({
            method: 'post',
            tryAuthenticated: true,
            url: 'app/debug-run-job',
            data: { jobName }
        });
    }

    public async ping(): Promise<void> {
        let nextCheck = PING_INTERVAL;

        try {
            const response = await this.request({
                method: 'get',
                tryAuthenticated: true,
                url: 'app/ping',
                timeout: 1500
            });
            const data = await response.json();

            store.commit('App/commitOnline', true);

            if (!data.authenticated && this.authCounter === 3) {
                this.authCounter = 0;
                store.commit('App/commitAuthenticated', false);
            } else if (!data.authenticated) {
                this.authCounter++;
                nextCheck = 1500;
            } else {
                this.checkCounter = 0;
                this.authCounter = 0;
                store.commit('App/commitAuthenticated', true);
            }
        } catch (error) {
            if (this.checkCounter === 0) {
                this.checkCounter = 3;
            }
            if (--this.checkCounter === 0) {
                store.commit('App/commitOnline', false);
            } else {
                nextCheck = 1500;
            }
        } finally {
            setTimeout(() => {
                this.ping();
            }, nextCheck);
        }
    }

    public startChecks(): void {
        this.ping();
    }
}

export default new AppService();
