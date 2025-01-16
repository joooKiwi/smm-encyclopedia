import type {NullOr}           from '@joookiwi/type'
import type {CollectionHolder} from '@joookiwi/collection'
import {Enum}                  from '@joookiwi/enumerable'

import type {Names, Ordinals, PossibleRouteName, PossibleType} from 'app/property/CourseTagTypes.types'
import type {ClassWithType}                                    from 'core/ClassWithType'
import type {CompanionEnumByTypeSingleton}                     from 'util/enumerable/Singleton.types'

import {CourseTags}          from 'core/courseTag/CourseTags'
import {ArrayAsCollection}   from 'util/collection/ArrayAsCollection'
import {CompanionEnumByType} from 'util/enumerable/companion/CompanionEnumByType'

import ALL_COURSE_TAGS =           CourseTags.ALL
import MAKER_CENTRAL_COURSE_TAGS = CourseTags.MAKER_CENTRAL
import OFFICIAL_COURSE_TAGS =      CourseTags.OFFICIALS
import UNOFFICIAL_COURSE_TAGS =    CourseTags.UNOFFICIALS

/** @usedByTheRouting */
export abstract class CourseTagTypes
    extends Enum<Ordinals, Names>
    implements ClassWithType<PossibleType> {

    //region -------------------- Enum instances --------------------

    public static readonly ALL =              new class CourseTagTypes_All extends CourseTagTypes {

        public override get content() {
            return new ArrayAsCollection(ALL_COURSE_TAGS,)
        }


        public override get allRouteName() {
            return null
        }

    }('all', 'everyCourseTag',)
    public static readonly OFFICIAL =         new class CourseTagTypes_Official extends CourseTagTypes {

        public override get content() {
            return new ArrayAsCollection(OFFICIAL_COURSE_TAGS,)
        }


        public override get allColor(): PossibleColor {
            return 'warning'
        }

        public override get officialRouteName() {
            return null
        }

        public override get unofficialColor(): PossibleColor {
            return 'danger'
        }

        public override get makerCentralColor(): PossibleColor {
            return 'warning'
        }

    }('official', 'officialCourseTag',)
    public static readonly UNOFFICIAL =       new class CourseTagTypes_Unofficial extends CourseTagTypes {

        public override get content() {
            return new ArrayAsCollection(UNOFFICIAL_COURSE_TAGS,)
        }


        public override get allColor(): PossibleColor {
            return 'warning'
        }

        public override get officialColor(): PossibleColor {
            return 'danger'
        }

        public override get unofficialRouteName() {
            return null
        }

        public override get makerCentralColor(): PossibleColor {
            return 'warning'
        }

    }('unofficial', 'unofficialCourseTag',)
    public static readonly MAKER_CENTRAL =    new class CourseTagTypes_MakerCentral extends CourseTagTypes {

        public override get content() {
            return new ArrayAsCollection(MAKER_CENTRAL_COURSE_TAGS,)
        }


        public override get allColor(): PossibleColor {
            return 'warning'
        }

        public override get officialColor(): PossibleColor {
            return 'warning'
        }

        public override get unofficialColor(): PossibleColor {
            return 'warning'
        }

        public override get makerCentralRouteName() {
            return null
        }

    }('makerCentral', 'makerCentralCourseTag',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumByTypeSingleton<string, CourseTagTypes, typeof CourseTagTypes> = class CompanionEnum_CourseTagTypes
        extends CompanionEnumByType<string, CourseTagTypes, typeof CourseTagTypes> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_CourseTagTypes

        private constructor() {
            super(CourseTagTypes,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_CourseTagTypes()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    readonly #type
    readonly #routeName

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(type: PossibleType, routeName: PossibleRouteName,) {
        super()
        this.#type = type
        this.#routeName = routeName
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get type(): PossibleType {
        return this.#type
    }

    public get routeName(): PossibleRouteName {
        return this.#routeName
    }

    /** Retrieve the content applicable to the {@link CourseTagTypes} */
    public abstract get content(): CollectionHolder<CourseTags>

    //region -------------------- Link button methods --------------------

    /** The route name for the path with every {@link CourseTags} */
    public get allRouteName(): NullOr<PossibleRouteName> {
        return 'everyCourseTag'
    }

    public get allColor(): PossibleColor {
        return 'success'
    }


    /**
     * The route name for the path with only the official {@link CourseTags}
     *
     * @see CourseTags.OFFICIALS
     */
    public get officialRouteName(): NullOr<PossibleRouteName> {
        return 'officialCourseTag'
    }

    public get officialColor(): PossibleColor {
        return 'success'
    }


    /**
     * The route name for the path with only the unofficial {@link CourseTags}
     *
     * @see CourseTags.UNOFFICIALS
     */
    public get unofficialRouteName(): NullOr<PossibleRouteName> {
        return 'unofficialCourseTag'
    }

    public get unofficialColor(): PossibleColor {
        return 'success'
    }


    /**
     * The route name for the path with only the "Maker Central" {@link CourseTags}
     *
     * @see CourseTags.MAKER_CENTRAL
     */
    public get makerCentralRouteName(): NullOr<PossibleRouteName> {
        return 'makerCentralCourseTag'
    }

    public get makerCentralColor(): PossibleColor {
        return 'success'
    }

    //endregion -------------------- Link button methods --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------

}

type PossibleColor = Extract<BootstrapColor, | 'success' | 'warning' | 'danger'>
