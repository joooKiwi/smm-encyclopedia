import type {TemplateWithNameTemplate}                                                      from 'core/_template/TemplateWithName.template'
import type {PossibleEnglishName as PossibleEnglishName_Category}                           from 'core/miiCostumeCategory/MiiCostumeCategories.types'
import type {PossibleEnglishNameWithOnlyAmount as PossibleEnglishName_OfficialNotification} from 'core/officialNotification/OfficialNotifications.types'

/** @template */
export interface MiiCostumeTemplate
    extends TemplateWithNameTemplate {

    officialNotification: NullOr<PossibleEnglishName_OfficialNotification>

    version: PossibleMarioMakerVersion

    category: PossibleEnglishName_Category

}

export type PossibleMarioMakerVersion = NullOr<| '2.0.0' | '3.0.0'>
