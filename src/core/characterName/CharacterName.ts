import type {GameProperty} from 'core/entity/properties/game/GameProperty'
import type {NameTrait}    from 'lang/name/NameTrait'
import {TimeProperty}      from 'core/entity/properties/time/TimeProperty'

export interface CharacterName
    extends NameTrait<string>,
        GameProperty,
        TimeProperty {

    readonly hasNameSaidInTheEditor: boolean

}
