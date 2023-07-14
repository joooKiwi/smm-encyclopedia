import type {CollectionHolder}                                  from '@joookiwi/collection'
import type {CompanionEnumSingleton, PossibleEnumerableValueBy} from '@joookiwi/enumerable'
import {CompanionEnum, Enum}                                    from '@joookiwi/enumerable'

import type {ClassWithValue}        from 'util/types/ClassWithValue'
import type {Names, Ordinals}       from 'app/options/global/Sounds.types'
import type {Nullable}              from 'util/types/nullable'
import type {SimpleSoundProperties} from 'util/file/sound/component/property/SimpleSoundProperties'
import type {ReactElement}          from 'util/react/ReactProperties'

import SimpleSoundComponent from 'util/file/sound/component/SimpleSound.component'

/**
 * The possible sound as either
 *
 * <ul>
 *  <li>Yes → Display the sound viewer</li>
 *  <li>No → Display no sound viewer</li>
 * </ul>
 *
 * @see SimpleSoundComponent
 */
export abstract class Sounds
    extends Enum<Ordinals, Names>
    implements ClassWithValue<boolean> {

    //region -------------------- Enum instances --------------------

    public static readonly YES = new class Sounds_Yes extends Sounds {

        public override renderComponent(properties: SimpleSoundProperties,) {
            return <SimpleSoundComponent {...properties}/>
        }

    }(true,)
    public static readonly NO =  new class Sounds_No extends Sounds {

        public override renderComponent() {
            return null
        }

    }(false,)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumSingleton<Sounds, typeof Sounds> = class CompanionEnum_Sounds
        extends CompanionEnum<Sounds, typeof Sounds> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_Sounds

        private constructor() {
            super(Sounds,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_Sounds()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    readonly #value

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(value: boolean,) {
        super()
        this.#value = value
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get value(): boolean {
        return this.#value
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public abstract renderComponent(properties: SimpleSoundProperties,): ReactElement


    // public static getValueByValue<T, >(value: T,): SoundsByValue<T>
    public static getValueByValue(value: Nullable<| Sounds | boolean>,): Sounds {
        if (value == null)
            throw new TypeError(`No "${this.name}" could be found by a null value.`)
        if (value instanceof this)
            return value
        const valueFound = this.values.find(it => it.value === value)
        if (valueFound == null)
            throw new ReferenceError(`No "${this.name}" could be found by this value "${value}".`)
        return valueFound
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    public static getValue(value: PossibleEnumerableValueBy<Sounds>,): Sounds {
        return Sounds.CompanionEnum.get.getValue(value,)
    }

    public static get values(): CollectionHolder<Sounds> {
        return Sounds.CompanionEnum.get.values
    }

    public static* [Symbol.iterator](): IterableIterator<Sounds> {
        yield* Sounds.CompanionEnum.get
    }

    //endregion -------------------- Enum methods --------------------

}
