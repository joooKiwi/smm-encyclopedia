import type {CollectionHolder}                                  from '@joookiwi/collection'
import type {CompanionEnumSingleton, PossibleEnumerableValueBy} from '@joookiwi/enumerable'
import {CompanionEnum, Enum}                                    from '@joookiwi/enumerable'

import type {Names, Ordinals, PossibleRouteName, PossibleType} from 'app/property/LimitTypes.types'
import type {ClassWithType}                                    from 'core/ClassWithType'
import type {BootstrapColor}                                   from 'bootstrap/Bootstrap.types'
import type {Nullable, NullOr}                                 from 'util/types/nullable'

import {EntityLimits}   from 'core/entityLimit/EntityLimits'
import {getValueByType} from 'util/utilitiesMethods'

/**
 * @usedByTheRouting
 */
export abstract class LimitTypes
    extends Enum<Ordinals, Names>
    implements ClassWithType<PossibleType> {

    //region -------------------- Enum instances --------------------

    public static readonly ALL =           new class EntityLimitTypes_All extends LimitTypes {

        public override get iterator(): IterableIterator<EntityLimits> {
            return EntityLimits[Symbol.iterator]()
        }


        public override get allRouteName() {
            return null
        }

    }('all', 'everyLimit',)
    public static readonly PLAY = new class EntityLimitTypes_WhilePlaying extends LimitTypes {

        public override get iterator(): IterableIterator<EntityLimits> {
            return EntityLimits.whilePlayingEntityLimits[Symbol.iterator]()
        }


        public override get allColor(): PossibleColor {
            return 'warning'
        }

        public override get playRouteName() {
            return null
        }

        public override get editorColor(): PossibleColor {
            return 'danger'
        }

    }('play', 'playLimit',)
    public static readonly EDITOR =        new class EntityLimitTypes_Editor extends LimitTypes {

        public override get iterator(): IterableIterator<EntityLimits> {
            return EntityLimits.editorEntityLimits[Symbol.iterator]()
        }


        public override get allColor(): PossibleColor {
            return 'warning'
        }

        public override get playColor(): PossibleColor {
            return 'danger'
        }

        public override get editorRouteName() {
            return null
        }

    }('editor', 'editorLimit',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumSingleton<LimitTypes, typeof LimitTypes> = class CompanionEnum_LimitTypes
        extends CompanionEnum<LimitTypes, typeof LimitTypes> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_LimitTypes

        private constructor() {
            super(LimitTypes,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_LimitTypes()
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

    public abstract get iterator(): IterableIterator<EntityLimits>

    //region -------------------- Link button methods --------------------

    /** The route name for the path with every {@link EntityLimits} */
    public get allRouteName(): NullOr<Extract<PossibleRouteName, 'everyLimit'>> {
        return 'everyLimit'
    }

    public get allColor(): PossibleColor {
        return 'success'
    }


    /**
     * The route name for the path with only the play {@link EntityLimits}
     *
     * @see EntityLimits.whilePlayingEntityLimits
     */
    public get playRouteName(): NullOr<Extract<PossibleRouteName, 'playLimit'>> {
        return 'playLimit'
    }

    public get playColor(): PossibleColor {
        return 'success'
    }


    /**
     * The route name for the path with only the editor {@link EntityLimits}
     *
     * @see EntityLimits.editorEntityLimits
     */
    public get editorRouteName(): NullOr<Extract<PossibleRouteName, 'editorLimit'>> {
        return 'editorLimit'
    }

    public get editorColor(): PossibleColor {
        return 'success'
    }

    //endregion -------------------- Link button methods --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public static getValueByType(value: Nullable<| LimitTypes | string>,): LimitTypes {
        return getValueByType(value, this,)
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    public static getValue(value: PossibleEnumerableValueBy<LimitTypes>,): LimitTypes {
        return LimitTypes.CompanionEnum.get.getValue(value,)
    }

    public static get values(): CollectionHolder<LimitTypes> {
        return LimitTypes.CompanionEnum.get.values
    }

    public static* [Symbol.iterator](): IterableIterator<LimitTypes> {
        yield* LimitTypes.CompanionEnum.get
    }

    //endregion -------------------- Enum methods --------------------

}

type PossibleColor = Extract<BootstrapColor, | 'success' | 'warning' | 'danger'>
