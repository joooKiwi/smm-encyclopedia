import type {TemplateWithNameTemplate}                                                      from 'core/_template/TemplateWithName.template'
import type {PossibleEnglishName as PossibleEnglishName_Category}                           from 'core/miiCostumeCategory/MiiCostumeCategories.types'
import type {PossibleEnglishNameWithOnlyAmount as PossibleEnglishName_OfficialNotification} from 'core/officialNotification/OfficialNotifications.types'
import type {PossibleName_SMM2_Number as PossibleMarioMakerVersion_SMM2_Number}             from 'core/version/Versions.types'
import type {NameTemplate}                                                                  from 'lang/name/Name.template'

export interface MiiCostumeTemplate
    extends TemplateWithNameTemplate<NameTemplate> {

    officialNotification: NullOr<PossibleEnglishName_OfficialNotification>

    version: NullOr<PossibleMarioMakerVersion_SMM2_Number>

    category: PossibleEnglishName_Category

}
