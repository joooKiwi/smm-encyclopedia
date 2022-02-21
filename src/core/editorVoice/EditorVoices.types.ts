import type {EditorVoices as RealEnum}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              from './EditorVoices';
import type {Entities}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              from '../entity/Entities';
import type {EnumByName as OriginalEnumByName, EnumByNumber as OriginalEnumByNumber, EnumByOrdinal as OriginalEnumByOrdinal, EnumByPossibleString as OriginalEnumByPossibleString, EnumByString as OriginalEnumByString, SimpleEnum as OriginalSimpleEnum}                                                                                                                                                                                                                                                                                          from '../../util/enum/Enum.types';
import type {PossibleEnglishName as PossibleEnglishName_Entity, PossibleEnglishName_BanzaiBill, PossibleEnglishName_BeachKoopa, PossibleEnglishName_BigMushroom, PossibleEnglishName_Block, PossibleEnglishName_BulletBill, PossibleEnglishName_BuzzyBeetleAndShell, PossibleEnglishName_DryBones, PossibleEnglishName_Goals, PossibleEnglishName_HardBlock, PossibleEnglishName_KoopaShell, PossibleEnglishName_KoopaTroopa, PossibleEnglishName_Shoe, PossibleEnglishName_SpikeTop, PossibleEnglishName_SpinyAndShell, PossibleEnglishName_Yoshi} from '../entity/Entities.types';


export type PossibleNonNullableValue = | RealEnum | Ordinals | PossibleStringValue;
export type PossibleStringValue = | Names | PossibleEnglishName;
export type PossibleValue = | RealEnum | Entities | number | string | null | undefined;

enum Enum {

    //region -------------------- Ground / Pipe / Spike / Platform --------------------

    GROUND, START_GROUND, GOAL_GROUND,
    STEEP_SLOPE, GENTLE_SLOPE,
    PIPE, CLEAR_PIPE,
    SPIKE_TRAP, JELECTRO, SEA_URCHIN, SPIKE_BLOCK,
    MUSHROOM_PLATFORM, SEMISOLID_PLATFORM, BRIDGE,

    //endregion -------------------- Ground / Pipe / Spike / Platform --------------------
    //region -------------------- Block / Coin --------------------

    BLOCK,
    HARD_BLOCK,
    QUESTION_MARK_BLOCK, HIDDEN_BLOCK,
    EXCLAMATION_MARK_BLOCK,
    NOTE_BLOCK,
    DONUT_BLOCK,
    CLOUD_BLOCK,
    ON_OFF_SWITCH, DOTTED_LINE_BLOCK,
    P_BLOCK,
    BLINKING_BLOCK,
    ICE_BLOCK, ICICLE,
    COIN, FROZEN_COIN,
    TEN_COIN, THIRTY_COIN, FIFTY_COIN,
    PINK_COIN,

    //endregion -------------------- Block / Coin --------------------
    //region -------------------- Power-up / Yoshi / Shoe + projectiles & player --------------------

    SUPER_MUSHROOM,
    SUPER_MARIO, SUPER_LUIGI, SUPER_TOAD, SUPER_TOADETTE,

    FIRE_FLOWER,
    FIRE_MARIO, FIRE_LUIGI, FIRE_TOAD, FIRE_TOADETTE,

    SUPERBALL_FLOWER,
    SUPERBALL_MARIO, SUPERBALL_LUIGI, SUPERBALL_TOAD, SUPERBALL_TOADETTE,

    MYSTERY_MUSHROOM,
    COSTUME_MARIO,

    WEIRD_MUSHROOM,
    WEIRD_MARIO,

    MASTER_SWORD,
    LINK,

    BIG_MUSHROOM_SMM1, BIG_MUSHROOM_SMM2,
    BIG_MARIO, BIG_LUIGI, BIG_TOAD, BIG_TOADETTE,

    SMB2_MUSHROOM,
    SMB2_MARIO, SMB2_LUIGI, SMB2_TOAD, SMB2_TOADETTE,

    SUPER_LEAF,
    RACCOON_MARIO, RACCOON_LUIGI, RACCOON_TOAD, RACCOON_TOADETTE,

    FROG_SUIT,
    FROG_MARIO, FROG_LUIGI, FROG_TOAD, FROG_TOADETTE,

    CAPE_FEATHER,
    CAPE_MARIO, CAPE_LUIGI, CAPE_TOAD, CAPE_TOADETTE,

    POWER_BALLOON,
    BALLOON_MARIO, BALLOON_LUIGI, BALLOON_TOAD, BALLOON_TOADETTE,

    PROPELLER_MUSHROOM,
    PROPELLER_MARIO, PROPELLER_LUIGI, PROPELLER_TOAD, PROPELLER_TOADETTE,

    SUPER_ACORN,
    FLYING_SQUIRREL_MARIO, FLYING_SQUIRREL_LUIGI, FLYING_SQUIRREL_TOAD, FLYING_SQUIRREL_TOADETTE,

    SUPER_BELL,
    CAT_MARIO, CAT_LUIGI, CAT_TOAD, CAT_TOADETTE,

    SUPER_HAMMER,
    BUILDER_MARIO, BUILDER_LUIGI, BUILDER_TOAD, BUILDER_TOADETTE,

    BOOMERANG_FLOWER,
    BOOMERANG_MARIO, BOOMERANG_LUIGI, BOOMERANG_TOAD, BOOMERANG_TOADETTE,

    CANNON_BOX,
    PROPELLER_BOX,
    GOOMBA_MASK,
    BULLET_BILL_MASK,
    RED_POW_BOX,
    SUPER_STAR,
    ONE_UP_MUSHROOM, ROTTEN_MUSHROOM,

    SHOE_GOOMBA, STILETTO_GOOMBA,
    YOSHI_EGG, RED_YOSHI_EGG,

    //endregion -------------------- Power-up / Yoshi / Shoe + projectiles & player --------------------
    //region -------------------- General enemies --------------------

    GOOMBA, GALOOMBA, GOOMBRAT, GOOMBUD,
    KOOPA_TROOPA,
    DRY_BONES, DRY_BONES_SHELL,
    BUZZY_BEETLE,
    SPINY,
    SPIKE_TOP,
    SKIPSQUEAK, SPINY_SKIPSQUEAK,
    ANT_TROOPER, HORNED_ANT_TROOPER,
    STINGBY,
    CHEEP_CHEEP, FISH_BONE,
    BLOOPER, BLOOPER_NANNY,
    PORCUPUFFER,
    WIGGLER, ANGRY_WIGGLER,
    PIRANHA_PLANT, JUMPING_PIRANHA_PLANT, FIRE_PIRANHA_PLANT,
    MUNCHER,
    PIRANHA_CREEPER,
    CHAIN_CHOMP, UNCHAINED_CHOMP,
    SPIKE, SPIKE_BALL, SNOWBALL,
    LAKITU, LAKITU_CLOUD,
    BOO, STRETCH, BOO_BUDDIES, PEEPA,
    BOB_OMB, LIT_BOB_OMB,
    POKEY, SNOW_POKEY,
    THWOMP,
    MONTY_MOLE, ROCKY_WRENCH,
    MAGIKOOPA,
    HAMMER_BRO, SLEDGE_BRO,
    FIRE_BRO, HEAVY_FIRE_BRO,
    LAVA_BUBBLE,
    MECHAKOOPA, BLASTA_MECHAKOOPA, ZAPPA_MECHAKOOPA,
    CHARVAARGH,
    BULLY,

    //endregion -------------------- General enemies --------------------
    //region -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------

    BILL_BLASTER,
    BULL_EYE_BLASTER,
    BANZAI_BILL, BULL_EYE_BANZAI,
    CANNON, RED_CANNON,
    BURNER,
    FIRE_BAR,
    SKEWER,
    KOOPA_CLOWN_CAR, JUNIOR_CLOWN_CAR, FIRE_KOOPA_CLOWN_CAR, FIRE_JUNIOR_CLOWN_CAR,
    KOOPA_TROOPA_CAR,
    GRINDER,
    SUN, MOON,

    //endregion -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------
    //region -------------------- Bosses + projectiles --------------------

    BOWSER, MEOWSER,
    BOWSER_JR,
    BOOM_BOOM, POM_POM,
    LARRY,
    IGGY,
    WENDY,
    LEMMY,
    ROY,
    MORTON,
    LUDWIG,

    //endregion -------------------- Bosses + projectiles --------------------
    //region -------------------- Passive gizmo / Key / Warp / Other --------------------

    BUMPER,
    SWINGING_CLAW,
    TWISTER,
    ONE_WAY_WALL,
    TRACK, TRACK_BLOCK,
    VINE, TREE,
    ARROW_SIGN,
    CHECKPOINT_FLAG,
    DASH_BLOCK,
    SNAKE_BLOCK, FAST_SNAKE_BLOCK,
    CONVEYOR_BELT, FAST_CONVEYOR_BELT,
    MUSHROOM_TRAMPOLINE, ON_OFF_TRAMPOLINE,
    LIFT, FLIMSY_LIFT, CLOUD_LIFT,
    SEESAW,
    LAVA_LIFT, FAST_LAVA_LIFT,
    CRATE,
    KEY, CURSED_KEY,
    TRAMPOLINE, HOP_CHOPS,
    POW_BLOCK, RED_POW_BLOCK,
    P_SWITCH,
    WARP_DOOR, P_WARP_DOOR, KEY_DOOR,
    WARP_BOX, WARP_BOX_WITH_KEY,
    WING,

    //endregion -------------------- Passive gizmo / Key / Warp / Other --------------------

}

//region -------------------- Number types --------------------

export type Ordinals = typeof Enum[Names];

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type Names = keyof typeof Enum;

//region -------------------- English name --------------------

type PossibleEnglishName_Projectile = ''//TODO change to every projectile name
type PossibleEnglishName_Object = ''//TODO change to every object name
type PossibleEnglishName_Character =
    | `${| 'Costume' | 'Weird'} Mario`
    | 'Link'
    | `${| 'Super' | 'Fire'
         | 'Superball' | 'Big' | 'SMB2'
         | 'Raccoon' | 'Frog'
         | 'Cape' | 'Balloon'
         | 'Propeller' | 'Flying Squirrel'
         | 'Cat' | 'Builder' | 'Boomerang'} ${| 'Mario' | 'Luigi' | 'Toad' | 'Toadette'}`//TODO change to every character name
export type PossibleEnglishName_OnlyEntity =
    Exclude<PossibleEnglishName_Entity,
        | PossibleEnglishName_BigMushroom | PossibleEnglishName_Shoe | PossibleEnglishName_Yoshi
        | PossibleEnglishName_Block | Exclude<PossibleEnglishName_HardBlock, 'Hard Block'>
        | PossibleEnglishName_KoopaTroopa | PossibleEnglishName_BeachKoopa | PossibleEnglishName_KoopaShell
        | Exclude<PossibleEnglishName_DryBones, 'Dry Bones'> | Exclude<PossibleEnglishName_BuzzyBeetleAndShell, 'Buzzy Beetle'>
        | Exclude<PossibleEnglishName_SpinyAndShell, 'Spiny'> | Exclude<PossibleEnglishName_SpikeTop, 'Spike Top'>
        | PossibleEnglishName_BulletBill | Extract<PossibleEnglishName_BanzaiBill, 'Cat Banzai Bill'>
        | 'Empty Block' | 'Chain Chomp\'s Stump' | 'Angry Sun'
        | PossibleEnglishName_Goals | 'Phanto' | 'Stone' | 'Parachute' | 'Bubble'
        | PossibleEnglishName_Projectile | PossibleEnglishName_Object>;
export type PossibleEnglishName = | PossibleEnglishName_OnlyEntity
                                  | PossibleEnglishName_Character
                                  | 'Koopa Troopa' | 'Block' | `Big Mushroom (SMM${| 1 | 2})` | 'Sun';

//endregion -------------------- English name --------------------

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEnum<E extends RealEnum = RealEnum, > = OriginalSimpleEnum<Names, E>;

export type EnumByOrdinal<O extends Ordinals = Ordinals, E extends RealEnum = RealEnum, > = OriginalEnumByOrdinal<EnumArray<E>, O, E>;
export type EnumByNumber<O extends number = number, E extends RealEnum = RealEnum, > = OriginalEnumByNumber<EnumArray<E>, O>;

export type EnumByName<N extends Names, E extends RealEnum = RealEnum, > = OriginalEnumByName<N, E>;
export type EnumByPossibleString<S extends PossibleStringValue, E extends RealEnum = RealEnum, > = OriginalEnumByPossibleString<S, Names, E>;
export type EnumByString<S extends string, E extends RealEnum = RealEnum, > = OriginalEnumByString<S, PossibleStringValue, Names, E>;

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type EnumArray<E extends RealEnum = RealEnum, > = readonly [
    EnumByName<'GROUND', E>, EnumByName<'START_GROUND', E>, EnumByName<'GOAL_GROUND', E>,
    EnumByName<'STEEP_SLOPE', E>, EnumByName<'GENTLE_SLOPE', E>,
    EnumByName<'PIPE', E>, EnumByName<'CLEAR_PIPE', E>,
    EnumByName<'SPIKE_TRAP', E>, EnumByName<'JELECTRO', E>, EnumByName<'SEA_URCHIN', E>, EnumByName<'SPIKE_BLOCK', E>,
    EnumByName<'MUSHROOM_PLATFORM', E>, EnumByName<'SEMISOLID_PLATFORM', E>, EnumByName<'BRIDGE', E>,

    EnumByName<'BLOCK', E>,
    EnumByName<'HARD_BLOCK', E>,
    EnumByName<'QUESTION_MARK_BLOCK', E>, EnumByName<'HIDDEN_BLOCK', E>,
    EnumByName<'EXCLAMATION_MARK_BLOCK', E>,
    EnumByName<'NOTE_BLOCK', E>,
    EnumByName<'DONUT_BLOCK', E>,
    EnumByName<'CLOUD_BLOCK', E>,
    EnumByName<'ON_OFF_SWITCH', E>, EnumByName<'DOTTED_LINE_BLOCK', E>,
    EnumByName<'P_BLOCK', E>,
    EnumByName<'BLINKING_BLOCK', E>,
    EnumByName<'ICE_BLOCK', E>, EnumByName<'ICICLE', E>,
    EnumByName<'COIN', E>, EnumByName<'FROZEN_COIN', E>,
    EnumByName<'TEN_COIN', E>, EnumByName<'THIRTY_COIN', E>, EnumByName<'FIFTY_COIN', E>,
    EnumByName<'PINK_COIN', E>,

    EnumByName<'SUPER_MUSHROOM', E>,
    EnumByName<'SUPER_MARIO', E>, EnumByName<'SUPER_LUIGI', E>, EnumByName<'SUPER_TOAD', E>, EnumByName<'SUPER_TOADETTE', E>,

    EnumByName<'FIRE_FLOWER', E>,
    EnumByName<'FIRE_MARIO', E>, EnumByName<'FIRE_LUIGI', E>, EnumByName<'FIRE_TOAD', E>, EnumByName<'FIRE_TOADETTE', E>,

    EnumByName<'SUPERBALL_FLOWER', E>,
    EnumByName<'SUPERBALL_MARIO', E>, EnumByName<'SUPERBALL_LUIGI', E>, EnumByName<'SUPERBALL_TOAD', E>, EnumByName<'SUPERBALL_TOADETTE', E>,

    EnumByName<'MYSTERY_MUSHROOM', E>,
    EnumByName<'COSTUME_MARIO', E>,

    EnumByName<'WEIRD_MUSHROOM', E>,
    EnumByName<'WEIRD_MARIO', E>,

    EnumByName<'MASTER_SWORD', E>,
    EnumByName<'LINK', E>,

    EnumByName<'BIG_MUSHROOM_SMM1', E>, EnumByName<'BIG_MUSHROOM_SMM2', E>,
    EnumByName<'BIG_MARIO', E>, EnumByName<'BIG_LUIGI', E>, EnumByName<'BIG_TOAD', E>, EnumByName<'BIG_TOADETTE', E>,

    EnumByName<'SMB2_MUSHROOM', E>,
    EnumByName<'SMB2_MARIO', E>, EnumByName<'SMB2_LUIGI', E>, EnumByName<'SMB2_TOAD', E>, EnumByName<'SMB2_TOADETTE', E>,

    EnumByName<'SUPER_LEAF', E>,
    EnumByName<'RACCOON_MARIO', E>, EnumByName<'RACCOON_LUIGI', E>, EnumByName<'RACCOON_TOAD', E>, EnumByName<'RACCOON_TOADETTE', E>,

    EnumByName<'FROG_SUIT', E>,
    EnumByName<'FROG_MARIO', E>, EnumByName<'FROG_LUIGI', E>, EnumByName<'FROG_TOAD', E>, EnumByName<'FROG_TOADETTE', E>,

    EnumByName<'CAPE_FEATHER', E>,
    EnumByName<'CAPE_MARIO', E>, EnumByName<'CAPE_LUIGI', E>, EnumByName<'CAPE_TOAD', E>, EnumByName<'CAPE_TOADETTE', E>,

    EnumByName<'POWER_BALLOON', E>,
    EnumByName<'BALLOON_MARIO', E>, EnumByName<'BALLOON_LUIGI', E>, EnumByName<'BALLOON_TOAD', E>, EnumByName<'BALLOON_TOADETTE', E>,

    EnumByName<'PROPELLER_MUSHROOM', E>,
    EnumByName<'PROPELLER_MARIO', E>, EnumByName<'PROPELLER_LUIGI', E>, EnumByName<'PROPELLER_TOAD', E>, EnumByName<'PROPELLER_TOADETTE', E>,

    EnumByName<'SUPER_ACORN', E>,
    EnumByName<'FLYING_SQUIRREL_MARIO', E>, EnumByName<'FLYING_SQUIRREL_LUIGI', E>, EnumByName<'FLYING_SQUIRREL_TOAD', E>, EnumByName<'FLYING_SQUIRREL_TOADETTE', E>,

    EnumByName<'SUPER_BELL', E>,
    EnumByName<'CAT_MARIO', E>, EnumByName<'CAT_LUIGI', E>, EnumByName<'CAT_TOAD', E>, EnumByName<'CAT_TOADETTE', E>,

    EnumByName<'SUPER_HAMMER', E>,
    EnumByName<'BUILDER_MARIO', E>, EnumByName<'BUILDER_LUIGI', E>, EnumByName<'BUILDER_TOAD', E>, EnumByName<'BUILDER_TOADETTE', E>,

    EnumByName<'BOOMERANG_FLOWER', E>,
    EnumByName<'BOOMERANG_MARIO', E>, EnumByName<'BOOMERANG_LUIGI', E>, EnumByName<'BOOMERANG_TOAD', E>, EnumByName<'BOOMERANG_TOADETTE', E>,

    EnumByName<'CANNON_BOX', E>,
    EnumByName<'PROPELLER_BOX', E>,
    EnumByName<'GOOMBA_MASK', E>,
    EnumByName<'BULLET_BILL_MASK', E>,
    EnumByName<'RED_POW_BOX', E>,
    EnumByName<'SUPER_STAR', E>,
    EnumByName<'ONE_UP_MUSHROOM', E>, EnumByName<'ROTTEN_MUSHROOM', E>,

    EnumByName<'SHOE_GOOMBA', E>, EnumByName<'STILETTO_GOOMBA', E>,
    EnumByName<'YOSHI_EGG', E>, EnumByName<'RED_YOSHI_EGG', E>,

    EnumByName<'GOOMBA', E>, EnumByName<'GALOOMBA', E>, EnumByName<'GOOMBRAT', E>, EnumByName<'GOOMBUD', E>,
    EnumByName<'KOOPA_TROOPA', E>,
    EnumByName<'DRY_BONES', E>, EnumByName<'DRY_BONES_SHELL', E>,
    EnumByName<'BUZZY_BEETLE', E>,
    EnumByName<'SPINY', E>,
    EnumByName<'SPIKE_TOP', E>,
    EnumByName<'SKIPSQUEAK', E>, EnumByName<'SPINY_SKIPSQUEAK', E>,
    EnumByName<'ANT_TROOPER', E>, EnumByName<'HORNED_ANT_TROOPER', E>,
    EnumByName<'STINGBY', E>,
    EnumByName<'CHEEP_CHEEP', E>, EnumByName<'FISH_BONE', E>,
    EnumByName<'BLOOPER', E>, EnumByName<'BLOOPER_NANNY', E>,
    EnumByName<'PORCUPUFFER', E>,
    EnumByName<'WIGGLER', E>, EnumByName<'ANGRY_WIGGLER', E>,
    EnumByName<'PIRANHA_PLANT', E>, EnumByName<'JUMPING_PIRANHA_PLANT', E>, EnumByName<'FIRE_PIRANHA_PLANT', E>,
    EnumByName<'MUNCHER', E>,
    EnumByName<'PIRANHA_CREEPER', E>,
    EnumByName<'CHAIN_CHOMP', E>, EnumByName<'UNCHAINED_CHOMP', E>,
    EnumByName<'SPIKE', E>, EnumByName<'SPIKE_BALL', E>, EnumByName<'SNOWBALL', E>,
    EnumByName<'LAKITU', E>, EnumByName<'LAKITU_CLOUD', E>,
    EnumByName<'BOO', E>, EnumByName<'STRETCH', E>, EnumByName<'BOO_BUDDIES', E>, EnumByName<'PEEPA', E>,
    EnumByName<'BOB_OMB', E>, EnumByName<'LIT_BOB_OMB', E>,
    EnumByName<'POKEY', E>, EnumByName<'SNOW_POKEY', E>,
    EnumByName<'THWOMP', E>,
    EnumByName<'MONTY_MOLE', E>, EnumByName<'ROCKY_WRENCH', E>,
    EnumByName<'MAGIKOOPA', E>,
    EnumByName<'HAMMER_BRO', E>, EnumByName<'SLEDGE_BRO', E>,
    EnumByName<'FIRE_BRO', E>, EnumByName<'HEAVY_FIRE_BRO', E>,
    EnumByName<'LAVA_BUBBLE', E>,
    EnumByName<'MECHAKOOPA', E>, EnumByName<'BLASTA_MECHAKOOPA', E>, EnumByName<'ZAPPA_MECHAKOOPA', E>,
    EnumByName<'CHARVAARGH', E>,
    EnumByName<'BULLY', E>,

    EnumByName<'BILL_BLASTER', E>, EnumByName<'BULL_EYE_BLASTER', E>,
    EnumByName<'BANZAI_BILL', E>, EnumByName<'BULL_EYE_BANZAI', E>,
    EnumByName<'CANNON', E>, EnumByName<'RED_CANNON', E>,
    EnumByName<'BURNER', E>,
    EnumByName<'FIRE_BAR', E>,
    EnumByName<'SKEWER', E>,
    EnumByName<'KOOPA_CLOWN_CAR', E>, EnumByName<'JUNIOR_CLOWN_CAR', E>, EnumByName<'FIRE_KOOPA_CLOWN_CAR', E>, EnumByName<'FIRE_JUNIOR_CLOWN_CAR', E>,
    EnumByName<'KOOPA_TROOPA_CAR', E>,
    EnumByName<'GRINDER', E>,
    EnumByName<'SWINGING_CLAW', E>,
    EnumByName<'SUN', E>, EnumByName<'MOON', E>,

    EnumByName<'BOWSER', E>, EnumByName<'MEOWSER', E>,
    EnumByName<'BOWSER_JR', E>,
    EnumByName<'BOOM_BOOM', E>, EnumByName<'POM_POM', E>,
    EnumByName<'LARRY', E>,
    EnumByName<'IGGY', E>,
    EnumByName<'WENDY', E>,
    EnumByName<'LEMMY', E>,
    EnumByName<'ROY', E>,
    EnumByName<'MORTON', E>,
    EnumByName<'LUDWIG', E>,

    EnumByName<'BUMPER', E>,
    EnumByName<'TWISTER', E>,
    EnumByName<'ONE_WAY_WALL', E>,
    EnumByName<'TRACK', E>, EnumByName<'TRACK_BLOCK', E>,
    EnumByName<'VINE', E>, EnumByName<'TREE', E>,
    EnumByName<'ARROW_SIGN', E>,
    EnumByName<'CHECKPOINT_FLAG', E>,
    EnumByName<'DASH_BLOCK', E>,
    EnumByName<'SNAKE_BLOCK', E>, EnumByName<'FAST_SNAKE_BLOCK', E>,
    EnumByName<'CONVEYOR_BELT', E>, EnumByName<'FAST_CONVEYOR_BELT', E>,
    EnumByName<'MUSHROOM_TRAMPOLINE', E>, EnumByName<'ON_OFF_TRAMPOLINE', E>,
    EnumByName<'LIFT', E>, EnumByName<'FLIMSY_LIFT', E>, EnumByName<'CLOUD_LIFT', E>,
    EnumByName<'SEESAW', E>,
    EnumByName<'LAVA_LIFT', E>, EnumByName<'FAST_LAVA_LIFT', E>,
    EnumByName<'CRATE', E>,
    EnumByName<'KEY', E>, EnumByName<'CURSED_KEY', E>,
    EnumByName<'TRAMPOLINE', E>, EnumByName<'HOP_CHOPS', E>,
    EnumByName<'POW_BLOCK', E>, EnumByName<'RED_POW_BLOCK', E>,
    EnumByName<'P_SWITCH', E>,
    EnumByName<'WARP_DOOR', E>, EnumByName<'P_WARP_DOOR', E>, EnumByName<'KEY_DOOR', E>,
    EnumByName<'WARP_BOX', E>, EnumByName<'WARP_BOX_WITH_KEY', E>,
    EnumByName<'WING', E>,
];

//endregion -------------------- Array types --------------------
