import type {NullOrNumber} from '@joookiwi/type'

import type {Names} from 'core/sampleCourse/SampleCourses.types'

/** The world number annotated in the possible format "[1-15]-[1-4]" */
export type PossibleWorldNumber = Names
/** The course number when first playing the "10 Mario challenges" */
export type PossibleFirstNumberInFirst10MarioChallenges = NullOrNumber<| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8>
/** The amount of time available in the sample course */
export type PossibleAmountOfTime = | 50 | 100 | 300 | 500
