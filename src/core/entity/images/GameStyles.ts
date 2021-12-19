import type {GamePath_ClearCondition, GamePath_Editor, GamePath_InGameSMM1}                                                                                                                         from './GameStyles.types';
import type {GameStyleProperty}                                                                                                                                                                     from '../properties/GameStyleProperty';
import type {GameStyleReferences}                                                                                                                                                                   from '../properties/GameStyleReferences';
import type {EnumArray, EnumArray_SMM1, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from '../../gameStyle/GameStyles.types';
import type {StaticReference}                                                                                                                                                                       from '../../../util/enum/Enum.types';
import type {PossibleOtherEntities}                                                                                                                                                                 from '../Entity';

import {Enum}                             from '../../../util/enum/Enum';
import {GameStyles as OriginalGameStyles} from '../../gameStyle/GameStyles';

export class GameStyles
    extends OriginalGameStyles {

    //region -------------------- Enum instances --------------------

    public static readonly SUPER_MARIO_BROS =       new GameStyles(OriginalGameStyles.SUPER_MARIO_BROS,      );
    public static readonly SUPER_MARIO_BROS_3 =     new GameStyles(OriginalGameStyles.SUPER_MARIO_BROS_3,    );
    public static readonly SUPER_MARIO_WORLD =      new GameStyles(OriginalGameStyles.SUPER_MARIO_WORLD,     );
    public static readonly NEW_SUPER_MARIO_BROS_U = new GameStyles(OriginalGameStyles.NEW_SUPER_MARIO_BROS_U,);
    public static readonly SUPER_MARIO_3D_WORLD =   new GameStyles(OriginalGameStyles.SUPER_MARIO_3D_WORLD,  );

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Attributes --------------------

    static #GAME_STYLES_SMM1?: EnumArray_SMM1<GameStyles>;

    readonly #parent;
    #gamePath_editor?: GamePath_Editor;
    #gamePath_clearCondition?: GamePath_ClearCondition;
    #gamePath_smm1?: GamePath_InGameSMM1;

    //endregion -------------------- Attributes --------------------

    // @ts-ignore
    protected constructor(enumeration: GameStyles,)
    private constructor(enumeration: OriginalGameStyles,)
    private constructor(enumeration: OriginalGameStyles,) {
        super(enumeration);
        this.#parent = enumeration;
    }

    //region -------------------- Getter methods --------------------

    public get parent(): OriginalGameStyles {
        return this.#parent;
    }

    public get gamePath_editor(): GamePath_Editor {
        return this.#gamePath_editor ??= `/entities/${this.shortImagePath}/Editor/`;
    }

    public get gamePath_clearCondition(): GamePath_ClearCondition {
        return this.#gamePath_clearCondition ??= `/entities/${this.shortImagePath}/Clear Condition/`;
    }

    public get gamePath_inGameSmm1(): GamePath_InGameSMM1 {
        return this.#gamePath_smm1 ??= `/entities/${this.shortImagePath}/In game/SMM1/`;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public get(property: GameStyleProperty,): boolean {
        return this.parent.get(property);
    }

    public getReference(referenceProperty: GameStyleReferences,): PossibleOtherEntities {
        return this.parent.getReference(referenceProperty);
    }


    public static get gameStyles_smm1(): EnumArray_SMM1<GameStyles> {
        return this.#GAME_STYLES_SMM1 ??= OriginalGameStyles.gameStyles_smm1.map(gameStyle => this.getValue(gameStyle)) as unknown as EnumArray_SMM1<GameStyles>;
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected get _static(): StaticReference<GameStyles> {
        return GameStyles;
    }

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O, GameStyles>
    public static getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O, GameStyles>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N, GameStyles>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(name: S,): EnumByPossibleString<S, GameStyles>
    public static getValue<S extends string = string, >(name: S,): EnumByString<S, GameStyles>
    public static getValue<I extends GameStyles = GameStyles, >(instance: I,): I
    public static getValue(instance: OriginalGameStyles,): GameStyles
    public static getValue(value: PossibleNonNullableValue,): GameStyles
    public static getValue(value: PossibleValue,): | GameStyles | null
    public static getValue(value: PossibleValue,) {
        return value == null ? null
            : this.values[OriginalGameStyles.getValue(value)?.ordinal ?? -1] ?? null;
    }

    public static get values(): EnumArray<GameStyles> {
        return Enum.getValuesOn(this);
    }


    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}
