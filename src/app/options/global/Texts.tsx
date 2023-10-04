import {Enum} from '@joookiwi/enumerable'

import type {Names, Ordinals}                     from 'app/options/global/Texts.types'
import type {BooleanResultTextProperties}         from 'app/tools/text/properties/BooleanResultTextProperties'
import type {BooleanTextProperties}               from 'app/tools/text/properties/BooleanTextProperties'
import type {PossibleTextContent, TextProperties} from 'app/tools/text/properties/TextProperties'
import type {YesOrNoTextProperties}               from 'app/tools/text/properties/YesOrNoTextProperties'
import type {NameProperties}                      from 'lang/name/component/Name.properties'
import type {CompanionEnumByValueSingleton}       from 'util/enumerable/Singleton.types'
import type {ClassWithValue}                      from 'util/types/ClassWithValue'

import NameComponent              from 'lang/name/component/Name.component'
import BooleanResultTextComponent from 'app/tools/text/BooleanResultTextComponent'
import BooleanTextComponent       from 'app/tools/text/BooleanTextComponent'
import TextComponent              from 'app/tools/text/TextComponent'
import YesOrNoResultTextComponent from 'app/tools/text/YesOrNoResultTextComponent'
import {CompanionEnumByValue}     from 'util/enumerable/companion/CompanionEnumByValue'

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
    public static readonly NO =  new class Texts_No extends Texts {

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

    public static readonly CompanionEnum: CompanionEnumByValueSingleton<boolean, Texts, typeof Texts> = class CompanionEnum_Texts
        extends CompanionEnumByValue<boolean, Texts, typeof Texts> {

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

    //endregion -------------------- Methods --------------------

}
