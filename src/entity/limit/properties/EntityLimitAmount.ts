export interface EntityLimitAmount<AMOUNT extends | number | null = | number | null,
    IS_UNKNOWN extends boolean = boolean,
    COMMENT extends | string | null = | string | null, > {

    get amount(): AMOUNT

    get isAmountUnknown(): IS_UNKNOWN

    get amountComment(): COMMENT

}
