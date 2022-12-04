import type {CollectionHolder, EnumerableConstructor, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'
import {Enum}                                                                    from '@joookiwi/enumerable'
import {lazy}                                                                    from 'react'

import type {ClassWithValue}        from 'util/types/ClassWithValue'
import type {Names, Ordinals}       from 'app/options/global/Sounds.types'
import type {Nullable}              from 'util/types/nullable'
import type {ReactElement}          from 'util/react/ReactProperties'
import type {SimpleSoundProperties} from 'util/sound/component/property/SimpleSoundProperties'

import {EMPTY_REACT_ELEMENT} from 'util/emptyReactVariables'

//region -------------------- dynamic imports --------------------

const SimpleSoundComponent = lazy(() => import('util/sound/component/SimpleSound.component'))

//endregion -------------------- dynamic imports --------------------

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
            return EMPTY_REACT_ELEMENT
        }

    }(false,)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: Sounds

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    readonly #value

    //endregion -------------------- Fields --------------------

    private constructor(value: boolean,) {
        super()
        this.#value = value
    }

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

    protected override get _static(): EnumerableConstructor<Ordinals, Names> {
        return Sounds
    }

    public static getValue(value: PossibleValueByEnumerable<Sounds>,): Sounds {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<Sounds> {
        return Enum.getValuesOn(this)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}
