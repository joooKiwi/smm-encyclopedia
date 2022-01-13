export interface ClassWithAmount<AMOUNT extends PossibleAmount = PossibleAmount, > {

    get amount(): AMOUNT

}

export type PossibleAmount = | number | null;
