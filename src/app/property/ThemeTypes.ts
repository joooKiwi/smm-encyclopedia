import type {NullOr}           from '@joookiwi/type'
import type {CollectionHolder} from '@joookiwi/collection'
import {Enum}                  from '@joookiwi/enumerable'

import type {Names, Ordinals, PossibleRouteName, PossibleType} from 'app/property/ThemeTypes.types'
import type {ClassWithType}                                    from 'core/ClassWithType'
import type {CompanionEnumByTypeSingleton}                     from 'util/enumerable/Singleton.types'

import {Themes}              from 'core/theme/Themes'
import {ArrayAsCollection}   from 'util/collection/ArrayAsCollection'
import {CompanionEnumByType} from 'util/enumerable/companion/CompanionEnumByType'

import COURSE_THEMES = Themes.COURSE_THEMES
import WORLD_THEMES =  Themes.WORLD_THEMES

/** @usedByTheRouting */
export abstract class ThemeTypes
    extends Enum<Ordinals, Names>
    implements ClassWithType<PossibleType> {

    //region -------------------- Enum instances --------------------

    public static readonly ALL =    new class ThemeTypes_All extends ThemeTypes {

        public override get content() {
            return new ArrayAsCollection(Themes.ALL,)
        }


        public override get allRouteName() {
            return null
        }

    }('all', 'everyTheme',)
    public static readonly COURSE = new class ThemeTypes_Course extends ThemeTypes {

        public override get content() {
            return new ArrayAsCollection(COURSE_THEMES,)
        }


        public override get allColor(): PossibleColor {
            return 'warning'
        }

        public override get courseRouteName() {
            return null
        }

        public override get worldColor(): PossibleColor {
            return 'danger'
        }

    }('course', 'courseTheme',)
    public static readonly WORLD =  new class ThemesTypes_World extends ThemeTypes {

        public override get content() {
            return new ArrayAsCollection(WORLD_THEMES,)
        }


        public override get allColor(): PossibleColor {
            return 'warning'
        }

        public override get courseColor(): PossibleColor {
            return 'danger'
        }

        public override get worldRouteName() {
            return null
        }

    }('world', 'worldTheme',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumByTypeSingleton<string, ThemeTypes, typeof ThemeTypes> = class CompanionEnum_ThemeTypes
        extends CompanionEnumByType<string, ThemeTypes, typeof ThemeTypes> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_ThemeTypes

        private constructor() {
            super(ThemeTypes,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_ThemeTypes()
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

    /**
     * Retrieve the content applicable to the {@link ThemeTypes}
     *
     * @see AppInterpreter.content
     */
    public abstract get content(): CollectionHolder<Themes>

    //region -------------------- Link button methods --------------------

    /** The route name for the path with every {@link Themes} */
    public get allRouteName(): NullOr<Extract<PossibleRouteName, 'everyTheme'>> {
        return 'everyTheme'
    }

    public get allColor(): PossibleColor {
        return 'success'
    }


    /**
     * The route name for the path with only the course {@link Themes}
     *
     * @see Themes.COURSE_THEMES
     * @see Themes.COURSE_THEMES_SMM1
     */
    public get courseRouteName(): NullOr<Extract<PossibleRouteName, 'courseTheme'>> {
        return 'courseTheme'
    }

    public get courseColor(): PossibleColor {
        return 'success'
    }


    /**
     * The route name for the path with only the world {@link Themes}
     *
     * @see Themes.WORLD_THEMES
     */
    public get worldRouteName(): NullOr<Extract<PossibleRouteName, 'worldTheme'>> {
        return 'worldTheme'
    }

    public get worldColor(): PossibleColor {
        return 'success'
    }

    //endregion -------------------- Link button methods --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------

}

type PossibleColor = Extract<BootstrapColor, | 'success' | 'warning' | 'danger'>
