import {Enum} from '@joookiwi/enumerable'

import type {Names, Ordinals, PossibleRepeatableName} from 'util/file/sound/RepeatableTypes.types'
import type {CompanionEnumByNameSingleton}            from 'util/enumerable/Singleton.types'

import {CompanionEnumByName} from 'util/enumerable/companion/CompanionEnumByName'

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
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumByNameSingleton<RepeatableTypes, typeof RepeatableTypes> = class CompanionEnum_RepeatableTypes
        extends CompanionEnumByName<RepeatableTypes, typeof RepeatableTypes> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_RepeatableTypes

        private constructor() {
            super(RepeatableTypes,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_RepeatableTypes()
        }

        //endregion -------------------- Singleton usage --------------------

        public override getValueByName(value: Nullable<| RepeatableTypes | string>,): RepeatableTypes {
            if (value == null)
                throw new TypeError(`No "${this.instance.name}" could be found by a null name.`,)
            if (value instanceof this.instance)
                return value
            const valueFound = this.values.findFirstOrNull(it => it.simpleName === value,)
            if (valueFound == null)
                throw new ReferenceError(`No "${this.instance.name}" could be found by this value "${value}".`,)
            return valueFound
        }

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    readonly #doesLoopAtTheEnd
    readonly #simpleName

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(doesLoopAtTheEnd: boolean, simpleName: PossibleRepeatableName,) {
        super()
        this.#doesLoopAtTheEnd = doesLoopAtTheEnd
        this.#simpleName = simpleName
    }

    //endregion -------------------- Constructor --------------------
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

}
