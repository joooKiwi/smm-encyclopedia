import type {CollectionHolder, EnumerableConstructor, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'
import {Enum}                                                                    from '@joookiwi/enumerable'

import type {Names, Ordinals, PossibleRouteName, PossibleType} from 'app/property/ThemeTypes.types'
import type {BootstrapColor}                                   from 'bootstrap/Bootstrap.types'
import type {ClassWithType}                                    from 'core/ClassWithType'
import type {Nullable, NullOr}                                 from 'util/types/nullable'

import {Themes}         from 'core/theme/Themes'
import {getValueByType} from 'util/utilitiesMethods'

/**
 * @usedByTheRouting
 */
export abstract class ThemeTypes
    extends Enum<Ordinals, Names>
    implements ClassWithType<PossibleType> {

    //region -------------------- Enum instances --------------------

    public static readonly ALL =    new class ThemeTypes_All extends ThemeTypes {

        public override get iterator(): IterableIterator<Themes> {
            return Themes[Symbol.iterator]()
        }


        public override get allRouteName() {
            return null
        }

    }('all', 'everyTheme',)
    public static readonly COURSE = new class ThemeTypes_Course extends ThemeTypes {

        public override get iterator(): IterableIterator<Themes> {
            return Themes.courseThemes[Symbol.iterator]()
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

        public override get iterator(): IterableIterator<Themes> {
            return Themes.worldThemes[Symbol.iterator]()
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
    //region -------------------- Enum fields --------------------

    static [index: number]: ThemeTypes

    //endregion -------------------- Enum fields --------------------
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

    public abstract get iterator(): IterableIterator<Themes>

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
     * @see Themes.courseThemes
     * @see Themes.courseThemes_smm1
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
     * @see Themes.worldThemes
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

    public static getValueByType(value: Nullable<| ThemeTypes | string>,): ThemeTypes {
        return getValueByType(value, this,)
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): EnumerableConstructor<Ordinals, Names> {
        return ThemeTypes
    }

    public static getValue(value: PossibleValueByEnumerable<ThemeTypes>,): ThemeTypes {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<ThemeTypes> {
        return Enum.getValuesOn(this,)
    }

    public static* [Symbol.iterator](): IterableIterator<ThemeTypes> {
        yield* this.values
    }

    //endregion -------------------- Enum methods --------------------

}

type PossibleColor = Extract<BootstrapColor, | 'success' | 'warning' | 'danger'>
