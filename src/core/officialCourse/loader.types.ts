import type {NullOr} from '@joookiwi/type'

import type {PossibleEnglishName} from 'core/mysteryMushroom/MysteryMushrooms.types'

/** The {@link MysteryMushrooms} reward of an official course */
export type PossibleReward = NullOr<| PossibleEnglishName | 'Bulbasaur / Charmander / Squirtle' | 'Kitty White / Melody' | 'Callie / Marie'>

/** The release date (according to Nintendo and MarioWiki) of the official courses */
export type PossibleReleaseDate = | '2017-10-27'
                                  | '2016-12-21'
                                  | '2016-11-25'
                                  | '2016-07-08'
                                  | '2016-06-03'
                                  | '2016-05-27' | '2016-05-13'
                                  | '2016-04-08' | '2016-04-01'
                                  | '2016-03-21' | '2016-03-18' | '2016-03-10' | '2016-03-09' | '2016-03-04'
                                  | '2016-02-26' | '2016-02-19' | '2016-02-12' | '2016-02-05'
                                  | '2016-01-30' | '2016-01-15' | '2016-01-13' | '2016-01-07'
                                  | '2015-12-31' | '2015-12-25' | '2015-12-19' | '2015-12-18' | '2015-12-16' | '2015-12-10' | '2015-12-03'
                                  | '2015-11-27' | '2015-11-12' | '2015-11-11' | '2015-11-06' | '2015-11-05'
/** The removal date (according to MarioWiki) of the official courses */
export type PossibleRemovalDate = NullOr<| '2016-02-22' | UnknownReference>

/** The amount of time available in the official course */
export type PossibleAmountOfTime = | 50 | 200 | 300 | 500
