import type {NameTemplate}                                                                  from '../../lang/name/Name.template';
import type {PossibleName_SMM2_Number as PossibleMarioMakerVersion_SMM2_Number}             from '../version/Versions.types';
import type {PossibleEnglishName as PossibleEnglishName_Category}                           from '../miiCostumeCategory/MiiCostumeCategories.types';
import type {PossibleEnglishNameWithOnlyAmount as PossibleEnglishName_OfficialNotification} from '../officialNotification/OfficialNotifications.types';
import type {TemplateWithNameTemplate}                                                      from '../_template/TemplateWithName.template';

export interface MiiCostumeTemplate
    extends TemplateWithNameTemplate<NameTemplate> {

    officialNotification: | PossibleEnglishName_OfficialNotification | null

    version: | PossibleMarioMakerVersion_SMM2_Number | null

    category: PossibleEnglishName_Category

}
