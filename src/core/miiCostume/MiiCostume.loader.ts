import file from 'resources/compiled/Mii Costume (SMM2).json'

import type {LanguageContent}                                                               from 'core/_template/LanguageContent'
import type {MiiCostume}                                                                    from 'core/miiCostume/MiiCostume'
import type {PossibleEnglishName}                                                           from 'core/miiCostume/MiiCostumes.types'
import type {PossibleEnglishName as PossibleEnglishName_Category}                           from 'core/miiCostumeCategory/MiiCostumeCategories.types'
import type {PossibleEnglishNameWithOnlyAmount as PossibleEnglishName_OfficialNotification} from 'core/officialNotification/OfficialNotifications.types'
import type {Loader}                                                                        from 'util/loader/Loader'

import {isInProduction}                    from 'variables'
import * as TemplateMethods                from 'core/_template/templateMethods'
import {MiiCostumeContainer}               from 'core/miiCostume/MiiCostume.container'
import {MiiCostumeCategories}              from 'core/miiCostumeCategory/MiiCostumeCategories'
import {OfficialNotificationHolderBuilder} from 'core/officialNotification/holder/OfficialNotificationHolder.builder'
import {Versions}                          from 'core/version/Versions'
import {NameBuilderContainer}              from 'lang/name/Name.builder.container'
import {PossibleMarioMakerVersion}         from 'core/miiCostume/loader.types'

/**
 * @dependsOn<{@link MiiCostumeCategories}>
 * @dependsOn<{@link OfficialNotifications}>
 * @dependsOn<{@link Versions}>
 * @singleton
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
            const reference = createContent(file[index] as Content,)
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

    MM2_version: PossibleMarioMakerVersion
    category: PossibleEnglishName_Category

}

function createContent(content: Content,): MiiCostume {
    const version = content.MM2_version

    return new MiiCostumeContainer(
        new NameBuilderContainer(TemplateMethods.createNameTemplate(content,), 2, true,).build(),
        new OfficialNotificationHolderBuilder(content.notificationIfUnlocked,).build(),
        version == null ? null : Versions.CompanionEnum.get.getValueByName(`v${version}`,),
        MiiCostumeCategories.CompanionEnum.get.getValueByName(content.category,).reference,
    )
}
