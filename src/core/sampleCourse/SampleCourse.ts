import type {NullOr} from '@joookiwi/type'

import type {GameStyles}                                                                             from 'core/gameStyle/GameStyles'
import type {PossibleAmountOfTime, PossibleFirstNumberInFirst10MarioChallenges, PossibleWorldNumber} from 'core/sampleCourse/loader.types'
import type {Themes}                                                                                 from 'core/theme/Themes'
import type {NameTrait}                                                                              from 'lang/name/NameTrait'

export interface SampleCourse
    extends NameTrait<string> {

    get worldNumber(): PossibleWorldNumber

    get firstNumberInFirst10MarioChallenges(): PossibleFirstNumberInFirst10MarioChallenges


    get gameStyle(): GameStyles


    get themeInMainArea(): Themes

    get themeInSubArea(): NullOr<Themes>


    get amountOfTime(): PossibleAmountOfTime

}
