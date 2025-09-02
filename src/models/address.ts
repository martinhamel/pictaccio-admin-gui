export enum AddressUnitType {
    Apartment = 'apartment',
    Suite = 'suite',
    Office = 'office'
}

export class Address {
    public addressLine1!: string;
    public addressLine2!: string;
    public city!: string;
    public province!: string;
    public country!: string;
    public postalCode!: string;
}
