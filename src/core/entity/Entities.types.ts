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
    WING, PARACHUTE,
    TOAD, CAGED_TOADETTE,
    BUBBLE,

    //endregion -------------------- Passive gizmo / Key / Warp / Other --------------------

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

//region -------------------- English name --------------------

export type PossibleEnglishName_BigMushroom = `Big Mushroom${| '' | ` (${'classic' | 'modern'})`}`
export type PossibleEnglishName_Shoe = | 'Shoe' | 'Stiletto'
export type PossibleEnglishName_Yoshi = `${| '' | 'Red '}Yoshi`
export type PossibleEnglishName_Block = `${| 'Brick' | 'Cristal' | 'Rotating'} Block`
export type PossibleEnglishName_HardBlock = `${| 'Hard' | 'Rock'} Block`
export type PossibleEnglishName_KoopaTroopa = `${| 'Green' | 'Red'} Koopa Troopa`
export type PossibleEnglishName_BeachKoopa = `${| 'Green' | 'Red'} Beach Koopa`
export type PossibleEnglishName_KoopaShell = `${| 'Green' | 'Red'} Koopa Shell`
export type PossibleEnglishName_DryBones = 'Dry Bones' | 'Parabones'
export type PossibleEnglishName_BuzzyBeetleAndShell = 'Buzzy Beetle' | 'Para-Beetle' | 'Buzzy Shell'
export type PossibleEnglishName_SpinyAndShell = 'Spiny' | 'Winged Spiny' | `Spiny ${| 'Egg' | 'Shell'}`
export type PossibleEnglishName_SpikeTop = `${| '' | 'Fast '}${| '' | 'Winged '}Spike Top`
export type PossibleEnglishName_BulletBill = `${`${| '' | 'Cat '}Bullet` | 'Bull\'s-Eye'} Bill`
export type PossibleEnglishName_BanzaiBill = `${| '' | 'Cat '}Banzai Bill` | 'Bull\'s-Eye Banzai'
export type PossibleEnglishName_Goals = | 'Goal Pole' | 'Cards Roulette' | 'Giant Gate'
export type PossibleEnglishName =
    | `${| '' | `${| 'Start' | 'Goal'} `}Ground`
    | `${| 'Steep' | 'Gentle'} Slope`
    | 'Water' | 'Lava' | 'Poison'
    | `${| '' | 'Clear '}Pipe`
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
    | `${| 'Fire' | 'Poison' | 'Bone' | 'Wrench' | 'Hammer'} thrown by a Yoshi`
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
    | 'Wing' | 'Parachute'
    | 'Toad' | 'Caged Toadette'
    | 'Bubble'


//endregion -------------------- English name --------------------
