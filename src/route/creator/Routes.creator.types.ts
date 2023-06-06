import type {GroupUrlSimpleValue, GroupUrlValue} from 'core/game/Games.types'

/** A type encapsulating the name as a "{@link ViewDisplays.SIMPLE_LIST simple list}" */
export type SimpleListRouteName<NAME extends string, > = `${NAME} (list)`
/** A type encapsulating the name as a "{@link ViewDisplays.CARD_LIST card list}" */
export type CardListRouteName<NAME extends string, > = `${NAME} (card)`
/** A type encapsulating the name as a "{@link ViewDisplays.TABLE table}" */
export type TableRouteName<NAME extends string, > = `${NAME} (table)`
/** A type describing the name as a {@link Games game (1 to 3)} */
export type GameRouteName<NAME extends string, > = `${NAME} (Game=${GroupUrlSimpleValue})`
/** A type describing the name as a "{@link ViewDisplays.SIMPLE_LIST simple list}" & a {@link Games game (1 to 3)} */
export type SimpleListAndGameRouteName<NAME extends string, > = `${NAME} (list Game=${GroupUrlSimpleValue})`
/** A type describing the name as a "{@link ViewDisplays.CARD_LIST card list}" & a {@link Games game (1 to 3)} */
export type CardListAndGameRouteName<NAME extends string, > = `${NAME} (card Game=${GroupUrlSimpleValue})`
/** A type describing the name as a "{@link ViewDisplays.TABLE table}" & a {@link Games game (1 to 3)} */
export type TableAndGameRouteName<NAME extends string, > = `${NAME} (table Game=${GroupUrlSimpleValue})`

/** A type describing either the name directly or the name as a "{@link ViewDisplays.SIMPLE_LIST simple list}" */
export type PossibleSimpleListRouteName<NAME extends string, > = | NAME | SimpleListRouteName<NAME>
/** A type describing either the name directly or the name as a "{@link ViewDisplays.SIMPLE_LIST simple list}" or a "{@link ViewDisplays.CARD_LIST card list}" */
export type PossibleCardListRouteName<NAME extends string, > = | PossibleSimpleListRouteName<NAME> | CardListRouteName<NAME>
/** A type describing either the name directly or the name as a "{@link ViewDisplays.SIMPLE_LIST simple list}", a "{@link ViewDisplays.CARD_LIST card list}" or a "{@link ViewDisplays.TABLE table}" */
export type PossibleTableRouteName<NAME extends string, > = | PossibleCardListRouteName<NAME> | TableRouteName<NAME>
/** A type describing either the name directly or the name as a {@link Games game (1 to 3)} */
export type PossibleGameRouteName<NAME extends string, > = | NAME | GameRouteName<NAME>
/**
 * A type describing either the name directly or the name as a {@link Games game (1 to 3)},
 * a "{@link ViewDisplays.SIMPLE_LIST simple list}"
 * or the jointure of both
 */
export type PossibleSimpleListAndGameRouteName<NAME extends string, > = | NAME | PossibleSimpleListRouteName<NAME> | GameRouteName<NAME> | SimpleListAndGameRouteName<NAME>
/**
 * A type describing either the name directly or the name as a {@link Games game (1 to 3)},
 * a "{@link ViewDisplays.SIMPLE_LIST simple list}", a {@link ViewDisplays.CARD_LIST card list}
 * or the jointure of {@link Games game} with any list ({@link ViewDisplays.SIMPLE_LIST simple} or {@link ViewDisplays.CARD_LIST card})
 */
export type PossibleCardListAndGameRouteName<NAME extends string, > = | NAME | PossibleCardListRouteName<NAME> | GameRouteName<NAME> | CardListAndGameRouteName<NAME> | PossibleSimpleListAndGameRouteName<NAME>
/**
 * A type describing either the name directly or the name as a {@link Games game (1 to 3)},
 * a "{@link ViewDisplays.SIMPLE_LIST simple list}", a {@link ViewDisplays.CARD_LIST card list}, a {@link ViewDisplays.TABLE table}
 * or the jointure of {@link Games game} with any view display ("{@link ViewDisplays.SIMPLE_LIST simple list}", "{@link ViewDisplays.CARD_LIST card list}" or "{@link ViewDisplays.TABLE table}")
 */
export type PossibleTableAndGameRouteName<NAME extends string, > = | NAME | PossibleTableRouteName<NAME> | GameRouteName<NAME> | TableAndGameRouteName<NAME> | PossibleCardListAndGameRouteName<NAME>


/** A type encapsulating the path for a "{@link ViewDisplays.SIMPLE_LIST simple list}" */
export type SimpleListRoutePath<PATH extends string, > = `/list${PATH}`
/** A type encapsulating the path for a "{@link ViewDisplays.CARD_LIST card list}" */
export type CardListRoutePath<PATH extends string, > = `/card${PATH}`
/** A type encapsulating the path for a "{@link ViewDisplays.TABLE table}" */
export type TableRoutePath<PATH extends string, > = `/table${PATH}`
/** A type encapsulating the path for a {@link Games game (1 to 3)} */
export type GameRoutePath<PATH extends string, > = `/game-${GroupUrlValue}${PATH}`

/** A type describing either the path directly or the path for a "{@link ViewDisplays.SIMPLE_LIST simple list}" */
export type PossibleSimpleListRoutePath<PATH extends string, > = | PATH | SimpleListRoutePath<PATH>
/** A type describing either the path directly or the path for a "{@link ViewDisplays.SIMPLE_LIST simple list}" or a "{@link ViewDisplays.CARD_LIST card list}" */
export type PossibleCardListRoutePath<PATH extends string, > = | PossibleSimpleListRoutePath<PATH> | CardListRoutePath<PATH>
/** A type describing either the path directly or the path for a "{@link ViewDisplays.SIMPLE_LIST simple list}", a "{@link ViewDisplays.CARD_LIST card list}" or a "{@link ViewDisplays.TABLE table}" */
export type PossibleTableRoutePath<PATH extends string, > = | PossibleCardListRoutePath<PATH> | TableRoutePath<PATH>
/** A type describing either the path directly or the path for a {@link Games game (1 to 3)} */
export type PossibleGameRoutePath<PATH extends string, > = | PATH | GameRoutePath<PATH>
