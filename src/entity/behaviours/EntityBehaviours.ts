import type {ClassWithAcronym}                                                                                                                                 from '../ClassWithAcronym';
import type {ClassWithTranslationKey}                                                                                                                          from '../../lang/ClassWithTranslationKey';
import type {EntityBehavioursNames, EntityBehavioursOrdinals, EntityMultiplayerArray, PossibleAcronymEntityBehaviours, PossibleTranslationKeyEntityBehaviours} from './EntityBehaviours.types';

import {Enum}                  from '../../util/enum/Enum';
import {EntityBehaviour}       from './EntityBehaviour';
import {ClassWithReference}    from '../ClassWithReference';
import {EntityBehaviourLoader} from './EntityBehaviourLoader';

/**
 * @recursiveReference<{@link EntityBehaviourLoader}>
 */
export class EntityBehaviours
    extends Enum<EntityBehavioursOrdinals, EntityBehavioursNames>
    implements ClassWithReference<EntityBehaviour>,
        ClassWithTranslationKey<PossibleTranslationKeyEntityBehaviours>,
        ClassWithAcronym<PossibleAcronymEntityBehaviours> {

    //region -------------------- Enum instances --------------------

    public static readonly RESPAWN_WITH_VINE =                             new EntityBehaviours('RV',    'Respawn with Vine',                        );
    public static readonly RESPAWN_AS_QUESTION_MARK_BLOCK =                new EntityBehaviours('RB',    'Respawn as ? Block',                       );
    public static readonly ALWAYS_KNOW_VISUALLY_AMOUNT_OF_COIN =           new EntityBehaviours('AC',    'Always know visually # of Coin',           );
    public static readonly NEVER_KNOW_VISUALLY_AMOUNT_OF_COIN =            new EntityBehaviours('NC',    'Never know visually # of Coin',            );
    public static readonly ONLY_1ST_SOUND_OF_PINK_COIN =                   new EntityBehaviours('O1S',   'Only 1st sound of Pink Coin',              );

    public static readonly SPAWN_ONLY_1_POWER_UP =                         new EntityBehaviours('S1P',   'Spawn only 1 power-up',                    );
    public static readonly SPAWN_1_TO_4_POWER_UPS_FROM_AMOUNT_OF_PLAYERS = new EntityBehaviours('S1-4P', 'Spawn (1-4) power-up(s) from # of players',);
    public static readonly EXPELLED_POWER_UP_FROM_BLOCK =                  new EntityBehaviours('EPB',   'Expelled power-up from Block',             );
    public static readonly ALWAYS_FINAL_POWER_UP =                         new EntityBehaviours('AFP',   'Always final power-up',                    );

    public static readonly RESPAWN_AFTER_10_SEC =                          new EntityBehaviours('R10',   'Respawn after 10 sec.',                    );
    public static readonly CAN_RESPAWN_AT_CP =                             new EntityBehaviours('CRCP',  'Can respawn at CP',                        );
    public static readonly RESPAWN_IN_BLOCK_IF_PLAYER_DIE =                new EntityBehaviours('RBD',   'Respawn in Block (if player die)',         );

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static #VALUES: EntityMultiplayerArray;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    #reference?: EntityBehaviour;
    readonly #acronym;
    readonly #translationKey;

    //endregion -------------------- Attributes --------------------

    private constructor(acronym: PossibleAcronymEntityBehaviours, translationKey: PossibleTranslationKeyEntityBehaviours,) {
        super(EntityBehaviours);
        this.#acronym = acronym;
        this.#translationKey = translationKey;
    }

    //region -------------------- Getter methods --------------------

    public get reference(): EntityBehaviour {
        return this.#reference ??= EntityBehaviourLoader.get.load().get(this.translationKey)!;
    }


    public get translationKey(): PossibleTranslationKeyEntityBehaviours {
        return this.#translationKey;
    }

    public get acronym(): PossibleAcronymEntityBehaviours {
        return this.#acronym;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public static get everyAcronyms(): readonly PossibleAcronymEntityBehaviours[] {
        return this.values.map(limit => limit.acronym);
    }

    public static get everyTranslationKeys(): readonly PossibleTranslationKeyEntityBehaviours[] {
        return this.values.map(limit => limit.translationKey);
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends EntityBehavioursOrdinals = EntityBehavioursOrdinals, >(ordinal: O,): EntityMultiplayerArray[O]
    public static getValue<O extends number = number, >(ordinal: O,): | NonNullable<EntityMultiplayerArray[O]> | null
    public static getValue(name: | EntityBehavioursNames | PossibleTranslationKeyEntityBehaviours | PossibleAcronymEntityBehaviours,): EntityBehaviours
    public static getValue(name: string,): | EntityBehaviours | null
    public static getValue<I extends EntityBehaviours = EntityBehaviours, >(instance: I,): I
    public static getValue(value: | EntityBehaviours | string | number | null | undefined,): | EntityBehaviours | null
    public static getValue(value: | EntityBehaviours | string | number | null | undefined,): | EntityBehaviours | null {
        return value == null
            ? null
            : typeof value === 'string'
                ? Reflect.get(this, value.toUpperCase(),)
                    ?? this.values.find(theme => theme.translationKey === value)
                    ?? this.values.find(theme => theme.acronym === value)
                    ?? null
                : typeof value === 'number'
                    ? this.values[value] ?? null
                    : value;
    }

    public static get values(): EntityMultiplayerArray {
        return this.#VALUES ??= [
            this.RESPAWN_WITH_VINE,
            this.RESPAWN_AS_QUESTION_MARK_BLOCK,
            this.ALWAYS_KNOW_VISUALLY_AMOUNT_OF_COIN,
            this.NEVER_KNOW_VISUALLY_AMOUNT_OF_COIN,
            this.ONLY_1ST_SOUND_OF_PINK_COIN,

            this.SPAWN_ONLY_1_POWER_UP,
            this.SPAWN_1_TO_4_POWER_UPS_FROM_AMOUNT_OF_PLAYERS,
            this.EXPELLED_POWER_UP_FROM_BLOCK,
            this.ALWAYS_FINAL_POWER_UP,

            this.RESPAWN_AFTER_10_SEC,
            this.CAN_RESPAWN_AT_CP,
            this.RESPAWN_IN_BLOCK_IF_PLAYER_DIE,
        ];
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}
