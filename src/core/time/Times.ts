import type {CollectionHolder}                                       from '@joookiwi/collection'
import type {BasicCompanionEnumSingleton, PossibleEnumerableValueBy} from '@joookiwi/enumerable'
import {BasicCompanionEnum, Enum}                                    from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                                          from 'core/ClassWithEnglishName'
import type {PropertyGetter, PropertyReferenceGetter}                       from 'core/PropertyGetter'
import type {PossibleOtherEntities}                                         from 'core/entity/Entity'
import type {TimeProperty}                                                  from 'core/entity/properties/time/TimeProperty'
import type {TimeReferences}                                                from 'core/entity/properties/time/TimeReferences'
import type {Names, Ordinals, PossibleEnglishName, PossibleSimpleImagePath} from 'core/time/Times.types'
import type {TimeImageFile}                                                 from 'core/time/file/TimeImageFile'
import type {ClassWithImageFile}                                            from 'util/file/image/ClassWithImageFile'
import type {Nullable}                                                      from 'util/types/nullable'

import TimeComponent                         from 'core/time/Time.component'
import {TimeImageFileContainer as ImageFile} from 'core/time/file/TimeImageFile.container'
import {getValueByEnglishName}               from 'util/utilitiesMethods'
import {StringContainer}                     from 'util/StringContainer'

export abstract class Times
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName>,
        ClassWithImageFile<TimeImageFile>,
        PropertyReferenceGetter<TimeReferences, PossibleOtherEntities>,
        PropertyGetter<TimeProperty> {

    //region -------------------- Enum instances --------------------

    public static readonly DAY =   new class Times_Day extends Times {

        public override get(property: TimeProperty,) {
            return property.isInDayTheme
        }

        public override getReference(referenceProperty: TimeReferences,): TimeReferences['referenceInDayTheme'] {
            return referenceProperty.referenceInDayTheme
        }

    }('Day', 'Sun',)
    public static readonly NIGHT = new class Times_Night extends Times {

        public override get(property: TimeProperty,) {
            return property.isInNightTheme === true
        }

        public override getReference(referenceProperty: TimeReferences,): TimeReferences['referenceInNightTheme'] {
            return referenceProperty.referenceInNightTheme
        }

    }('Night', 'Moon',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: BasicCompanionEnumSingleton<Times, typeof Times> = class CompanionEnum_Times
        extends BasicCompanionEnum<Times, typeof Times> {

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
        return this.#imageFile ??= new ImageFile(this.englishName, this.#simpleImagePath,)
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public abstract get(property: TimeProperty,): boolean

    public abstract getReference(referenceProperty: TimeReferences,): PossibleOtherEntities

    public get renderSingleComponent() {
        return TimeComponent.renderSingleComponent(this)
    }


    public static getValueByName(value: Nullable<| Times | string>,): Times {
        return getValueByEnglishName(value, this,)
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    public static getValue(value: PossibleEnumerableValueBy<Times>,): Times {
        return Times.CompanionEnum.get.getValue(value,)
    }

    public static get values(): CollectionHolder<Times> {
        return Times.CompanionEnum.get.values
    }

    public static* [Symbol.iterator](): IterableIterator<Times> {
        yield* Times.CompanionEnum.get
    }

    //endregion -------------------- Enum methods --------------------

}
