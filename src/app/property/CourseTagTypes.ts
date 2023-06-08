import type {BasicCompanionEnumDeclaration, CollectionHolder, PossibleEnumerableValueBy, Singleton} from '@joookiwi/enumerable/dist/types'
import {BasicCompanionEnum, Enum}                                                                   from '@joookiwi/enumerable'

import type {Names, Ordinals, PossibleRouteName, PossibleType} from 'app/property/CourseTagTypes.types'
import type {BootstrapColor}                                   from 'bootstrap/Bootstrap.types'
import type {ClassWithType}                                    from 'core/ClassWithType'
import type {Nullable, NullOr}                                 from 'util/types/nullable'

import {CourseTags}     from 'core/courseTag/CourseTags'
import {getValueByType} from 'util/utilitiesMethods'

export abstract class CourseTagTypes
    extends Enum<Ordinals, Names>
    implements ClassWithType<PossibleType> {

    //region -------------------- Enum instances --------------------

    public static readonly ALL =              new class CourseTagTypes_All extends CourseTagTypes {

        public override get iterator(): IterableIterator<CourseTags> {
            return CourseTags[Symbol.iterator]()
        }


        public override get allRouteName() {
            return null
        }

    }('all', 'everyCourseTag',)
    public static readonly OFFICIAL =         new class CourseTagTypes_Official extends CourseTagTypes {

        public override get iterator(): IterableIterator<CourseTags> {
            return CourseTags.officialCourseTags[Symbol.iterator]()
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

        public override get iterator(): IterableIterator<CourseTags> {
            return CourseTags.unofficialCourseTags[Symbol.iterator]()
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

        public override get iterator(): IterableIterator<CourseTags> {
            return CourseTags.makerCentralCourseTags[Symbol.iterator]()
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

    public static readonly CompanionEnum: Singleton<BasicCompanionEnumDeclaration<CourseTagTypes, typeof CourseTagTypes>> = class CompanionEnum_CourseTagTypes
        extends BasicCompanionEnum<CourseTagTypes, typeof CourseTagTypes> {

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

    public abstract get iterator(): IterableIterator<CourseTags>

    //region -------------------- Link button methods --------------------

    /** The route name for the path with every {@link CourseTags} */
    public get allRouteName(): NullOr<Extract<PossibleRouteName, 'everyCourseTag'>> {
        return 'everyCourseTag'
    }

    public get allColor(): PossibleColor {
        return 'success'
    }


    /**
     * The route name for the path with only the official {@link CourseTags}
     *
     * @see CourseTags.officialCourseTags
     */
    public get officialRouteName(): NullOr<Extract<PossibleRouteName, 'officialCourseTag'>> {
        return 'officialCourseTag'
    }

    public get officialColor(): PossibleColor {
        return 'success'
    }


    /**
     * The route name for the path with only the unofficial {@link CourseTags}
     *
     * @see CourseTags.unofficialCourseTags
     */
    public get unofficialRouteName(): NullOr<Extract<PossibleRouteName, 'unofficialCourseTag'>> {
        return 'unofficialCourseTag'
    }

    public get unofficialColor(): PossibleColor {
        return 'success'
    }


    /**
     * The route name for the path with only the "Maker Central" {@link CourseTags}
     *
     * @see CourseTags.makerCentralCourseTags
     */
    public get makerCentralRouteName(): NullOr<Extract<PossibleRouteName, 'makerCentralCourseTag'>> {
        return 'makerCentralCourseTag'
    }

    public get makerCentralColor(): PossibleColor {
        return 'success'
    }

    //endregion -------------------- Link button methods --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public static getValueByType(value: Nullable<| CourseTagTypes | string>,): CourseTagTypes {
        return getValueByType(value, this,)
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    public static getValue(value: PossibleEnumerableValueBy<CourseTagTypes>,): CourseTagTypes {
        return CourseTagTypes.CompanionEnum.get.getValue(value,)
    }

    public static get values(): CollectionHolder<CourseTagTypes> {
        return CourseTagTypes.CompanionEnum.get.values
    }

    public static* [Symbol.iterator](): IterableIterator<CourseTagTypes> {
        yield* CourseTagTypes.CompanionEnum.get
    }

    //endregion -------------------- Enum methods --------------------

}

type PossibleColor = Extract<BootstrapColor, | 'success' | 'warning' | 'danger'>
