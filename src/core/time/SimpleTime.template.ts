/**
 * @template
 */
export interface SimpleTimeTemplate<DAY extends boolean = boolean,
    NIGHT extends | boolean | null = | boolean | null, > {

    day: DAY

    night: NIGHT

}
