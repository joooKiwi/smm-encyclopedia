import type {NullOr} from '@joookiwi/type'

import type {GameStyles}                                                                             from 'core/gameStyle/GameStyles'
import type {PossibleAmountOfTime, PossibleFirstNumberInFirst10MarioChallenges, PossibleWorldNumber} from 'core/sampleCourse/loader.types'
import type {Themes}                                                                                 from 'core/theme/Themes'
import type {NameTrait}                                                                              from 'lang/name/NameTrait'

export interface SampleCourse
    extends NameTrait<string> {

    readonly worldNumber: PossibleWorldNumber
    readonly firstNumberInFirst10MarioChallenges: PossibleFirstNumberInFirst10MarioChallenges

    readonly gameStyle: GameStyles

    readonly themeInMainArea: Themes
    readonly themeInSubArea: NullOr<Themes>

    readonly amountOfTime: PossibleAmountOfTime

}
