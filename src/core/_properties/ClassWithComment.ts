import type {NullOrString} from 'util/types/nullable'

export interface ClassWithComment<COMMENT extends NullOrString = NullOrString, > {

    get comment(): COMMENT

}
