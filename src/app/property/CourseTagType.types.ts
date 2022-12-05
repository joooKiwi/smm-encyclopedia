import type {CourseTagTypes} from 'app/property/CourseTagTypes'

enum Enum {

    ALL,
    OFFICIAL,
    UNOFFICIAL,
    MAKER_CENTRAL,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

export type PossibleCourseTagType = | 'all' | 'official' | 'unofficial' | 'makerCentral'
export type CourseTagTypesByType<T, > = T extends PossibleCourseTagType ? CourseTagTypes : never
