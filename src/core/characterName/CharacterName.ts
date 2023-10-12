import type {GameProperty} from 'core/entity/properties/game/GameProperty'
import type {NameTrait}    from 'lang/name/NameTrait'

/**@todo Add the isSaidInTheEditor getter method */
export interface CharacterName
    extends NameTrait<string>, GameProperty {

    get gamePropertyContainer(): GameProperty

}
