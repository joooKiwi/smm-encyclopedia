import type {EveryLanguages}                             from 'lang/EveryLanguages'
import type {CompanionEnumByName}                        from 'util/enumerable/companion/CompanionEnumByName'
import type {CompanionEnumWithCurrentAndSetCurrentEvent} from 'util/enumerable/companion/CompanionEnumWithCurrentAndSetCurrentEvent'

export interface CompanionEnumDeclaration_EveryLanguages
    extends CompanionEnumWithCurrentAndSetCurrentEvent<EveryLanguages, typeof EveryLanguages>,
        CompanionEnumByName<EveryLanguages, typeof EveryLanguages> {

    getValueByAcronym(value: Nullable<| EveryLanguages | string>,): EveryLanguages

    getValueByNameOrAcronym(value: Nullable<| EveryLanguages | string>,): EveryLanguages

}
