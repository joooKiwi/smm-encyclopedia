import type {Array} from '@joookiwi/type'
import {Enum}       from '@joookiwi/enumerable'

import type {ClassWithEnglishName}         from 'core/ClassWithEnglishName'
import type {EnglishName, Names, Ordinals} from 'util/file/sound/player/SoundStates.types'
import type {SoundSubElementsHolder}       from 'util/file/sound/holder/SoundSubElementsHolder'
import type {CompanionEnumByNameSingleton} from 'util/enumerable/Singleton.types'

import {CompanionEnumByEnglishNameOnly} from 'util/enumerable/companion/CompanionEnumByEnglishNameOnly'

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

    public static readonly CompanionEnum: CompanionEnumByNameSingleton<SoundStates, typeof SoundStates> = class CompanionEnum_SoundStates
        extends CompanionEnumByEnglishNameOnly<SoundStates, typeof SoundStates> {

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

    public abstract getElementsFrom(elementsHolder: SoundSubElementsHolder,): Array<ReactElement>

    //endregion -------------------- Methods --------------------

}
