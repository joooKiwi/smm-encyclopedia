export interface ClassThatCanBeUnknown<IS_UNKNOWN extends boolean = boolean, > {

    get isUnknown(): IS_UNKNOWN

}
