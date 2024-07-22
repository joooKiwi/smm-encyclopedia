export interface ClassWithReference<out REFERENCE extends object, > {

    get reference(): REFERENCE

}
