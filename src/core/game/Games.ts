import {Enum}                                                                    from '@joookiwi/enumerable'
import type {CollectionHolder, EnumerableConstructor, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'

import type {ClassWithAcronym}                                                           from 'core/ClassWithAcronym'
import type {ClassWithEnglishName}                                                       from 'core/ClassWithEnglishName'
import type {PropertyGetter}                                                             from 'core/PropertyGetter'
import type {GameProperty}                                                               from 'core/entity/properties/game/GameProperty'
import type {Names, Ordinals, PossibleAcronym, PossibleEnglishName, PossibleSimpleValue} from 'core/game/Games.types'
import type {GameImageFile}                                                              from 'core/game/file/GameImageFile'
import type {ClassWithImageFile}                                                         from 'util/file/image/ClassWithImageFile'
import type {Nullable}                                                                   from 'util/types/nullable'

import GameComponent            from 'core/game/Game.component'
import {GameImageFileContainer} from 'core/game/file/GameImageFile.container'
import {StringContainer}        from 'util/StringContainer'

export abstract class Games
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName>,
        ClassWithAcronym<PossibleAcronym>,
        ClassWithImageFile<GameImageFile>,
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
    #imageFile?: GameImageFile

    //endregion -------------------- Fields --------------------

    private constructor(enumeration_or_acronym: PossibleAcronym, simpleValue: PossibleSimpleValue, englishName: PossibleEnglishName,) {
        super()
        this.#acronym = enumeration_or_acronym
        this.#englishName = new StringContainer(englishName)
        this.#simpleValue = simpleValue
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


    public get imageFile(): GameImageFile {
        return this.#imageFile ??= new GameImageFileContainer(this.englishName,)
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public abstract get(property: GameProperty,): boolean

    public get renderSingleComponent() {
        return GameComponent.renderSingleComponent(this)
    }


    public static getValueByValue(value: Nullable<| Games | string | number>,): Games {
        if (value == null)
            throw new TypeError(`No "${this.name}" could be found by a null value.`)
        if (value instanceof this)
            return value
        const stringValue = `${value}`,
            valueFound = this.values.find(enumerable => enumerable.englishName === value
                || enumerable.acronym === value
                || enumerable.simpleValue === stringValue)
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
        return Enum.getValuesOn(this,)
    }

    public static* [Symbol.iterator](): IterableIterator<Games> {
        yield* this.values
    }

    //endregion -------------------- Enum methods --------------------

}
