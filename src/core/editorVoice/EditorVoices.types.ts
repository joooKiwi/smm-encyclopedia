import type {EmptyString} from '@joookiwi/type'

import type {CharacterName}                                                          from 'core/characterName/CharacterName'
import type {Entity}                                                                 from 'core/entity/Entity'
import type {PossibleEnglishName_EditorVoice, PossibleEnglishName_PlayableCharacter} from 'core/entity/Entities.types'

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
    GIANT_MARIO, GIANT_LUIGI, GIANT_TOAD, GIANT_TOADETTE,

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

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

/** A possible reference for an {@link EditorVoices} (either an {@link Entity} or a {@link CharacterName}) */
export type PossibleReference = | Entity | CharacterName

//region -------------------- English name --------------------

export type PossibleEnglishName = | PossibleEnglishName_EditorVoice
                                  | PossibleEnglishName_PlayableCharacter
                                  | 'Koopa Troopa' | 'Cheep Cheep' | 'Block' | `Big Mushroom (SMM${| EmptyString | 2})` | 'Sun'

//endregion -------------------- English name --------------------
