import type {CollectionHolder, EnumerableConstructor, PossibleValueByEnumerable} from '@joookiwi/enumerable'
import {Enum}                                                                    from '@joookiwi/enumerable'

import type {Names, Ordinals, PossibleRouteName, PossibleType} from 'app/property/EntityLimitTypes.types'
import type {ClassWithType}                                    from 'core/ClassWithType'
import type {BootstrapColor}                                   from 'bootstrap/Bootstrap.types'
import type {Nullable, NullOr}                                 from 'util/types/nullable'

import {EntityLimits}   from 'core/entityLimit/EntityLimits'
import {getValueByType} from 'util/utilitiesMethods'

export abstract class EntityLimitTypes
    extends Enum<Ordinals, Names>
    implements ClassWithType<PossibleType> {

    //region -------------------- Enum instances --------------------

    public static readonly ALL =           new class EntityLimitTypes_All extends EntityLimitTypes {

        public override get iterator(): IterableIterator<EntityLimits> {
            return EntityLimits[Symbol.iterator]()
        }


        public override get allRouteName() {
            return null
        }

    }('all',)
    public static readonly WHILE_PLAYING = new class EntityLimitTypes_WhilePlaying extends EntityLimitTypes {

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

    }('play',)
    public static readonly EDITOR =        new class EntityLimitTypes_Editor extends EntityLimitTypes {

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

    }('editor',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: EntityLimitTypes

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    readonly #type

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(type: PossibleType,) {
        super()
        this.#type = type
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get type(): PossibleType {
        return this.#type
    }

    public abstract get iterator(): IterableIterator<EntityLimits>

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    //region -------------------- Link button methods --------------------

    public get allRouteName(): NullOr<PossibleRouteName> {
        return 'everyLimits'
    }

    public get allColor(): PossibleColor {
        return 'success'
    }


    public get playRouteName(): NullOr<PossibleRouteName> {
        return 'playLimits'
    }

    public get playColor(): PossibleColor {
        return 'success'
    }


    public get editorRouteName(): NullOr<PossibleRouteName> {
        return 'editorLimits'
    }

    public get editorColor(): PossibleColor {
        return 'success'
    }

    //endregion -------------------- Link button methods --------------------

    public static getValueByType(value: Nullable<| EntityLimitTypes | string>,): EntityLimitTypes {
        return getValueByType(value, this,)
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): EnumerableConstructor<Ordinals, Names> {
        return EntityLimitTypes
    }

    public static getValue(value: PossibleValueByEnumerable<EntityLimitTypes>,): EntityLimitTypes {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<EntityLimitTypes> {
        return Enum.getValuesOn(this)
    }

    public static* [Symbol.iterator]() {
        yield* this.values[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}

type PossibleColor = Extract<BootstrapColor, | 'success' | 'warning' | 'danger'>
