import {Enum}                                                                    from '@joookiwi/enumerable'
import type {CollectionHolder, EnumerableConstructor, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'

import type {Names, Ordinals, PossibleRepeatableName} from 'util/file/sound/RepeatableTypes.types'
import type {Nullable}                                from 'util/types/nullable'

/**
 * @todo Add more types (within a range instead of just loop a single value)
 */
export abstract class RepeatableTypes
    extends Enum<Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly NONE =            new class RepeatableTypes_None extends RepeatableTypes {}(false, 'non repeatable',)
    public static readonly AT_THE_END =      new class RepeatableTypes_AtTheEnd extends RepeatableTypes {}(true, 'repeatable (at the end)',)
    public static readonly DURING_THE_PLAY = new class RepeatableTypes_DuringThePlay extends RepeatableTypes {}(false, 'repeatable (during the play)',)

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


    public static getValueByName(value: Nullable<| RepeatableTypes | string>,): RepeatableTypes {
        if (value == null)
            throw new TypeError(`No "${this.name}" could be found by a null value.`)
        if (value instanceof this)
            return value
        const valueFound = this.values.find(it => it.simpleName === value)
        if (valueFound == null)
            throw new ReferenceError(`No "${this.name}" could be found by this value "${value}".`)
        return valueFound
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): EnumerableConstructor<Ordinals, Names> {
        return RepeatableTypes
    }

    public static getValue(value: PossibleValueByEnumerable<RepeatableTypes>,): RepeatableTypes {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<RepeatableTypes> {
        return Enum.getValuesOn(this)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}
