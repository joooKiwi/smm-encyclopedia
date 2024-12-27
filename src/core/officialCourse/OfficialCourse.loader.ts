import file from 'resources/compiled/Official course (SMM).json'

import type {CollectionHolder} from '@joookiwi/collection'
import type {Array, NullOr}    from '@joookiwi/type'
import {forEachByArray}        from '@joookiwi/collection'

import type {LanguageContent}                                                                from 'core/_template/LanguageContent'
import type {DescriptionLanguageContent}                                                     from 'core/_template/DescriptionLanguageContent'
import type {PossibleAcronym_GameStyle_SMM1}                                                 from 'core/gameReference/GameReferences.types'
import type {PossibleAmountOfTime, PossibleReleaseDate, PossibleRemovalDate, PossibleReward} from 'core/officialCourse/loader.types'
import type {OfficialCourse}                                                                 from 'core/officialCourse/OfficialCourse'
import type {PossibleEnglishName}                                                            from 'core/officialCourse/OfficialCourses.types'
import type {PossibleEnglishName_CourseTheme_SMM1}                                           from 'core/theme/Themes.types'
import type {Loader}                                                                         from 'util/loader/Loader'

import {isInProduction}                                          from 'variables'
import {GameStyles}                                              from 'core/gameStyle/GameStyles'
import {MysteryMushrooms}                                        from 'core/mysteryMushroom/MysteryMushrooms'
import {OfficialCourseContainer}                                 from 'core/officialCourse/OfficialCourse.container'
import {Themes}                                                  from 'core/theme/Themes'
import {createNameFromContent, createNameFromContentDescription} from 'lang/name/createNameFromContent'
import {UNKNOWN_REFERENCE}                                       from 'util/commonVariables'
import {Empty}                                                   from 'util/emptyVariables'
import {ArrayAsCollection}                                       from 'util/collection/ArrayAsCollection'

import EMPTY_COLLECTION_HOLDER =  Empty.EMPTY_COLLECTION_HOLDER
import GameStyleCompanion =       GameStyles.Companion
import MysteryMushroomCompanion = MysteryMushrooms.Companion
import ThemeCompanion =           Themes.Companion

/**
 * @singleton
 */
export class OfficialCourseLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, OfficialCourse>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: OfficialCourseLoader

    private constructor() {}

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: ReadonlyMap<PossibleEnglishName, OfficialCourse>

    public load(): ReadonlyMap<PossibleEnglishName, OfficialCourse> {
        if (this.#map != null)
            return this.#map

        const references = new Map<PossibleEnglishName, OfficialCourse>()
        forEachByArray(file as Array<Content>, content =>
                references.set(content.english, createReference(content,),),)

        if (!isInProduction)
            console.info(
                '-------------------- "official course" has been loaded --------------------\n',
                references,
                '\n-------------------- "official course" has been loaded --------------------',
            )

        return this.#map = references
    }

}

interface Content
    extends LanguageContent, DescriptionLanguageContent {

    readonly reward: PossibleReward

    readonly releaseDate: PossibleReleaseDate
    readonly removalDate: PossibleRemovalDate

    readonly gameStyle: PossibleAcronym_GameStyle_SMM1
    readonly courseTheme_mainArea: PossibleEnglishName_CourseTheme_SMM1
    readonly courseTheme_subArea: NullOr<PossibleEnglishName_CourseTheme_SMM1>

    readonly amountOfTime: PossibleAmountOfTime


    readonly english: PossibleEnglishName
    readonly americanEnglish: null
    readonly europeanEnglish: null
    readonly german: string
    readonly italian: string
    readonly dutch: UnknownReference
    readonly portuguese: UnknownReference
    readonly americanPortuguese: null
    readonly europeanPortuguese: null
    readonly russian: string
    readonly japanese: string
    readonly chinese: null
    readonly traditionalChinese: null
    readonly simplifiedChinese: null
    readonly korean: null

    readonly americanEnglish_description: null
    readonly europeanEnglish_description: null
    readonly german_description: UnknownReference
    readonly italian_description: UnknownReference
    readonly dutch_description: UnknownReference
    readonly portuguese_description: UnknownReference
    readonly americanPortuguese_description: null
    readonly europeanPortuguese_description: null
    readonly russian_description: UnknownReference
    readonly japanese_description: UnknownReference
    readonly chinese_description: null
    readonly traditionalChinese_description: null
    readonly simplifiedChinese_description: null
    readonly korean_description: null

}

function createReference(content: Content,): OfficialCourse {
    const subArea = content.courseTheme_subArea

    return new OfficialCourseContainer(
        createNameFromContent(content, 1, true,),
        createNameFromContentDescription(content, 1, true,),
        retrieveReward(content.reward,),
        createReleaseDate(content.releaseDate,),
        createRemovalDate(content.removalDate,),
        GameStyleCompanion.getValueByAcronym(content.gameStyle,),
        ThemeCompanion.getValueByName(content.courseTheme_mainArea,),
        subArea == null ? null : ThemeCompanion.getValueByName(subArea,),
        content.amountOfTime,
    )
}


function retrieveReward(value: PossibleReward,): CollectionHolder<MysteryMushrooms> {
    if (value == null)
        return EMPTY_COLLECTION_HOLDER
    if (value === 'Bulbasaur / Charmander / Squirtle')
        return new ArrayAsCollection([MysteryMushrooms.BULBASAUR, MysteryMushrooms.CHARMANDER, MysteryMushrooms.SQUIRTLE,],)
    if (value === 'Kitty White / Melody')
        return new ArrayAsCollection([MysteryMushrooms.KITTY_WHITE, MysteryMushrooms.MELODY,],)
    if (value === 'Callie / Marie')
        return new ArrayAsCollection([MysteryMushrooms.CALLIE, MysteryMushrooms.MARIE,],)
    return new ArrayAsCollection([MysteryMushroomCompanion.getValueByName(value,),],)
}

function createReleaseDate(value: PossibleReleaseDate,): Date {
    return new Date(Number(value.substring(0, 4,),), Number(value.substring(5, 6,),) - 1, Number(value.substring(8, 9,),), 0, 0, 0, 0,)
}

function createRemovalDate(value: PossibleRemovalDate,): NullOr<Date | UnknownReference> {
    if (value == null)
        return null
    if (value === '???')
        return UNKNOWN_REFERENCE

    return new Date(Number(value.substring(0, 4,),), Number(value.substring(5, 6,),) - 1, Number(value.substring(8, 9,),), 0, 0, 0, 0,)
}
