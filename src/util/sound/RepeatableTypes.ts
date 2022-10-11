import type {StaticReference}                                                                                                                                                                               from '../enum/Enum.types'
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleNonNullableValue, PossibleRepeatableName, PossibleStringValue, PossibleValue} from './RepeatableTypes.types'

import {Enum} from '../enum/Enum'

/**
 * @todo Add more types (within a range instead of just loop a single value)
 */
export abstract class RepeatableTypes
    extends Enum<Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly NONE =            new class RepeatableTypes_None extends RepeatableTypes {
    }(false, 'non repeatable',)
    public static readonly AT_THE_END =      new class RepeatableTypes_AtTheEnd extends RepeatableTypes {
    }(true, 'repeatable (at the end)',)
    public static readonly DURING_THE_PLAY = new class RepeatableTypes_DuringThePlay extends RepeatableTypes {
    }(false, 'repeatable (during the play)',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: RepeatableTypes

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    readonly #doesLoopAtTheEnd
    readonly #simpleName

    //endregion -------------------- Fields --------------------

    private constructor(doesLoopAtTheEnd: boolean, simpleName: PossibleRepeatableName,) {
        super()
        this.#doesLoopAtTheEnd = doesLoopAtTheEnd
        this.#simpleName = simpleName
    }

    //region -------------------- Getter methods --------------------

    public get doesLoopAtTheEnd(): boolean {
        return this.#doesLoopAtTheEnd
    }

    public get simpleName(): PossibleRepeatableName {
        return this.#simpleName
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public setLoopField<T extends HTMLAudioElement, >(element: T,): T {
        element.loop = this.doesLoopAtTheEnd
        return element
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): StaticReference<RepeatableTypes> {
        return RepeatableTypes
    }

    //region -------------------- Enum value methods --------------------

    protected static override _getValueByString(value: string,) {
        return this.values.find(enumerable => enumerable.simpleName === value) ?? null
    }


    public static getValue(value: | null | undefined,): null
    public static getValue<O extends Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(nameOrCharacter: S,): EnumByPossibleString<S>
    public static getValue<S extends string, >(nameOrCharacter: S,): EnumByString<S>
    public static getValue<I extends RepeatableTypes, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): RepeatableTypes
    public static getValue(value: PossibleValue,): | RepeatableTypes | null
    public static getValue(value: PossibleValue,) {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): EnumArray {
        return Enum.getValuesOn(this)
    }

    //endregion -------------------- Enum value methods --------------------

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}
