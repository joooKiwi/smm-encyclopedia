import type {Enumerable}                                                                                                                                                                            from '../../../util/enum/Enumerable'
import type {GamePath_ClearCondition, GamePath_Editor, GamePath_InGameSMM1}                                                                                                                         from './GameStyles.types'
import type {GameStyleProperty}                                                                                                                                                                     from '../properties/gameStyle/GameStyleProperty'
import type {GameStyleReferences}                                                                                                                                                                   from '../properties/gameStyle/GameStyleReferences'
import type {EnumArray, EnumArray_SMM1, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from '../../gameStyle/GameStyles.types'
import type {StaticReference}                                                                                                                                                                       from '../../../util/enum/Enum.types'
import type {PossibleOtherEntities}                                                                                                                                                                 from '../Entity'

import {BASE_PATH}                        from '../../../variables'
import {Enum}                             from '../../../util/enum/Enum'
import {GameStyles as OriginalGameStyles} from '../../gameStyle/GameStyles'

export class GameStyles
    extends OriginalGameStyles {

    //region -------------------- Enum instances --------------------

    public static override readonly SUPER_MARIO_BROS =       new GameStyles(OriginalGameStyles.SUPER_MARIO_BROS,)
    public static override readonly SUPER_MARIO_BROS_3 =     new GameStyles(OriginalGameStyles.SUPER_MARIO_BROS_3,)
    public static override readonly SUPER_MARIO_WORLD =      new GameStyles(OriginalGameStyles.SUPER_MARIO_WORLD,)
    public static override readonly NEW_SUPER_MARIO_BROS_U = new GameStyles(OriginalGameStyles.NEW_SUPER_MARIO_BROS_U,)
    public static override readonly SUPER_MARIO_3D_WORLD =   new GameStyles(OriginalGameStyles.SUPER_MARIO_3D_WORLD,)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: GameStyles

    protected static override _PARENT: StaticReference<OriginalGameStyles> = OriginalGameStyles

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    static #GAME_STYLES_SMM1?: EnumArray_SMM1<GameStyles>

    readonly #parent
    #gamePath_editor?: GamePath_Editor
    #gamePath_clearCondition?: GamePath_ClearCondition
    #gamePath_smm1?: GamePath_InGameSMM1

    //endregion -------------------- Fields --------------------

    // @ts-ignore
    protected constructor(enumeration: GameStyles,)
    private constructor(enumeration: OriginalGameStyles,)
    private constructor(enumeration: OriginalGameStyles,) {
        super(enumeration)
        this.#parent = enumeration
    }

    //region -------------------- Getter methods --------------------

    public get parent(): OriginalGameStyles {
        return this.#parent
    }

    public get gamePath_editor(): GamePath_Editor {
        return this.#gamePath_editor ??= `/${BASE_PATH}/entity/${this.shortImagePath}/Editor/`
    }

    public get gamePath_clearCondition(): GamePath_ClearCondition {
        return this.#gamePath_clearCondition ??= `/${BASE_PATH}/entity/${this.shortImagePath}/Clear Condition/`
    }

    public get gamePath_inGameSmm1(): GamePath_InGameSMM1 {
        return this.#gamePath_smm1 ??= `/${BASE_PATH}/entity/${this.shortImagePath}/In game/SMM1/`
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public override get(property: GameStyleProperty,): boolean {
        return this.parent.get(property)
    }

    public override getReference(referenceProperty: GameStyleReferences,): PossibleOtherEntities {
        return this.parent.getReference(referenceProperty)
    }


    public static override get gameStyles_smm1(): EnumArray_SMM1<GameStyles> {
        return this.#GAME_STYLES_SMM1 ??= OriginalGameStyles.gameStyles_smm1.map(gameStyle => this.getValue(gameStyle)) as unknown as EnumArray_SMM1<GameStyles>
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): StaticReference<GameStyles> {
        return GameStyles
    }

    //region -------------------- Enum value methods --------------------

    protected static override _getValueByEnumerable(value: Enumerable,) {
        return value instanceof OriginalGameStyles
            ? GameStyles[value.ordinal]
            : null
    }

    public static override getValue(nullValue: | null | undefined,): null
    public static override getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O, GameStyles>
    public static override getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O, GameStyles>
    public static override getValue<N extends Names = Names, >(name: N,): EnumByName<N, GameStyles>
    public static override getValue<S extends PossibleStringValue = PossibleStringValue, >(name: S,): EnumByPossibleString<S, GameStyles>
    public static override getValue<S extends string = string, >(name: S,): EnumByString<S, GameStyles>
    public static override getValue<I extends GameStyles = GameStyles, >(instance: I,): I
    public static override getValue(instance: OriginalGameStyles,): GameStyles
    public static override getValue(value: PossibleNonNullableValue,): GameStyles
    public static override getValue(value: PossibleValue,): | GameStyles | null
    public static override getValue(value: PossibleValue,) {
        return Enum.getValueOn(this, value,)
    }

    public static override get values(): EnumArray<GameStyles> {
        return Enum.getValuesOn(this)
    }

    //endregion -------------------- Enum value methods --------------------

    public static override [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}
