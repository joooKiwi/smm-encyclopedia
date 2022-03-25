import type {ClassWithEnglishName}                                                                                                                                                                       from '../ClassWithEnglishName';
import type {ClassWithReference}                                                                                                                                                                         from '../ClassWithReference';
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleEnglishName, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './PredefinedMessages.types';
import type {PredefinedMessage}                                                                                                                                                                          from './PredefinedMessage';
import type {StaticReference}                                                                                                                                                                            from '../../util/enum/Enum.types';

import {Enum}            from '../../util/enum/Enum';
import {Import}          from '../../util/DynamicImporter';
import {StringContainer} from '../../util/StringContainer';

/**
 * @recursiveReference {@link PredefinedMessageLoader}
 * @classWithDynamicImport {@link PredefinedMessageLoader}
 */
export class PredefinedMessages
    extends Enum<Ordinals, Names>
    implements ClassWithReference<PredefinedMessage>,
        ClassWithEnglishName<PossibleEnglishName> {

    //region -------------------- Enum instances --------------------

    public static/* readonly*/ THANKS;
    public static/* readonly*/ HERE_WE_GO;
    public static/* readonly*/ NICE_WORK;
    public static/* readonly*/ IM_DONE_FOR;
    public static/* readonly*/ SORRY;
    public static/* readonly*/ NO_WORRIES;
    public static/* readonly*/ NICE;
    public static/* readonly*/ HOW;
    public static/* readonly*/ GOTCHA;
    public static/* readonly*/ SO_TOUGH;
    public static/* readonly*/ OOPS;
    public static/* readonly*/ WAHOO;
    public static/* readonly*/ OH_NO;
    public static/* readonly*/ WE_VE_GOT_THIS;
    public static/* readonly*/ TEAMWORK;
    public static/* readonly*/ FOLLOW_ME;
    public static/* readonly*/ HELP;
    public static/* readonly*/ RUN_FOR_IT;
    public static/* readonly*/ JUUUUUMP;
    public static/* readonly*/ HOP_ON;
    public static/* readonly*/ THROW;

    static {
        this.THANKS =         new PredefinedMessages('Thanks!',);
        this.HERE_WE_GO =     new PredefinedMessages('Here we go!',);
        this.NICE_WORK =      new PredefinedMessages('Nice work.',);
        this.IM_DONE_FOR =    new PredefinedMessages('I\'m done for...',);
        this.SORRY =          new PredefinedMessages('Sorry!',);
        this.NO_WORRIES =     new PredefinedMessages('No worries!',);
        this.NICE =           new PredefinedMessages('Nice!',);
        this.HOW =            new PredefinedMessages('How?!',);
        this.GOTCHA =         new PredefinedMessages('Gotcha.',);
        this.SO_TOUGH =       new PredefinedMessages('So tough!',);
        this.OOPS =           new PredefinedMessages('OOPS!',);
        this.WAHOO =          new PredefinedMessages('WAHOO!',);
        this.OH_NO =          new PredefinedMessages('Oh no...',);
        this.WE_VE_GOT_THIS = new PredefinedMessages('We\'ve got this.',);
        this.TEAMWORK =       new PredefinedMessages('Teamwork!',);
        this.FOLLOW_ME =      new PredefinedMessages('Follow me.',);
        this.HELP =           new PredefinedMessages('HELP!',);
        this.RUN_FOR_IT =     new PredefinedMessages('Run for it!',);
        this.JUUUUUMP =       new PredefinedMessages('Juuuuump!',);
        this.HOP_ON =         new PredefinedMessages('Hop on!',);
        this.THROW =          new PredefinedMessages('Throw!',);
    }

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static [index: number]: PredefinedMessages;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleEnglishName, PredefinedMessage>;

    #reference?: PredefinedMessage;
    readonly #englishName: StringContainer<PossibleEnglishName>;

    //endregion -------------------- Attributes --------------------

    private constructor(englishName: PossibleEnglishName,) {
        super();
        this.#englishName = new StringContainer(englishName);
    }

    //region -------------------- Getter methods --------------------

    public static get REFERENCE_MAP(): ReadonlyMap<PossibleEnglishName, PredefinedMessage> {
        return this.#REFERENCE_MAP ??= Import.PredefinedMessageLoader.get.load();
    }

    /**
     * {@inheritDoc}
     * @semiAsynchronously
     */
    public get reference(): PredefinedMessage {
        return this.#reference ??= PredefinedMessages.REFERENCE_MAP.get(this.englishName)!;
    }


    public get englishName(): PossibleEnglishName {
        return this.#englishName.get;
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public static get everyEnglishNames(): readonly PossibleEnglishName[] {
        return this.values.map(enumerable => enumerable.englishName);
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected get _static(): StaticReference<PredefinedMessages> {
        return PredefinedMessages;
    }

    //region -------------------- Enum value methods --------------------

    protected static _getValueByString(value: string,) {
        return this.values.find(enumerable => enumerable.englishName === value)
            ?? null;
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
        return Enum.getValueOn(this, value,);
    }

    public static get values(): EnumArray {
        return Enum.getValuesOn(this);
    }

    //endregion -------------------- Enum value methods --------------------

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}
