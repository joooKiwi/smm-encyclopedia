import type {CompanionEnum} from '@joookiwi/enumerable'
import type {Nullable}      from '@joookiwi/type'

import type {Characters}                                                                       from 'lang/Characters'
import type {PossibleSingleCharacter, VariableCharacterByCharacter, VariableCharacterByString} from 'lang/Characters.types'

export interface CompanionEnum_Characters
    extends CompanionEnum<Characters, typeof Characters> {

    getCharacter<const B extends boolean, const C extends PossibleSingleCharacter, >(isSpaceEven: B, value: C,): VariableCharacterByCharacter<B, C>

    getCharacter<const B extends boolean, const C extends string, >(isSpaceEven: B, value: C,): VariableCharacterByString<B, C>


    getValueByCharacter(value: Nullable<| Characters | string>,): Characters

}
