import type {PossibleName_SMM1} from 'core/version/Versions.types'

/** Every possibility for a way to unlock a {@link MysteryMushrooms} */
export type PossibleConditionToUnlockIt = | 'Unlock Mystery Mushroom'
                                          | `100 Mario (${| 'easy' | 'normal' | 'expert' | 'super expert'})`
                                          | `Gnat Attack (${| 'normal' | 'hard'})`
                                          | 'Complete Event' | 'Complete 3 Events (by Arino)'

/** The first appearance of a {@link MysteryMushrooms} (as a version or a date) */
export type PossibleFirstAppearance = NullOr<| PossibleName_SMM1
                                             | '2015-11-05' | '2015-11-06' | '2015-11-11' | '2015-11-12' | '2015-11-27'
                                             | '2015-12-03' | '2015-12-10' | '2015-12-16' | '2015-12-18' | '2015-12-19' | '2015-12-25' | '2015-12-31'
                                             | '2016-01-07' | '2016-01-13' | '2016-01-15'
                                             | '2016-02-05' | '2016-02-12' | '2016-02-19' | '2016-02-26'
                                             | '2016-03-04' | '2016-03-09' | '2016-03-10' | '2016-03-18' | '2016-03-21'
                                             | '2016-04-01' | '2016-04-08'
                                             | '2016-05-13' | '2016-05-27'
                                             | '2016-06-03'
                                             | '2016-07-08'
                                             | '2016-11-25'
                                             | '2016-12-21'>

export type PokemonGeneration = `Pokémon gen ${| 1 | 4 | 6}`
