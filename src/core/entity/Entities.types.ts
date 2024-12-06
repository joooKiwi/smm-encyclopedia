import type {EmptyString} from '@joookiwi/type'

enum Enum {

    //region -------------------- Ground / Pipe / Spike / Platform --------------------

    GROUND, START_GROUND, GOAL_GROUND,
    STEEP_SLOPE, GENTLE_SLOPE,
    START_BLOCK, OCCLUDE_BLOCK,
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
    YOSHI_EGG, YOSHI, FIRE_THROWN_BY_A_YOSHI, POISON_THROWN_BY_A_YOSHI, BONE_THROWN_BY_A_YOSHI, WRENCH_THROWN_BY_A_YOSHI, HAMMER_THROWN_BY_A_YOSHI,
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
    GREEN_CHEEP_CHEEP, BLURPS, DEEP_CHEEP, RED_CHEEP_CHEEP, FISH_BONE,
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

    BOWSER, MEOWSER, FIRE_THROWN_BY_A_BOWSER, FALLING_FIRE_THROWN_BY_A_BOWSER, HAMMER_THROWN_BY_A_BOWSER,
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
    STARTING_ARROW, ARROW_SIGN,
    CHECKPOINT_FLAG,
    GOAL_POLE, GOAL_WITH_CARDS, GIANT_GATE,
    CASTLE, ENDING_CASTLE_DOOR, AXE,
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
    WING, PARACHUTE,
    TOAD, CAGED_TOADETTE,
    BUBBLE,

    //endregion -------------------- Passive gizmo / Key / Warp / Other --------------------

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

//region -------------------- English name --------------------

type PossibleEnglishName_BigMushroom = `Big Mushroom${| EmptyString | ` (${'classic' | 'modern'})`}`
type PossibleEnglishName_Shoe = | 'Shoe' | 'Stiletto'
type PossibleEnglishName_Yoshi = `${| EmptyString | 'Red '}Yoshi`
type PossibleEnglishName_Block = `${| 'Brick' | 'Cristal' | 'Rotating'} Block`
type PossibleEnglishName_HardBlock = `${| 'Hard' | 'Rock'} Block`
type PossibleEnglishName_KoopaTroopa = `${| 'Green' | 'Red'} Koopa Troopa`
type PossibleEnglishName_BeachKoopa = `${| 'Green' | 'Red'} Beach Koopa`
type PossibleEnglishName_KoopaShell = `${| 'Green' | 'Red'} Koopa Shell`
type PossibleEnglishName_DryBones = 'Dry Bones' | 'Parabones'
type PossibleEnglishName_BuzzyBeetleAndShell = 'Buzzy Beetle' | 'Para-Beetle' | 'Buzzy Shell'
type PossibleEnglishName_SpinyAndShell = 'Spiny' | 'Winged Spiny' | `Spiny ${| 'Egg' | 'Shell'}`
type PossibleEnglishName_SpikeTop = `${| EmptyString | 'Fast '}${| EmptyString | 'Winged '}Spike Top`
type PossibleEnglishName_BulletBill = `${`${| EmptyString | 'Cat '}Bullet` | 'Bull’s-Eye'} Bill`
type PossibleEnglishName_BanzaiBill = `${| EmptyString | 'Cat '}Banzai Bill` | 'Bull’s-Eye Banzai'
type PossibleEnglishName_Goals = | 'Goal Pole' | 'Cards Roulette' | 'Giant Gate'
export type PossibleEnglishName =
    | `${| EmptyString | `${| 'Start' | 'Goal'} `}Ground`
    | `${| 'Steep' | 'Gentle'} Slope`
    | 'Water' | 'Lava' | 'Poison'
    | `${| EmptyString | 'Clear '}Pipe`
    | `Spike ${| 'Trap' | 'Block'}` | 'Jelectro' | 'Sea Urchin'
    | `${| 'Mushroom' | 'Semisolid'} Platform` | 'Bridge'

    | PossibleEnglishName_Block
    | PossibleEnglishName_HardBlock
    | `${| 'Start' | 'Occlude'
         | '?' | 'Hidden' | 'Empty' | '!'
         | 'Note' | 'Music'
         | 'Donut'
         | 'Cloud'
         | 'Dotted-Line'
         | 'P'
         | 'Blinking'
         | 'Ice'} Block` | 'ON/OFF Switch'
    | 'Icicle'
    | `${| EmptyString | `${| 'Frozen' | 'Pink'} ` | `${10 | 30 | 50}-`}Coin`

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

    | `${PossibleEnglishName_Shoe}${| EmptyString | ' Goomba'}`
    | PossibleEnglishName_Yoshi | `${| EmptyString | 'Red '}Yoshi’s Egg`
    | `${| 'Fire' | 'Poison' | 'Bone' | 'Wrench' | 'Hammer'} thrown by a Yoshi`
    | `${|'Fire'} thrown by a Red Yoshi`

    | 'Goomba' | 'Galoomba' | 'Goombrat' | 'Goombud'
    | PossibleEnglishName_KoopaTroopa | PossibleEnglishName_BeachKoopa | PossibleEnglishName_KoopaShell
    | PossibleEnglishName_DryBones | 'Bone thrown by a Dry Bones' | 'Dry Bones Shell'
    | PossibleEnglishName_BuzzyBeetleAndShell
    | PossibleEnglishName_SpinyAndShell | '(Winged Spiny’s projectile)'
    | PossibleEnglishName_SpikeTop
    | `${| EmptyString | 'Spiny '}Skipsqueak`
    | `${| EmptyString | 'Horned '}Ant Trooper`
    | 'Stingby'
    | `${| 'Cheep' | 'Deep'} Cheep` | 'Blurps' | 'Fish Bone'
    | Exclude<`${| EmptyString | 'Baby '}Blooper${| EmptyString | ' Nanny'}`, 'Baby Blooper Nanny'>
    | 'Porcupuffer'
    | `${| EmptyString | 'Angry '}Wiggler`
    | `${| EmptyString | `${| 'Jumping' | 'Fire'} `}Piranha Plant` | 'Fireball thrown by a Fire Piranha Plant'
    | 'Muncher'
    | 'Piranha Creeper'
    | `${| 'Chain' | 'Unchained'} Chomp` | 'Chain Chomp’s Stump'
    | 'Spike' | 'Spike Ball' | 'Snowball'
    | `Lakitu${| EmptyString | '’s Cloud'}`
    | `Boo${| EmptyString | ' Buddies'}` | 'Stretch' | 'Peepa'
    | `${| EmptyString | 'Lit '}Bob-omb`
    | `${| EmptyString | 'Snow '}Pokey`
    | 'Thwomp'
    | 'Monty Mole' | 'Rocky Wrench' | 'Wrench thrown by a Rocky Wrench'
    | 'Magikoopa' | '(Magikoopa’s projectile)'
    | `${| 'Hammer' | 'Sledge' | `${| EmptyString | 'Heavy '}Fire`} Bro` | 'Hammer thrown by a Hammer / Sledge Bro' | 'Fireball thrown by a (Heavy) Fire Bro'
    | 'Lava Bubble'
    | `${| EmptyString | `${| 'Blasta' | 'Zappa'} `}Mechakoopa` | 'Homing Missile thrown by a Blasta Mechakoopa' | 'Electricity Beam thrown by a Zappa Mechakoopa'
    | 'Charvaargh'
    | 'Bully'

    | `${| 'Bill' | 'Bull’s-Eye'} Blaster` | PossibleEnglishName_BulletBill
    | PossibleEnglishName_BanzaiBill
    | `${| EmptyString | 'Red '}${|`Cannon${| EmptyString | 'ball'}`}`
    | 'Burner'
    | 'Fire Bar'
    | 'Skewer'
    | `${| EmptyString | 'Fire '}${| 'Koopa' | 'Junior'} Clown Car` | 'Fire thrown by a Fire [Koopa / Junior] Clown Car'
    | `${| EmptyString | 'Koopa Troopa '}Car`
    | 'Grinder'
    | 'Angry Sun' | 'Moon'

    | 'Bowser' | 'Meowser' | `${| 'Fire' | 'Hammer' | 'Falling Fire'} thrown by a Bowser`
    | 'Bowser Jr.' | 'Fire thrown by a Bowser Jr.'
    | 'Boom Boom' | `Pom Pom${| EmptyString | '’s clone'}` | 'Shuriken thrown by a Pom Pom'
    | `${| 'Larry' | 'Iggy' | 'Wendy' | 'Lemmy' | 'Roy' | 'Morton' | 'Ludwig'}${| EmptyString | '’s Wand'}`
    | `(${| 'Larry’s' | 'Iggy’s' | 'Wendy’s' | 'Lemmy’s' | 'Roy’s' | `Morton’s ${| 'Thrown' | 'Ground'}` | 'Ludwig’s'} projectile)` | 'Candy Ring thrown by a Wendy' | 'Magic Ball thrown by a Lemmy'

    | 'Bumper'
    | 'Swinging Claw'
    | 'Twister'
    | 'One-Way Wall'
    | `Track${| EmptyString | ' Block'}`
    | 'Vine' | 'Tree'
    | 'Starting Arrow' | 'Arrow Sign'
    | 'Checkpoint Flag' | PossibleEnglishName_Goals
    | 'Castle' | 'Ending Castle Door' | 'Axe'
    | 'Dash Block'
    | `${| EmptyString | 'Fast '}Snake Block`
    | `${| EmptyString | 'Fast '}Conveyor Belt`
    | `${| 'Mushroom' | 'ON/OFF'} Trampoline`
    | `${| EmptyString | `${| 'Flimsy' | 'Cloud'} `}Lift`
    | 'Seesaw'
    | `${| EmptyString | 'Fast '}Lava Lift`
    | 'Crate'
    | `${| EmptyString | 'Cursed '}Key` | 'Phanto'
    | 'Trampoline' | 'Hop-Chops'
    | `${| EmptyString | 'Red '}POW Block`
    | 'P Switch'
    | 'Stone'
    | `${| `${| EmptyString | 'P '}Warp` | 'Key'} Door`
    | `Warp Box${| EmptyString | ' (With Key)'}`
    | 'Wing' | 'Parachute'
    | 'Toad' | 'Caged Toadette'
    | 'Bubble'

//endregion -------------------- English name --------------------
//region -------------------- English name (editor voice) --------------------

type PossibleEnglishName_Projectile = EmptyString//TODO change to every projectile name
type PossibleEnglishName_Object = EmptyString//TODO change to every object name
/** The possible english anme that are in both {@link Entities} and {@link EditorVoices} */
export type PossibleEnglishName_EditorVoice = Exclude<PossibleEnglishName,
    | PossibleEnglishName_BigMushroom | PossibleEnglishName_Shoe | PossibleEnglishName_Yoshi
    | PossibleEnglishName_Block | Exclude<PossibleEnglishName_HardBlock, 'Hard Block'>
    | PossibleEnglishName_KoopaTroopa | PossibleEnglishName_BeachKoopa | PossibleEnglishName_KoopaShell
    | Exclude<PossibleEnglishName_DryBones, 'Dry Bones'> | Exclude<PossibleEnglishName_BuzzyBeetleAndShell, 'Buzzy Beetle'>
    | Exclude<PossibleEnglishName_SpinyAndShell, 'Spiny'> | Exclude<PossibleEnglishName_SpikeTop, 'Spike Top'>
    | PossibleEnglishName_BulletBill | Extract<PossibleEnglishName_BanzaiBill, 'Cat Banzai Bill'>
    | 'Empty Block' | 'Chain Chomp’s Stump' | 'Angry Sun'
    | PossibleEnglishName_Goals | 'Phanto' | 'Stone' | 'Parachute' | 'Bubble'
    | PossibleEnglishName_Projectile | PossibleEnglishName_Object>

//endregion -------------------- English name (editor voice) --------------------
//region -------------------- English name (character name) --------------------

/** The english name that are in both {@link Entities} and in {@link CharacterNames} */
export type PossibleEnglishName_PlayableCharacter = | `${| EmptyString | `${| 'Small' | 'Super'
                                                                            | 'Fire' | 'Superball'
                                                                            | 'Giant' | 'SMB2'
                                                                            | 'Raccoon' | 'Frog'
                                                                            | 'Cape' | 'Balloon'
                                                                            | 'Propeller' | 'Flying Squirrel'
                                                                            | 'Cat' | 'Builder' | 'Boomerang'
                                                                            | 'Buzzy' | 'Spiny'} `}${| 'Mario' | 'Luigi' | 'Toad' | 'Toadette'}`
                                                    | `${| 'Weird' | 'Costume'} Mario`
                                                    | 'Link'

//endregion -------------------- English name (character name) --------------------
