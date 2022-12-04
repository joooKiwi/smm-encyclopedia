import resource from 'resources/compiled/Mii Costume (SMM2).json'

import type {MiiCostume}                                                                    from 'core/miiCostume/MiiCostume'
import type {MiiCostumeTemplate}                                                            from 'core/miiCostume/MiiCostume.template'
import type {PossibleEnglishName}                                                           from 'core/miiCostume/MiiCostumes.types'
import type {PossibleEnglishName as PossibleEnglishName_Category}                           from 'core/miiCostumeCategory/MiiCostumeCategories.types'
import type {PossibleEnglishNameWithOnlyAmount as PossibleEnglishName_OfficialNotification} from 'core/officialNotification/OfficialNotifications.types'
import type {PossibleName_SMM2_Number as PossibleMarioMakerVersion_SMM2_Number}             from 'core/version/Versions.types'
import type {PropertiesArrayWithOptionalLanguages as LanguagesPropertyArray}                from 'lang/Loader.types'
import type {Loader}                                                                        from 'util/loader/Loader'
import type {NullOr}                                                                        from 'util/types/nullable'

import {AbstractTemplateBuilder} from 'core/_template/AbstractTemplate.builder'
import {HeaderTypesForConvertor} from 'core/_util/loader/HeaderTypesForConvertor'
import {MiiCostumeBuilder}       from 'core/miiCostume/MiiCostume.builder'
import {CSVLoader}               from 'util/loader/CSVLoader'

//region -------------------- CSV array related types --------------------

enum Headers {

    notificationIfUnlocked,

    MM2_version,
    category,

    //region -------------------- Languages --------------------

    english, americanEnglish, europeanEnglish,
    french, canadianFrench, europeanFrench,
    german,
    spanish, americanSpanish, europeanSpanish,
    italian,
    dutch,
    portuguese, americanPortuguese, europeanPortuguese,
    russian,
    japanese,
    chinese, traditionalChinese, simplifiedChinese,
    korean,
    greek,

    //endregion -------------------- Languages --------------------

}

//region -------------------- Properties --------------------

type ExclusivePropertiesArray = [

    notificationIfUnlocked: NullOr<PossibleEnglishName_OfficialNotification>,

    MM2_version: NullOr<PossibleMarioMakerVersion_SMM2_Number>,
    category: PossibleEnglishName_Category,

]

type PropertiesArray = [
    ...ExclusivePropertiesArray,
    ...LanguagesPropertyArray,
]

//endregion -------------------- Exclusive properties --------------------

//endregion -------------------- CSV array related types --------------------

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
        if (this.#map == null) {
            const references = new Map<PossibleEnglishName, MiiCostume>()

            //region -------------------- CSV Loader --------------------

            new CSVLoader<PropertiesArray, MiiCostume, keyof typeof Headers>(resource, convertedContent => new MiiCostumeBuilder(new TemplateBuilder(convertedContent)).build())
                .setDefaultConversion('emptyable string')

                .convertTo(HeaderTypesForConvertor.everyPossibleNameWithAmount_officialNotification, 'notificationIfUnlocked',)
                .convertToEmptyableStringAnd(['2.0.0', '3.0.0',], 'MM2_version',)
                .convertTo(HeaderTypesForConvertor.everyPossibleName_MiiCostumeCategory, 'category',)

                .onAfterFinalObjectCreated(finalContent =>
                    references.set(finalContent.americanEnglish as PossibleEnglishName, finalContent,))
                .load()

            //endregion -------------------- CSV Loader --------------------

            console.log('-------------------- "Mii costume" has been loaded --------------------')// temporary console.log
            console.log(references)// temporary console.log
            console.log('-------------------- "Mii costume" has been loaded --------------------')// temporary console.log

            this.#map = references
        }
        return this.#map
    }
}

class TemplateBuilder
    extends AbstractTemplateBuilder<MiiCostumeTemplate, PropertiesArray, typeof Headers> {

    public constructor(content: PropertiesArray,) {
        super(content)
    }

    protected override get _headersIndexMap() {
        return Headers
    }

    public override build(): MiiCostumeTemplate {
        return {
            officialNotification: this._getContent(this._headersIndexMap.notificationIfUnlocked),
            version: this._getContent(this._headersIndexMap.MM2_version),
            category: this._getContent(this._headersIndexMap.category),
            name: this._createNameTemplate(),
        }
    }

}
