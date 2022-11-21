import type {CollectionHolder, EnumerableConstructor, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'
import {Enum}                                                                    from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                 from '../ClassWithEnglishName'
import type {ClassWithReference}                   from '../ClassWithReference'
import type {Names, Ordinals, PossibleEnglishName} from './PredefinedMessages.types'
import type {PredefinedMessage}                    from './PredefinedMessage'

import {getValueByEnglishName} from '../../util/utilitiesMethods'
import {Import}                from '../../util/DynamicImporter'
import {StringContainer}       from '../../util/StringContainer'

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
        return this.values.map(it => it.englishName).toArray()
    }


    // public static getValueByName<T extends string, >(value: | PredefinedMessages | T | null | undefined,): PredefinedMessagesByName<T>
    public static getValueByName(value: | PredefinedMessages | string | null | undefined,): PredefinedMessages {
        return getValueByEnglishName(value, this,)
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): EnumerableConstructor<Ordinals, Names> {
        return PredefinedMessages
    }

    public static getValue(value: PossibleValueByEnumerable<PredefinedMessages>,): PredefinedMessages {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<PredefinedMessages> {
        return Enum.getValuesOn(this)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}
