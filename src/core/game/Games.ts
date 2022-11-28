import {Enum}                                                                    from '@joookiwi/enumerable'
import type {CollectionHolder, EnumerableConstructor, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'

import type {ClassWithAcronym}                                                                              from '../ClassWithAcronym'
import type {ClassWithEnglishName}                                                                          from '../ClassWithEnglishName'
import type {ClassWithImagePath}                                                                            from '../ClassWithImagePath'
import type {GameProperty}                                                                                  from '../entity/properties/game/GameProperty'
import type {Names, Ordinals, PossibleAcronym, PossibleEnglishName, PossibleImagePath, PossibleSimpleValue} from './Games.types'
import type {Nullable}                                                                                      from '../../util/types'
import type {PropertyGetter}                                                                                from '../PropertyGetter'

import {BASE_PATH}       from '../../variables'
import GameComponent     from './Game.component'
import {StringContainer} from '../../util/StringContainer'

export abstract class Games
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName>,
        ClassWithAcronym<PossibleAcronym>,
        ClassWithImagePath<PossibleImagePath>,
        PropertyGetter<GameProperty> {

    //region -------------------- Enum instances --------------------

    public static readonly SUPER_MARIO_MAKER_1 =                new class Games_SuperMarioMaker1 extends Games {

        public override get(property: GameProperty,) {
            return property.isInSuperMarioMaker1
        }

    }('SMM', '1', 'Super Mario Maker',)
    public static readonly SUPER_MARIO_MAKER_FOR_NINTENDO_3DS = new class Games_SuperMarioMakerForNintendo3DS extends Games {

        public override get(property: GameProperty,) {
            return property.isInSuperMarioMakerFor3DS
        }

    }('SMM3DS', '3DS', 'Super Mario Maker for Nintendo 3DS',)
    public static readonly SUPER_MARIO_MAKER_2 =                new class Games_SuperMarioMaker2 extends Games {

        public override get(property: GameProperty,) {
            return property.isInSuperMarioMaker2
        }

    }('SMM2', '2', 'Super Mario Maker 2',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: Games

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    readonly #acronym: PossibleAcronym
    readonly #englishName: StringContainer<PossibleEnglishName>
    readonly #simpleValue: PossibleSimpleValue
    readonly #imagePath: PossibleImagePath

    //endregion -------------------- Fields --------------------

    private constructor(enumeration_or_acronym: PossibleAcronym, simpleValue: PossibleSimpleValue, englishName: PossibleEnglishName,) {
        super()
        this.#acronym = enumeration_or_acronym
        this.#englishName = new StringContainer(englishName)
        this.#simpleValue = simpleValue
        this.#imagePath = `/${BASE_PATH}/game/${englishName}.svg`
    }

    //region -------------------- Getter methods --------------------

    public get acronym(): PossibleAcronym {
        return this.#acronym
    }

    public get englishName(): PossibleEnglishName {
        return this.#englishName.get
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml
    }

    public get simpleValue(): PossibleSimpleValue {
        return this.#simpleValue
    }

    public get imagePath(): PossibleImagePath {
        return this.#imagePath
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public abstract get(property: GameProperty,): boolean

    public get renderSingleComponent() {
        return GameComponent.renderSingleComponent(this)
    }


    // public static getValueByValue<T extends string, >(value: Nullable<| Games | T>,): GamesByValue<T>
    public static getValueByValue(value: Nullable<| Games | string>,): Games {
        if (value == null)
            throw new TypeError(`No "${this.name}" could be found by a null value.`)
        if (value instanceof this)
            return value
        const valueFound = this.values.find(enumerable => enumerable.englishName === value
            || enumerable.acronym === value
            || enumerable.simpleValue === value)
        if (valueFound == null)
            throw new ReferenceError(`No "${this.name}" could be found by this value "${value}".`)
        return valueFound
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): EnumerableConstructor<Ordinals, Names> {
        return Games
    }

    public static getValue(value: PossibleValueByEnumerable<Games>,): Games {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<Games> {
        return Enum.getValuesOn(this)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}
