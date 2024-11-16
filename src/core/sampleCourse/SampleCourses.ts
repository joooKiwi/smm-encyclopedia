import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import {CompanionEnum, Enum}         from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                 from 'core/ClassWithEnglishName'
import type {ClassWithReference}                   from 'core/ClassWithReference'
import type {SampleCourse}                         from 'core/sampleCourse/SampleCourse'
import type {Names, Ordinals, PossibleEnglishName} from 'core/sampleCourse/SampleCourses.types'

import {SampleCourseLoader} from 'core/sampleCourse/SampleCourse.loader'
import {StringContainer}    from 'util/StringContainer'

export class SampleCourses
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName>, ClassWithReference<SampleCourse> {

    //region -------------------- Enum instances --------------------

    public static readonly '1-1'  = new SampleCourses('Level 1-1',)
    public static readonly '1-2'  = new SampleCourses('Level 1-2',)
    public static readonly '1-3'  = new SampleCourses('Level 1-3',)
    public static readonly '1-4'  = new SampleCourses('Level 1-4',)
    public static readonly '2-1'  = new SampleCourses('Level 2-1',)
    public static readonly '2-2'  = new SampleCourses('Level 2-2',)
    public static readonly '2-3'  = new SampleCourses('Level 2-3',)
    public static readonly '2-4'  = new SampleCourses('Level 2-4',)
    public static readonly '3-1'  = new SampleCourses('Level 3-1',)
    public static readonly '3-2'  = new SampleCourses('Level 3-2',)
    public static readonly '3-3'  = new SampleCourses('Level 3-3',)
    public static readonly '3-4'  = new SampleCourses('Level 3-4',)
    public static readonly '4-1'  = new SampleCourses('Level 4-1',)
    public static readonly '4-2'  = new SampleCourses('Level 4-2',)
    public static readonly '4-3'  = new SampleCourses('Level 4-3',)
    public static readonly '4-4'  = new SampleCourses('Level 4-4',)
    public static readonly '5-1'  = new SampleCourses('Level 5-1',)
    public static readonly '5-2'  = new SampleCourses('Level 5-2',)
    public static readonly '5-3'  = new SampleCourses('Level 5-3',)
    public static readonly '5-4'  = new SampleCourses('Level 5-4',)
    public static readonly '6-1'  = new SampleCourses('Level 6-1',)
    public static readonly '6-2'  = new SampleCourses('Level 6-2',)
    public static readonly '6-3'  = new SampleCourses('Level 6-3',)
    public static readonly '6-4'  = new SampleCourses('Level 6-4',)
    public static readonly '7-1'  = new SampleCourses('Level 7-1',)
    public static readonly '7-2'  = new SampleCourses('Level 7-2',)
    public static readonly '7-3'  = new SampleCourses('Level 7-3',)
    public static readonly '7-4'  = new SampleCourses('Level 7-4',)
    public static readonly '8-1'  = new SampleCourses('Level 8-1',)
    public static readonly '8-2'  = new SampleCourses('Level 8-2',)
    public static readonly '8-3'  = new SampleCourses('Level 8-3',)
    public static readonly '8-4'  = new SampleCourses('Level 8-4',)
    public static readonly '9-1'  = new SampleCourses('Level 9-1',)
    public static readonly '9-2'  = new SampleCourses('Level 9-2',)
    public static readonly '9-3'  = new SampleCourses('Level 9-3',)
    public static readonly '9-4'  = new SampleCourses('Level 9-4',)
    public static readonly '10-1' = new SampleCourses('Level 10-1',)
    public static readonly '10-2' = new SampleCourses('Level 10-2',)
    public static readonly '10-3' = new SampleCourses('Level 10-3',)
    public static readonly '10-4' = new SampleCourses('Level 10-4',)
    public static readonly '11-1' = new SampleCourses('Level 11-1',)
    public static readonly '11-2' = new SampleCourses('Level 11-2',)
    public static readonly '11-3' = new SampleCourses('Level 11-3',)
    public static readonly '11-4' = new SampleCourses('Level 11-4',)
    public static readonly '12-1' = new SampleCourses('Level 12-1',)
    public static readonly '12-2' = new SampleCourses('Level 12-2',)
    public static readonly '12-3' = new SampleCourses('Level 12-3',)
    public static readonly '12-4' = new SampleCourses('Level 12-4',)
    public static readonly '13-1' = new SampleCourses('Level 13-1',)
    public static readonly '13-2' = new SampleCourses('Level 13-2',)
    public static readonly '13-3' = new SampleCourses('Level 13-3',)
    public static readonly '13-4' = new SampleCourses('Level 13-4',)
    public static readonly '14-1' = new SampleCourses('Level 14-1',)
    public static readonly '14-2' = new SampleCourses('Level 14-2',)
    public static readonly '14-3' = new SampleCourses('Level 14-3',)
    public static readonly '14-4' = new SampleCourses('Level 14-4',)
    public static readonly '15-1' = new SampleCourses('Level 15-1',)
    public static readonly '15-2' = new SampleCourses('Level 15-2',)
    public static readonly '15-3' = new SampleCourses('Level 15-3',)
    public static readonly '15-4' = new SampleCourses('Level 15-4',)
    public static readonly '16-1' = new SampleCourses('Level 16-1',)
    public static readonly '16-2' = new SampleCourses('Level 16-2',)
    public static readonly '16-3' = new SampleCourses('Level 16-3',)
    public static readonly '16-4' = new SampleCourses('Level 16-4',)
    public static readonly '17-1' = new SampleCourses('Level 17-1',)
    public static readonly '17-2' = new SampleCourses('Level 17-2',)
    public static readonly '17-3' = new SampleCourses('Level 17-3',)
    public static readonly '17-4' = new SampleCourses('Level 17-4',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumSingleton<SampleCourses, typeof SampleCourses> = class CompanionEnum_SampleCourses
        extends CompanionEnum<SampleCourses, typeof SampleCourses> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_SampleCourses

        private constructor() {
            super(SampleCourses,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_SampleCourses()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleEnglishName, SampleCourse>

    #reference?: SampleCourse

    readonly #englishName

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(englishName: PossibleEnglishName,) {
        super()
        this.#englishName = new StringContainer(englishName,)
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public static get REFERENCE_MAP(): ReadonlyMap<PossibleEnglishName, SampleCourse> {
        return this.#REFERENCE_MAP ??= SampleCourseLoader.get.load()
    }

    public get reference(): SampleCourse {
        return this.#reference ??= SampleCourses.REFERENCE_MAP.get(this.englishName,)!
    }


    public get englishName(): PossibleEnglishName {
        return this.#englishName.get
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------

}

export namespace SampleCourses {

    /** The companion instance of a {@link SampleCourses} */
    export const Companion = SampleCourses.CompanionEnum.get

    export const ALL = Companion.values.toArray()

}
