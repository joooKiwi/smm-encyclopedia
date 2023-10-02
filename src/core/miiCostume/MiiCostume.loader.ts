import file from 'resources/compiled/Mii Costume (SMM2).json'

import type {LanguageContent}                                                               from 'core/_template/LanguageContent'
import type {MiiCostume}                                                                    from 'core/miiCostume/MiiCostume'
import type {MiiCostumeTemplate}                                                            from 'core/miiCostume/MiiCostume.template'
import type {PossibleEnglishName}                                                           from 'core/miiCostume/MiiCostumes.types'
import type {PossibleEnglishName as PossibleEnglishName_Category}                           from 'core/miiCostumeCategory/MiiCostumeCategories.types'
import type {PossibleEnglishNameWithOnlyAmount as PossibleEnglishName_OfficialNotification} from 'core/officialNotification/OfficialNotifications.types'
import type {PossibleName_SMM2_Number as PossibleMarioMakerVersion_SMM2_Number}             from 'core/version/Versions.types'
import type {Loader}                                                                        from 'util/loader/Loader'

import {isInProduction}     from 'variables'
import * as TemplateMethods from 'core/_template/templateMethods'
import {MiiCostumeCreator}  from 'core/miiCostume/MiiCostume.creator'

/**
 * @singleton
 * @recursiveReference<{@link MiiCostumes}>
 */
export class MiiCostumeLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, MiiCostume>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: MiiCostumeLoader

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleEnglishName, MiiCostume>

    public load(): ReadonlyMap<PossibleEnglishName, MiiCostume> {
        if (this.#map != null)
            return this.#map

        const references = new Map<PossibleEnglishName, MiiCostume>()
        let index = file.length
        while (index-- > 0) {
            const reference = new MiiCostumeCreator(createTemplate(file[index] as Content,),).create()
            references.set(reference.english as PossibleEnglishName, reference,)
        }

        if (!isInProduction)
            console.info(
                '-------------------- "Mii costume" has been loaded --------------------\n',
                references,
                '\n-------------------- "Mii costume" has been loaded --------------------',
            )

        return this.#map = references
    }
}


interface Content
    extends LanguageContent {

    notificationIfUnlocked: NullOr<PossibleEnglishName_OfficialNotification>

    MM2_version: NullOr<PossibleMarioMakerVersion_SMM2_Number>
    category: PossibleEnglishName_Category

}

function createTemplate(content: Content,): MiiCostumeTemplate {
    return {
        officialNotification: content.notificationIfUnlocked,
        version: content.MM2_version,
        category: content.category,
        name: TemplateMethods.createNameTemplate(content,),
    }
}
