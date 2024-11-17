import type {NullOrTrue} from '@joookiwi/type'

import type {ClassThatIsAvailableFromTheStart} from 'core/availableFromTheStart/ClassThatIsAvailableFromTheStart'
import type {GameProperty}                     from 'core/entity/properties/game/GameProperty'
import type {Theme}                            from 'core/theme/Theme'

export interface WorldTheme
    extends Theme, GameProperty,
        ClassThatIsAvailableFromTheStart<null, null, NullOrTrue> {

    readonly isInSuperMarioMaker1: false
    readonly isInSuperMarioMakerFor3DS: false
    readonly isInSuperMarioMaker2: true

    readonly isAvailableFromTheStartInSMM1: null
    readonly isAvailableFromTheStartInSMM3DS: null

}
