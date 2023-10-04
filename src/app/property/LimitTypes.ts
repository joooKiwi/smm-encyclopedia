import {Enum} from '@joookiwi/enumerable'

import type {Names, Ordinals, PossibleRouteName, PossibleType} from 'app/property/LimitTypes.types'
import type {ClassWithType}                                    from 'core/ClassWithType'
import type {CompanionEnumByTypeSingleton}                     from 'util/enumerable/Singleton.types'

import {EntityLimits}        from 'core/entityLimit/EntityLimits'
import {CompanionEnumByType} from 'util/enumerable/companion/CompanionEnumByType'

/** @usedByTheRouting */
export abstract class LimitTypes
    extends Enum<Ordinals, Names>
    implements ClassWithType<PossibleType> {

    //region -------------------- Enum instances --------------------

    public static readonly ALL =           new class EntityLimitTypes_All extends LimitTypes {

        public override get content() {
            return EntityLimits.CompanionEnum.get.values.toArray()
        }


        public override get allRouteName() {
            return null
        }

    }('all', 'everyLimit',)
    public static readonly PLAY = new class EntityLimitTypes_WhilePlaying extends LimitTypes {

        public override get content() {
            return EntityLimits.whilePlayingEntityLimits
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

        public override get content() {
            return EntityLimits.editorEntityLimits
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

    public static readonly CompanionEnum: CompanionEnumByTypeSingleton<string, LimitTypes, typeof LimitTypes> = class CompanionEnum_LimitTypes
        extends CompanionEnumByType<string, LimitTypes, typeof LimitTypes> {

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

    /**
     * Retrieve the content applicable to the {@link LimitTypes}
     *
     * @see AppInterpreter.content
     */
    public abstract get content(): readonly EntityLimits[]

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
    //endregion -------------------- Methods --------------------

}

type PossibleColor = Extract<BootstrapColor, | 'success' | 'warning' | 'danger'>
