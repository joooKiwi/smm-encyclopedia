import type {CollectionHolder}                                       from '@joookiwi/collection'
import type {BasicCompanionEnumSingleton, PossibleEnumerableValueBy} from '@joookiwi/enumerable'
import {BasicCompanionEnum, Enum}                                    from '@joookiwi/enumerable'

import type {Names, Ordinals}                     from 'app/options/global/Texts.types'
import type {BooleanResultTextProperties}         from 'app/tools/text/properties/BooleanResultTextProperties'
import type {BooleanTextProperties}               from 'app/tools/text/properties/BooleanTextProperties'
import type {PossibleTextContent, TextProperties} from 'app/tools/text/properties/TextProperties'
import type {YesOrNoTextProperties}               from 'app/tools/text/properties/YesOrNoTextProperties'
import type {NameProperties}                      from 'lang/name/component/Name.properties'
import type {ReactElement}                        from 'util/react/ReactProperties'
import type {ClassWithValue}                      from 'util/types/ClassWithValue'
import type {Nullable}                            from 'util/types/nullable'

import TextComponent              from 'app/tools/text/TextComponent'
import NameComponent              from 'lang/name/component/Name.component'
import YesOrNoResultTextComponent from 'app/tools/text/YesOrNoResultTextComponent'
import BooleanTextComponent       from 'app/tools/text/BooleanTextComponent'
import BooleanResultTextComponent from 'app/tools/text/BooleanResultTextComponent'

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

        public override renderTextComponent<T extends PossibleTextContent = PossibleTextContent, >(properties: TextProperties<T>,) {
            return <TextComponent {...properties}/>
        }

        public override renderNameComponent(properties: NameProperties,) {
            return <NameComponent {...properties}/>
        }

        public override renderYesNoComponent(properties: YesOrNoTextProperties,) {
            return <YesOrNoResultTextComponent {...properties}/>
        }

        public override renderBooleanComponent(properties: BooleanTextProperties,) {
            return <BooleanTextComponent {...properties}/>
        }

        public override renderBooleanResultComponent(properties: BooleanResultTextProperties,) {
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
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: BasicCompanionEnumSingleton<Texts, typeof Texts> = class CompanionEnum_Texts
        extends BasicCompanionEnum<Texts, typeof Texts> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_Texts

        private constructor() {
            super(Texts,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_Texts()
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

    public abstract renderTextComponent<T extends PossibleTextContent = PossibleTextContent, >(properties: TextProperties<T>,): ReactElement

    public abstract renderNameComponent(properties: NameProperties,): ReactElement

    public abstract renderYesNoComponent(properties: YesOrNoTextProperties,): ReactElement

    public abstract renderBooleanComponent(properties: BooleanTextProperties,): ReactElement

    public abstract renderBooleanResultComponent(properties: BooleanResultTextProperties,): ReactElement


    // public static getValueByValue<T, >(value: T,): TextsByValue<T>
    public static getValueByValue(value: Nullable<| Texts | boolean>,): Texts {
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

    public static getValue(value: PossibleEnumerableValueBy<Texts>,): Texts {
        return Texts.CompanionEnum.get.getValue(value,)
    }

    public static get values(): CollectionHolder<Texts> {
        return Texts.CompanionEnum.get.values
    }

    public static* [Symbol.iterator](): IterableIterator<Texts> {
        yield* Texts.CompanionEnum.get
    }

    //endregion -------------------- Enum methods --------------------

}
