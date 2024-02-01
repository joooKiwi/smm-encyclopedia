import type {ClassThatIsAvailableFromTheStart} from 'core/availableFromTheStart/ClassThatIsAvailableFromTheStart'
import type {GameProperty}                     from 'core/entity/properties/game/GameProperty'
import type {Theme}                            from 'core/theme/Theme'

export interface WorldTheme
    extends Theme, GameProperty<false, false, true>, ClassThatIsAvailableFromTheStart<null, null, NullOrTrue> {

    get isInSuperMarioMaker1(): false

    get isInSuperMarioMakerFor3DS(): false

    get isInSuperMarioMaker2(): true


    get isAvailableFromTheStartInSMM1(): null

    get isAvailableFromTheStartInSMM3DS(): null

}
