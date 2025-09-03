import { DbBaseModel } from '@pictaccio/admin-gui/models/db_base_model';

export class ContactInfo extends DbBaseModel<number> {
    public firstName?: string;
    public lastName?: string;
    public email?: string;
    public phone?: string;
    public city?: string;
    public country?: string;
    public postalCode?: string;
    public region?: string;
    public streetAddress1?: string;
    public streetAddress2?: string;
    public newsletter?: boolean;
}
