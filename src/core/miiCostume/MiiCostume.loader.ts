import file from 'resources/compiled/Mii Costume (SMM2).json'

import type {Array, NullOrString}               from '@joookiwi/type'
import {findFirstOrNullByArray, forEachByArray} from '@joookiwi/collection'

import type {LanguageContent}                                                               from 'core/_template/LanguageContent'
import type {MiiCostume}                                                                    from 'core/miiCostume/MiiCostume'
import type {PossibleEnglishName}                                                           from 'core/miiCostume/MiiCostumes.types'
import type {PossibleMarioMakerVersion}                                                     from 'core/miiCostume/loader.types'
import type {PossibleEnglishName as PossibleEnglishName_Category}                           from 'core/miiCostumeCategory/MiiCostumeCategories.types'
import type {MiiCostumeCategory}                                                            from 'core/miiCostumeCategory/MiiCostumeCategory'
import type {PossibleEnglishNameWithOnlyAmount as PossibleEnglishName_OfficialNotification} from 'core/officialNotification/OfficialNotifications.types'
import type {CompanionEnumByName}                                                           from 'util/enumerable/companion/CompanionEnumByName'
import type {Loader}                                                                        from 'util/loader/Loader'

import {isInProduction}           from 'variables'
import {MiiCostumeContainer}      from 'core/miiCostume/MiiCostume.container'
import {MiiCostumeCategoryLoader} from 'core/miiCostumeCategory/MiiCostumeCategory.loader'
import {OfficialNotifications}    from 'core/officialNotification/OfficialNotifications'
import {Versions}                 from 'core/version/Versions'
import {createNameFromContent}    from 'lang/name/createNameFromContent'
import {NUMBER_ONLY_REGEX, SPACE} from 'util/commonVariables'

/**
 * @dependsOn<{@link MiiCostumeCategoryLoader}>
 * @dependsOn<{@link OfficialNotifications}>
 * @dependsOn<{@link Versions}>
 * @singleton
 */
export class MiiCostumeLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, MiiCostume>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: MiiCostumeLoader

    private constructor() {}

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleEnglishName, MiiCostume>

    public load(): ReadonlyMap<PossibleEnglishName, MiiCostume> {
        if (this.#map != null)
            return this.#map

        const versionCompanion = Versions.CompanionEnum.get
        const miiCostumeCategoryMap = MiiCostumeCategoryLoader.get.load()
        const officialNotificationCompanion = OfficialNotifications.CompanionEnum.get
        const references = new Map<PossibleEnglishName, MiiCostume>()
        forEachByArray(file as Array<Content>, content => {
            const reference = createReference(content, versionCompanion, miiCostumeCategoryMap, officialNotificationCompanion,)
            references.set(reference.english as PossibleEnglishName, reference,)
        },)

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

    readonly notificationIfUnlocked: NullOrString<PossibleEnglishName_OfficialNotification>

    readonly MM2_version: PossibleMarioMakerVersion
    readonly category: PossibleEnglishName_Category

}

/** A type-alias definition of the {@link Versions.CompanionEnum} */
type VersionCompanion = CompanionEnumByName<Versions, typeof Versions>
/** A type-alias definition of the {@link MiiCostumes} name-reference {@link ReadonlyMap map} */
type MiiCostumeCategoryMap = ReadonlyMap<PossibleEnglishName_Category, MiiCostumeCategory>
/** A type-alias definition of the {@link OfficialNotifications.CompanionEnum} */
type OfficialNotificationCompanion = CompanionEnumByName<OfficialNotifications, typeof OfficialNotifications>

function createReference(content: Content, versionCompanion: VersionCompanion, miiCostumeCategoryMap: MiiCostumeCategoryMap, officialNotificationCompanion: OfficialNotificationCompanion,): MiiCostume {
    const version = content.MM2_version
    const notificationIfUnlocked = content.notificationIfUnlocked

    if (notificationIfUnlocked == null)
        return new MiiCostumeContainer(
            createNameFromContent(content, 2, true,),
            null, null,
            version == null ? null : versionCompanion.getValueByName(`v${version}`,),
            miiCostumeCategoryMap.get(content.category,)!,
        )

    const officialNotification = officialNotificationCompanion.getValueByName(notificationIfUnlocked,)
    if (officialNotification === OfficialNotifications.RECEIVE_A_LOT_OF_FEEDBACK_1 || officialNotification === OfficialNotifications.RECEIVE_A_LOT_OF_FEEDBACK_2)
        return new MiiCostumeContainer(
            createNameFromContent(content, 2, true,),
            officialNotification, null,
            version == null ? null : versionCompanion.getValueByName(`v${version}`,),
            miiCostumeCategoryMap.get(content.category,)!,
        )

    const numberFoundInOfficialNotificationFound = findFirstOrNullByArray(notificationIfUnlocked.split(SPACE,), it => NUMBER_ONLY_REGEX.test(it,),)
    return new MiiCostumeContainer(
        createNameFromContent(content, 2, true,),
        officialNotification, numberFoundInOfficialNotificationFound == null ? null : Number(numberFoundInOfficialNotificationFound,),
        version == null ? null : versionCompanion.getValueByName(`v${version}`,),
        miiCostumeCategoryMap.get(content.category,)!,
    )
}
