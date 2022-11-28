import type {NullOrString} from '../../util/types'

export interface ClassWithComment<COMMENT extends NullOrString = NullOrString, > {

    get comment(): COMMENT

}
