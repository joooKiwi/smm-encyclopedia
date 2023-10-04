import {Enum} from '@joookiwi/enumerable'

import type {ImageProperties}               from 'app/tools/images/properties/ImageProperties'
import type {Names, Ordinals}               from 'app/options/global/Images.types'
import type {CompanionEnumByValueSingleton} from 'util/enumerable/Singleton.types'
import type {ClassWithValue}                from 'util/types/ClassWithValue'

import Image                  from 'app/tools/images/Image'
import {CompanionEnumByValue} from 'util/enumerable/companion/CompanionEnumByValue'

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

        public override renderComponent(properties: ImageProperties,) {
            return <Image {...properties}/>
        }

    }(true,)
    public static readonly NO =  new class Images_No extends Images {

        public override renderComponent() {
            return null
        }

    }(false,)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumByValueSingleton<boolean, Images, typeof Images> = class CompanionEnum_Images
        extends CompanionEnumByValue<boolean, Images, typeof Images> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_Images

        private constructor() {
            super(Images,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_Images()
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

    public abstract renderComponent(properties: ImageProperties,): ReactElement

    //endregion -------------------- Methods --------------------

}
