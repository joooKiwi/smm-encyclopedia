import {Enum} from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                                                         from 'core/ClassWithEnglishName'
import type {Medal}                                                                        from 'core/medal/Medal'
import type {Names, Ordinals, PossibleEnglishName, PossibleImageName, PossibleImageNumber} from 'core/medal/Medals.types'
import type {MedalImageFile}                                                               from 'core/medal/file/MedalImageFile'
import type {CompanionEnumByNameSingleton}                                                 from 'util/enumerable/Singleton.types'
import type {ClassWithImageFile}                                                           from 'util/file/image/ClassWithImageFile'

import {MedalLoader}                    from 'core/medal/Medal.loader'
import * as FileCreator                 from 'core/medal/file/fileCreator'
import {StringContainer}                from 'util/StringContainer'
import {CompanionEnumByEnglishNameOnly} from 'util/enumerable/companion/CompanionEnumByEnglishNameOnly'
import {Entities}                       from 'core/entity/Entities'
import {CharacterNames}                 from 'core/characterName/CharacterNames'

/**
 * @todo Change the "associated reference" used from the "Green Koopa Troopa" to "Koopa Troopa"
 * @recursiveReference<{@link MedalLoader}>
 */
export class Medals
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName>,
        ClassWithImageFile<MedalImageFile> {

    //region -------------------- Enum instances --------------------

    public static readonly GOOMBA =         new Medals('Goomba', 0, Entities.GOOMBA,)
    public static readonly KOOPA_TROOPA =   new Medals('Koopa Troopa', 1, Entities.GREEN_KOOPA_TROOPA,)
    public static readonly PIRANHA_PLANT =  new Medals('Piranha Plant', 2, Entities.PIRANHA_PLANT,)
    public static readonly SPINY =          new Medals('Spiny', 3, Entities.SPINY,)
    public static readonly CHEEP_CHEEP =    new Medals('Cheep Cheep', 4, Entities.GREEN_CHEEP_CHEEP,)
    public static readonly BLOOPER =        new Medals('Blooper', 5, Entities.BLOOPER,)
    public static readonly LAKITU =         new Medals('Lakitu', 6, Entities.LAKITU,)
    public static readonly BOWSER =         new Medals('Bowser', 7, Entities.BOWSER,)
    public static readonly TOAD =           new Medals('Toad', 8, CharacterNames.TOAD, )
    public static readonly PRINCESS_PEACH = new Medals('Princess Peach', 9, CharacterNames.PRINCESS_PEACH,)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static CompanionEnum: CompanionEnumByNameSingleton<Medals, typeof Medals> = class CompanionEnum_Medals
        extends CompanionEnumByEnglishNameOnly<Medals, typeof Medals> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_Medals

        private constructor() {
            super(Medals,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_Medals()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleEnglishName, Medal>

    #reference?: Medal
    readonly #associatedReference: | Entities | CharacterNames

    readonly #englishName
    readonly #imageName: PossibleImageName
    #imageFile?: MedalImageFile

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(englishName: PossibleEnglishName, imageNumber: PossibleImageNumber, associatedReference: | Entities | CharacterNames,) {
        super()
        this.#englishName = new StringContainer(englishName,)
        this.#imageName = `Honor_Medal_0${imageNumber}^l.bflim`
        this.#associatedReference = associatedReference
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public static get REFERENCE_MAP(): ReadonlyMap<PossibleEnglishName, Medal> {
        return this.#REFERENCE_MAP ??= MedalLoader.get.load()
    }

    /**
     * {@inheritDoc}
     * @semiAsynchronously
     */
    public get reference(): Medal {
        return this.#reference ??= Medals.REFERENCE_MAP.get(this.englishName,)!
    }

    public get associatedReference(): | Entities | CharacterNames {
        return this.#associatedReference
    }


    public get englishName(): PossibleEnglishName {
        return this.#englishName.get
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml
    }

    public get imageFile(): MedalImageFile {
        return this.#imageFile ??= FileCreator.medalImage(this.#imageName, this.englishName,)
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------

}

export namespace Medals {// eslint-disable-line @typescript-eslint/no-namespace

    /** The companion instance of a {@link Medals} */
    export const Companion = Medals.CompanionEnum.get

    export const ALL = Companion.values.toArray()

}

//TODO remove this test variable when the application will be complete
(window.test ??= {}).Medals = Medals
