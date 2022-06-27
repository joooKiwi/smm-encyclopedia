import type {ClassWithEnglishName}                                                                                                                                                                                                             from '../ClassWithEnglishName';
import type {ClassWithImagePath}                                                                                                                                                                                                               from '../ClassWithImagePath';
import type {ClassWithReference}                                                                                                                                                                                                               from '../ClassWithReference';
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleEnglishName, PossibleImageName, PossibleImagePath, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './MiiCostumes.types';
import type {MiiCostume}                                                                                                                                                                                                                       from './MiiCostume';
import type {StaticReference}                                                                                                                                                                                                                  from '../../util/enum/Enum.types';

import {BASE_PATH}       from '../../variables';
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

    public static/* readonly*/ NONE;
    public static/* readonly*/ NINTENDO_SHIRT;
    public static/* readonly*/ NINTENDO_UNIFORM;
    public static/* readonly*/ BLACK_SHORT_SHORTS;
    public static/* readonly*/ DENIM_JEAN;
    public static/* readonly*/ DENIM_SKIRT;


    public static/* readonly*/ MARIO_CAP;
    public static/* readonly*/ MARIO_OUTFIT;
    public static/* readonly*/ MARIO_SWIM_TRUNKS;
    public static/* readonly*/ FROG_MARIO_RAINCOAT;
    public static/* readonly*/ ONE_UP_HOODIE;
    public static/* readonly*/ PROPELLER_MARIO_HELMET;
    public static/* readonly*/ PROPELLER_MARIO_CLOTHES;
    public static/* readonly*/ SUPER_ACORN_HAT;
    public static/* readonly*/ CAT_MARIO_HEADGEAR;
    public static/* readonly*/ CAT_MARIO_SUIT;
    public static/* readonly*/ SUPERBALL_MARIO_HAT;
    public static/* readonly*/ SUPERBALL_MARIO_SUIT;
    public static/* readonly*/ BUILDER_HARD_HAT;
    public static/* readonly*/ BUILDER_MARIO_OUTFIT;
    public static/* readonly*/ DOCTOR_HEADGEAR;
    public static/* readonly*/ DOCTOR_COAT;

    public static/* readonly*/ LUIGI_CAP;
    public static/* readonly*/ LUIGI_OUTFIT;

    public static/* readonly*/ PRINCESS_PEACH_WIG;
    public static/* readonly*/ PRINCESS_PEACH_DRESS;
    public static/* readonly*/ PRINCESS_PEACH_TENNIS_OUTFIT;

    public static/* readonly*/ ROSALINA_WIG;
    public static/* readonly*/ ROSALINA_DRESS;

    public static/* readonly*/ TOAD_CAP;
    public static/* readonly*/ TOAD_OUTFIT;

    public static/* readonly*/ YOSHI_HAT;
    public static/* readonly*/ YOSHI_SUIT;

    public static/* readonly*/ BOWSER_HEADPIECE;
    public static/* readonly*/ BOWSER_SUIT;
    public static/* readonly*/ BOWSER_JR_HEADPIECE;
    public static/* readonly*/ SLOBBERY_SHIRT;
    public static/* readonly*/ HOVER_CLOWN;
    public static/* readonly*/ KOOPALING_HAWAIIAN_SHIRT;
    public static/* readonly*/ MAGIKOOPA_HAT;
    public static/* readonly*/ MAGIKOOPA_ROBES;

    public static/* readonly*/ CHEEP_CHEEP_HAT;
    public static/* readonly*/ FACEPLANT;
    public static/* readonly*/ SHY_CAP;
    public static/* readonly*/ ROCKY_WRENCH_MANHOLE_LID;
    public static/* readonly*/ POKEY_HAT;
    public static/* readonly*/ SNOW_POKEY_HAT;
    public static/* readonly*/ FIREWORKS_SHIRT;
    public static/* readonly*/ BANZAI_BILL_SHIRT;
    public static/* readonly*/ STAREDOWN_SHIRT;
    public static/* readonly*/ PARENT_AND_CHILD_SKIRT;
    public static/* readonly*/ CHOMP_DOG_SHIRT;
    public static/* readonly*/ FISH_BONE_SHIRT;
    public static/* readonly*/ ANGRY_SUN_SHIRT;
    public static/* readonly*/ HOT_HOT_SHIRT;
    public static/* readonly*/ RUNNING_SHIRT;
    public static/* readonly*/ PHANTO_HOODIE;
    public static/* readonly*/ SKULL_SKIRT;
    public static/* readonly*/ BURNER_SKIRT;
    public static/* readonly*/ WIND_UP_SHOE;
    public static/* readonly*/ STINGBY_SKIRT;
    public static/* readonly*/ THWOMP_SUIT;
    public static/* readonly*/ GOOGOO_ONESIE;
    public static/* readonly*/ KOOPA_TROOPA_SUIT;


    public static/* readonly*/ MUSHROOM_HAIRCLIP;
    public static/* readonly*/ SUPER_MUSHROOM_SHIRT;
    public static/* readonly*/ SUPER_STAR_BARRETTE;
    public static/* readonly*/ SUPER_STAR_FLARES;
    public static/* readonly*/ PIPE_HAT;
    public static/* readonly*/ PIPE_SKIRT;
    public static/* readonly*/ PLATFORM_SKIRT;
    public static/* readonly*/ DOORDUROYS;
    public static/* readonly*/ ANTSY_CORDUROYS;
    public static/* readonly*/ CLOUDWALKER;
    public static/* readonly*/ BOUNCY_SKIRT;
    public static/* readonly*/ SHORT_OF_DOOM;
    public static/* readonly*/ DASH_BLOCK_HOODIE;
    public static/* readonly*/ BIG_SPENDER_SHORTS;
    public static/* readonly*/ QUESTION_MARK_BLOCK_HOODIE;
    public static/* readonly*/ BLOCKSTRIPE_SHIRT;

    public static/* readonly*/ FRIED_CHICKEN_HEADGEAR;
    public static/* readonly*/ FRIED_CHICKEN_HOODIE;
    public static/* readonly*/ EDAMAME_BARRETTE;
    public static/* readonly*/ EDAMAME_CAMISOLE;
    public static/* readonly*/ I_LIKE_YOU_CAMISOLE;
    public static/* readonly*/ WHITE_TANKTOP;
    public static/* readonly*/ LAUGHING_SHIRT;
    public static/* readonly*/ MIDNIGHT_DRESS;

    public static/* readonly*/ ROYAL_CROWN;
    public static/* readonly*/ ROYAL_ATTIRE;
    public static/* readonly*/ FANCY_TOP_HAT;
    public static/* readonly*/ FANCY_TUXEDO;
    public static/* readonly*/ MATRIMONY_DRESS;
    public static/* readonly*/ SUPERB_SUIT;

    public static/* readonly*/ ROBOT_CAP;
    public static/* readonly*/ ROBOT_SUIT;
    public static/* readonly*/ FROG_CAP;
    public static/* readonly*/ REFRESHING_SHIRT;
    public static/* readonly*/ PARTRICK_SHIRT;
    public static/* readonly*/ YAMAMURA_SHIRT;
    public static/* readonly*/ RESET_DRESS;

    public static/* readonly*/ NINJI_CAP;
    public static/* readonly*/ NINJI_SHIRT;
    public static/* readonly*/ NINJI_SLACKS;
    public static/* readonly*/ NINJI_GARB;
    public static/* readonly*/ CHEETAH_HEADGEAR;
    public static/* readonly*/ CHEETAH_TANKTOP;
    public static/* readonly*/ CHEETAH_RUNNERS;
    public static/* readonly*/ CHEETAH_SUIT;

    public static/* readonly*/ FIRE_MARIO_SHIRT;
    public static/* readonly*/ RACOON_MARIO_SHIRT;
    public static/* readonly*/ CAPE_MARIO_SHIRT;
    public static/* readonly*/ FLYING_SQUIRREL_MARIO_SHIRT;
    public static/* readonly*/ CAT_MARIO_SHIRT;

    public static/* readonly*/ WORLD_WEAR;

    static {
        this.NONE =                         new MiiCostumes('None',                         'Headwear_Dummy_Default',);
        this.NINTENDO_SHIRT =               new MiiCostumes('Nintendo Shirt',               'Tops_Shirt_Default',);
        this.NINTENDO_UNIFORM =             new MiiCostumes('Nintendo Uniform',             'Tops_Shirt_Nintendo',);
        this.BLACK_SHORT_SHORTS =           new MiiCostumes('Black Short-Shorts',           'Bottoms_Pants_Default',);
        this.DENIM_JEAN =                   new MiiCostumes('Denim Jeans',                  'Bottoms_Pants_Jeans',);
        this.DENIM_SKIRT =                  new MiiCostumes('Denim Skirt',                  'Bottoms_SkirtS_Jeans',);


        this.MARIO_CAP =                    new MiiCostumes('Mario Cap',                    'Headwear_Mario_Mario',);
        this.MARIO_OUTFIT =                 new MiiCostumes('Mario Outfit',                 'All_Mario_Mario',);
        this.MARIO_SWIM_TRUNKS =            new MiiCostumes('Mario Swim Trunks',            'Bottoms_Shorts_Dot',);
        this.FROG_MARIO_RAINCOAT =          new MiiCostumes('Frog Mario Raincoat',          'All_Frog',);
        this.ONE_UP_HOODIE =                new MiiCostumes('1-Up Hoodie',                  'Tops_OneUp_Normal',);
        this.PROPELLER_MARIO_HELMET =       new MiiCostumes('Propeller Mario Helmet',       'Headwear_PropellerMario_Normal',);
        this.PROPELLER_MARIO_CLOTHES =      new MiiCostumes('Propeller Mario Clothes',      'All_PropellerMario_Normal',);
        this.SUPER_ACORN_HAT =              new MiiCostumes('Super Acorn Hat',              'Headwear_Donguri_Normal',);
        this.CAT_MARIO_HEADGEAR =           new MiiCostumes('Cat Mario Headgear',           'Headwear_ClimbMario_Normal',);
        this.CAT_MARIO_SUIT =               new MiiCostumes('Cat Mario Suit',               'All_ClimbMario_Normal',);
        this.SUPERBALL_MARIO_HAT =          new MiiCostumes('Superball Mario Hat',          'Headwear_SuperBall_Normal',);
        this.SUPERBALL_MARIO_SUIT =         new MiiCostumes('Superball Mario Suit',         'All_SuperBall_Normal',);
        this.BUILDER_HARD_HAT =             new MiiCostumes('Builder Hard Hat',             'Headwear_BuilderMario_Normal',);
        this.BUILDER_MARIO_OUTFIT =         new MiiCostumes('Builder Mario Outfit',         'All_BuilderMario_Normal',);
        this.DOCTOR_HEADGEAR =              new MiiCostumes('Doctor Headgear',              'Headwear_DrMario_Normal',);
        this.DOCTOR_COAT =                  new MiiCostumes('Doctor Coat',                  'All_DrMario_Normal',);

        this.LUIGI_CAP =                    new MiiCostumes('Luigi Cap',                    'Headwear_Luigi_Normal',);
        this.LUIGI_OUTFIT =                 new MiiCostumes('Luigi Outfit',                 'All_Mario_Luigi',);

        this.PRINCESS_PEACH_WIG =           new MiiCostumes('Princess Peach Wig',           'Headwear_Peach_Normal',);
        this.PRINCESS_PEACH_DRESS =         new MiiCostumes('Princess Peach Dress',         'All_Peach_Normal',);
        this.PRINCESS_PEACH_TENNIS_OUTFIT = new MiiCostumes('Princess Peach Tennis Outfit', 'All_PeachTennis_Normal',);

        this.ROSALINA_WIG =                 new MiiCostumes('Rosalina Wig',                 'Headwear_Rosetta_Normal',);
        this.ROSALINA_DRESS =               new MiiCostumes('Rosalina Dress',               'All_Rosetta_Normal',);

        this.TOAD_CAP =                     new MiiCostumes('Toad Cap',                     'Headwear_Kinopio_Normal',);
        this.TOAD_OUTFIT =                  new MiiCostumes('Toad Outfit',                  'All_Kinopio_Normal',);

        this.YOSHI_HAT =                    new MiiCostumes('Yoshi Hat',                    'Headwear_Yoshi_Normal',);
        this.YOSHI_SUIT =                   new MiiCostumes('Yoshi Suit',                   'All_Yoshi_Normal',);

        this.BOWSER_HEADPIECE =             new MiiCostumes('Bowser Headpiece',             'Headwear_Koopa_Normal',);
        this.BOWSER_SUIT =                  new MiiCostumes('Bowser Suit',                  'All_Koopa_Normal',);
        this.BOWSER_JR_HEADPIECE =          new MiiCostumes('Bowser Jr. Headpiece',         'Headwear_KoopaJr_Normal',);
        this.SLOBBERY_SHIRT =               new MiiCostumes('Slobbery Shirt',               'Tops_KoopaJrScarf_Normal',);
        this.HOVER_CLOWN =                  new MiiCostumes('Hoverclown',                   'Bottoms_KoopaClown_Normal',);
        this.KOOPALING_HAWAIIAN_SHIRT =     new MiiCostumes('Koopaling Hawaiian Shirt',     'Tops_Boss',);
        this.MAGIKOOPA_HAT =                new MiiCostumes('Magikoopa Hat',                'Headwear_Kameck_Normal',);
        this.MAGIKOOPA_ROBES =              new MiiCostumes('Magikoopa Robes',              'All_Kameck_Normal',);

        this.CHEEP_CHEEP_HAT =              new MiiCostumes('Cheep Cheep Hat',              'Headwear_Pukupuku_Normal',);
        this.FACEPLANT =                    new MiiCostumes('Faceplant',                    'Headwear_Packun_Normal',);
        this.SHY_CAP =                      new MiiCostumes('Shy Cap',                      'Headwear_Teresa_Normal',);
        this.ROCKY_WRENCH_MANHOLE_LID =     new MiiCostumes('Rocky Wrench Manhole Lid',     'Headwear_Poo_Normal',);
        this.POKEY_HAT =                    new MiiCostumes('Pokey Hat',                    'Headwear_Sambo_Normal',);
        this.SNOW_POKEY_HAT =               new MiiCostumes('Snow Pokey Hat',               'Headwear_SamboSnow_Normal',);
        this.FIREWORKS_SHIRT =              new MiiCostumes('Fireworks Shirt',              'Tops_Shirt_Hanabi',);
        this.BANZAI_BILL_SHIRT =            new MiiCostumes('Banzai Bill Shirt',            'Tops_Shirt_Killer',);
        this.STAREDOWN_SHIRT =              new MiiCostumes('Staredown Shirt',              'Tops_Shirt_Gesso',);
        this.PARENT_AND_CHILD_SKIRT =       new MiiCostumes('Parent-and-Child Skirt',       'Bottoms_SkirtGesso_Normal',);
        this.CHOMP_DOG_SHIRT =              new MiiCostumes('Chomp-Dog Shirt',              'Tops_AnimShirt_Wanwan',);
        this.FISH_BONE_SHIRT =              new MiiCostumes('Fish Bone Shirt',              'Tops_Fishbone_Normal',);
        this.ANGRY_SUN_SHIRT =              new MiiCostumes('Angry Sun Shirt',              'Tops_Aloha_Sun',);
        this.HOT_HOT_SHIRT =                new MiiCostumes('Hot Hot Shirt',                'Tops_Firebar_Normal',);
        this.RUNNING_SHIRT =                new MiiCostumes('Running Shirt',                'Tops_Pyonchu_Normal',);
        this.PHANTO_HOODIE =                new MiiCostumes('Phanto Hoodie',                'Tops_Phanto',);
        this.SKULL_SKIRT =                  new MiiCostumes('Skull Skirt',                  'Bottoms_SkirtKillerHoudai_Normal',);
        this.BURNER_SKIRT =                 new MiiCostumes('Burner Skirt',                 'Bottoms_SkirtBurner_Normal',);
        this.WIND_UP_SHOE =                 new MiiCostumes('Wind-Up Shoe',                 'Bottoms_Kutsu_Normal',);
        this.STINGBY_SKIRT =                new MiiCostumes('Stingby Skirt',                'Bottoms_Hacchin_Normal',);
        this.THWOMP_SUIT =                  new MiiCostumes('Thwomp Suit',                  'All_Dossun_Normal',);
        this.GOOGOO_ONESIE =                new MiiCostumes('Googoo Onesie',                'All_Rompers_Normal',);
        this.KOOPA_TROOPA_SUIT =            new MiiCostumes('Koopa Troopa Suit',            'All_Nokonoko_Normal',);


        this.MUSHROOM_HAIRCLIP =            new MiiCostumes('Mushroom Hairclip',            'Headwear_KinokoMini_Red',);
        this.SUPER_MUSHROOM_SHIRT =         new MiiCostumes('Super Mushroom Shirt',         'Tops_Shirt_Kinoko',);
        this.SUPER_STAR_BARRETTE =          new MiiCostumes('Super Star Barrette',          'Headwear_Star_Normal',);
        this.SUPER_STAR_FLARES =            new MiiCostumes('Super Star Flares',            'Bottoms_WidePants_Star',);
        this.PIPE_HAT =                     new MiiCostumes('Pipe Hat',                     'Headwear_Dokan_Normal',);
        this.PIPE_SKIRT =                   new MiiCostumes('Pipe Skirt',                   'Bottoms_SkirtDokan_Normal',);
        this.PLATFORM_SKIRT =               new MiiCostumes('Platform Skirt',               'Bottoms_SkirtL_Wrap',);
        this.DOORDUROYS =                   new MiiCostumes('Doorduroys',                   'Bottoms_Pants_Door',);
        this.ANTSY_CORDUROYS =              new MiiCostumes('Antsy Corduroys',              'Bottoms_Pants_Arrow',);
        this.CLOUDWALKER =                  new MiiCostumes('Cloudwalker',                  'Bottoms_Jugemu_Normal',);
        this.BOUNCY_SKIRT =                 new MiiCostumes('Bouncy Skirt',                 'Bottoms_SkirtM_Marumaru',);
        this.SHORT_OF_DOOM =                new MiiCostumes('Shorts of Doom!',              'Bottoms_Shorts_Lift',);
        this.DASH_BLOCK_HOODIE =            new MiiCostumes('Dash Block Hoodie',            'Tops_BlockDash_Normal',);
        this.BIG_SPENDER_SHORTS =           new MiiCostumes('Big-Spender Shorts',           'Bottoms_Shorts_Coin',);
        this.QUESTION_MARK_BLOCK_HOODIE =   new MiiCostumes('? Block Hoodie',               'Tops_Hatena_Normal',);
        this.BLOCKSTRIPE_SHIRT =            new MiiCostumes('Blockstripe Shirt',            'Tops_Shirt_Border',);

        this.FRIED_CHICKEN_HEADGEAR =       new MiiCostumes('Fried-Chicken Headgear',       'Headwear_Karaage_Normal',);
        this.FRIED_CHICKEN_HOODIE =         new MiiCostumes('Fried-Chicken Hoodie',         'Tops_Karaage_Normal',);
        this.EDAMAME_BARRETTE =             new MiiCostumes('Edamame Barrette',             'Headwear_Edamame_Normal',);
        this.EDAMAME_CAMISOLE =             new MiiCostumes('Edamame Camisole',             'Tops_Camisole_Edamame',);
        this.I_LIKE_YOU_CAMISOLE =          new MiiCostumes('I-Like-You Camisole',          'Tops_Camisole_Nice',);
        this.WHITE_TANKTOP =                new MiiCostumes('White Tanktop',                'Tops_NokoTanktop_Normal',);
        this.LAUGHING_SHIRT =               new MiiCostumes('Laughing Shirt',               'Tops_Shirt_Warai',);
        this.MIDNIGHT_DRESS =               new MiiCostumes('Midnight Dress',               'All_OnePiece_Normal',);

        this.ROYAL_CROWN =                  new MiiCostumes('Royal Crown',                  'Headwear_King_Normal',);
        this.ROYAL_ATTIRE =                 new MiiCostumes('Royal Attire',                 'All_King_Normal',);
        this.FANCY_TOP_HAT =                new MiiCostumes('Fancy Top Hat',                'Headwear_Tuxedo_Normal',);
        this.FANCY_TUXEDO =                 new MiiCostumes('Fancy Tuxedo',                 'All_Tuxedo_Normal',);
        this.MATRIMONY_DRESS =              new MiiCostumes('Matrimony Dress',              'All_WhiteDress_Normal',);
        this.SUPERB_SUIT =                  new MiiCostumes('Superb Suit',                  'All_Splus_Normal',);

        this.ROBOT_CAP =                    new MiiCostumes('Robot Cap',                    'Headwear_Robot_Normal',);
        this.ROBOT_SUIT =                   new MiiCostumes('Robot Suit',                   'All_Robot_Normal',);
        this.FROG_CAP =                     new MiiCostumes('Frog Cap',                     'Headwear_Otogaeru_Normal',);
        this.REFRESHING_SHIRT =             new MiiCostumes('Refreshing Shirt',             'Tops_Shirt_Keshigom',);
        this.PARTRICK_SHIRT =               new MiiCostumes('Partrick Shirt',               'Tops_Partskun_Normal',);
        this.YAMAMURA_SHIRT =               new MiiCostumes('Yamamura Shirt',               'Tops_Nosleeve_Yamamura',);
        this.RESET_DRESS =                  new MiiCostumes('Reset Dress',                  'All_Rocket_Normal',);

        this.NINJI_CAP =                    new MiiCostumes('Ninji Cap',                    'Headwear_Hakkun_Normal',);
        this.NINJI_SHIRT =                  new MiiCostumes('Ninji Shirt',                  'Tops_Hakkun',);
        this.NINJI_SLACKS =                 new MiiCostumes('Ninji Slacks',                 'Bottoms_Hakkun',);
        this.NINJI_GARB =                   new MiiCostumes('Ninji Garb',                   'All_Hakkun',);
        this.CHEETAH_HEADGEAR =             new MiiCostumes('Cheetah Headgear',             'Headwear_Cheetah_Normal',);
        this.CHEETAH_TANKTOP =              new MiiCostumes('Cheetah Tanktop',              'Tops_CheetahTanktop_Normal',);
        this.CHEETAH_RUNNERS =              new MiiCostumes('Cheetah Runners',              'Bottoms_Cheetah',);
        this.CHEETAH_SUIT =                 new MiiCostumes('Cheetah Suit',                 'All_Cheetah',);

        this.FIRE_MARIO_SHIRT =             new MiiCostumes('Fire Mario Shirt',             'Tops_SkinM1',);
        this.RACOON_MARIO_SHIRT =           new MiiCostumes('Racoon Mario Shirt',           'Tops_SkinM3',);
        this.CAPE_MARIO_SHIRT =             new MiiCostumes('Cape Mario Shirt',             'Tops_SkinMW',);
        this.FLYING_SQUIRREL_MARIO_SHIRT =  new MiiCostumes('Flying Squirrel Mario Shirt',  'Tops_SkinMU',);
        this.CAT_MARIO_SHIRT =              new MiiCostumes('Cat Mario Shirt',              'Tops_Skin3W',);

        this.WORLD_WEAR =                   new MiiCostumes('World Wear',                   'All_MapWorld',);
    }

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
        this.#imagePath = `/${BASE_PATH}/Mii costume/${imageName}.tiff`;
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

    protected override get _static(): StaticReference<MiiCostumes> {
        return MiiCostumes;
    }

    //region -------------------- Enum value methods --------------------

    protected static override _getValueByString(value: string,) {
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

    //endregion -------------------- Enum value methods --------------------

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}
