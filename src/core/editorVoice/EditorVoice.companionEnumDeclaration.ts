import type {PossibleEnumerableValueBy} from '@joookiwi/enumerable'

import type {CharacterNames}      from 'core/characterName/CharacterNames'
import type {EditorVoices}        from 'core/editorVoice/EditorVoices'
import type {Entities}            from 'core/entity/Entities'
import type {CompanionEnumByName} from 'util/enumerable/companion/CompanionEnumByName'

export interface CompanionEnumDeclaration_EditorVoices
    extends CompanionEnumByName<EditorVoices, typeof EditorVoices> {

    getValueByCharacterName(value: PossibleEnumerableValueBy<| EditorVoices | CharacterNames>,): EditorVoices

    getValueByEntity(value: PossibleEnumerableValueBy<| EditorVoices | Entities>,): EditorVoices

    hasReference(value: | Entities | CharacterNames,): boolean

}
