import type {CollectionHolder}                                  from '@joookiwi/collection'
import type {CompanionEnumSingleton, PossibleEnumerableValueBy} from '@joookiwi/enumerable'
import {CompanionEnum, Enum}                                    from '@joookiwi/enumerable'

import type {ClassWithEnglishName}         from 'core/ClassWithEnglishName'
import type {EnglishName, Names, Ordinals} from 'util/file/sound/player/SoundStates.types'
import type {SoundSubElementsHolder}       from 'util/file/sound/holder/SoundSubElementsHolder'

import {getValueByEnglishName} from 'util/utilitiesMethods'

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
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumSingleton<SoundStates, typeof SoundStates> = class CompanionEnum_SoundStates
        extends CompanionEnum<SoundStates, typeof SoundStates> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_SoundStates

        private constructor() {
            super(SoundStates,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_SoundStates()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    readonly #englishName

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(englishName: EnglishName,) {
        super()
        this.#englishName = englishName
    }

    //endregion -------------------- Constructor --------------------
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


    public static getValueByName(value: Nullable<| SoundStates | string>,): SoundStates {
        return getValueByEnglishName(value, this,)
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    public static getValue(value: PossibleEnumerableValueBy<SoundStates>,): SoundStates {
        return SoundStates.CompanionEnum.get.getValue(value,)
    }

    public static get values(): CollectionHolder<SoundStates> {
        return SoundStates.CompanionEnum.get.values
    }

    public static* [Symbol.iterator](): IterableIterator<SoundStates> {
        yield* SoundStates.CompanionEnum.get
    }

    //endregion -------------------- Enum methods --------------------

}