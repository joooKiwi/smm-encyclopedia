/**
 * @template
 * @todo move in a new file
 */
export interface GameTemplate<_1 extends boolean, _2 extends boolean = boolean, > {

    1: _1

    2: _2

}

/**
 * @template
 */
export type BooleanGameTemplate = GameTemplate<boolean>;
