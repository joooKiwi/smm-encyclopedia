import type {CollectionHolder, EnumerableConstructor, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'
import {Enum}                                                                    from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                                                             from '../ClassWithEnglishName'
import type {ClassWithImagePath}                                                               from '../ClassWithImagePath'
import type {PossibleOtherEntities}                                                            from '../entity/Entity'
import type {Names, Ordinals, PossibleEnglishName, PossibleImagePath, PossibleSimpleImagePath} from './Times.types'
import type {PropertyGetter, PropertyReferenceGetter}                                          from '../PropertyGetter'
import type {TimeProperty}                                                                     from '../entity/properties/time/TimeProperty'
import type {TimeReferences}                                                                   from '../entity/properties/time/TimeReferences'

import {BASE_PATH}             from '../../variables'
import {getValueByEnglishName} from '../../util/utilitiesMethods'
import {StringContainer}       from '../../util/StringContainer'
import TimeComponent           from './Time.component'

export abstract class Times
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName>,
        ClassWithImagePath<PossibleImagePath>,
        PropertyReferenceGetter<TimeReferences, PossibleOtherEntities>,
        PropertyGetter<TimeProperty> {

    //region -------------------- Enum instances --------------------

    public static readonly DAY =   new class Times_Day extends Times {

        public override get(property: TimeProperty,): boolean {
            return property.isInDayTheme
        }

        public override getReference(referenceProperty: TimeReferences,): TimeReferences['referenceInDayTheme'] {
            return referenceProperty.referenceInDayTheme
        }

    }('Day', 'Sun',)
    public static readonly NIGHT = new class Times_Night extends Times {

        public override get(property: TimeProperty,): boolean {
            return property.isInNightTheme === true
        }

        public override getReference(referenceProperty: TimeReferences,): TimeReferences['referenceInNightTheme'] {
            return referenceProperty.referenceInNightTheme
        }

    }('Night', 'Moon',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: Times

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    readonly #englishName
    readonly #simpleImagePath: PossibleSimpleImagePath
    #imagePath?: PossibleImagePath

    //endregion -------------------- Fields --------------------

    private constructor(englishName: PossibleEnglishName, imagePath: PossibleSimpleImagePath,) {
        super()
        this.#englishName = new StringContainer(englishName)
        this.#simpleImagePath = imagePath
    }

    //region -------------------- Getter methods --------------------

    public get englishName(): PossibleEnglishName {
        return this.#englishName.get
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml
    }

    public get imagePath(): PossibleImagePath {
        return this.#imagePath ??= `/${BASE_PATH}/time/${this.#simpleImagePath}.png`
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public abstract get(property: TimeProperty,): boolean

    public abstract getReference(referenceProperty: TimeReferences,): PossibleOtherEntities

    public get renderSingleComponent() {
        return TimeComponent.renderSingleComponent(this)
    }


    // public static getValueByName<T extends string, >(value: | Times | T | null | undefined,): TimesByName<T>
    public static getValueByName(value: | Times | string | null | undefined,): Times {
        return getValueByEnglishName(value, this,)
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): EnumerableConstructor<Ordinals, Names> {
        return Times
    }

    public static getValue(value: PossibleValueByEnumerable<Times>,): Times {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<Times> {
        return Enum.getValuesOn(this)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}
