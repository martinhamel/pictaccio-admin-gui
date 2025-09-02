import { Address } from '@pictaccio/admin-gui/src/models/address';
import { NamedEmail } from '@pictaccio/admin-gui/src/models/named_email';
import { NamedPhone } from '@pictaccio/admin-gui/src/models/named_phone';

export enum TaxLocality {
    Quebec = 'ca-qc',
    Ontario = 'ca-on',
    NewfoundlandAndLabrador = 'ca-nl',
    PrinceEdwardIsland = 'ca-pe',
    NovaScotia = 'ca-ns',
    NewBrunswick = 'ca-nb',
    Manitoba = 'ca-mb',
    Saskatchewan = 'ca-sk',
    Alberta = 'ca-ab',
    BritishColumbia = 'ca-bc',
    Yukon = 'ca-yt',
    NorthwestTerritories = 'ca-nt',
    Nunavut = 'ca-nu',
}

export class StoreConfig {
    public storeName?: string = undefined;
    public storeAccentColor?: string = undefined;
    public storeLogo?: string = undefined;
    public address?: Address = undefined;
    public emailAddresses?: NamedEmail[] = undefined;
    public phones?: NamedPhone[] = undefined;
    public taxLocality?: TaxLocality = undefined;
    public taxRateHst?: string = undefined;
    public taxRateGst?: string = undefined;
    public taxRateQst?: string = undefined;
    public taxRatePst?: string = undefined;
    public taxIdHst?: string = undefined;
    public taxIdGst?: string = undefined;
    public taxIdQst?: string = undefined;
    public taxIdPst?: string = undefined;

    constructor() {
        this.address = new Address();
        this.phones = [{ name: '_main', phone: '' }];
        this.emailAddresses = [{ name: '_customer-service', email: '' }, { name: '_notifications', email: '' }]
    }
}
