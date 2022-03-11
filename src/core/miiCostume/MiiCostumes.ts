import type {ClassWithEnglishName}                                                                                                                                                                                                             from '../ClassWithEnglishName';
import type {ClassWithImagePath}                                                                                                                                                                                                               from '../ClassWithImagePath';
import type {ClassWithReference}                                                                                                                                                                                                               from '../ClassWithReference';
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleEnglishName, PossibleImageName, PossibleImagePath, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './MiiCostumes.types';
import type {MiiCostume}                                                                                                                                                                                                                       from './MiiCostume';
import type {StaticReference}                                                                                                                                                                                                                  from '../../util/enum/Enum.types';

import {Enum}            from '../../util/enum/Enum';
import {Import}          from '../../util/DynamicImporter';
import {StringContainer} from '../../util/StringContainer';

/**
 * @recursiveReference {@link MiiCostumeLoader}
 * @classWithDynamicImport {@link MiiCostumeLoader}
 */
export class MiiCostumes
    extends Enum<Ordinals, Names>
    implements ClassWithReference<MiiCostume>,
        ClassWithEnglishName<PossibleEnglishName>,
        ClassWithImagePath<PossibleImagePath> {

    //region -------------------- Enum instances --------------------

    public static readonly NONE =                         new MiiCostumes('None',                         'Headwear_Dummy_Default',);
    public static readonly NINTENDO_SHIRT =               new MiiCostumes('Nintendo Shirt',               'Tops_Shirt_Default',);
    public static readonly NINTENDO_UNIFORM =             new MiiCostumes('Nintendo Uniform',             'Tops_Shirt_Nintendo',);
    public static readonly BLACK_SHORT_SHORTS =           new MiiCostumes('Black Short-Shorts',           'Bottoms_Pants_Default',);
    public static readonly DENIM_JEAN =                   new MiiCostumes('Denim Jeans',                  'Bottoms_Pants_Jeans',);
    public static readonly DENIM_SKIRT =                  new MiiCostumes('Denim Skirt',                  'Bottoms_SkirtS_Jeans',);


    public static readonly MARIO_CAP =                    new MiiCostumes('Mario Cap',                    'Headwear_Mario_Mario',);
    public static readonly MARIO_OUTFIT =                 new MiiCostumes('Mario Outfit',                 'All_Mario_Mario',);
    public static readonly MARIO_SWIM_TRUNKS =            new MiiCostumes('Mario Swim Trunks',            'Bottoms_Shorts_Dot',);
    public static readonly FROG_MARIO_RAINCOAT =          new MiiCostumes('Frog Mario Raincoat',          'All_Frog',);
    public static readonly ONE_UP_HOODIE =                new MiiCostumes('1-Up Hoodie',                  'Tops_OneUp_Normal',);
    public static readonly PROPELLER_MARIO_HELMET =       new MiiCostumes('Propeller Mario Helmet',       'Headwear_PropellerMario_Normal',);
    public static readonly PROPELLER_MARIO_CLOTHES =      new MiiCostumes('Propeller Mario Clothes',      'All_PropellerMario_Normal',);
    public static readonly SUPER_ACORN_HAT =              new MiiCostumes('Super Acorn Hat',              'Headwear_Donguri_Normal',);
    public static readonly CAT_MARIO_HEADGEAR =           new MiiCostumes('Cat Mario Headgear',           'Headwear_ClimbMario_Normal',);
    public static readonly CAT_MARIO_SUIT =               new MiiCostumes('Cat Mario Suit',               'All_ClimbMario_Normal',);
    public static readonly SUPERBALL_MARIO_HAT =          new MiiCostumes('Superball Mario Hat',          'Headwear_SuperBall_Normal',);
    public static readonly SUPERBALL_MARIO_SUIT =         new MiiCostumes('Superball Mario Suit',         'All_SuperBall_Normal',);
    public static readonly BUILDER_HARD_HAT =             new MiiCostumes('Builder Hard Hat',             'Headwear_BuilderMario_Normal',);
    public static readonly BUILDER_MARIO_OUTFIT =         new MiiCostumes('Builder Mario Outfit',         'All_BuilderMario_Normal',);
    public static readonly DOCTOR_HEADGEAR =              new MiiCostumes('Doctor Headgear',              'Headwear_DrMario_Normal',);
    public static readonly DOCTOR_COAT =                  new MiiCostumes('Doctor Coat',                  'All_DrMario_Normal',);

    public static readonly LUIGI_CAP =                    new MiiCostumes('Luigi Cap',                    'Headwear_Luigi_Normal',);
    public static readonly LUIGI_OUTFIT =                 new MiiCostumes('Luigi Outfit',                 'All_Mario_Luigi',);

    public static readonly PRINCESS_PEACH_WIG =           new MiiCostumes('Princess Peach Wig',           'Headwear_Peach_Normal',);
    public static readonly PRINCESS_PEACH_DRESS =         new MiiCostumes('Princess Peach Dress',         'All_Peach_Normal',);
    public static readonly PRINCESS_PEACH_TENNIS_OUTFIT = new MiiCostumes('Princess Peach Tennis Outfit', 'All_PeachTennis_Normal',);

    public static readonly ROSALINA_WIG =                 new MiiCostumes('Rosalina Wig',                 'Headwear_Rosetta_Normal',);
    public static readonly ROSALINA_DRESS =               new MiiCostumes('Rosalina Dress',               'All_Rosetta_Normal',);

    public static readonly TOAD_CAP =                     new MiiCostumes('Toad Cap',                     'Headwear_Kinopio_Normal',);
    public static readonly TOAD_OUTFIT =                  new MiiCostumes('Toad Outfit',                  'All_Kinopio_Normal',);

    public static readonly YOSHI_HAT =                    new MiiCostumes('Yoshi Hat',                    'Headwear_Yoshi_Normal',);
    public static readonly YOSHI_SUIT =                   new MiiCostumes('Yoshi Suit',                   'All_Yoshi_Normal',);

    public static readonly BOWSER_HEADPIECE =             new MiiCostumes('Bowser Headpiece',             'Headwear_Koopa_Normal',);
    public static readonly BOWSER_SUIT =                  new MiiCostumes('Bowser Suit',                  'All_Koopa_Normal',);
    public static readonly BOWSER_JR_HEADPIECE =          new MiiCostumes('Bowser Jr. Headpiece',         'Headwear_KoopaJr_Normal',);
    public static readonly SLOBBERY_SHIRT =               new MiiCostumes('Slobbery Shirt',               'Tops_KoopaJrScarf_Normal',);
    public static readonly HOVER_CLOWN =                  new MiiCostumes('Hoverclown',                   'Bottoms_KoopaClown_Normal',);
    public static readonly KOOPALING_HAWAIIAN_SHIRT =     new MiiCostumes('Koopaling Hawaiian Shirt',     'Tops_Boss',);
    public static readonly MAGIKOOPA_HAT =                new MiiCostumes('Magikoopa Hat',                'Headwear_Kameck_Normal',);
    public static readonly MAGIKOOPA_ROBES =              new MiiCostumes('Magikoopa Robes',              'All_Kameck_Normal',);

    public static readonly CHEEP_CHEEP_HAT =              new MiiCostumes('Cheep Cheep Hat',              'Headwear_Pukupuku_Normal',);
    public static readonly FACEPLANT =                    new MiiCostumes('Faceplant',                    'Headwear_Packun_Normal',);
    public static readonly SHY_CAP =                      new MiiCostumes('Shy Cap',                      'Headwear_Teresa_Normal',);
    public static readonly ROCKY_WRENCH_MANHOLE_LID =     new MiiCostumes('Rocky Wrench Manhole Lid',     'Headwear_Poo_Normal',);
    public static readonly POKEY_HAT =                    new MiiCostumes('Pokey Hat',                    'Headwear_Sambo_Normal',);
    public static readonly SNOW_POKEY_HAT =               new MiiCostumes('Snow Pokey Hat',               'Headwear_SamboSnow_Normal',);
    public static readonly FIREWORKS_SHIRT =              new MiiCostumes('Fireworks Shirt',              'Tops_Shirt_Hanabi',);
    public static readonly BANZAI_BILL_SHIRT =            new MiiCostumes('Banzai Bill Shirt',            'Tops_Shirt_Killer',);
    public static readonly STAREDOWN_SHIRT =              new MiiCostumes('Staredown Shirt',              'Tops_Shirt_Gesso',);
    public static readonly PARENT_AND_CHILD_SKIRT =       new MiiCostumes('Parent-and-Child Skirt',       'Bottoms_SkirtGesso_Normal',);
    public static readonly CHOMP_DOG_SHIRT =              new MiiCostumes('Chomp-Dog Shirt',              'Tops_AnimShirt_Wanwan',);
    public static readonly FISH_BONE_SHIRT =              new MiiCostumes('Fish Bone Shirt',              'Tops_Fishbone_Normal',);
    public static readonly ANGRY_SUN_SHIRT =              new MiiCostumes('Angry Sun Shirt',              'Tops_Aloha_Sun',);
    public static readonly HOT_HOT_SHIRT =                new MiiCostumes('Hot Hot Shirt',                'Tops_Firebar_Normal',);
    public static readonly RUNNING_SHIRT =                new MiiCostumes('Running Shirt',                'Tops_Pyonchu_Normal',);
    public static readonly PHANTO_HOODIE =                new MiiCostumes('Phanto Hoodie',                'Tops_Phanto',);
    public static readonly SKULL_SKIRT =                  new MiiCostumes('Skull Skirt',                  'Bottoms_SkirtKillerHoudai_Normal',);
    public static readonly BURNER_SKIRT =                 new MiiCostumes('Burner Skirt',                 'Bottoms_SkirtBurner_Normal',);
    public static readonly WIND_UP_SHOE =                 new MiiCostumes('Wind-Up Shoe',                 'Bottoms_Kutsu_Normal',);
    public static readonly STINGBY_SKIRT =                new MiiCostumes('Stingby Skirt',                'Bottoms_Hacchin_Normal',);
    public static readonly THWOMP_SUIT =                  new MiiCostumes('Thwomp Suit',                  'All_Dossun_Normal',);
    public static readonly GOOGOO_ONESIE =                new MiiCostumes('Googoo Onesie',                'All_Rompers_Normal',);
    public static readonly KOOPA_TROOPA_SUIT =            new MiiCostumes('Koopa Troopa Suit',            'All_Nokonoko_Normal',);


    public static readonly MUSHROOM_HAIRCLIP =            new MiiCostumes('Mushroom Hairclip',            'Headwear_KinokoMini_Red',);
    public static readonly SUPER_MUSHROOM_SHIRT =         new MiiCostumes('Super Mushroom Shirt',         'Tops_Shirt_Kinoko',);
    public static readonly SUPER_STAR_BARRETTE =          new MiiCostumes('Super Star Barrette',          'Headwear_Star_Normal',);
    public static readonly SUPER_STAR_FLARES =            new MiiCostumes('Super Star Flares',            'Bottoms_WidePants_Star',);
    public static readonly PIPE_HAT =                     new MiiCostumes('Pipe Hat',                     'Headwear_Dokan_Normal',);
    public static readonly PIPE_SKIRT =                   new MiiCostumes('Pipe Skirt',                   'Bottoms_SkirtDokan_Normal',);
    public static readonly PLATFORM_SKIRT =               new MiiCostumes('Platform Skirt',               'Bottoms_SkirtL_Wrap',);
    public static readonly DOORDUROYS =                   new MiiCostumes('Doorduroys',                   'Bottoms_Pants_Door',);
    public static readonly ANTSY_CORDUROYS =              new MiiCostumes('Antsy Corduroys',              'Bottoms_Pants_Arrow',);
    public static readonly CLOUDWALKER =                  new MiiCostumes('Cloudwalker',                  'Bottoms_Jugemu_Normal',);
    public static readonly BOUNCY_SKIRT =                 new MiiCostumes('Bouncy Skirt',                 'Bottoms_SkirtM_Marumaru',);
    public static readonly SHORT_OF_DOOM =                new MiiCostumes('Shorts of Doom!',              'Bottoms_Shorts_Lift',);
    public static readonly DASH_BLOCK_HOODIE =            new MiiCostumes('Dash Block Hoodie',            'Tops_BlockDash_Normal',);
    public static readonly BIG_SPENDER_SHORTS =           new MiiCostumes('Big-Spender Shorts',           'Bottoms_Shorts_Coin',);
    public static readonly QUESTION_MARK_BLOCK_HOODIE =   new MiiCostumes('? Block Hoodie',               'Tops_Hatena_Normal',);
    public static readonly BLOCKSTRIPE_SHIRT =            new MiiCostumes('Blockstripe Shirt',            'Tops_Shirt_Border',);

    public static readonly FRIED_CHICKEN_HEADGEAR =       new MiiCostumes('Fried-Chicken Headgear',       'Headwear_Karaage_Normal',);
    public static readonly FRIED_CHICKEN_HOODIE =         new MiiCostumes('Fried-Chicken Hoodie',         'Tops_Karaage_Normal',);
    public static readonly EDAMAME_BARRETTE =             new MiiCostumes('Edamame Barrette',             'Headwear_Edamame_Normal',);
    public static readonly EDAMAME_CAMISOLE =             new MiiCostumes('Edamame Camisole',             'Tops_Camisole_Edamame',);
    public static readonly I_LIKE_YOU_CAMISOLE =          new MiiCostumes('I-Like-You Camisole',          'Tops_Camisole_Nice',);
    public static readonly WHITE_TANKTOP =                new MiiCostumes('White Tanktop',                'Tops_NokoTanktop_Normal',);
    public static readonly LAUGHING_SHIRT =               new MiiCostumes('Laughing Shirt',               'Tops_Shirt_Warai',);
    public static readonly MIDNIGHT_DRESS =               new MiiCostumes('Midnight Dress',               'All_OnePiece_Normal',);

    public static readonly ROYAL_CROWN =                  new MiiCostumes('Royal Crown',                  'Headwear_King_Normal',);
    public static readonly ROYAL_ATTIRE =                 new MiiCostumes('Royal Attire',                 'All_King_Normal',);
    public static readonly FANCY_TOP_HAT =                new MiiCostumes('Fancy Top Hat',                'Headwear_Tuxedo_Normal',);
    public static readonly FANCY_TUXEDO =                 new MiiCostumes('Fancy Tuxedo',                 'All_Tuxedo_Normal',);
    public static readonly MATRIMONY_DRESS =              new MiiCostumes('Matrimony Dress',              'All_WhiteDress_Normal',);
    public static readonly SUPERB_SUIT =                  new MiiCostumes('Superb Suit',                  'All_Splus_Normal',);

    public static readonly ROBOT_CAP =                    new MiiCostumes('Robot Cap',                    'Headwear_Robot_Normal',);
    public static readonly ROBOT_SUIT =                   new MiiCostumes('Robot Suit',                   'All_Robot_Normal',);
    public static readonly FROG_CAP =                     new MiiCostumes('Frog Cap',                     'Headwear_Otogaeru_Normal',);
    public static readonly REFRESHING_SHIRT =             new MiiCostumes('Refreshing Shirt',             'Tops_Shirt_Keshigom',);
    public static readonly PARTRICK_SHIRT =               new MiiCostumes('Partrick Shirt',               'Tops_Partskun_Normal',);
    public static readonly YAMAMURA_SHIRT =               new MiiCostumes('Yamamura Shirt',               'Tops_Nosleeve_Yamamura',);
    public static readonly RESET_DRESS =                  new MiiCostumes('Reset Dress',                  'All_Rocket_Normal',);

    public static readonly NINJI_CAP =                    new MiiCostumes('Ninji Cap',                    'Headwear_Hakkun_Normal',);
    public static readonly NINJI_SHIRT =                  new MiiCostumes('Ninji Shirt',                  'Tops_Hakkun',);
    public static readonly NINJI_SLACKS =                 new MiiCostumes('Ninji Slacks',                 'Bottoms_Hakkun',);
    public static readonly NINJI_GARB =                   new MiiCostumes('Ninji Garb',                   'All_Hakkun',);
    public static readonly CHEETAH_HEADGEAR =             new MiiCostumes('Cheetah Headgear',             'Headwear_Cheetah_Normal',);
    public static readonly CHEETAH_TANKTOP =              new MiiCostumes('Cheetah Tanktop',              'Tops_CheetahTanktop_Normal',);
    public static readonly CHEETAH_RUNNERS =              new MiiCostumes('Cheetah Runners',              'Bottoms_Cheetah',);
    public static readonly CHEETAH_SUIT =                 new MiiCostumes('Cheetah Suit',                 'All_Cheetah',);

    public static readonly FIRE_MARIO_SHIRT =             new MiiCostumes('Fire Mario Shirt',             'Tops_SkinM1',);
    public static readonly RACOON_MARIO_SHIRT =           new MiiCostumes('Racoon Mario Shirt',           'Tops_SkinM3',);
    public static readonly CAPE_MARIO_SHIRT =             new MiiCostumes('Cape Mario Shirt',             'Tops_SkinMW',);
    public static readonly FLYING_SQUIRREL_MARIO_SHIRT =  new MiiCostumes('Flying Squirrel Mario Shirt',  'Tops_SkinMU',);
    public static readonly CAT_MARIO_SHIRT =              new MiiCostumes('Cat Mario Shirt',              'Tops_Skin3W',);

    public static readonly WORLD_WEAR =                   new MiiCostumes('World Wear',                   'All_MapWorld',);

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static [index: number]: MiiCostumes;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleEnglishName, MiiCostume>;

    #reference?: MiiCostume;
    readonly #englishName: StringContainer<PossibleEnglishName>;
    readonly #imageName: PossibleImageName;
    readonly #imagePath: PossibleImagePath;

    //endregion -------------------- Attributes --------------------

    private constructor(englishName: PossibleEnglishName, imageName: PossibleImageName,) {
        super();
        this.#englishName = new StringContainer(englishName);
        this.#imageName = imageName;
        this.#imagePath = `/Mii costume/${imageName}.tiff`;
    }

    //region -------------------- Getter methods --------------------

    public static get REFERENCE_MAP(): ReadonlyMap<PossibleEnglishName, MiiCostume> {
        return this.#REFERENCE_MAP ??= Import.MiiCostumeLoader.get.load();
    }

    /**
     * {@inheritDoc}
     * @semiAsynchronously
     */
    public get reference(): MiiCostume {
        return this.#reference ??= MiiCostumes.REFERENCE_MAP.get(this.englishName)!;
    }


    public get englishName(): PossibleEnglishName {
        return this.#englishName.get;
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml;
    }

    public get imageName(): PossibleImageName {
        return this.#imageName;
    }

    public get imagePath(): PossibleImagePath {
        return this.#imagePath;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected get _static(): StaticReference<MiiCostumes> {
        return MiiCostumes;
    }


    protected static _getValueByString(value: string,) {
        return this.values.find(enumerable => enumerable.englishName === value
                || enumerable.imageName === value)
            ?? null;
    }

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(name: S,): EnumByPossibleString<S>
    public static getValue<S extends string = string, >(name: S,): EnumByString<S>
    public static getValue<I extends MiiCostumes = MiiCostumes, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): MiiCostumes
    public static getValue(value: PossibleValue,): | MiiCostumes | null
    public static getValue(value: PossibleValue,) {
        return Enum.getValueOn(this, value,);
    }

    public static get values(): EnumArray {
        return Enum.getValuesOn(this);
    }


    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}
