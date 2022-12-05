import type {NullOrBoolean} from 'util/types/nullable'

/**
 * @template
 */
export interface SimpleTimeTemplate<DAY extends boolean = boolean,
    NIGHT extends NullOrBoolean = NullOrBoolean, > {

    day: DAY

    night: NIGHT

}
