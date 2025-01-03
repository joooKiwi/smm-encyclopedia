import {Enum} from '@joookiwi/enumerable'

import type {Names, Ordinals}               from 'app/options/global/Sounds.types'
import type {CompanionEnumByValueSingleton} from 'util/enumerable/Singleton.types'
import type {SoundFile}                     from 'util/file/sound/SoundFile'
import type {ClassWithValue}                from 'util/types/ClassWithValue'
import type {ReactProperties}               from 'util/react/ReactProperties'

import {CompanionEnumByValue} from 'util/enumerable/companion/CompanionEnumByValue'
import StandaloneSound        from 'util/file/sound/component/StandaloneSound'

/**
 * The possible sound as either
 *
 * <ul>
 *  <li>Yes → Display the sound viewer</li>
 *  <li>No → Display no sound viewer</li>
 * </ul>
 */
export abstract class Sounds
    extends Enum<Ordinals, Names>
    implements ClassWithValue<boolean> {

    //region -------------------- Enum instances --------------------

    public static readonly YES = new class Sounds_Yes extends Sounds {

        public override renderComponent(properties: StandaloneSoundProperties,) {
            return <StandaloneSound {...properties}/>
        }

    }(true,)
    public static readonly NO =  new class Sounds_No extends Sounds {

        public override renderComponent() {
            return null
        }

    }(false,)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumByValueSingleton<boolean, Sounds, typeof Sounds> = class CompanionEnum_Sounds
        extends CompanionEnumByValue<boolean, Sounds, typeof Sounds> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_Sounds

        private constructor() {
            super(Sounds,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_Sounds()
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

    public abstract renderComponent(properties: StandaloneSoundProperties,): ReactElement

    //endregion -------------------- Methods --------------------

}

interface StandaloneSoundProperties
    extends ReactProperties {

    readonly file: SoundFile

    readonly title: string

}
