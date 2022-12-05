import type {CollectionHolder, EnumerableConstructor, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'
import {Enum}                                                                    from '@joookiwi/enumerable'
import {lazy}                                                                    from 'react'

import type {Names, Ordinals}                     from 'app/options/global/Texts.types'
import type {BooleanResultTextProperties}         from 'app/tools/text/properties/BooleanResultTextProperties'
import type {BooleanTextProperties}               from 'app/tools/text/properties/BooleanTextProperties'
import type {PossibleTextContent, TextProperties} from 'app/tools/text/properties/TextProperties'
import type {YesOrNoTextProperties}               from 'app/tools/text/properties/YesOrNoTextProperties'
import type {NameProperties}                      from 'lang/name/component/Name.properties'
import type {ReactElement}                        from 'util/react/ReactProperties'
import type {ClassWithValue}                      from 'util/types/ClassWithValue'
import type {Nullable}                            from 'util/types/nullable'

//region -------------------- dynamic imports --------------------

const TextComponent =              lazy(() => import('app/tools/text/TextComponent'))
const NameComponent =              lazy(() => import('lang/name/component/Name.component'))
const YesOrNoResultTextComponent = lazy(() => import('app/tools/text/YesOrNoResultTextComponent'))
const BooleanTextComponent =       lazy(() => import('app/tools/text/BooleanTextComponent'))
const BooleanResultTextComponent = lazy(() => import('app/tools/text/BooleanResultTextComponent'))

//endregion -------------------- dynamic imports --------------------

/**
 * The possible text as either
 *
 * <ul>
 *  <li>Yes → Display the text</li>
 *  <li>No → Display no text</li>
 * </ul>
 *
 * @see TextComponent
 * @see YesOrNoResultTextComponent
 * @see BooleanTextComponent
 * @see BooleanResultTextComponent
 */
export abstract class Texts
    extends Enum<Ordinals, Names>
    implements ClassWithValue<boolean> {

    //region -------------------- Enum instances --------------------

    public static readonly YES = new class Texts_Yes extends Texts {

        public override renderTextComponent<T extends PossibleTextContent = PossibleTextContent, >(properties: _TextProperties<T>,) {
            return <TextComponent {...properties}/>
        }

        public override renderNameComponent(properties: _NameProperties,) {
            return <NameComponent {...properties}/>
        }

        public override renderYesNoComponent(properties: _YesOrNoTextProperties,) {
            return <YesOrNoResultTextComponent {...properties}/>
        }

        public override renderBooleanComponent(properties: _BooleanTextProperties,) {
            return <BooleanTextComponent {...properties}/>
        }

        public override renderBooleanResultComponent(properties: _BooleanResultTextProperties,) {
            return <BooleanResultTextComponent {...properties}/>
        }

    }(true,)
    public static readonly NO = new class Texts_No extends Texts {

        public override renderTextComponent() {
            return null
        }

        public override renderNameComponent() {
            return null
        }

        public override renderYesNoComponent() {
            return null
        }

        public override renderBooleanComponent() {
            return null
        }

        public override renderBooleanResultComponent() {
            return null
        }

    }(false,)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: Texts

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

    public abstract renderTextComponent<T extends PossibleTextContent = PossibleTextContent, >(properties: _TextProperties<T>,): ReactElement

    public abstract renderNameComponent(properties: _NameProperties,): ReactElement

    public abstract renderYesNoComponent(properties: _YesOrNoTextProperties,): ReactElement

    public abstract renderBooleanComponent(properties: _BooleanTextProperties,): ReactElement

    public abstract renderBooleanResultComponent(properties: _BooleanResultTextProperties,): ReactElement


    // public static getValueByValue<T, >(value: T,): TextsByValue<T>
    public static getValueByValue(value: Nullable<| Texts | boolean>,): Texts {
        if (value == null)
            throw new TypeError(`No "${this.name}" could be found by a null value.`)
        if(value instanceof this)
            return value
        const valueFound = this.values.find(it => it.value === value)
        if (valueFound == null)
            throw new ReferenceError(`No "${this.name}" could be found by this value "${value}".`)
        return valueFound
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): EnumerableConstructor<Ordinals, Names> {
        return Texts
    }

    public static getValue(value: PossibleValueByEnumerable<Texts>,): Texts {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<Texts> {
        return Enum.getValuesOn(this)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}

interface _TextProperties<T extends PossibleTextContent = PossibleTextContent, >
    extends Omit<TextProperties<T>, 'ref'> {

    ref?: Exclude<TextProperties<T>['ref'], string>

}

interface _NameProperties
    extends Omit<NameProperties, 'ref'> {

    ref?: Exclude<NameProperties['ref'], string>

}

interface _YesOrNoTextProperties
    extends Omit<YesOrNoTextProperties, 'ref'> {

    ref?: Exclude<YesOrNoTextProperties['ref'], string>

}

interface _BooleanTextProperties
    extends Omit<BooleanTextProperties, 'ref'> {

    ref?: Exclude<BooleanTextProperties['ref'], string>

}

interface _BooleanResultTextProperties
    extends Omit<BooleanResultTextProperties, 'ref'> {

    ref?: Exclude<BooleanResultTextProperties['ref'], string>

}
