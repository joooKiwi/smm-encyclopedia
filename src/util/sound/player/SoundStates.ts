import {Enum}                                                               from '@joookiwi/enumerable'
import {CollectionHolder, EnumerableConstructor, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'

import type {EnglishName, Names, Ordinals} from './SoundStates.types'
import type {ClassWithEnglishName}         from '../../../core/ClassWithEnglishName'
import type {ReactElement}                 from '../../react/ReactProperties'
import type {SoundSubElementsHolder}       from '../holder/SoundSubElementsHolder'

import {getValueByEnglishName} from '../../utilitiesMethods'

export abstract class SoundStates
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<EnglishName> {

    //region -------------------- Enum instances --------------------

    public static readonly STANDBY =   new class SoundStates_Standby extends SoundStates {

        public override getElementsFrom({playElement,}: SoundSubElementsHolder,) {
            return [playElement(),]
        }

    }('standby',)
    public static readonly PAUSED =    new class SoundStates_Paused extends SoundStates {

        public override getElementsFrom({playElement, stopElement,}: SoundSubElementsHolder,) {
            return [playElement(), stopElement(),]
        }

    }('paused',)
    public static readonly PLAYING =   new class SoundStates_Playing extends SoundStates {

        public override getElementsFrom({pauseElement, stopElement,}: SoundSubElementsHolder,) {
            return [pauseElement(), stopElement(),]
        }

    }('playing',)
    public static readonly LOADING =   new class SoundStates_Loading extends SoundStates {

        public override getElementsFrom({loadingElement,}: SoundSubElementsHolder,) {
            return [loadingElement(),]
        }

    }('loading',)
    public static readonly EXCEPTION = new class SoundStates_Exception extends SoundStates {

        public override getElementsFrom({exceptionElement,}: SoundSubElementsHolder,) {
            return [exceptionElement(),]
        }

    }('exception',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: SoundStates

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    readonly #englishName

    //endregion -------------------- Fields --------------------

    private constructor(englishName: EnglishName,) {
        super()
        this.#englishName = englishName
    }

    //region -------------------- Getter methods --------------------

    public get englishName(): EnglishName {
        return this.#englishName
    }

    public get englishNameInHtml(): EnglishName {
        return this.englishName
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public abstract getElementsFrom(elementsHolder: SoundSubElementsHolder,): readonly ReactElement[]


    // public static getValueByName<T, >(value: T,): SoundStatesByName<T>
    public static getValueByName(value: | SoundStates | string | null | undefined,): SoundStates {
        return getValueByEnglishName(value, this,)
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected get _static(): EnumerableConstructor<Ordinals, Names> {
        return SoundStates
    }

    public static getValue(value: PossibleValueByEnumerable<SoundStates>,): SoundStates {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<SoundStates> {
        return Enum.getValuesOn(this)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------
}