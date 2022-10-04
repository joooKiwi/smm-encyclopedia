export interface Time<MILLISECOND extends number = number, SECOND extends number = number, > {

    get millisecond(): MILLISECOND

    get second(): SECOND

}
