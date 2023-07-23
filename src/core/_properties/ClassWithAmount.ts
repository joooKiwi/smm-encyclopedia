export interface ClassWithAmount<AMOUNT extends NullOrNumber = NullOrNumber, > {

    get amount(): AMOUNT

}
