import type {GameReferences} from 'core/gameReference/GameReferences'

export type MysteryMushroomGames = | readonly [GameReferences,]
                                   | readonly [GameReferences, GameReferences,]
                                   | readonly [GameReferences, GameReferences, GameReferences, GameReferences,]


export type SoundEffectOnMovement = | 'Twinkle' | 'Engine sound'

export type PossibleAmountOfSoundEffectOnJump = | 0 | 1 | 2 | 3

export type GameInStarMode = | 'SM64' | 'SMK'
export type SpecialMusicInStarMode = | 'Flying Mario' | 'Metal Mario' | 'Super Star'

export type AdditionalSoundOnGoalPole = | '+ sound' | '+ "Yatta"' | '+ barks' | '+ "Yeah"' | '+ humming' | '+ singing' | '+ Car sound'
export type TranslationKeyOnGoalPole = | 'Introduction' | 'Startup' | 'Game over'
                                       | 'Level finished' | 'Level finished?' | 'Race finished'
                                       | 'Airship completed' | 'Timed event completed' | 'Course completed'
                                       | 'Perfect score obtained' | 'Upgrade obtained' | 'Important item obtained'
                                       | 'Star collected' | 'Triforce collected'
                                       | 'Boss key obtained' | 'Boss defeated'
                                       | 'New technique acquired' | 'Gym Leader victory' | 'Rank up' | 'Secret area discovered' | 'Declaring the Splatfest\'s winning team'
                                       | 'Bowser\'s arrival' | 'Link meets Zelda for the 1st time' | 'Ganon encounter'
                                       | '3DS preview jingle'
export type PossibleTranslationKeyOnGoalPole = NullOr<| TranslationKeyOnGoalPole | UnknownReference>
export type TypeOfSoundOnGoalPole = | 'Marimba' | 'Rock'

export type AdditionalSoundOnDeath = '+ "Rooo…"' | '+ "Oh no!"' | '+ "Nooo!"' | '+ "Woah!"' | '+ "Yaha!"'
export type TranslationKeyOnDeath = | 'Game over' | 'Defeated' | 'Error sound'
                                    | 'Boss defeated' | 'Dog laughing'
                                    | 'Lost a life' | 'Lost an Arwing' | 'Falling offscreen'
                                    | 'Eliminated from the race' | 'Eliminated from the course' | 'Player has fainted'
                                    | 'Minigame lost' | 'Round lost'
                                    | 'Timed event failed' | 'Ran out of energy' | 'Practice Catcher result jingle'
                                    | 'Bowser\'s death' | 'Mario saying "Mama mia"' | 'Zelda\'s Lullaby' | 'Link caught by Moblins' | 'K.K. howling' | 'Pikmin death'
export type PossibleTranslationKeyOnDeath = NullOr<| TranslationKeyOnDeath | UnknownReference>
export type TypeOfSoundOnDeath = | 'Marimba' | 'Techno'
