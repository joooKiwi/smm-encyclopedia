import type {CollectionHolder, EnumerableConstructor, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'
import {Enum}                                                                    from '@joookiwi/enumerable'

import type {GamePath_ClearCondition, GamePath_Editor, GamePath_InGameSMM1, GameStylesInSMM1} from './GameStyles.types'
import type {GameStyleProperty}                                                               from '../properties/gameStyle/GameStyleProperty'
import type {GameStyleReferences}                                                             from '../properties/gameStyle/GameStyleReferences'
import type {Names, Ordinals}                                                                 from '../../gameStyle/GameStyles.types'
import type {PossibleOtherEntities}                                                           from '../Entity'

import {BASE_PATH}                        from '../../../variables'
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

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    static #GAME_STYLES_SMM1?: GameStylesInSMM1

    readonly #parent
    #gamePath_editor?: GamePath_Editor
    #gamePath_clearCondition?: GamePath_ClearCondition
    #gamePath_smm1?: GamePath_InGameSMM1

    //endregion -------------------- Fields --------------------

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


    public static override get gameStyles_smm1(): GameStylesInSMM1 {
        return this.#GAME_STYLES_SMM1 ??= OriginalGameStyles.gameStyles_smm1.map(gameStyle => this.getValue(gameStyle)) as unknown as GameStylesInSMM1
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): EnumerableConstructor<Ordinals, Names> {
        return GameStyles
    }

    public static override getValue(value: PossibleValueByEnumerable<| OriginalGameStyles | GameStyles>,): GameStyles {
        return Enum.getValueOn(this, value,)
    }

    public static override get values(): CollectionHolder<GameStyles> {
        return Enum.getValuesOn(this)
    }

    public static override [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}
