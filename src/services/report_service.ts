import { i18n } from '@pictaccio/admin-gui/i18n';
import BaseService from '@pictaccio/admin-gui/services/base_service';
import { ReportSeriesParams, ReportType } from '@pictaccio/shared/types/report';

class ReportService extends BaseService {
    public async queryJson(report: ReportType, params: ReportSeriesParams): Promise<any> {
        try {
            const response = await this.request({
                method: 'get',
                url: `report/${report}`,
                authenticated: true,
                data: {
                    language: i18n.global.locale,
                    renderer: params.renderer,
                    pageAt: 1,
                    pageSize: 1000,
                    view: params.view,
                    'dateRange[preset]': params.dateRange.preset,
                    'dateRange[start]': params.dateRange.start ?? undefined,
                    'dateRange[end]': params.dateRange.end ?? undefined
                }
            });

            if (response.headers.get('Content-Type') === 'text/csv') {
                const url = window.URL.createObjectURL(await response.blob());
                const a = document.createElement('a');

                a.style.display = 'none';
                a.href = url;
                a.download = 'out.csv';

                document.body.appendChild(a);
                a.click();

                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);

                return {
                    sales: {
                        salesSeries: []
                    }
                };
            } else {
                return await response.json();
            }
        } catch (error) {
            return null;
        }
    }
}

export default new ReportService();
