import type {CollectionHolder, EnumerableConstructor, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'
import {Enum}                                                                    from '@joookiwi/enumerable'

import type {ClassWithAcronym}                                          from 'core/ClassWithAcronym'
import type {ClassWithReference}                                        from 'core/ClassWithReference'
import type {EntityBehaviour}                                           from 'core/behaviour/EntityBehaviour'
import type {Names, Ordinals, PossibleAcronym, PossibleTranslationKeys} from 'core/behaviour/EntityBehaviours.types'
import type {ClassWithTranslationKey}                                   from 'lang/ClassWithTranslationKey'
import type {Nullable}                                                  from 'util/types/nullable'

import {Import} from 'util/DynamicImporter'

/**
 * @recursiveReference {@link EntityBehaviourLoader}
 * @classWithDynamicImport {@link EntityBehaviourLoader}
 */
export class EntityBehaviours
    extends Enum<Ordinals, Names>
    implements ClassWithReference<EntityBehaviour>,
        ClassWithTranslationKey<PossibleTranslationKeys>,
        ClassWithAcronym<PossibleAcronym> {

    //region -------------------- Enum instances --------------------

    public static readonly RESPAWN_WITH_VINE =                             new EntityBehaviours('RV',    'Respawn with Vine',)
    public static readonly RESPAWN_AS_QUESTION_MARK_BLOCK =                new EntityBehaviours('RB',    'Respawn as ? Block',)
    public static readonly ALWAYS_KNOW_VISUALLY_AMOUNT_OF_COIN =           new EntityBehaviours('AC',    'Always know visually # of Coin',)
    public static readonly NEVER_KNOW_VISUALLY_AMOUNT_OF_COIN =            new EntityBehaviours('NC',    'Never know visually # of Coin',)
    public static readonly ONLY_1ST_SOUND_OF_PINK_COIN =                   new EntityBehaviours('O1S',   'Only 1st sound of Pink Coin',)

    public static readonly SPAWN_ONLY_1_POWER_UP =                         new EntityBehaviours('S1P',   'Spawn only 1 power-up',)
    public static readonly SPAWN_1_TO_4_POWER_UPS_FROM_AMOUNT_OF_PLAYERS = new EntityBehaviours('S1-4P', 'Spawn (1-4) power-up(s) from # of players',)
    public static readonly EXPELLED_POWER_UP_FROM_BLOCK =                  new EntityBehaviours('EPB',   'Expelled power-up from Block',)
    public static readonly ALWAYS_FINAL_POWER_UP =                         new EntityBehaviours('AFP',   'Always final power-up',)

    public static readonly RESPAWN_AFTER_10_SEC =                          new EntityBehaviours('R10',   'Respawn after 10 sec.',)
    public static readonly CAN_RESPAWN_AT_CP =                             new EntityBehaviours('CRCP',  'Can respawn at CP',)
    public static readonly RESPAWN_IN_BLOCK_IF_PLAYER_DIE =                new EntityBehaviours('RBD',   'Respawn in Block (if player die)',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: EntityBehaviours

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleTranslationKeys, EntityBehaviour>

    #reference?: EntityBehaviour
    readonly #acronym
    readonly #translationKey

    //endregion -------------------- Fields --------------------

    private constructor(acronym: PossibleAcronym, translationKey: PossibleTranslationKeys,) {
        super()
        this.#acronym = acronym
        this.#translationKey = translationKey
    }

    //region -------------------- Getter methods --------------------

    public static get REFERENCE_MAP() {
        return this.#REFERENCE_MAP ??= Import.EntityBehaviourLoader.get.load()
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

    public static get everyAcronyms(): readonly PossibleAcronym[] {
        return this.values.map(it => it.acronym).toArray()
    }

    public static get everyTranslationKeys(): readonly PossibleTranslationKeys[] {
        return this.values.map(it => it.translationKey).toArray()
    }


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

    protected override get _static(): EnumerableConstructor<Ordinals, Names> {
        return EntityBehaviours
    }

    public static getValue(value: PossibleValueByEnumerable<EntityBehaviours>,): EntityBehaviours {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<EntityBehaviours> {
        return Enum.getValuesOn(this)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}
