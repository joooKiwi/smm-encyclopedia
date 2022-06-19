import type {ClassWithAcronym}                                                                                                                                                                                            from '../ClassWithAcronym';
import type {ClassWithEnglishName}                                                                                                                                                                                        from '../ClassWithEnglishName';
import type {ClassWithReference}                                                                                                                                                                                          from '../ClassWithReference';
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleAcronym, PossibleEnglishName, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './GameReferences.types';
import type {GameReference}                                                                                                                                                                                               from './GameReference';
import type {StaticReference}                                                                                                                                                                                             from '../../util/enum/Enum.types';

import {Enum}            from '../../util/enum/Enum';
import {Import}          from '../../util/DynamicImporter';
import {StringContainer} from '../../util/StringContainer';

/**
 * @recursiveReference {@link GameReferenceLoader}
 * @classWithDynamicImport {@link GameReferenceLoader}
 */
export class GameReferences
    extends Enum<Ordinals, Names>
    implements ClassWithReference<GameReference>,
        ClassWithAcronym<PossibleAcronym>,
        ClassWithEnglishName<PossibleEnglishName> {

    //region -------------------- Enum instances --------------------

    public static/* readonly*/ SUPER_MARIO_MAKER_1
    public static/* readonly*/ SUPER_MARIO_MAKER_FOR_NINTENDO_3DS
    public static/* readonly*/ SUPER_MARIO_MAKER_2

    public static/* readonly*/ SUPER_MARIO_BROS
    public static/* readonly*/ SUPER_MARIO_BROS_3
    public static/* readonly*/ SUPER_MARIO_WORLD
    public static/* readonly*/ NEW_SUPER_MARIO_BROS_U
    public static/* readonly*/ SUPER_MARIO_3D_WORLD

    public static/* readonly*/ SUPER_MARIO_KART
    public static/* readonly*/ SUPER_MARIO_64
    public static/* readonly*/ SUPER_MARIO_SUNSHINE
    public static/* readonly*/ SUPER_MARIO_GALAXY


    public static/* readonly*/ MARIO_BROS
    public static/* readonly*/ SUPER_MARIO_BROS_2
    public static/* readonly*/ SUPER_MARIO_WORLD_2_YOSHI_ISLAND
    public static/* readonly*/ SUPER_MARIO_LAND
    public static/* readonly*/ WARIO_LAND_SUPER_MARIO_LAND_3
    public static/* readonly*/ MARIO_TENNIS
    public static/* readonly*/ DR_MARIO
    public static/* readonly*/ DR_MARIO_64
    public static/* readonly*/ LUIGI_MANSION
    public static/* readonly*/ YOSHI_WOOLLY_WORLD
    public static/* readonly*/ CAPTAIN_TOAD_TREASURE_TRACKER
    public static/* readonly*/ WARIOWARE_TOUCHED
    public static/* readonly*/ MARIO_AND_LUIGI_PAPER_JAM

    public static/* readonly*/ DONKEY_KONG
    public static/* readonly*/ DONKEY_KONG_JR
    public static/* readonly*/ DONKEY_KONG_COUNTRY

    public static/* readonly*/ KIRBY_DREAM_LAND
    public static/* readonly*/ KIRBY_ADVENTURE

    public static/* readonly*/ KID_ICARIUS
    public static/* readonly*/ KID_ICARIUS_UPRISING

    public static/* readonly*/ MEGA_MAN

    public static/* readonly*/ METROID
    public static/* readonly*/ METROID_ZERO_MISSION

    public static/* readonly*/ NINTENDO_ENTERTAINMENT_SYSTEM_ROB

    public static/* readonly*/ FIRE_EMBLEM_SHADOW_DRAGON
    public static/* readonly*/ FIRE_EMBLEM_RADIANT_DAWN
    public static/* readonly*/ FIRE_EMBLEM_AWAKENING

    public static/* readonly*/ POKEMON_RED
    public static/* readonly*/ POKEMON_GREEN
    public static/* readonly*/ POKEMON_BLUE
    public static/* readonly*/ POKEMON_YELLOW
    public static/* readonly*/ POKEMON_DIAMOND
    public static/* readonly*/ POKEMON_PEARL
    public static/* readonly*/ POKEMON_X
    public static/* readonly*/ POKEMON_Y

    public static/* readonly*/ PIKMIN
    public static/* readonly*/ PIKMIN_3

    public static/* readonly*/ THE_LEGEND_OF_ZELDA
    public static/* readonly*/ ZELDA_II_THE_ADVENTURE_OF_LINK
    public static/* readonly*/ THE_LEGEND_OF_ZELDA_A_LINK_TO_THE_PAST
    public static/* readonly*/ THE_LEGEND_OF_ZELDA_OCARINA_OF_TIME
    public static/* readonly*/ THE_LEGEND_OF_ZELDA_MAJORA_MASK
    public static/* readonly*/ THE_LEGEND_OF_ZELDA_THE_WIND_WAKER
    public static/* readonly*/ THE_LEGEND_OF_ZELDA_TWILIGHT_PRINCESS
    public static/* readonly*/ THE_LEGEND_OF_ZELDA_TRI_FORCE_HEROES

    public static/* readonly*/ XENOBLADE_CHRONICLES

    public static/* readonly*/ EARTHBOUND
    public static/* readonly*/ MOTHER3

    public static/* readonly*/ SPLATOON

    public static/* readonly*/ WII_FIT

    public static/* readonly*/ CHIBI_ROBO

    public static/* readonly*/ ANIMAL_CROSSING
    public static/* readonly*/ ANIMAL_CROSSING_WILD_WORLD
    public static/* readonly*/ ANIMAL_CROSSING_CITY_FOLK
    public static/* readonly*/ ANIMAL_CROSSING_NEW_LEAF
    public static/* readonly*/ ANIMAL_CROSSING_HAPPY_HOME_DESIGNER

    public static/* readonly*/ F_ZERO

    public static/* readonly*/ GAME_AND_WATCH

    public static/* readonly*/ SONIC_THE_HEDGEHOG

    public static/* readonly*/ DUCK_HUNT

    public static/* readonly*/ PAC_MAN

    public static/* readonly*/ WRECKING_CREW

    public static/* readonly*/ PUNCH_OUT

    public static/* readonly*/ STAR_FOX
    public static/* readonly*/ STAR_FOX_ZERO

    public static/* readonly*/ YAKUMAN_HO_O

    public static/* readonly*/ BIG_BRAIN_ACADEMY

    public static/* readonly*/ SWAPNOTE
    public static/* readonly*/ NINTENDO_BADGE_ARCADE
    public static/* readonly*/ MONSTER_MANOR

    public static/* readonly*/ GAMECENTER_CX
    public static/* readonly*/ CORO_COR0_COMIC
    public static/* readonly*/ FAMITSU
    public static/* readonly*/ MERCENDES_BENZ
    public static/* readonly*/ FAMICOM_DISK_SYSTEM
    public static/* readonly*/ BABYMETAL

    public static/* readonly*/ MONSTER_HUNTER

    public static/* readonly*/ EXCITEBIKE

    public static/* readonly*/ NISEKOI

    public static/* readonly*/ JAM_WITH_THE_BAND

    public static/* readonly*/ DAIGASSO_BAND_BROS_P

    public static/* readonly*/ THE_LEGENDARY_STARFY

    public static/* readonly*/ BALLOON_FIGHT

    public static/* readonly*/ SHIN_ONIGASHIMA

    public static/* readonly*/ FAMICOM_DETECTIVE_CLUB_PART_II

    public static/* readonly*/ PUSHMO

    public static/* readonly*/ CLU_CLU_LAND

    public static/* readonly*/ VOLLEYBALL

    public static/* readonly*/ ICE_CLIMBER

    public static/* readonly*/ HELLO_KITTY
    public static/* readonly*/ MY_MELODY
    public static/* readonly*/ SHAUN_THE_SHEEP

    public static/* readonly*/ BRAIN_AGE_TRAIN_YOUR_BRAIN_IN_MINUTES_A_DAY

    static {
        this.SUPER_MARIO_MAKER_1 =                         new GameReferences('SMM',      'Super Mario Maker',);
        this.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS =          new GameReferences('SMM3DS',   'Super Mario Maker for Nintendo 3DS',);
        this.SUPER_MARIO_MAKER_2 =                         new GameReferences('SMM2',     'Super Mario Maker 2',);

        this.SUPER_MARIO_BROS =                            new GameReferences('SMB',      'Super Mario Bros.',);
        this.SUPER_MARIO_BROS_3 =                          new GameReferences('SMB3',     'Super Mario Bros. 3',);
        this.SUPER_MARIO_WORLD =                           new GameReferences('SMW',      'Super Mario World',);
        this.NEW_SUPER_MARIO_BROS_U =                      new GameReferences('NSMBU',    'New Super Mario Bros. U',);
        this.SUPER_MARIO_3D_WORLD =                        new GameReferences('SM3DW',    'Super Mario 3D World',);

        this.SUPER_MARIO_KART =                            new GameReferences('SMK',      'Super Mario Kart',);
        this.SUPER_MARIO_64 =                              new GameReferences('SM64',     'Super Mario 64');
        this.SUPER_MARIO_SUNSHINE =                        new GameReferences('SMS',      'Super Mario Sunshine',);
        this.SUPER_MARIO_GALAXY =                          new GameReferences('SMG',      'Super Mario Galaxy',);


        this.MARIO_BROS =                                  new GameReferences('MB',       'Mario Bros.',);
        this.SUPER_MARIO_BROS_2 =                          new GameReferences('SMB2',     'Super Mario Bros. 2',);
        this.SUPER_MARIO_WORLD_2_YOSHI_ISLAND =            new GameReferences('SMW2:YI',  'Super Mario World 2: Yoshi\'s Island',);
        this.SUPER_MARIO_LAND =                            new GameReferences('SML',      'Super Mario Land',);
        this.WARIO_LAND_SUPER_MARIO_LAND_3 =               new GameReferences('WL:SML3',  'Wario Land: Super Mario Land 3',);
        this.MARIO_TENNIS =                                new GameReferences('MT',       'Mario Tennis',);
        this.DR_MARIO =                                    new GameReferences('DM',       'Dr. Mario',);
        this.DR_MARIO_64 =                                 new GameReferences('DM64',     'Dr. Mario 64',);
        this.LUIGI_MANSION =                               new GameReferences('LM',       'Luigi\'s Mansion',);
        this.YOSHI_WOOLLY_WORLD =                          new GameReferences('YWW',      'Yoshi\'s Woolly World',);
        this.CAPTAIN_TOAD_TREASURE_TRACKER =               new GameReferences('CT:TT',    'Captain Toad: Treasure Tracker',);
        this.WARIOWARE_TOUCHED =                           new GameReferences('WW:T',     'WarioWare: Touched!',);
        this.MARIO_AND_LUIGI_PAPER_JAM =                   new GameReferences('M&L:PJ',   'Mario & Luigi: Paper Jam',);

        this.DONKEY_KONG =                                 new GameReferences('DK',       'Donkey Kong',);
        this.DONKEY_KONG_JR =                              new GameReferences('DKJ',      'Donkey Kong Jr.',);
        this.DONKEY_KONG_COUNTRY =                         new GameReferences('DKC',      'Donkey Kong Country',);

        this.KIRBY_DREAM_LAND =                            new GameReferences('KDL',      'Kirby\'s Dream Land',);
        this.KIRBY_ADVENTURE =                             new GameReferences('KA',       'Kirby\'s Adventure',);

        this.KID_ICARIUS =                                 new GameReferences('KI',       'Kid Icarius',);
        this.KID_ICARIUS_UPRISING =                        new GameReferences('KI:U',     'Kid Icarius: Uprising',);

        this.MEGA_MAN =                                    new GameReferences('MeM',      'Mega Man',);

        this.METROID =                                     new GameReferences('M',        'Metroid',);
        this.METROID_ZERO_MISSION =                        new GameReferences('M:ZM',     'Metroid: Zero Mission',);

        this.NINTENDO_ENTERTAINMENT_SYSTEM_ROB =           new GameReferences('NES ROB',  'Nintendo Entertainment System R.O.B.',);

        this.FIRE_EMBLEM_SHADOW_DRAGON =                   new GameReferences('FE:SD',    'Fire Emblem: Shadow Dragon',);
        this.FIRE_EMBLEM_RADIANT_DAWN =                    new GameReferences('FE:RD',    'Fire Emblem: Radiant Dawn',);
        this.FIRE_EMBLEM_AWAKENING =                       new GameReferences('FEA',      'Fire Emblem Awakening',);

        this.POKEMON_RED =                                 new GameReferences('PR',       'Pokémon Red Version',);
        this.POKEMON_GREEN =                               new GameReferences('PG',       '(Pokémon Green Version)',);
        this.POKEMON_BLUE =                                new GameReferences('PB',       'Pokémon Blue Version',);
        this.POKEMON_YELLOW =                              new GameReferences('PYe',      'Pokémon Yellow Version',);
        this.POKEMON_DIAMOND =                             new GameReferences('PD',       'Pokémon Diamond',);
        this.POKEMON_PEARL =                               new GameReferences('PP',       'Pokémon Pearl',);
        this.POKEMON_X =                                   new GameReferences('PX',       'Pokémon X',);
        this.POKEMON_Y =                                   new GameReferences('PY',       'Pokémon Y',);

        this.PIKMIN =                                      new GameReferences('Pi',        'Pikmin',);
        this.PIKMIN_3 =                                    new GameReferences('Pi3',       'Pikmin 3',);

        this.THE_LEGEND_OF_ZELDA =                         new GameReferences('TLZ',      'The Legend of Zelda',);
        this.ZELDA_II_THE_ADVENTURE_OF_LINK =              new GameReferences('Z2:TAL',   'Zelda II: The Adventure of Link',);
        this.THE_LEGEND_OF_ZELDA_A_LINK_TO_THE_PAST =      new GameReferences('TLZ:ALP',  'The Legend of Zelda: A Link to the Past',);
        this.THE_LEGEND_OF_ZELDA_OCARINA_OF_TIME =         new GameReferences('TLZ:OT',   'The Legend of Zelda: Ocarina of Time',);
        this.THE_LEGEND_OF_ZELDA_MAJORA_MASK =             new GameReferences('TLZ:MM',   'The Legend of Zelda: Majora\'s Mask',);
        this.THE_LEGEND_OF_ZELDA_THE_WIND_WAKER =          new GameReferences('TLZ:TWW',  'The Legend of Zelda: The Wind Waker',);
        this.THE_LEGEND_OF_ZELDA_TWILIGHT_PRINCESS =       new GameReferences('TLZ:TP',   'The Legend of Zelda: Twilight Princess',);
        this.THE_LEGEND_OF_ZELDA_TRI_FORCE_HEROES =        new GameReferences('TLZ:TFH',  'The Legend of Zelda: Tri Force Heroes',);

        this.XENOBLADE_CHRONICLES =                        new GameReferences('XC',       'Xenoblade Chronicles',);

        this.EARTHBOUND =                                  new GameReferences('EB',       'EarthBound',);
        this.MOTHER3 =                                     new GameReferences('M3',       'MOTHER3',);

        this.SPLATOON =                                    new GameReferences('Sp',       'Splatoon',);

        this.WII_FIT =                                     new GameReferences('WF',       'Wii Fit',);

        this.CHIBI_ROBO =                                  new GameReferences('CR',       'Chibi-Robo!',);

        this.ANIMAL_CROSSING =                             new GameReferences('AC',       'Animal Crossing',);
        this.ANIMAL_CROSSING_WILD_WORLD =                  new GameReferences('AC:WW',    'Animal Crossing: Wild World',);
        this.ANIMAL_CROSSING_CITY_FOLK =                   new GameReferences('AC:CF',    'Animal Crossing: City Folk',);
        this.ANIMAL_CROSSING_NEW_LEAF =                    new GameReferences('AC:NL',    'Animal Crossing: New Leaf',);
        this.ANIMAL_CROSSING_HAPPY_HOME_DESIGNER =         new GameReferences('AC:HHD',   'Animal Crossing: Happy Home Designer',);

        this.F_ZERO =                                      new GameReferences('F-Z',      'F-Zero',);

        this.GAME_AND_WATCH =                              new GameReferences('G&W',      'Game & Watch',);

        this.SONIC_THE_HEDGEHOG =                          new GameReferences('STH',      'Sonic The Hedgehog',);

        this.DUCK_HUNT =                                   new GameReferences('DH',       'Duck Hunt',);

        this.PAC_MAN =                                     new GameReferences('PM',       'PAC-MAN',);

        this.WRECKING_CREW =                               new GameReferences('WC',       'Wrecking Crew',);

        this.PUNCH_OUT =                                   new GameReferences('PO',       'Punch-out!!',);

        this.STAR_FOX =                                    new GameReferences('SF',       'Star Fox',);
        this.STAR_FOX_ZERO =                               new GameReferences('SFZ',      'Star Fox Zero',);

        this.YAKUMAN_HO_O =                                new GameReferences('YH-O',     'Yakuman Ho-o',);

        this.BIG_BRAIN_ACADEMY =                           new GameReferences('BBA',      'Big Brain Academy',);

        this.SWAPNOTE =                                    new GameReferences('Sn',       'Swapnote',);
        this.NINTENDO_BADGE_ARCADE =                       new GameReferences('NBA',      'Nintendo Badge Arcade',);
        this.MONSTER_MANOR =                               new GameReferences('MoM',      'Monster Manor',);

        this.GAMECENTER_CX =                               new GameReferences('GCCX',     'GAMECENTER CX',);
        this.CORO_COR0_COMIC =                             new GameReferences('CCC',      'CORO CORO COMIC',);
        this.FAMITSU =                                     new GameReferences('F',        'Famitsu',);
        this.MERCENDES_BENZ =                              new GameReferences('M-B',      'Mercendes-Benz',);
        this.FAMICOM_DISK_SYSTEM =                         new GameReferences('FDS',      'Famicom Disk System',);
        this.BABYMETAL =                                   new GameReferences('BM',       'BABYMETAL',);

        this.MONSTER_HUNTER =                              new GameReferences('MH',       'Monster Hunter',);

        this.EXCITEBIKE =                                  new GameReferences('E',        'Excitebike',);

        this.NISEKOI =                                     new GameReferences('N',        'Nisekoi',);

        this.JAM_WITH_THE_BAND =                           new GameReferences('JB',       'Jam with the Band',);

        this.DAIGASSO_BAND_BROS_P =                        new GameReferences('DBBP',     'Daigasso! Band Bros. P',);

        this.THE_LEGENDARY_STARFY =                        new GameReferences('TLS',      'The Legendary Starfy',);

        this.BALLOON_FIGHT =                               new GameReferences('BF',       'Balloon Fight',);

        this.SHIN_ONIGASHIMA =                             new GameReferences('SO',       'Shin Onigashima',);

        this.FAMICOM_DETECTIVE_CLUB_PART_II =              new GameReferences('FDCP2',    'Famicom Detective Club Part II',);

        this.PUSHMO =                                      new GameReferences('Pu',       'Pushmo',);

        this.CLU_CLU_LAND =                                new GameReferences('CCL',      'Clu Clu Land',);

        this.VOLLEYBALL =                                  new GameReferences('V',        'Volleyball',);

        this.ICE_CLIMBER =                                 new GameReferences('IC',       'Ice Climber',);

        this.HELLO_KITTY =                                 new GameReferences('HK',       'Hello Kitty',);
        this.MY_MELODY =                                   new GameReferences('MyM',      'My Melody',);
        this.SHAUN_THE_SHEEP =                             new GameReferences('SS',       'Shaun the Sheep',);

        this.BRAIN_AGE_TRAIN_YOUR_BRAIN_IN_MINUTES_A_DAY = new GameReferences('BA:TYBMD', 'Brain Age: Train Your Brain in Minutes a Day!',);
    }

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static [index: number]: GameReferences;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleEnglishName, GameReference>;

    #reference?: GameReference;
    readonly #acronym;
    readonly #englishName;

    //endregion -------------------- Attributes --------------------

    private constructor(acronym: PossibleAcronym, englishName: PossibleEnglishName,) {
        super();
        this.#acronym = acronym;
        this.#englishName = new StringContainer(englishName);
    }

    //region -------------------- Getter methods --------------------

    public static get REFERENCE_MAP(): ReadonlyMap<PossibleEnglishName, GameReference> {
        return this.#REFERENCE_MAP ??= Import.GameReferenceLoader.get.load();
    }

    /**
     * {@inheritDoc}
     * @semiAsynchronously
     */
    public get reference(): GameReference {
        return this.#reference ??= GameReferences.REFERENCE_MAP.get(this.englishName)!;
    }

    public get acronym(): PossibleAcronym {
        return this.#acronym;
    }

    public get englishName(): PossibleEnglishName {
        return this.#englishName.get;
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public static get everyAcronyms(): readonly PossibleAcronym[] {
        return this.values.map(limit => limit.acronym);
    }

    public static get everyEnglishNames(): readonly PossibleEnglishName[] {
        return this.values.map(limit => limit.englishName);
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): StaticReference<GameReferences> {
        return GameReferences;
    }

    //region -------------------- Enum value methods --------------------

    protected static override _getValueByString(value: string,) {
        return this.values.find(enumerable => enumerable.englishName === value
                || enumerable.acronym === value)
            ?? null;
    }

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(name: S,): EnumByPossibleString<S>
    public static getValue<S extends string = string, >(name: S,): EnumByString<S>
    public static getValue<I extends GameReferences = GameReferences, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): GameReferences
    public static getValue(value: PossibleValue,): | GameReferences | null
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
