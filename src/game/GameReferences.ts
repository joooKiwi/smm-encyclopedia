import type {PossibleEnglishName_Games}                                                                                                                                                from '../entity/soundEffect/simple/SoundEffects.types';
import type {ClassWithEnglishName}                                                                                                                                                     from '../entity/ClassWithEnglishName';
import type {EnumArray, Names, Ordinals, PossibleEnglishName, PossibleExclusiveEnglishName, PossibleExternalEnglishName, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './GameReferences.types';
import type {ObjectHolder}                                                                                                                                                             from '../util/holder/ObjectHolder';

import {DelayedObjectHolderContainer} from '../util/holder/DelayedObjectHolderContainer';
import {Enum}                         from '../util/enum/Enum';
import {Games}                        from '../entity/game/Games';
import {GameStyles}                   from '../entity/gameStyle/GameStyles';
import {SoundEffects}                 from '../entity/soundEffect/simple/SoundEffects';

export class GameReferences
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName> {

    //region -------------------- Enum instances --------------------

    public static readonly SUPER_MARIO_BROS =       new GameReferences(GameStyles.SUPER_MARIO_BROS,                                                                    );
    public static readonly SUPER_MARIO_BROS_2 =     new GameReferences('Super Mario Bros. 2',                                                               );
    public static readonly SUPER_MARIO_BROS_3 =     new GameReferences(GameStyles.SUPER_MARIO_BROS_3,                                                                  );

    public static readonly SUPER_MARIO_KART =       new GameReferences(SoundEffects.SUPER_MARIO_KART as ClassWithEnglishName<PossibleEnglishName_Games>,    );

    public static readonly SUPER_MARIO_LAND =       new GameReferences('Super Mario Land',                                                                  );

    public static readonly SUPER_MARIO_64 =         new GameReferences(SoundEffects.SUPER_MARIO_64 as ClassWithEnglishName<PossibleEnglishName_Games>,      );

    public static readonly SUPER_MARIO_SUNSHINE =   new GameReferences(SoundEffects.SUPER_MARIO_SUNSHINE as ClassWithEnglishName<PossibleEnglishName_Games>,);

    public static readonly SUPER_MARIO_GALAXY =     new GameReferences(SoundEffects.SUPER_MARIO_GALAXY as ClassWithEnglishName<PossibleEnglishName_Games>,  );

    public static readonly NEW_SUPER_MARIO_BROS_U = new GameReferences(GameStyles.NEW_SUPER_MARIO_BROS_U,                                                              );

    public static readonly SUPER_MARIO_3D_WORLD =   new GameReferences(GameStyles.SUPER_MARIO_3D_WORLD,                                                                );

    public static readonly SUPER_MARIO_MAKER_1 =    new GameReferences(Games.SUPER_MARIO_MAKER_1,                                                                      );
    public static readonly SUPER_MARIO_MAKER_2 =    new GameReferences(Games.SUPER_MARIO_MAKER_2,                                                                      );

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static #VALUES?: EnumArray;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    readonly #englishNameHolder: ObjectHolder<PossibleEnglishName>;

    //endregion -------------------- Attributes --------------------

    private constructor(reference: ClassWithEnglishName<PossibleExternalEnglishName>,)
    private constructor(englishName: PossibleExclusiveEnglishName,)
    private constructor(englishNameOrReferenceCallback: PossibleExclusiveEnglishName | ClassWithEnglishName<PossibleExternalEnglishName>,) {
        super(GameReferences);
        this.#englishNameHolder = new DelayedObjectHolderContainer(() => typeof englishNameOrReferenceCallback == 'string' ? englishNameOrReferenceCallback : englishNameOrReferenceCallback.englishName);
    }


    public get englishName(): PossibleEnglishName {
        return this.#englishNameHolder.get;
    }

    //region -------------------- Enum methods --------------------

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumArray[O]
    public static getValue<O extends number = number, >(ordinal: O,): | NonNullable<EnumArray[O]> | null
    public static getValue<N extends Names = Names, >(name: N,): typeof GameReferences[N]
    public static getValue(name: PossibleStringValue,): GameReferences
    public static getValue(name: string,): | GameReferences | null
    public static getValue<I extends GameReferences = GameReferences, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): GameReferences
    public static getValue(value: PossibleValue,): | GameReferences | null
    public static getValue(value: PossibleValue,) {
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

    public static get values(): EnumArray {
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
