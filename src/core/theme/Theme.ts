import type {ClassThatIsAvailableFromTheStart} from '../availableFromTheStart/ClassThatIsAvailableFromTheStart'
import type {GameProperty}                     from '../entity/properties/game/GameProperty'
import type {NameTrait}                        from '../../lang/name/NameTrait'

export interface Theme
    extends NameTrait<string>/*, ClassWithEnglishName<PossibleTheme>*/, GameProperty,
        ClassThatIsAvailableFromTheStart {

    get isInProperty(): GameProperty

    get isAvailableFromTheStartContainer(): ClassThatIsAvailableFromTheStart

}
