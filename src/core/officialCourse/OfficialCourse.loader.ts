import file from 'resources/compiled/Official course (SMM).json'

import type {LanguageContent}                                                                from 'core/_template/LanguageContent'
import type {DescriptionLanguageContent}                                                     from 'core/_template/DescriptionLanguageContent'
import type {PossibleAcronym_GameStyle_SMM1}                                                 from 'core/gameReference/GameReferences.types'
import type {CompanionEnumDeclaration_GameStyles}                                            from 'core/gameStyle/GameStyles.companionEnumDeclaration'
import type {PossibleAmountOfTime, PossibleReleaseDate, PossibleRemovalDate, PossibleReward} from 'core/officialCourse/loader.types'
import type {OfficialCourse}                                                                 from 'core/officialCourse/OfficialCourse'
import type {PossibleEnglishName}                                                            from 'core/officialCourse/OfficialCourses.types'
import type {PossibleEnglishName_CourseTheme_SMM1}                                           from 'core/theme/Themes.types'
import type {CompanionEnumByName}                                                            from 'util/enumerable/companion/CompanionEnumByName'
import type {Loader}                                                                         from 'util/loader/Loader'

import {isInProduction}                                          from 'variables'
import {GameStyles}                                              from 'core/gameStyle/GameStyles'
import {MysteryMushrooms}                                        from 'core/mysteryMushroom/MysteryMushrooms'
import {OfficialCourseContainer}                                 from 'core/officialCourse/OfficialCourse.container'
import {Themes}                                                  from 'core/theme/Themes'
import {createNameFromContent, createNameFromContentDescription} from 'lang/name/createNameFromContent'
import {UNKNOWN_REFERENCE}                                       from 'util/commonVariables'
import {EMPTY_ARRAY}                                             from 'util/emptyVariables'

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

    #map?: Map<PossibleEnglishName, OfficialCourse>

    public load(): ReadonlyMap<PossibleEnglishName, OfficialCourse> {
        if (this.#map != null)
            return this.#map

        const GameStyleCompanion = GameStyles.CompanionEnum.get
        const ThemeCompanion = Themes.CompanionEnum.get
        const MysteryMushroomCompanion = MysteryMushrooms.CompanionEnum.get
        const references = new Map<PossibleEnglishName, OfficialCourse>()
        let index = file.length
        while (index-- > 0) {
            const content = file[index] as Content
            references.set(content.english, createReference(content, GameStyleCompanion, ThemeCompanion, MysteryMushroomCompanion,),)
        }

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

/** A type-alias definition of the {@link GameStyles.CompanionEnum} */
type GameStyleCompanionType = CompanionEnumDeclaration_GameStyles
/** A type-alias definition of the {@link Themes.CompanionEnum} */
type ThemeCompanionType = CompanionEnumByName<Themes, typeof Themes>
/** A type-alias definition of the {@link MysteryMushrooms.CompanionEnum} */
type MysteryMushroomCompanionType = CompanionEnumByName<MysteryMushrooms, typeof MysteryMushrooms>

function createReference(content: Content, GameStyleCompanion: GameStyleCompanionType, ThemeCompanion: ThemeCompanionType, MysteryMushroomCompanion: MysteryMushroomCompanionType,): OfficialCourse {
    const subArea = content.courseTheme_subArea

    return new OfficialCourseContainer(
        createNameFromContent(content, 1, true,),
        createNameFromContentDescription(content, 1, true,),
        retrieveReward(content.reward, MysteryMushroomCompanion,),
        createReleaseDate(content.releaseDate,),
        createRemovalDate(content.removalDate,),
        GameStyleCompanion.getValueByAcronym(content.gameStyle,),
        ThemeCompanion.getValueByName(content.courseTheme_mainArea,),
        subArea == null ? null : ThemeCompanion.getValueByName(subArea,),
        content.amountOfTime,
    )
}


function retrieveReward(value: PossibleReward, MysteryMushroomCompanion: MysteryMushroomCompanionType,): readonly MysteryMushrooms[] {
    if (value == null)
        return EMPTY_ARRAY
    if (value === 'Bulbasaur / Charmander / Squirtle')
        return [MysteryMushrooms.BULBASAUR, MysteryMushrooms.CHARMANDER, MysteryMushrooms.SQUIRTLE,]
    if (value === 'Kitty White / Melody')
        return [MysteryMushrooms.KITTY_WHITE, MysteryMushrooms.MELODY,]
    if (value === 'Callie / Marie')
        return [MysteryMushrooms.CALLIE, MysteryMushrooms.MARIE,]
    return [MysteryMushroomCompanion.getValueByName(value,),]
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