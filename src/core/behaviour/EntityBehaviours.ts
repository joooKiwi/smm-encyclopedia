import type {BasicCompanionEnumDeclaration, CollectionHolder, PossibleEnumerableValueBy, Singleton} from '@joookiwi/enumerable/dist/types'
import {BasicCompanionEnum, Enum}                                                                   from '@joookiwi/enumerable'

import type {ClassWithAcronym}                                          from 'core/ClassWithAcronym'
import type {ClassWithReference}                                        from 'core/ClassWithReference'
import type {EntityBehaviour}                                           from 'core/behaviour/EntityBehaviour'
import type {Names, Ordinals, PossibleAcronym, PossibleTranslationKeys} from 'core/behaviour/EntityBehaviours.types'
import type {ClassWithTranslationKey}                                   from 'lang/ClassWithTranslationKey'
import type {Nullable}                                                  from 'util/types/nullable'

import {EntityBehaviourLoader} from 'core/behaviour/EntityBehaviour.loader'

export class EntityBehaviours
    extends Enum<Ordinals, Names>
    implements ClassWithReference<EntityBehaviour>,
        ClassWithTranslationKey<PossibleTranslationKeys>,
        ClassWithAcronym<PossibleAcronym> {

    //region -------------------- Enum instances --------------------

    public static readonly RESPAWN_WITH_VINE =                             new EntityBehaviours('RV',    'Respawn with Vine',)
    public static readonly RESPAWN_AS_QUESTION_MARK_BLOCK =                new EntityBehaviours('RB',    'Respawn as ? Block',)
    public static readonly ALWAYS_KNOW_VISUALLY_AMOUNT_OF_COIN =           new EntityBehaviours('AC',    'Always know visually # of Coins',)
    public static readonly NEVER_KNOW_VISUALLY_AMOUNT_OF_COIN =            new EntityBehaviours('NC',    'Never know visually # of Coins',)
    public static readonly ONLY_1ST_SOUND_OF_PINK_COIN =                   new EntityBehaviours('O1S',   'Only 1st sound of Pink Coin',)

    public static readonly SPAWN_ONLY_1_POWER_UP =                         new EntityBehaviours('S1P',   'Spawn only 1 power-up',)
    public static readonly SPAWN_1_TO_4_POWER_UPS_FROM_AMOUNT_OF_PLAYERS = new EntityBehaviours('S1-4P', 'Spawn (1-4) power-up(s) from # of players',)
    public static readonly EXPELLED_POWER_UP_FROM_BLOCK =                  new EntityBehaviours('EPB',   'Expelled power-up from Block',)
    public static readonly ALWAYS_FINAL_POWER_UP =                         new EntityBehaviours('AFP',   'Always final power-up',)

    public static readonly RESPAWN_AFTER_10_SEC =                          new EntityBehaviours('R10',   'Respawn after 10 sec.',)
    public static readonly CAN_RESPAWN_AT_CP =                             new EntityBehaviours('CRCP',  'Can respawn at CP',)
    public static readonly RESPAWN_IN_BLOCK_IF_PLAYER_DIE =                new EntityBehaviours('RBD',   'Respawn in Block (if player die)',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: Singleton<BasicCompanionEnumDeclaration<EntityBehaviours, typeof EntityBehaviours>> = class CompanionEnum_EntityBehaviours
        extends BasicCompanionEnum<EntityBehaviours, typeof EntityBehaviours> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_EntityBehaviours

        private constructor() {
            super(EntityBehaviours,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_EntityBehaviours()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleTranslationKeys, EntityBehaviour>

    #reference?: EntityBehaviour
    readonly #acronym
    readonly #translationKey

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(acronym: PossibleAcronym, translationKey: PossibleTranslationKeys,) {
        super()
        this.#acronym = acronym
        this.#translationKey = translationKey
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public static get REFERENCE_MAP() {
        return this.#REFERENCE_MAP ??= EntityBehaviourLoader.get.load()
    }

    /**
     * {@inheritDoc}
     * @semiAsynchronously
     */
    public get reference(): EntityBehaviour {
        return this.#reference ??= EntityBehaviours.REFERENCE_MAP.get(this.translationKey)!
    }


    public get translationKey(): PossibleTranslationKeys {
        return this.#translationKey
    }

    public get acronym(): PossibleAcronym {
        return this.#acronym
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public static getValueByAcronymOrTranslationKey(value: Nullable<| EntityBehaviours | string>,): EntityBehaviours {
        if (value == null)
            throw new TypeError(`No "${this.name}" could be found by a null value`)
        if (value instanceof this)
            return value
        const valueFound = this.values.find(it => it.acronym === value
            || it.translationKey === value)
        if (valueFound == null)
            throw new ReferenceError(`No "${this.name}" could be found by this value "${value}".`)
        return valueFound
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    public static getValue(value: PossibleEnumerableValueBy<EntityBehaviours>,): EntityBehaviours {
        return EntityBehaviours.CompanionEnum.get.getValue(value,)
    }

    public static get values(): CollectionHolder<EntityBehaviours> {
        return EntityBehaviours.CompanionEnum.get.values
    }

    public static* [Symbol.iterator](): IterableIterator<EntityBehaviours> {
        yield* EntityBehaviours.CompanionEnum.get
    }

    //endregion -------------------- Enum methods --------------------

}
