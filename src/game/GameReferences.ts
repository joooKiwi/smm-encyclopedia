import type {PossibleSoundEffectsEnglishNameGames}                                                                                                                                                       from '../entity/soundEffect/simple/SoundEffects.types';
import type {ClassWithEnglishName}                                                                                                                                                                       from '../entity/ClassWithEnglishName';
import type {GameReferencesArray, GameReferencesNames, GameReferencesOrdinals, PossibleExclusiveGameReferencesEnglishName, PossibleExternalGameReferencesEnglishName, PossibleGameReferencesEnglishName} from './GameReferences.types';
import type {ObjectHolder}                                                                                                                                                                               from '../util/holder/ObjectHolder';

import {DelayedObjectHolderContainer} from '../util/holder/DelayedObjectHolderContainer';
import {Enum}                         from '../util/enum/Enum';
import {Games}                        from '../entity/game/Games';
import {GameStyles}                   from '../entity/gameStyle/GameStyles';
import {SoundEffects}                 from '../entity/soundEffect/simple/SoundEffects';

export class GameReferences
    extends Enum<GameReferencesOrdinals, GameReferencesNames>
    implements ClassWithEnglishName<PossibleGameReferencesEnglishName> {

    //region -------------------- Enum instances --------------------


    public static readonly SUPER_MARIO_BROS =       new GameReferences(GameStyles.SUPER_MARIO_BROS,                                                                    );
    public static readonly SUPER_MARIO_BROS_2 =     new GameReferences('Super Mario Bros. 2',                                                               );
    public static readonly SUPER_MARIO_BROS_3 =     new GameReferences(GameStyles.SUPER_MARIO_BROS_3,                                                                  );

    public static readonly SUPER_MARIO_KART =       new GameReferences(SoundEffects.SUPER_MARIO_KART as ClassWithEnglishName<PossibleSoundEffectsEnglishNameGames>,    );

    public static readonly SUPER_MARIO_LAND =       new GameReferences('Super Mario Land',                                                                  );

    public static readonly SUPER_MARIO_64 =         new GameReferences(SoundEffects.SUPER_MARIO_64 as ClassWithEnglishName<PossibleSoundEffectsEnglishNameGames>,      );

    public static readonly SUPER_MARIO_SUNSHINE =   new GameReferences(SoundEffects.SUPER_MARIO_SUNSHINE as ClassWithEnglishName<PossibleSoundEffectsEnglishNameGames>,);

    public static readonly SUPER_MARIO_GALAXY =     new GameReferences(SoundEffects.SUPER_MARIO_GALAXY as ClassWithEnglishName<PossibleSoundEffectsEnglishNameGames>,  );

    public static readonly NEW_SUPER_MARIO_BROS_U = new GameReferences(GameStyles.NEW_SUPER_MARIO_BROS_U,                                                              );

    public static readonly SUPER_MARIO_3D_WORLD =   new GameReferences(GameStyles.SUPER_MARIO_3D_WORLD,                                                                );

    public static readonly SUPER_MARIO_MAKER_1 =    new GameReferences(Games.SUPER_MARIO_MAKER_1,                                                                      );
    public static readonly SUPER_MARIO_MAKER_2 =    new GameReferences(Games.SUPER_MARIO_MAKER_2,                                                                      );

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static #VALUES?: GameReferencesArray;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    readonly #englishNameHolder: ObjectHolder<PossibleGameReferencesEnglishName>;

    //endregion -------------------- Attributes --------------------

    private constructor(reference: ClassWithEnglishName<PossibleExternalGameReferencesEnglishName>,)
    private constructor(englishName: PossibleExclusiveGameReferencesEnglishName,)
    private constructor(englishNameOrReferenceCallback: PossibleExclusiveGameReferencesEnglishName | ClassWithEnglishName<PossibleExternalGameReferencesEnglishName>,) {
        super(GameReferences);
        this.#englishNameHolder = new DelayedObjectHolderContainer(() => typeof englishNameOrReferenceCallback == 'string' ? englishNameOrReferenceCallback : englishNameOrReferenceCallback.englishName);
    }


    public get englishName(): PossibleGameReferencesEnglishName {
        return this.#englishNameHolder.get;
    }

    //region -------------------- Enum methods --------------------

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends GameReferencesOrdinals = GameReferencesOrdinals, >(ordinal: O,): GameReferencesArray[O]
    public static getValue<O extends number = number, >(ordinal: O,): | NonNullable<GameReferencesArray[O]> | null
    public static getValue(name: GameReferencesNames,): GameReferences
    public static getValue(name: string,): | GameReferences | null
    public static getValue<I extends GameReferences = GameReferences, >(instance: I,): I
    public static getValue(value: | GameReferences | string | number | null | undefined,): | GameReferences | null
    public static getValue(value: | GameReferences | string | number | null | undefined,): | GameReferences | null {
        return value == null
            ? null
            : typeof value === 'string'
                ? Reflect.get(this, value.toUpperCase(),)
                    ?? this.values.find(gameReference => gameReference.englishName === value)
                    ?? null
                : typeof value === 'number'
                    ? this.values[value] ?? null
                    : value;
    }

    public static get values(): GameReferencesArray {
        return this.#VALUES ??= [
            this.SUPER_MARIO_BROS, this.SUPER_MARIO_BROS_2, this.SUPER_MARIO_BROS_3,
            this.SUPER_MARIO_KART,
            this.SUPER_MARIO_LAND,
            this.SUPER_MARIO_64,
            this.SUPER_MARIO_SUNSHINE,
            this.SUPER_MARIO_GALAXY,
            this.NEW_SUPER_MARIO_BROS_U, this.SUPER_MARIO_3D_WORLD,
            this.SUPER_MARIO_MAKER_1, this.SUPER_MARIO_MAKER_2,
        ];
    }


    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}
