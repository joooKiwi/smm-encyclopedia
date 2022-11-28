import type {CollectionHolder, EnumerableConstructor, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'
import {Enum}                                                                    from '@joookiwi/enumerable'
import {lazy}                                                                    from 'react'

import type {ClassWithValue}  from './ClassWithValue'
import type {ImageProperties} from '../../tools/images/properties/ImageProperties'
import type {Names, Ordinals} from './Images.types'
import type {Nullable}        from '../../../util/types'
import type {ReactElement}    from '../../../util/react/ReactProperties'

import {EMPTY_REACT_ELEMENT} from '../../../util/emptyReactVariables'

//region -------------------- dynamic imports --------------------

const Image = lazy(() => import('../../tools/images/Image'))

//endregion -------------------- dynamic imports --------------------

/**
 * The possible image as either
 *
 * <ul>
 *  <li>Yes → Display the images</li>
 *  <li>No → Display no images (and by definition no {@link ImageAnimations image animation})</li>
 * </ul>
 */
export abstract class Images
    extends Enum<Ordinals, Names>
    implements ClassWithValue<boolean> {

    //region -------------------- Enum instances --------------------

    public static readonly YES = new class Images_Yes extends Images {

        public override renderComponent(properties: _ImageProperties,) {
            return <Image {...properties}/>
        }

    }(true,)
    public static readonly NO =  new class Images_No extends Images {

        public override renderComponent() {
            return EMPTY_REACT_ELEMENT
        }

    }(false,)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: Images

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

    public abstract renderComponent(properties: _ImageProperties,): ReactElement


    // public static getValueByValue<T, >(value: T,): ImagesByValue<T>
    public static getValueByValue(value: Nullable<| Images | boolean>,): Images {
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
        return Images
    }

    public static getValue(value: PossibleValueByEnumerable<Images>,): Images {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<Images> {
        return Enum.getValuesOn(this)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}

interface _ImageProperties
    extends Omit<ImageProperties, 'ref'> {

    ref?: Exclude<ImageProperties['ref'], string>

}
