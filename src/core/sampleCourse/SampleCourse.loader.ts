import file from 'resources/compiled/Sample course (SMM).json'

import type {Array, NullOr} from '@joookiwi/type'
import {forEachByArray}     from '@joookiwi/collection'

import type {LanguageContent}                                                                        from 'core/_template/LanguageContent'
import type {PossibleAcronym_GameStyle_SMM1}                                                         from 'core/gameReference/GameReferences.types'
import type {CompanionEnumDeclaration_GameStyles}                                                    from 'core/gameStyle/GameStyles.companionEnumDeclaration'
import type {PossibleEnglishName_CourseTheme_SMM1}                                                   from 'core/theme/Themes.types'
import type {SampleCourse}                                                                           from 'core/sampleCourse/SampleCourse'
import type {PossibleAmountOfTime, PossibleFirstNumberInFirst10MarioChallenges, PossibleWorldNumber} from 'core/sampleCourse/loader.types'
import type {PossibleEnglishName}                                                                    from 'core/sampleCourse/SampleCourses.types'
import type {CompanionEnumByName}                                                                    from 'util/enumerable/companion/CompanionEnumByName'
import type {Loader}                                                                                 from 'util/loader/Loader'

import {isInProduction}        from 'variables'
import {GameStyles}            from 'core/gameStyle/GameStyles'
import {SampleCourseContainer} from 'core/sampleCourse/SampleCourse.container'
import {Themes}                from 'core/theme/Themes'
import {createNameFromContent} from 'lang/name/createNameFromContent'

/**
 * @dependsOn<{@link GameStyles}>
 * @dependsOn<{@link Themes}>
 * @singleton
 */
export class SampleCourseLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, SampleCourse>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: SampleCourseLoader

    private constructor() {}

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleEnglishName, SampleCourse>

    public load(): ReadonlyMap<PossibleEnglishName, SampleCourse> {
        if (this.#map != null)
            return this.#map

        const gameStyleCompanion = GameStyles.CompanionEnum.get
        const themeCompanion = Themes.CompanionEnum.get
        const references = new Map<PossibleEnglishName, SampleCourse>()
        forEachByArray(file as Array<Content>, content =>
            references.set(`Level ${content.worldNumber}`, createReference(content, gameStyleCompanion, themeCompanion,),),)

        if (!isInProduction)
            console.info(
                '-------------------- "sample course" has been loaded --------------------\n',
                references,
                '\n-------------------- "sample course" has been loaded --------------------',
            )

        return this.#map = references
    }
}

interface Content
    extends LanguageContent {

    readonly worldNumber: PossibleWorldNumber
    readonly courseNumberInFirst10MarioChallenge: PossibleFirstNumberInFirst10MarioChallenges

    readonly gameStyle: PossibleAcronym_GameStyle_SMM1
    readonly courseTheme_mainArea: PossibleEnglishName_CourseTheme_SMM1
    readonly courseTheme_subArea: NullOr<PossibleEnglishName_CourseTheme_SMM1>

    readonly amountOfTime: PossibleAmountOfTime

}

/** A type-alias definition of the {@link GameStyles.CompanionEnum} */
type GameStyleCompanion = CompanionEnumDeclaration_GameStyles
/** A type-alias definition of the {@link Themes.CompanionEnum} */
type ThemeCompanion = CompanionEnumByName<Themes, typeof Themes>

function createReference(content: Content, gameStyleCompanion: GameStyleCompanion, themeCompanion: ThemeCompanion,): SampleCourse {
    const subArea = content.courseTheme_subArea

    return new SampleCourseContainer(
        createNameFromContent(content, 1, true,),
        content.worldNumber,
        content.courseNumberInFirst10MarioChallenge,
        gameStyleCompanion.getValueByAcronym(content.gameStyle,),
        themeCompanion.getValueByName(content.courseTheme_mainArea,),
        subArea == null ? null : themeCompanion.getValueByName(subArea,),
        content.amountOfTime,
    )
}
