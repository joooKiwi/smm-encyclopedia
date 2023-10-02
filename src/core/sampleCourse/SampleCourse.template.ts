import type {TemplateWithNameTemplate}             from 'core/_template/TemplateWithName.template'
import type {PossibleAcronym_GameStyle_SMM1}       from 'core/gameReference/GameReferences.types'
import type {PossibleEnglishName_CourseTheme_SMM1} from 'core/theme/Themes.types'
import type {Names}                                from 'core/sampleCourse/SampleCourses.types'

/** @template */
export interface SampleCourseTemplate
    extends TemplateWithNameTemplate {

    readonly numbers: {
        readonly first: PossibleFirstNumberInFirst10MarioChallenges
        readonly world: PossibleWorldNumber
    }

    readonly gameStyle: PossibleAcronym_GameStyle_SMM1

    readonly courseThemeArea: {
        readonly main: PossibleEnglishName_CourseTheme_SMM1
        readonly sub: NullOr<PossibleEnglishName_CourseTheme_SMM1>
    }

    readonly amountOfTime: PossibleAmountOfTime

}


/** The world number annotated in the possible format "[1-15]-[1-4]" */
export type PossibleWorldNumber = Names
/** The course number when first playing the "10 Mario challenges" */
export type PossibleFirstNumberInFirst10MarioChallenges = NullOr<| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8>
/** The amount of time available in the sample course */
export type PossibleAmountOfTime = | 50 | 100 | 300 | 500
