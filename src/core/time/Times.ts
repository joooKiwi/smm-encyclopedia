import {Enum} from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                                          from 'core/ClassWithEnglishName'
import type {PropertyGetter, PropertyReferenceGetter} from 'core/PropertyGetter'
import type {Entity, PossibleOtherEntities}           from 'core/entity/Entity'
import type {TimeProperty}                            from 'core/entity/properties/time/TimeProperty'
import type {Names, Ordinals, PossibleEnglishName, PossibleSimpleImagePath} from 'core/time/Times.types'
import type {TimeImageFile}                                                 from 'core/time/file/TimeImageFile'
import type {ClassWithImageFile}                                            from 'util/file/image/ClassWithImageFile'
import type {CompanionEnumByNameSingleton}                                  from 'util/enumerable/Singleton.types'

import {timeImage}                      from 'core/time/file/fileCreator'
import {StringContainer}                from 'util/StringContainer'
import {CompanionEnumByEnglishNameOnly} from 'util/enumerable/companion/CompanionEnumByEnglishNameOnly'

export abstract class Times
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName>,
        ClassWithImageFile<TimeImageFile>,
        PropertyReferenceGetter<Entity, PossibleOtherEntities>,
        PropertyGetter<TimeProperty> {

    //region -------------------- Enum instances --------------------

    public static readonly DAY =   new class Times_Day extends Times {

        public override get(property: TimeProperty,) {
            return property.isInDayTheme
        }

        public override getReference(entity: Entity,) {
            return entity.referenceInDayTheme
        }

    }('Day', 'Sun',)
    public static readonly NIGHT = new class Times_Night extends Times {

        public override get(property: TimeProperty,) {
            return property.isInNightTheme === true
        }

        public override getReference(entity: Entity,) {
            return entity.referenceInNightTheme
        }

    }('Night', 'Moon',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumByNameSingleton<Times, typeof Times> = class CompanionEnum_Times
        extends CompanionEnumByEnglishNameOnly<Times, typeof Times> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_Times

        private constructor() {
            super(Times,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_Times()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    readonly #englishName
    readonly #simpleImagePath: PossibleSimpleImagePath
    #imageFile?: TimeImageFile

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(englishName: PossibleEnglishName, imagePath: PossibleSimpleImagePath,) {
        super()
        this.#englishName = new StringContainer(englishName)
        this.#simpleImagePath = imagePath
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get englishName(): PossibleEnglishName {
        return this.#englishName.get
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml
    }

    public get imageFile(): TimeImageFile {
        return this.#imageFile ??= timeImage(this.#simpleImagePath, this.englishName,)
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public abstract get(property: TimeProperty,): boolean

    public abstract getReference(entity: Entity,): PossibleOtherEntities

    //endregion -------------------- Methods --------------------

}

export namespace Times {

    /** All the {@link Times} */
    export const ALL = [Times.DAY, Times.NIGHT,] as const

}
