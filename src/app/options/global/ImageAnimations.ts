import type {StringOrBoolean} from '@joookiwi/type'
import {Enum}                 from '@joookiwi/enumerable'

import type {Names, Ordinals, PossibleImageAnimation} from 'app/options/global/ImageAnimations.types'
import type {ClassWithValue}                          from 'util/types/ClassWithValue'
import type {CompanionEnumByValueSingleton}           from 'util/enumerable/Singleton.types'

import {CompanionEnumByValue} from 'util/enumerable/companion/CompanionEnumByValue'

/**
 * The possible image animation as either
 *
 * <ul>
 *  <li>Separated → display the image animation individually</li>
 *  <li>Yes → Display the image animation</li>
 *  <li>No → Display no image animation</li>
 * </ul>
 */
export class ImageAnimations
    extends Enum<Ordinals, Names>
    implements ClassWithValue<PossibleImageAnimation> {

    //region -------------------- Enum instances --------------------

    public static readonly SEPARATED = new ImageAnimations('separated',)
    public static readonly YES =       new ImageAnimations(true,)
    public static readonly NO =        new ImageAnimations(false,)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumByValueSingleton<StringOrBoolean, ImageAnimations, typeof ImageAnimations> = class CompanionEnum_ImageAnimations
        extends CompanionEnumByValue<StringOrBoolean, ImageAnimations, typeof ImageAnimations> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_ImageAnimations

        private constructor() {
            super(ImageAnimations,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_ImageAnimations()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    readonly #value

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(value: PossibleImageAnimation,) {
        super()
        this.#value = value
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get value(): PossibleImageAnimation {
        return this.#value
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------

}
