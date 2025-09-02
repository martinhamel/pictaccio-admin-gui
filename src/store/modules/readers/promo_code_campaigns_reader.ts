import { DbPromoCodeCampaign } from '@pictaccio/admin-gui/src/models/db_promo_code_campaign';
import { Module as Mod } from 'vuex';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { ReaderResponse } from '@pictaccio/admin-gui/src/core/reader_response';
import { createDataTableService, DataTableService } from '@pictaccio/admin-gui/src/services/data_table_service';

@Module({ namespaced: true })
export default class PromoCodeCampaignsReader extends VuexModule {
    private service: DataTableService<DbPromoCodeCampaign, number>;
    private internalPromoCodeCampaign: ReaderResponse;

    constructor(module: Mod<ThisType<any>, any>) {
        super(module);

        this.service = createDataTableService<DbPromoCodeCampaign, number>({
            readEndpoint: 'campaign/read'
        });
    }

    public get promoCodeCampaigns(): ReaderResponse {
        return this.internalPromoCodeCampaign;
    }

    @Action
    public async promoCodeCampaignsRead(force = false): Promise<void> {
        if (force || this.internalPromoCodeCampaign === undefined) {
            const answer = await this.service.read({});
            this.context.commit('commitPromoCodeCampaigns',
                answer.results.map(i => ({ id: i.id, value: i.internal_name })));
        }
    }

    @Mutation
    public commitPromoCodeCampaigns(promoCodeCampaign: ReaderResponse): void {
        this.internalPromoCodeCampaign = promoCodeCampaign;
    }
}
