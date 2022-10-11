import type {ClassWithEnglishName}                                                                                                                                                                       from '../ClassWithEnglishName'
import type {ClassWithReference}                                                                                                                                                                         from '../ClassWithReference'
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleEnglishName, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './PredefinedMessages.types'
import type {PredefinedMessage}                                                                                                                                                                          from './PredefinedMessage'
import type {StaticReference}                                                                                                                                                                            from '../../util/enum/Enum.types'

import {Enum}            from '../../util/enum/Enum'
import {Import}          from '../../util/DynamicImporter'
import {StringContainer} from '../../util/StringContainer'

/**
 * @recursiveReference {@link PredefinedMessageLoader}
 * @classWithDynamicImport {@link PredefinedMessageLoader}
 */
export class PredefinedMessages
    extends Enum<Ordinals, Names>
    implements ClassWithReference<PredefinedMessage>,
        ClassWithEnglishName<PossibleEnglishName> {

    //region -------------------- Enum instances --------------------

    public static readonly THANKS =         new PredefinedMessages('Thanks!',)
    public static readonly HERE_WE_GO =     new PredefinedMessages('Here we go!',)
    public static readonly NICE_WORK =      new PredefinedMessages('Nice work.',)
    public static readonly IM_DONE_FOR =    new PredefinedMessages('I\'m done for...',)
    public static readonly SORRY =          new PredefinedMessages('Sorry!',)
    public static readonly NO_WORRIES =     new PredefinedMessages('No worries!',)
    public static readonly NICE =           new PredefinedMessages('Nice!',)
    public static readonly HOW =            new PredefinedMessages('How?!',)
    public static readonly GOTCHA =         new PredefinedMessages('Gotcha.',)
    public static readonly SO_TOUGH =       new PredefinedMessages('So tough!',)
    public static readonly OOPS =           new PredefinedMessages('OOPS!',)
    public static readonly WAHOO =          new PredefinedMessages('WAHOO!',)
    public static readonly OH_NO =          new PredefinedMessages('Oh no...',)
    public static readonly WE_VE_GOT_THIS = new PredefinedMessages('We\'ve got this.',)
    public static readonly TEAMWORK =       new PredefinedMessages('Teamwork!',)
    public static readonly FOLLOW_ME =      new PredefinedMessages('Follow me.',)
    public static readonly HELP =           new PredefinedMessages('HELP!',)
    public static readonly RUN_FOR_IT =     new PredefinedMessages('Run for it!',)
    public static readonly JUUUUUMP =       new PredefinedMessages('Juuuuump!',)
    public static readonly HOP_ON =         new PredefinedMessages('Hop on!',)
    public static readonly THROW =          new PredefinedMessages('Throw!',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: PredefinedMessages

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleEnglishName, PredefinedMessage>

    #reference?: PredefinedMessage
    readonly #englishName: StringContainer<PossibleEnglishName>

    //endregion -------------------- Fields --------------------

    private constructor(englishName: PossibleEnglishName,) {
        super()
        this.#englishName = new StringContainer(englishName)
    }

    //region -------------------- Getter methods --------------------

    public static get REFERENCE_MAP(): ReadonlyMap<PossibleEnglishName, PredefinedMessage> {
        return this.#REFERENCE_MAP ??= Import.PredefinedMessageLoader.get.load()
    }

    /**
     * {@inheritDoc}
     * @semiAsynchronously
     */
    public get reference(): PredefinedMessage {
        return this.#reference ??= PredefinedMessages.REFERENCE_MAP.get(this.englishName)!
    }


    public get englishName(): PossibleEnglishName {
        return this.#englishName.get
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public static get everyEnglishNames(): readonly PossibleEnglishName[] {
        return this.values.map(enumerable => enumerable.englishName)
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): StaticReference<PredefinedMessages> {
        return PredefinedMessages
    }

    //region -------------------- Enum value methods --------------------

    protected static override _getValueByString(value: string,) {
        return this.values.find(enumerable => enumerable.englishName === value)
            ?? null
    }

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(name: S,): EnumByPossibleString<S>
    public static getValue<S extends string = string, >(name: S,): EnumByString<S>
    public static getValue<I extends PredefinedMessages = PredefinedMessages, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): PredefinedMessages
    public static getValue(value: PossibleValue,): | PredefinedMessages | null
    public static getValue(value: PossibleValue,) {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): EnumArray {
        return Enum.getValuesOn(this)
    }

    //endregion -------------------- Enum value methods --------------------

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}
