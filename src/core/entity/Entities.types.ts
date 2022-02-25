import type {Entities as RealEnum}                                                                                                                                                                                                                         from './Entities';
import type {EnumByName as OriginalEnumByName, EnumByNumber as OriginalEnumByNumber, EnumByOrdinal as OriginalEnumByOrdinal, EnumByPossibleString as OriginalEnumByPossibleString, EnumByString as OriginalEnumByString, SimpleEnum as OriginalSimpleEnum} from '../../util/enum/Enum.types';


export type PossibleNonNullableValue = | RealEnum | Ordinals | PossibleStringValue;
export type PossibleStringValue = | Names | PossibleEnglishName;
export type PossibleValue = | RealEnum | number | string | null | undefined;

enum Enum {

    //region -------------------- Ground / Pipe / Spike / Platform --------------------

    GROUND, START_GROUND, GOAL_GROUND,
    STEEP_SLOPE, GENTLE_SLOPE,
    WATER, LAVA, POISON,
    PIPE, CLEAR_PIPE,
    SPIKE_TRAP, JELECTRO, SEA_URCHIN, SPIKE_BLOCK,
    MUSHROOM_PLATFORM, SEMISOLID_PLATFORM, BRIDGE,

    //endregion -------------------- Ground / Pipe / Spike / Platform --------------------
    //region -------------------- Block / Coin --------------------

    BRICK_BLOCK, CRISTAL_BLOCK, ROTATING_BLOCK,
    HARD_BLOCK, ROCK_BLOCK,
    QUESTION_MARK_BLOCK, HIDDEN_BLOCK, EMPTY_BLOCK,
    EXCLAMATION_MARK_BLOCK,
    NOTE_BLOCK, MUSIC_BLOCK,
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
    //region -------------------- Power-up / Yoshi / Shoe + projectiles --------------------

    SUPER_MUSHROOM,
    FIRE_FLOWER, FIREBALL_THROWN_BY_A_PLAYER,
    SUPERBALL_FLOWER, SUPERBALL_THROWN_BY_A_PLAYER,
    MYSTERY_MUSHROOM, WEIRD_MUSHROOM,
    MASTER_SWORD, BOMB_THROWN_BY_A_LINK, ARROW_THROWN_BY_A_LINK,
    BIG_MUSHROOM, BIG_MUSHROOM_CLASSIC, BIG_MUSHROOM_MODERN,
    SMB2_MUSHROOM,
    SUPER_LEAF, FROG_SUIT,
    CAPE_FEATHER, POWER_BALLOON,
    PROPELLER_MUSHROOM, SUPER_ACORN,
    SUPER_BELL,
    SUPER_HAMMER, BUILDER_BOX_THROWN_BY_A_PLAYER,
    BOOMERANG_FLOWER, BOOMERANG_THROWN_BY_A_PLAYER,
    CANNON_BOX, CANNONBALL_THROWN_BY_A_PLAYER,
    PROPELLER_BOX,
    GOOMBA_MASK,
    BULLET_BILL_MASK,
    RED_POW_BOX,
    SUPER_STAR,
    ONE_UP_MUSHROOM, ROTTEN_MUSHROOM,

    SHOE_GOOMBA, SHOE,
    STILETTO_GOOMBA, STILETTO,
    YOSHI_EGG, YOSHI, FIRE_THROWN_BY_A_YOSHI, POISON_THROWN_BY_A_YOSHI, BONE_THROWN_BY_A_YOSHI, HAMMER_THROWN_BY_A_YOSHI,
    RED_YOSHI_EGG, RED_YOSHI, FIRE_THROWN_BY_A_RED_YOSHI,

    //endregion -------------------- Power-up / Yoshi / Shoe + projectiles --------------------
    //region -------------------- General enemies --------------------

    GOOMBA, GALOOMBA, GOOMBRAT, GOOMBUD,
    GREEN_KOOPA_TROOPA, RED_KOOPA_TROOPA,
    GREEN_BEACH_KOOPA, RED_BEACH_KOOPA,
    GREEN_KOOPA_SHELL, RED_KOOPA_SHELL,
    DRY_BONES, PARABONES, BONE_THROWN_BY_A_DRY_BONES, DRY_BONES_SHELL,
    BUZZY_BEETLE, PARA_BEETLE, BUZZY_SHELL,
    SPINY, WINGED_SPINY, WINGED_SPINY_PROJECTILE, SPINY_EGG, SPINY_SHELL,
    SPIKE_TOP, WINGED_SPIKE_TOP, FAST_SPIKE_TOP, FAST_WINGED_SPIKE_TOP,
    SKIPSQUEAK, SPINY_SKIPSQUEAK,
    ANT_TROOPER, HORNED_ANT_TROOPER,
    STINGBY,
    CHEEP_CHEEP, BLURPS, DEEP_CHEEP, FISH_BONE,
    BLOOPER, BLOOPER_NANNY, BABY_BLOOPER,
    PORCUPUFFER,
    WIGGLER, ANGRY_WIGGLER,
    PIRANHA_PLANT, JUMPING_PIRANHA_PLANT, FIRE_PIRANHA_PLANT, FIREBALL_THROWN_BY_A_FIRE_PIRANHA_PLANT,
    MUNCHER,
    PIRANHA_CREEPER,
    CHAIN_CHOMP, UNCHAINED_CHOMP, CHAIN_CHOMP_STUMP,
    SPIKE, SPIKE_BALL, SNOWBALL,
    LAKITU, LAKITU_CLOUD,
    BOO, STRETCH, BOO_BUDDIES, PEEPA,
    BOB_OMB, LIT_BOB_OMB,
    POKEY, SNOW_POKEY,
    THWOMP,
    MONTY_MOLE, ROCKY_WRENCH, WRENCH_THROWN_BY_A_ROCKY_WRENCH,
    MAGIKOOPA, MAGIKOOPA_PROJECTILE,
    HAMMER_BRO, SLEDGE_BRO, HAMMER_THROWN_BY_A_HAMMER_SLEDGE_BRO,
    FIRE_BRO, HEAVY_FIRE_BRO, FIREBALL_THROWN_BY_A_HEAVY_FIRE_BRO,
    LAVA_BUBBLE,
    MECHAKOOPA, BLASTA_MECHAKOOPA, HOMING_MISSILE_THROWN_BY_A_BLASTA_MECHAKOOPA, ZAPPA_MECHAKOOPA, ELECTRICITY_BEAM_THROWN_BY_A_ZAPPA_MECHAKOOPA,
    CHARVAARGH,
    BULLY,

    //endregion -------------------- General enemies --------------------
    //region -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------

    BILL_BLASTER, BULLET_BILL,
    BULL_EYE_BLASTER, BULL_EYE_BILL, CAT_BULLET_BILL,
    BANZAI_BILL, BULL_EYE_BANZAI, CAT_BANZAI_BILL,
    CANNON, CANNONBALL, RED_CANNON, RED_CANNONBALL,
    BURNER,
    FIRE_BAR,
    SKEWER,
    KOOPA_CLOWN_CAR, JUNIOR_CLOWN_CAR, FIRE_KOOPA_CLOWN_CAR, FIRE_JUNIOR_CLOWN_CAR, FIRE_THROWN_BY_A_FIRE_KOOPA_JUNIOR_CLOWN_CAR,
    KOOPA_TROOPA_CAR, CAR,
    GRINDER,
    ANGRY_SUN, MOON,

    //endregion -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------
    //region -------------------- Bosses + projectiles --------------------

    BOWSER, MEOWSER, FIRE_THROWN_BY_A_BOWSER, FALLING_FIRE_THROWN_BY_A_BOWSER,
    BOWSER_JR, FIRE_THROWN_BY_A_BOWSER_JR,
    BOOM_BOOM, POM_POM, POM_POM_CLONE, SHURIKEN_THROWN_BY_A_POM_POM,
    LARRY, LARRY_WAND, LARRY_PROJECTILE,
    IGGY, IGGY_WAND, IGGY_PROJECTILE,
    WENDY, WENDY_WAND, CANDY_RING_THROWN_BY_A_WENDY,
    LEMMY, LEMMY_WAND, MAGIC_BALL_THROWN_BY_A_LEMMY,
    ROY, ROY_WAND, ROY_PROJECTILE,
    MORTON, MORTON_WAND, MORTON_THROWN_PROJECTILE, MORTON_GROUND_PROJECTILE,
    LUDWIG, LUDWIG_WAND, LUDWIG_PROJECTILE,

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
    GOAL_POLE, GOAL_WITH_CARDS, GIANT_GATE,
    DASH_BLOCK,
    SNAKE_BLOCK, FAST_SNAKE_BLOCK,
    CONVEYOR_BELT, FAST_CONVEYOR_BELT,
    MUSHROOM_TRAMPOLINE, ON_OFF_TRAMPOLINE,
    LIFT, FLIMSY_LIFT, CLOUD_LIFT,
    SEESAW,
    LAVA_LIFT, FAST_LAVA_LIFT,
    CRATE,
    KEY, CURSED_KEY, PHANTO,
    TRAMPOLINE, HOP_CHOPS,
    POW_BLOCK, RED_POW_BLOCK,
    P_SWITCH,
    STONE,
    WARP_DOOR, P_WARP_DOOR, KEY_DOOR,
    WARP_BOX, WARP_BOX_WITH_KEY,
    WING, PARACHUTE, BUBBLE,

    //endregion -------------------- Passive gizmo / Key / Warp / Other --------------------

}

//region -------------------- Number types --------------------

export type Ordinals = typeof Enum[Names];

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type Names = keyof typeof Enum;

//region -------------------- English name --------------------

export type PossibleEnglishName_BigMushroom = `Big Mushroom${| '' | ` (${'classic' | 'modern'})`}`;
export type PossibleEnglishName_Shoe = | 'Shoe' | 'Stiletto';
export type PossibleEnglishName_Yoshi = `${| '' | 'Red '}Yoshi`;
export type PossibleEnglishName_Block = `${| 'Brick' | 'Cristal' | 'Rotating'} Block`;
export type PossibleEnglishName_HardBlock = `${| 'Hard' | 'Rock'} Block`;
export type PossibleEnglishName_KoopaTroopa = `${| 'Green' | 'Red'} Koopa Troopa`;
export type PossibleEnglishName_BeachKoopa = `${| 'Green' | 'Red'} Beach Koopa`;
export type PossibleEnglishName_KoopaShell = `${| 'Green' | 'Red'} Koopa Shell`;
export type PossibleEnglishName_DryBones = 'Dry Bones' | 'Parabones';
export type PossibleEnglishName_BuzzyBeetleAndShell = 'Buzzy Beetle' | 'Para-Beetle' | 'Buzzy Shell';
export type PossibleEnglishName_SpinyAndShell = 'Spiny' | 'Winged Spiny' | `Spiny ${| 'Egg' | 'Shell'}`;
export type PossibleEnglishName_SpikeTop = `${| '' | 'Fast '}${| '' | 'Winged '}Spike Top`;
export type PossibleEnglishName_BulletBill = `${`${| '' | 'Cat '}Bullet` | 'Bull\'s-Eye'} Bill`;
export type PossibleEnglishName_BanzaiBill = `${| '' | 'Cat '}Banzai Bill` | 'Bull\'s-Eye Banzai';
export type PossibleEnglishName_Goals = | 'Goal Pole' | '(Goal (With Cards))' | 'Giant Gate';
export type PossibleEnglishName =
    | `${| '' | `${| 'Start' | 'Goal'} `}Ground` | `${| 'Steep' | 'Gentle'} Slope`
    | 'Water' | 'Lava' | 'Poison' | `${| '' | 'Clear '}Pipe`
    | `Spike ${| 'Trap' | 'Block'}` | 'Jelectro' | 'Sea Urchin'
    | `${| 'Mushroom' | 'Semisolid'} Platform` | 'Bridge'

    | PossibleEnglishName_Block
    | PossibleEnglishName_HardBlock
    | `${| '?' | 'Hidden' | 'Empty' | '!'
         | 'Note' | 'Music'
         | 'Donut'
         | 'Cloud'
         | 'Dotted-Line'
         | 'P'
         | 'Blinking'
         | 'Ice'} Block` | 'ON/OFF Switch'
    | 'Icicle'
    | `${| '' | `${| 'Frozen' | 'Pink'} ` | `${10 | 30 | 50}-`}Coin`

    | `${| 'Super' | 'Mystery' | 'Weird' | 'SMB2'} Mushroom`
    | `${| 'Fire' | 'Superball'} Flower`
    | 'Master Sword'
    | PossibleEnglishName_BigMushroom
    | 'Super Leaf' | 'Frog Suit'
    | 'Cape Feather' | 'Power Balloon'
    | 'Propeller Mushroom' | 'Super Acorn'
    | `Super ${| 'Bell' | 'Hammer'}` | 'Boomerang Flower'
    | `${| 'Cannon' | 'Propeller' | 'Red POW'} Box` | `${| 'Goomba' | 'Bullet Bill'} Mask`
    | `${| 'Fireball' | 'Superball' | 'Builder Box' | 'Boomerang' | 'Cannonball'} thrown by a player`
    | `${| 'Bomb' | 'Arrow'} thrown by a Link`
    | 'Super Star'
    | `${| '1-Up' | 'Rotten'} Mushroom`

    | `${PossibleEnglishName_Shoe}${| '' | ' Goomba'}`
    | PossibleEnglishName_Yoshi | `${| '' | 'Red '}Yoshi's Egg`
    | `${| 'Fire' | 'Poison' | 'Bone' | 'Hammer'} thrown by a Yoshi`
    | `${|'Fire'} thrown by a Red Yoshi`

    | 'Goomba' | 'Galoomba' | 'Goombrat' | 'Goombud'
    | PossibleEnglishName_KoopaTroopa | PossibleEnglishName_BeachKoopa | PossibleEnglishName_KoopaShell
    | PossibleEnglishName_DryBones | 'Bone thrown by a Dry Bones' | 'Dry Bones Shell'
    | PossibleEnglishName_BuzzyBeetleAndShell
    | PossibleEnglishName_SpinyAndShell | '(Winged Spiny\'s projectile)'
    | PossibleEnglishName_SpikeTop
    | `${| '' | 'Spiny '}Skipsqueak`
    | `${| '' | 'Horned '}Ant Trooper`
    | 'Stingby'
    | `${| 'Cheep' | 'Deep'} Cheep` | 'Blurps' | 'Fish Bone'
    | Exclude<`${| '' | 'Baby '}Blooper${| '' | ' Nanny'}`, 'Baby Blooper Nanny'>
    | 'Porcupuffer'
    | `${| '' | 'Angry '}Wiggler`
    | `${| '' | `${| 'Jumping' | 'Fire'} `}Piranha Plant` | 'Fireball thrown by a Fire Piranha Plant'
    | 'Muncher'
    | 'Piranha Creeper'
    | `${| 'Chain' | 'Unchained'} Chomp` | 'Chain Chomp\'s Stump'
    | 'Spike' | 'Spike Ball' | 'Snowball'
    | `Lakitu${| '' | '\'s Cloud'}`
    | `Boo${| '' | ' Buddies'}` | 'Stretch' | 'Peepa'
    | `${| '' | 'Lit '}Bob-omb`
    | `${| '' | 'Snow '}Pokey`
    | 'Thwomp'
    | 'Monty Mole' | 'Rocky Wrench' | 'Wrench thrown by a Rocky Wrench'
    | 'Magikoopa' | '(Magikoopa\'s projectile)'
    | `${| 'Hammer' | 'Sledge' | `${| '' | 'Heavy '}Fire`} Bro` | 'Hammer thrown by a Hammer / Sledge Bro' | 'Fireball thrown by a (Heavy) Fire Bro'
    | 'Lava Bubble'
    | `${| '' | `${| 'Blasta' | 'Zappa'} `}Mechakoopa` | 'Homing Missile thrown by a Blasta Mechakoopa' | 'Electricity Beam thrown by a Zappa Mechakoopa'
    | 'Charvaargh'
    | 'Bully'

    | `${| 'Bill' | 'Bull\'s-Eye'} Blaster` | PossibleEnglishName_BulletBill
    | PossibleEnglishName_BanzaiBill
    | `${| '' | 'Red '}${|`Cannon${| '' | 'ball'}`}`
    | 'Burner'
    | 'Fire Bar'
    | 'Skewer'
    | `${| '' | 'Fire '}${| 'Koopa' | 'Junior'} Clown Car` | 'Fire thrown by a Fire [Koopa / Junior] Clown Car'
    | `${| '' | 'Koopa Troopa '}Car`
    | 'Grinder'
    | 'Angry Sun' | 'Moon'

    | 'Bowser' | 'Meowser' | `${| 'Fire' | 'Falling Fire'} thrown by a Bowser`
    | 'Bowser Jr.' | 'Fire thrown by a Bowser Jr.'
    | 'Boom Boom' | `Pom Pom${| '' | '\'s clone'}` | 'Shuriken thrown by a Pom Pom'
    | `${| 'Larry' | 'Iggy' | 'Wendy' | 'Lemmy' | 'Roy' | 'Morton' | 'Ludwig'}${| '' | '\'s Wand'}`
    | `(${| 'Larry\'s' | 'Iggy\'s' | 'Roy\'s' | `Morton's ${| 'Thrown' | 'Ground'}` | 'Ludwig\'s'} projectile)` | 'Candy Ring thrown by a Wendy' | 'Magic Ball thrown by a Lemmy'

    | 'Bumper'
    | 'Swinging Claw'
    | 'Twister'
    | 'One-Way Wall'
    | `Track${| '' | ' Block'}`
    | 'Vine' | 'Tree'
    | 'Arrow Sign'
    | 'Checkpoint Flag' | PossibleEnglishName_Goals
    | 'Dash Block'
    | `${| '' | 'Fast '}Snake Block`
    | `${| '' | 'Fast '}Conveyor Belt`
    | `${| 'Mushroom' | 'ON/OFF'} Trampoline`
    | `${| '' | `${| 'Flimsy' | 'Cloud'} `}Lift`
    | 'Seesaw'
    | `${| '' | 'Fast '}Lava Lift`
    | 'Crate'
    | `${| '' | 'Cursed '}Key` | 'Phanto'
    | 'Trampoline' | 'Hop-Chops'
    | `${| '' | 'Red '}POW Block`
    | 'P Switch'
    | 'Stone'
    | `${| `${| '' | 'P '}Warp` | 'Key'} Door`
    | `Warp Box${| '' | ' (With Key)'}`
    | 'Wing' | 'Parachute' | 'Bubble'
    ;

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
    EnumByName<'WATER', E>, EnumByName<'LAVA', E>, EnumByName<'POISON', E>,
    EnumByName<'PIPE', E>, EnumByName<'CLEAR_PIPE', E>,
    EnumByName<'SPIKE_TRAP', E>, EnumByName<'JELECTRO', E>, EnumByName<'SEA_URCHIN', E>, EnumByName<'SPIKE_BLOCK', E>,
    EnumByName<'MUSHROOM_PLATFORM', E>, EnumByName<'SEMISOLID_PLATFORM', E>, EnumByName<'BRIDGE', E>,

    EnumByName<'BRICK_BLOCK', E>, EnumByName<'CRISTAL_BLOCK', E>, EnumByName<'ROTATING_BLOCK', E>,
    EnumByName<'HARD_BLOCK', E>, EnumByName<'ROCK_BLOCK', E>,
    EnumByName<'QUESTION_MARK_BLOCK', E>, EnumByName<'HIDDEN_BLOCK', E>, EnumByName<'EMPTY_BLOCK', E>,
    EnumByName<'EXCLAMATION_MARK_BLOCK', E>,
    EnumByName<'NOTE_BLOCK', E>, EnumByName<'MUSIC_BLOCK', E>,
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
    EnumByName<'FIRE_FLOWER', E>, EnumByName<'FIREBALL_THROWN_BY_A_PLAYER', E>,
    EnumByName<'SUPERBALL_FLOWER', E>, EnumByName<'SUPERBALL_THROWN_BY_A_PLAYER', E>,
    EnumByName<'MYSTERY_MUSHROOM', E>, EnumByName<'WEIRD_MUSHROOM', E>,
    EnumByName<'MASTER_SWORD', E>, EnumByName<'BOMB_THROWN_BY_A_LINK', E>, EnumByName<'ARROW_THROWN_BY_A_LINK', E>,
    EnumByName<'BIG_MUSHROOM', E>, EnumByName<'BIG_MUSHROOM_CLASSIC', E>, EnumByName<'BIG_MUSHROOM_MODERN', E>,
    EnumByName<'SMB2_MUSHROOM', E>,
    EnumByName<'SUPER_LEAF', E>, EnumByName<'FROG_SUIT', E>,
    EnumByName<'CAPE_FEATHER', E>, EnumByName<'POWER_BALLOON', E>,
    EnumByName<'PROPELLER_MUSHROOM', E>, EnumByName<'SUPER_ACORN', E>,
    EnumByName<'SUPER_BELL', E>,
    EnumByName<'SUPER_HAMMER', E>, EnumByName<'BUILDER_BOX_THROWN_BY_A_PLAYER', E>,
    EnumByName<'BOOMERANG_FLOWER', E>, EnumByName<'BOOMERANG_THROWN_BY_A_PLAYER', E>,
    EnumByName<'CANNON_BOX', E>, EnumByName<'CANNONBALL_THROWN_BY_A_PLAYER', E>,
    EnumByName<'PROPELLER_BOX', E>,
    EnumByName<'GOOMBA_MASK', E>,
    EnumByName<'BULLET_BILL_MASK', E>,
    EnumByName<'RED_POW_BOX', E>,
    EnumByName<'SUPER_STAR', E>,
    EnumByName<'ONE_UP_MUSHROOM', E>, EnumByName<'ROTTEN_MUSHROOM', E>,

    EnumByName<'SHOE_GOOMBA', E>, EnumByName<'SHOE', E>,
    EnumByName<'STILETTO_GOOMBA', E>, EnumByName<'STILETTO', E>,
    EnumByName<'YOSHI_EGG', E>, EnumByName<'YOSHI', E>, EnumByName<'FIRE_THROWN_BY_A_YOSHI', E>, EnumByName<'POISON_THROWN_BY_A_YOSHI', E>, EnumByName<'BONE_THROWN_BY_A_YOSHI', E>, EnumByName<'HAMMER_THROWN_BY_A_YOSHI', E>,
    EnumByName<'RED_YOSHI_EGG', E>, EnumByName<'RED_YOSHI', E>, EnumByName<'FIRE_THROWN_BY_A_RED_YOSHI', E>,

    EnumByName<'GOOMBA', E>, EnumByName<'GALOOMBA', E>, EnumByName<'GOOMBRAT', E>, EnumByName<'GOOMBUD', E>,
    EnumByName<'GREEN_KOOPA_TROOPA', E>, EnumByName<'RED_KOOPA_TROOPA', E>,
    EnumByName<'GREEN_BEACH_KOOPA', E>, EnumByName<'RED_BEACH_KOOPA', E>,
    EnumByName<'GREEN_KOOPA_SHELL', E>, EnumByName<'RED_KOOPA_SHELL', E>,
    EnumByName<'DRY_BONES', E>, EnumByName<'PARABONES', E>, EnumByName<'BONE_THROWN_BY_A_DRY_BONES', E>, EnumByName<'DRY_BONES_SHELL', E>,
    EnumByName<'BUZZY_BEETLE', E>, EnumByName<'PARA_BEETLE', E>, EnumByName<'BUZZY_SHELL', E>,
    EnumByName<'SPINY', E>, EnumByName<'WINGED_SPINY', E>, EnumByName<'WINGED_SPINY_PROJECTILE', E>, EnumByName<'SPINY_EGG', E>, EnumByName<'SPINY_SHELL', E>,
    EnumByName<'SPIKE_TOP', E>, EnumByName<'WINGED_SPIKE_TOP', E>, EnumByName<'FAST_SPIKE_TOP', E>, EnumByName<'FAST_WINGED_SPIKE_TOP', E>,
    EnumByName<'SKIPSQUEAK', E>, EnumByName<'SPINY_SKIPSQUEAK', E>,
    EnumByName<'ANT_TROOPER', E>, EnumByName<'HORNED_ANT_TROOPER', E>,
    EnumByName<'STINGBY', E>,
    EnumByName<'CHEEP_CHEEP', E>, EnumByName<'BLURPS', E>, EnumByName<'DEEP_CHEEP', E>, EnumByName<'FISH_BONE', E>,
    EnumByName<'BLOOPER', E>, EnumByName<'BLOOPER_NANNY', E>, EnumByName<'BABY_BLOOPER', E>,
    EnumByName<'PORCUPUFFER', E>,
    EnumByName<'WIGGLER', E>, EnumByName<'ANGRY_WIGGLER', E>,
    EnumByName<'PIRANHA_PLANT', E>, EnumByName<'JUMPING_PIRANHA_PLANT', E>, EnumByName<'FIRE_PIRANHA_PLANT', E>, EnumByName<'FIREBALL_THROWN_BY_A_FIRE_PIRANHA_PLANT', E>,
    EnumByName<'MUNCHER', E>,
    EnumByName<'PIRANHA_CREEPER', E>,
    EnumByName<'CHAIN_CHOMP', E>, EnumByName<'UNCHAINED_CHOMP', E>, EnumByName<'CHAIN_CHOMP_STUMP', E>,
    EnumByName<'SPIKE', E>, EnumByName<'SPIKE_BALL', E>, EnumByName<'SNOWBALL', E>,
    EnumByName<'LAKITU', E>, EnumByName<'LAKITU_CLOUD', E>,
    EnumByName<'BOO', E>, EnumByName<'STRETCH', E>, EnumByName<'BOO_BUDDIES', E>, EnumByName<'PEEPA', E>,
    EnumByName<'BOB_OMB', E>, EnumByName<'LIT_BOB_OMB', E>,
    EnumByName<'POKEY', E>, EnumByName<'SNOW_POKEY', E>,
    EnumByName<'THWOMP', E>,
    EnumByName<'MONTY_MOLE', E>, EnumByName<'ROCKY_WRENCH', E>, EnumByName<'WRENCH_THROWN_BY_A_ROCKY_WRENCH', E>,
    EnumByName<'MAGIKOOPA', E>, EnumByName<'MAGIKOOPA_PROJECTILE', E>,
    EnumByName<'HAMMER_BRO', E>, EnumByName<'SLEDGE_BRO', E>, EnumByName<'HAMMER_THROWN_BY_A_HAMMER_SLEDGE_BRO', E>,
    EnumByName<'FIRE_BRO', E>, EnumByName<'HEAVY_FIRE_BRO', E>, EnumByName<'FIREBALL_THROWN_BY_A_HEAVY_FIRE_BRO', E>,
    EnumByName<'LAVA_BUBBLE', E>,
    EnumByName<'MECHAKOOPA', E>, EnumByName<'BLASTA_MECHAKOOPA', E>, EnumByName<'HOMING_MISSILE_THROWN_BY_A_BLASTA_MECHAKOOPA', E>, EnumByName<'ZAPPA_MECHAKOOPA', E>, EnumByName<'ELECTRICITY_BEAM_THROWN_BY_A_ZAPPA_MECHAKOOPA', E>,
    EnumByName<'CHARVAARGH', E>,
    EnumByName<'BULLY', E>,

    EnumByName<'BILL_BLASTER', E>, EnumByName<'BULLET_BILL', E>,
    EnumByName<'BULL_EYE_BLASTER', E>, EnumByName<'BULL_EYE_BILL', E>, EnumByName<'CAT_BULLET_BILL', E>,
    EnumByName<'BANZAI_BILL', E>, EnumByName<'BULL_EYE_BANZAI', E>, EnumByName<'CAT_BANZAI_BILL', E>,
    EnumByName<'CANNON', E>, EnumByName<'CANNONBALL', E>, EnumByName<'RED_CANNON', E>, EnumByName<'RED_CANNONBALL', E>,
    EnumByName<'BURNER', E>,
    EnumByName<'FIRE_BAR', E>,
    EnumByName<'SKEWER', E>,
    EnumByName<'KOOPA_CLOWN_CAR', E>, EnumByName<'JUNIOR_CLOWN_CAR', E>, EnumByName<'FIRE_KOOPA_CLOWN_CAR', E>, EnumByName<'FIRE_JUNIOR_CLOWN_CAR', E>, EnumByName<'FIRE_THROWN_BY_A_FIRE_KOOPA_JUNIOR_CLOWN_CAR', E>,
    EnumByName<'KOOPA_TROOPA_CAR', E>, EnumByName<'CAR', E>,
    EnumByName<'GRINDER', E>,
    EnumByName<'SWINGING_CLAW', E>,
    EnumByName<'ANGRY_SUN', E>, EnumByName<'MOON', E>,

    EnumByName<'BOWSER', E>, EnumByName<'MEOWSER', E>, EnumByName<'FIRE_THROWN_BY_A_BOWSER', E>, EnumByName<'FALLING_FIRE_THROWN_BY_A_BOWSER', E>,
    EnumByName<'BOWSER_JR', E>, EnumByName<'FIRE_THROWN_BY_A_BOWSER_JR', E>,
    EnumByName<'BOOM_BOOM', E>, EnumByName<'POM_POM', E>, EnumByName<'POM_POM_CLONE', E>, EnumByName<'SHURIKEN_THROWN_BY_A_POM_POM', E>,
    EnumByName<'LARRY', E>, EnumByName<'LARRY_WAND', E>, EnumByName<'LARRY_PROJECTILE', E>,
    EnumByName<'IGGY', E>, EnumByName<'IGGY_WAND', E>, EnumByName<'IGGY_PROJECTILE', E>,
    EnumByName<'WENDY', E>, EnumByName<'WENDY_WAND', E>, EnumByName<'CANDY_RING_THROWN_BY_A_WENDY', E>,
    EnumByName<'LEMMY', E>, EnumByName<'LEMMY_WAND', E>, EnumByName<'MAGIC_BALL_THROWN_BY_A_LEMMY', E>,
    EnumByName<'ROY', E>, EnumByName<'ROY_WAND', E>, EnumByName<'ROY_PROJECTILE', E>,
    EnumByName<'MORTON', E>, EnumByName<'MORTON_WAND', E>, EnumByName<'MORTON_THROWN_PROJECTILE', E>, EnumByName<'MORTON_GROUND_PROJECTILE', E>,
    EnumByName<'LUDWIG', E>, EnumByName<'LUDWIG_WAND', E>, EnumByName<'LUDWIG_PROJECTILE', E>,

    EnumByName<'BUMPER', E>,
    EnumByName<'TWISTER', E>,
    EnumByName<'ONE_WAY_WALL', E>,
    EnumByName<'TRACK', E>, EnumByName<'TRACK_BLOCK', E>,
    EnumByName<'VINE', E>, EnumByName<'TREE', E>,
    EnumByName<'ARROW_SIGN', E>,
    EnumByName<'CHECKPOINT_FLAG', E>,
    EnumByName<'GOAL_POLE', E>, EnumByName<'GOAL_WITH_CARDS', E>, EnumByName<'GIANT_GATE', E>,
    EnumByName<'DASH_BLOCK', E>,
    EnumByName<'SNAKE_BLOCK', E>, EnumByName<'FAST_SNAKE_BLOCK', E>,
    EnumByName<'CONVEYOR_BELT', E>, EnumByName<'FAST_CONVEYOR_BELT', E>,
    EnumByName<'MUSHROOM_TRAMPOLINE', E>, EnumByName<'ON_OFF_TRAMPOLINE', E>,
    EnumByName<'LIFT', E>, EnumByName<'FLIMSY_LIFT', E>, EnumByName<'CLOUD_LIFT', E>,
    EnumByName<'SEESAW', E>,
    EnumByName<'LAVA_LIFT', E>, EnumByName<'FAST_LAVA_LIFT', E>,
    EnumByName<'CRATE', E>,
    EnumByName<'KEY', E>, EnumByName<'CURSED_KEY', E>, EnumByName<'PHANTO', E>,
    EnumByName<'TRAMPOLINE', E>, EnumByName<'HOP_CHOPS', E>,
    EnumByName<'POW_BLOCK', E>, EnumByName<'RED_POW_BLOCK', E>,
    EnumByName<'P_SWITCH', E>,
    EnumByName<'STONE', E>,
    EnumByName<'WARP_DOOR', E>, EnumByName<'P_WARP_DOOR', E>, EnumByName<'KEY_DOOR', E>,
    EnumByName<'WARP_BOX', E>, EnumByName<'WARP_BOX_WITH_KEY', E>,
    EnumByName<'WING', E>, EnumByName<'PARACHUTE', E>, EnumByName<'BUBBLE', E>,
];

//endregion -------------------- Array types --------------------
