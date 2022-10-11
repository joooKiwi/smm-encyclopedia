export interface ClassWithComment<COMMENT extends PossibleComment = PossibleComment, > {

    get comment(): COMMENT

}

export type PossibleComment = | string | null
