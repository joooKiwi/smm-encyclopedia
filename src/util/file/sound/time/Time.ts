export interface Time<out MILLISECOND extends number = number,
    out SECOND extends number = number, > {

    get millisecond(): MILLISECOND

    get second(): SECOND

}
