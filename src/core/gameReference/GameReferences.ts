import type {CollectionHolder, EnumerableConstructor, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'
import {Enum}                                                                    from '@joookiwi/enumerable'

import type {ClassWithAcronym}                                      from '../ClassWithAcronym'
import type {ClassWithEnglishName}                                  from '../ClassWithEnglishName'
import type {ClassWithReference}                                    from '../ClassWithReference'
import type {Names, Ordinals, PossibleAcronym, PossibleEnglishName} from './GameReferences.types'
import type {Nullable}                                              from '../../util/types'
import type {GameReference}                                         from './GameReference'

import {Import}          from '../../util/DynamicImporter'
import {StringContainer} from '../../util/StringContainer'

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

    public static readonly SUPER_MARIO_MAKER_1 =                         new GameReferences('SMM',      'Super Mario Maker',)
    public static readonly SUPER_MARIO_MAKER_FOR_NINTENDO_3DS =          new GameReferences('SMM3DS',   'Super Mario Maker for Nintendo 3DS',)
    public static readonly SUPER_MARIO_MAKER_2 =                         new GameReferences('SMM2',     'Super Mario Maker 2',)

    public static readonly SUPER_MARIO_BROS =                            new GameReferences('SMB',      'Super Mario Bros.',)
    public static readonly SUPER_MARIO_BROS_3 =                          new GameReferences('SMB3',     'Super Mario Bros. 3',)
    public static readonly SUPER_MARIO_WORLD =                           new GameReferences('SMW',      'Super Mario World',)
    public static readonly NEW_SUPER_MARIO_BROS_U =                      new GameReferences('NSMBU',    'New Super Mario Bros. U',)
    public static readonly SUPER_MARIO_3D_WORLD =                        new GameReferences('SM3DW',    'Super Mario 3D World',)

    public static readonly SUPER_MARIO_KART =                            new GameReferences('SMK',      'Super Mario Kart',)
    public static readonly SUPER_MARIO_64 =                              new GameReferences('SM64',     'Super Mario 64')
    public static readonly SUPER_MARIO_SUNSHINE =                        new GameReferences('SMS',      'Super Mario Sunshine',)
    public static readonly SUPER_MARIO_GALAXY =                          new GameReferences('SMG',      'Super Mario Galaxy',)


    public static readonly MARIO_BROS =                                  new GameReferences('MB',       'Mario Bros.',)
    public static readonly SUPER_MARIO_BROS_2 =                          new GameReferences('SMB2',     'Super Mario Bros. 2',)
    public static readonly SUPER_MARIO_WORLD_2_YOSHI_ISLAND =            new GameReferences('SMW2:YI',  'Super Mario World 2: Yoshi\'s Island',)
    public static readonly SUPER_MARIO_LAND =                            new GameReferences('SML',      'Super Mario Land',)
    public static readonly WARIO_LAND_SUPER_MARIO_LAND_3 =               new GameReferences('WL:SML3',  'Wario Land: Super Mario Land 3',)
    public static readonly MARIO_TENNIS =                                new GameReferences('MT',       'Mario Tennis',)
    public static readonly DR_MARIO =                                    new GameReferences('DM',       'Dr. Mario',)
    public static readonly DR_MARIO_64 =                                 new GameReferences('DM64',     'Dr. Mario 64',)
    public static readonly LUIGI_MANSION =                               new GameReferences('LM',       'Luigi\'s Mansion',)
    public static readonly YOSHI_WOOLLY_WORLD =                          new GameReferences('YWW',      'Yoshi\'s Woolly World',)
    public static readonly CAPTAIN_TOAD_TREASURE_TRACKER =               new GameReferences('CT:TT',    'Captain Toad: Treasure Tracker',)
    public static readonly WARIOWARE_TOUCHED =                           new GameReferences('WW:T',     'WarioWare: Touched!',)
    public static readonly MARIO_AND_LUIGI_PAPER_JAM =                   new GameReferences('M&L:PJ',   'Mario & Luigi: Paper Jam',)

    public static readonly DONKEY_KONG =                                 new GameReferences('DK',       'Donkey Kong',)
    public static readonly DONKEY_KONG_JR =                              new GameReferences('DKJ',      'Donkey Kong Jr.',)
    public static readonly DONKEY_KONG_COUNTRY =                         new GameReferences('DKC',      'Donkey Kong Country',)

    public static readonly KIRBY_DREAM_LAND =                            new GameReferences('KDL',      'Kirby\'s Dream Land',)
    public static readonly KIRBY_ADVENTURE =                             new GameReferences('KA',       'Kirby\'s Adventure',)

    public static readonly KID_ICARIUS =                                 new GameReferences('KI',       'Kid Icarius',)
    public static readonly KID_ICARIUS_UPRISING =                        new GameReferences('KI:U',     'Kid Icarius: Uprising',)

    public static readonly MEGA_MAN =                                    new GameReferences('MeM',      'Mega Man',)

    public static readonly METROID =                                     new GameReferences('M',        'Metroid',)
    public static readonly METROID_ZERO_MISSION =                        new GameReferences('M:ZM',     'Metroid: Zero Mission',)

    public static readonly NINTENDO_ENTERTAINMENT_SYSTEM_ROB =           new GameReferences('NES ROB',  'Nintendo Entertainment System R.O.B.',)

    public static readonly FIRE_EMBLEM_SHADOW_DRAGON =                   new GameReferences('FE:SD',    'Fire Emblem: Shadow Dragon',)
    public static readonly FIRE_EMBLEM_RADIANT_DAWN =                    new GameReferences('FE:RD',    'Fire Emblem: Radiant Dawn',)
    public static readonly FIRE_EMBLEM_AWAKENING =                       new GameReferences('FEA',      'Fire Emblem Awakening',)

    public static readonly POKEMON_RED =                                 new GameReferences('PR',       'Pokémon Red Version',)
    public static readonly POKEMON_GREEN =                               new GameReferences('PG',       '(Pokémon Green Version)',)
    public static readonly POKEMON_BLUE =                                new GameReferences('PB',       'Pokémon Blue Version',)
    public static readonly POKEMON_YELLOW =                              new GameReferences('PYe',      'Pokémon Yellow Version',)
    public static readonly POKEMON_DIAMOND =                             new GameReferences('PD',       'Pokémon Diamond',)
    public static readonly POKEMON_PEARL =                               new GameReferences('PP',       'Pokémon Pearl',)
    public static readonly POKEMON_X =                                   new GameReferences('PX',       'Pokémon X',)
    public static readonly POKEMON_Y =                                   new GameReferences('PY',       'Pokémon Y',)

    public static readonly PIKMIN =                                      new GameReferences('Pi',        'Pikmin',)
    public static readonly PIKMIN_3 =                                    new GameReferences('Pi3',       'Pikmin 3',)

    public static readonly THE_LEGEND_OF_ZELDA =                         new GameReferences('TLZ',      'The Legend of Zelda',)
    public static readonly ZELDA_II_THE_ADVENTURE_OF_LINK =              new GameReferences('Z2:TAL',   'Zelda II: The Adventure of Link',)
    public static readonly THE_LEGEND_OF_ZELDA_A_LINK_TO_THE_PAST =      new GameReferences('TLZ:ALP',  'The Legend of Zelda: A Link to the Past',)
    public static readonly THE_LEGEND_OF_ZELDA_OCARINA_OF_TIME =         new GameReferences('TLZ:OT',   'The Legend of Zelda: Ocarina of Time',)
    public static readonly THE_LEGEND_OF_ZELDA_MAJORA_MASK =             new GameReferences('TLZ:MM',   'The Legend of Zelda: Majora\'s Mask',)
    public static readonly THE_LEGEND_OF_ZELDA_THE_WIND_WAKER =          new GameReferences('TLZ:TWW',  'The Legend of Zelda: The Wind Waker',)
    public static readonly THE_LEGEND_OF_ZELDA_TWILIGHT_PRINCESS =       new GameReferences('TLZ:TP',   'The Legend of Zelda: Twilight Princess',)
    public static readonly THE_LEGEND_OF_ZELDA_TRI_FORCE_HEROES =        new GameReferences('TLZ:TFH',  'The Legend of Zelda: Tri Force Heroes',)

    public static readonly XENOBLADE_CHRONICLES =                        new GameReferences('XC',       'Xenoblade Chronicles',)

    public static readonly EARTHBOUND =                                  new GameReferences('EB',       'EarthBound',)
    public static readonly MOTHER3 =                                     new GameReferences('M3',       'MOTHER3',)

    public static readonly SPLATOON =                                    new GameReferences('Sp',       'Splatoon',)

    public static readonly WII_FIT =                                     new GameReferences('WF',       'Wii Fit',)

    public static readonly CHIBI_ROBO =                                  new GameReferences('CR',       'Chibi-Robo!',)

    public static readonly ANIMAL_CROSSING =                             new GameReferences('AC',       'Animal Crossing',)
    public static readonly ANIMAL_CROSSING_WILD_WORLD =                  new GameReferences('AC:WW',    'Animal Crossing: Wild World',)
    public static readonly ANIMAL_CROSSING_CITY_FOLK =                   new GameReferences('AC:CF',    'Animal Crossing: City Folk',)
    public static readonly ANIMAL_CROSSING_NEW_LEAF =                    new GameReferences('AC:NL',    'Animal Crossing: New Leaf',)
    public static readonly ANIMAL_CROSSING_HAPPY_HOME_DESIGNER =         new GameReferences('AC:HHD',   'Animal Crossing: Happy Home Designer',)

    public static readonly F_ZERO =                                      new GameReferences('F-Z',      'F-Zero',)

    public static readonly GAME_AND_WATCH =                              new GameReferences('G&W',      'Game & Watch',)

    public static readonly SONIC_THE_HEDGEHOG =                          new GameReferences('STH',      'Sonic The Hedgehog',)

    public static readonly DUCK_HUNT =                                   new GameReferences('DH',       'Duck Hunt',)

    public static readonly PAC_MAN =                                     new GameReferences('PM',       'PAC-MAN',)

    public static readonly WRECKING_CREW =                               new GameReferences('WC',       'Wrecking Crew',)

    public static readonly PUNCH_OUT =                                   new GameReferences('PO',       'Punch-out!!',)

    public static readonly STAR_FOX =                                    new GameReferences('SF',       'Star Fox',)
    public static readonly STAR_FOX_ZERO =                               new GameReferences('SFZ',      'Star Fox Zero',)

    public static readonly YAKUMAN_HO_O =                                new GameReferences('YH-O',     'Yakuman Ho-o',)

    public static readonly BIG_BRAIN_ACADEMY =                           new GameReferences('BBA',      'Big Brain Academy',)

    public static readonly SWAPNOTE =                                    new GameReferences('Sn',       'Swapnote',)
    public static readonly NINTENDO_BADGE_ARCADE =                       new GameReferences('NBA',      'Nintendo Badge Arcade',)
    public static readonly MONSTER_MANOR =                               new GameReferences('MoM',      'Monster Manor',)

    public static readonly GAMECENTER_CX =                               new GameReferences('GCCX',     'GAMECENTER CX',)
    public static readonly CORO_COR0_COMIC =                             new GameReferences('CCC',      'CORO CORO COMIC',)
    public static readonly FAMITSU =                                     new GameReferences('F',        'Famitsu',)
    public static readonly MERCENDES_BENZ =                              new GameReferences('M-B',      'Mercendes-Benz',)
    public static readonly FAMICOM_DISK_SYSTEM =                         new GameReferences('FDS',      'Famicom Disk System',)
    public static readonly BABYMETAL =                                   new GameReferences('BM',       'BABYMETAL',)

    public static readonly MONSTER_HUNTER =                              new GameReferences('MH',       'Monster Hunter',)

    public static readonly EXCITEBIKE =                                  new GameReferences('E',        'Excitebike',)

    public static readonly NISEKOI =                                     new GameReferences('N',        'Nisekoi',)

    public static readonly JAM_WITH_THE_BAND =                           new GameReferences('JB',       'Jam with the Band',)

    public static readonly DAIGASSO_BAND_BROS_P =                        new GameReferences('DBBP',     'Daigasso! Band Bros. P',)

    public static readonly THE_LEGENDARY_STARFY =                        new GameReferences('TLS',      'The Legendary Starfy',)

    public static readonly BALLOON_FIGHT =                               new GameReferences('BF',       'Balloon Fight',)

    public static readonly SHIN_ONIGASHIMA =                             new GameReferences('SO',       'Shin Onigashima',)

    public static readonly FAMICOM_DETECTIVE_CLUB_PART_II =              new GameReferences('FDCP2',    'Famicom Detective Club Part II',)

    public static readonly PUSHMO =                                      new GameReferences('Pu',       'Pushmo',)

    public static readonly CLU_CLU_LAND =                                new GameReferences('CCL',      'Clu Clu Land',)

    public static readonly VOLLEYBALL =                                  new GameReferences('V',        'Volleyball',)

    public static readonly ICE_CLIMBER =                                 new GameReferences('IC',       'Ice Climber',)

    public static readonly HELLO_KITTY =                                 new GameReferences('HK',       'Hello Kitty',)
    public static readonly MY_MELODY =                                   new GameReferences('MyM',      'My Melody',)
    public static readonly SHAUN_THE_SHEEP =                             new GameReferences('SS',       'Shaun the Sheep',)

    public static readonly BRAIN_AGE_TRAIN_YOUR_BRAIN_IN_MINUTES_A_DAY = new GameReferences('BA:TYBMD', 'Brain Age: Train Your Brain in Minutes a Day!',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: GameReferences

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleEnglishName, GameReference>

    #reference?: GameReference
    readonly #acronym
    readonly #englishName

    //endregion -------------------- Fields --------------------

    private constructor(acronym: PossibleAcronym, englishName: PossibleEnglishName,) {
        super()
        this.#acronym = acronym
        this.#englishName = new StringContainer(englishName)
    }

    //region -------------------- Getter methods --------------------

    public static get REFERENCE_MAP(): ReadonlyMap<PossibleEnglishName, GameReference> {
        return this.#REFERENCE_MAP ??= Import.GameReferenceLoader.get.load()
    }

    /**
     * {@inheritDoc}
     * @semiAsynchronously
     */
    public get reference(): GameReference {
        return this.#reference ??= GameReferences.REFERENCE_MAP.get(this.englishName)!
    }

    public get acronym(): PossibleAcronym {
        return this.#acronym
    }

    public get englishName(): PossibleEnglishName {
        return this.#englishName.get
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public static get everyAcronyms(): readonly PossibleAcronym[] {
        return this.values.map(it => it.acronym).toArray()
    }

    public static get everyEnglishNames(): readonly PossibleEnglishName[] {
        return this.values.map(it => it.englishName).toArray()
    }

    // public static getValueByNameOrAcronym<T extends string, >(value: Nullable<| GameReferences | T>,): GameReferencesByNameOrAcronym<T>
    public static getValueByNameOrAcronym(value: Nullable<| GameReferences | string>,): GameReferences {
        if (value == null)
            throw new TypeError(`No "${this.name}" could be found by a null value.`)
        if (value instanceof this)
            return value
        const valueFound = this.values.find(enumerable => enumerable.englishName === value
            || enumerable.acronym === value)
        if (valueFound == null)
            throw new ReferenceError(`No "${this.name}" could be found by this value "${value}".`)
        return valueFound
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): EnumerableConstructor<Ordinals, Names> {
        return GameReferences
    }

    public static getValue(value: PossibleValueByEnumerable<GameReferences>,) {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<GameReferences> {
        return Enum.getValuesOn(this)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}
