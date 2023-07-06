import type {CollectionHolder}                                       from '@joookiwi/collection'
import type {BasicCompanionEnumSingleton, PossibleEnumerableValueBy} from '@joookiwi/enumerable'
import {BasicCompanionEnum, Enum}                                    from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                 from 'core/ClassWithEnglishName'
import type {ClassWithReference}                   from 'core/ClassWithReference'
import type {Names, Ordinals, PossibleEnglishName} from 'core/predefinedMessage/PredefinedMessages.types'
import type {PredefinedMessage}                    from 'core/predefinedMessage/PredefinedMessage'
import type {Nullable}                             from 'util/types/nullable'

import {PredefinedMessageLoader} from 'core/predefinedMessage/PredefinedMessage.loader'
import {StringContainer}         from 'util/StringContainer'
import {getValueByEnglishName}   from 'util/utilitiesMethods'

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
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: BasicCompanionEnumSingleton<PredefinedMessages, typeof PredefinedMessages> = class CompanionEnum_PredefinedMessages
        extends BasicCompanionEnum<PredefinedMessages, typeof PredefinedMessages> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_PredefinedMessages

        private constructor() {
            super(PredefinedMessages,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_PredefinedMessages()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleEnglishName, PredefinedMessage>

    #reference?: PredefinedMessage
    readonly #englishName: StringContainer<PossibleEnglishName>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(englishName: PossibleEnglishName,) {
        super()
        this.#englishName = new StringContainer(englishName)
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public static get REFERENCE_MAP(): ReadonlyMap<PossibleEnglishName, PredefinedMessage> {
        return this.#REFERENCE_MAP ??= PredefinedMessageLoader.get.load()
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

    public static getValueByName(value: Nullable<| PredefinedMessages | string>,): PredefinedMessages {
        return getValueByEnglishName(value, this,)
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    public static getValue(value: PossibleEnumerableValueBy<PredefinedMessages>,): PredefinedMessages {
        return PredefinedMessages.CompanionEnum.get.getValue(value,)
    }

    public static get values(): CollectionHolder<PredefinedMessages> {
        return PredefinedMessages.CompanionEnum.get.values
    }

    public static* [Symbol.iterator](): IterableIterator<PredefinedMessages> {
        yield* PredefinedMessages.CompanionEnum.get
    }

    //endregion -------------------- Enum methods --------------------

}
