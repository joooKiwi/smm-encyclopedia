import type {BasicGamePath, GameAcronym, GamePath}                                                                                                                                  from './GameStyles.types';
import type {GameStyleProperty}                                                                                                                                                     from '../properties/GameStyleProperty';
import type {GameStyleReferences}                                                                                                                                                   from '../properties/GameStyleReferences';
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from '../../gameStyle/GameStyles.types';
import type {StaticReference}                                                                                                                                                       from '../../../util/enum/Enum.types';
import type {PossibleOtherEntities}                                                                                                                                                 from '../Entity';

import {Enum}                             from '../../../util/enum/Enum';
import {GameStyles as OriginalGameStyles} from '../../gameStyle/GameStyles';

export class GameStyles
    extends OriginalGameStyles {

    //region -------------------- Enum instances --------------------

    public static readonly SUPER_MARIO_BROS =       new GameStyles(OriginalGameStyles.SUPER_MARIO_BROS,      'M1', '1 - SMB',);
    public static readonly SUPER_MARIO_BROS_3 =     new GameStyles(OriginalGameStyles.SUPER_MARIO_BROS_3,    'M3', '2 - SMB3',);
    public static readonly SUPER_MARIO_WORLD =      new GameStyles(OriginalGameStyles.SUPER_MARIO_WORLD,     'MW', '3 - SMW',);
    public static readonly NEW_SUPER_MARIO_BROS_U = new GameStyles(OriginalGameStyles.NEW_SUPER_MARIO_BROS_U,'WU', '4 - NSMBU',);
    public static readonly SUPER_MARIO_3D_WORLD =   new GameStyles(OriginalGameStyles.SUPER_MARIO_3D_WORLD,  '3W', '5 - SM3DW',);

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Attributes --------------------

    readonly #parent;
    readonly #gameAcronym: GameAcronym;
    readonly #basicGamePath: BasicGamePath;
    #gamePath?: GamePath;

    //endregion -------------------- Attributes --------------------

    // @ts-ignore
    protected constructor(enumeration: GameStyles,)
    private constructor(enumeration: OriginalGameStyles, gameAcronym: GameAcronym, basicGamePath: BasicGamePath,)
    private constructor(enumeration: OriginalGameStyles, gameAcronym?: GameAcronym, basicGamePath?: BasicGamePath,) {
        super(enumeration);
        this.#parent = enumeration;
        if (enumeration instanceof GameStyles) {
            this.#gameAcronym = enumeration.#gameAcronym;
            this.#basicGamePath = enumeration.#basicGamePath;
        } else {
            this.#gameAcronym = gameAcronym!;
            this.#basicGamePath = basicGamePath!;
        }
    }

    //region -------------------- Getter methods --------------------

    public get parent(): OriginalGameStyles {
        return this.#parent;
    }

    public get gameAcronym(): GameAcronym {
        return this.#gameAcronym;
    }

    public get gamePath(): GamePath {
        return this.#gamePath ??= `/entities/${this.#basicGamePath}/`;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public get(property: GameStyleProperty,): boolean {
        return this.#parent.get(property);
    }

    public getReference(referenceProperty: GameStyleReferences,): PossibleOtherEntities {
        return this.#parent.getReference(referenceProperty);
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
