import type {Nullable, NullOr, UndefinedOr} from '@joookiwi/type'
import {hasByArray}                         from '@joookiwi/collection'
import {Enum}                               from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                        from 'core/ClassWithEnglishName'
import type {ClassWithReference}                          from 'core/ClassWithReference'
import type {ClassWithNullableEditorVoiceSoundFileHolder} from 'core/editorVoice/ClassWithEditorVoiceSoundFileHolder'
import type {EditorVoiceSound}                            from 'core/editorVoice/sound/EditorVoiceSound'
import type {Names, Ordinals, PossibleEnglishName}        from 'core/entity/Entities.types'
import type {Entity}                                      from 'core/entity/Entity'
import type {EntityImage}                                 from 'core/entity/images/EntityImage'
import type {ClearConditionImage}                         from 'core/entity/images/clearCondition/ClearConditionImage'
import type {EditorImage}                                 from 'core/entity/images/editor/EditorImage'
import type {InGameImage}                                 from 'core/entity/images/inGame/InGameImage'
import type {UnusedImage_BigMushroom}                     from 'core/entity/images/unused/UnusedImage_BigMushroom'
import type {UnusedImage_Regular}                         from 'core/entity/images/unused/UnusedImage_Regular'
import type {ClassWithImage}                              from 'util/ClassWithImage'
import type {CompanionEnumByNameWithValidationSingleton}  from 'util/enumerable/Singleton.types'

import {EditorVoices}                      from 'core/editorVoice/EditorVoices'
import {ClearConditionEntityImages}        from 'core/entity/ClearConditionEntityImages'
import type {EditorEntityImages}           from 'core/entity/EditorEntityImages'
import type {EntityImages}                 from 'core/entity/EntityImages'
import {InGameEntityImages}                from 'core/entity/InGameEntityImages'
import {UnusedEntityImages}                from 'core/entity/UnusedEntityImages'
import {UnusedBigMushroomEntityImages}     from 'core/entity/UnusedBigMushroomEntityImages'
import {StringContainer}                   from 'util/StringContainer'
import {Import}                            from 'util/DynamicImporter'
import {getValueByEnglishName}             from 'util/utilitiesMethods'
import {CompanionEnumByNameWithValidation} from 'util/enumerable/companion/CompanionEnumByNameWithValidation'

import EditorVoiceCompanion = EditorVoices.Companion

/**
 * A class encapsulating all the information associated to
 * its name ({@link PossibleEnglishName}),
 * image ({@link EntityImage}, {@link EditorImage editor},
 * {@link ClearConditionImage clear condition}, {@link InGameImage in game}, {@link UnusedImage_Regular unused (regular form)}
 * and {@link UnusedImage_BigMushroom unused (Big Mushroom form)}),
 * sound ({@link EditorVoiceSound})
 * and data ({@link Entity})
 *
 * @recursiveReference<{@link ClearConditionEntityImages}>
 * @recursiveReference<{@link EditorVoices}>
 * @recursiveReference<{@link EditorEntityImages}>
 * @recursiveReference<{@link EntityImages}>
 * @recursiveReference<{@link EntityLoader}>
 * @recursiveReference<{@link InGameEntityImages}>
 * @recursiveReference<{@link UnusedEntityImages}>
 * @recursiveReference<{@link UnusedBigMushroomEntityImages}>
 */
export class Entities
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName>,
        ClassWithReference<Entity>,
        ClassWithImage<EntityImage>,
        ClassWithNullableEditorVoiceSoundFileHolder {

    //region -------------------- Enum instances --------------------

    //region -------------------- Ground / Pipe / Spike / Platform --------------------

    public static readonly GROUND =                                        new Entities('Ground',)
    public static readonly START_GROUND =                                  new Entities('Start Ground',)
    public static readonly GOAL_GROUND =                                   new Entities('Goal Ground',)

    public static readonly STEEP_SLOPE =                                   new Entities('Steep Slope',)
    public static readonly GENTLE_SLOPE =                                  new Entities('Gentle Slope',)

    public static readonly START_BLOCK =                                   new Entities('Start Block',)
    public static readonly OCCLUDE_BLOCK =                                 new Entities('Occlude Block',)

    public static readonly WATER =                                         new Entities('Water',)
    public static readonly LAVA =                                          new Entities('Lava',)
    public static readonly POISON =                                        new Entities('Poison',)

    public static readonly PIPE =                                          new Entities('Pipe',)
    public static readonly CLEAR_PIPE =                                    new Entities('Clear Pipe',)

    public static readonly SPIKE_TRAP =                                    new Entities('Spike Trap',)
    public static readonly JELECTRO =                                      new Entities('Jelectro',)
    public static readonly SEA_URCHIN =                                    new Entities('Sea Urchin',)
    public static readonly SPIKE_BLOCK =                                   new Entities('Spike Block',)

    public static readonly MUSHROOM_PLATFORM =                             new Entities('Mushroom Platform',)
    public static readonly SEMISOLID_PLATFORM =                            new Entities('Semisolid Platform',)
    public static readonly BRIDGE =                                        new Entities('Bridge',)

    //endregion -------------------- Ground / Pipe / Spike / Platform --------------------
    //region -------------------- Block / Coin --------------------

    public static readonly BRICK_BLOCK =                                   new Entities('Brick Block',)
    public static readonly CRISTAL_BLOCK =                                 new Entities('Cristal Block',)
    public static readonly ROTATING_BLOCK =                                new Entities('Rotating Block',)

    public static readonly HARD_BLOCK =                                    new Entities('Hard Block',)
    public static readonly ROCK_BLOCK =                                    new Entities('Rock Block',)

    public static readonly QUESTION_MARK_BLOCK =                           new Entities('? Block',)
    public static readonly HIDDEN_BLOCK =                                  new Entities('Hidden Block',)
    public static readonly EMPTY_BLOCK =                                   new Entities('Empty Block',)

    public static readonly EXCLAMATION_MARK_BLOCK =                        new Entities('! Block',)

    public static readonly NOTE_BLOCK =                                    new Entities('Note Block',)
    public static readonly MUSIC_BLOCK =                                   new Entities('Music Block',)

    public static readonly DONUT_BLOCK =                                   new Entities('Donut Block',)

    public static readonly CLOUD_BLOCK =                                   new Entities('Cloud Block',)

    public static readonly ON_OFF_SWITCH =                                 new Entities('ON/OFF Switch',)
    public static readonly DOTTED_LINE_BLOCK =                             new Entities('Dotted-Line Block',)

    public static readonly P_BLOCK =                                       new Entities('P Block',)

    public static readonly BLINKING_BLOCK =                                new Entities('Blinking Block',)

    public static readonly ICE_BLOCK =                                     new Entities('Ice Block',)
    public static readonly ICICLE =                                        new Entities('Icicle',)

    public static readonly COIN =                                          new Entities('Coin',)
    public static readonly FROZEN_COIN =                                   new Entities('Frozen Coin',)
    public static readonly TEN_COIN =                                      new Entities('10-Coin',)
    public static readonly THIRTY_COIN =                                   new Entities('30-Coin',)
    public static readonly FIFTY_COIN =                                    new Entities('50-Coin',)
    public static readonly PINK_COIN =                                     new Entities('Pink Coin',)

    //endregion -------------------- Block / Coin --------------------
    //region -------------------- Power-up / Yoshi / Shoe + projectiles --------------------

    public static readonly SUPER_MUSHROOM =                                new Entities('Super Mushroom',)

    public static readonly FIRE_FLOWER =                                   new Entities('Fire Flower',)
    public static readonly FIREBALL_THROWN_BY_A_PLAYER =                   new Entities('Fireball thrown by a player',)

    public static readonly SUPERBALL_FLOWER =                              new Entities('Superball Flower',)
    public static readonly SUPERBALL_THROWN_BY_A_PLAYER =                  new Entities('Superball thrown by a player',)

    public static readonly MYSTERY_MUSHROOM =                              new Entities('Mystery Mushroom',)
    public static readonly WEIRD_MUSHROOM =                                new Entities('Weird Mushroom',)

    public static readonly MASTER_SWORD =                                  new Entities('Master Sword',)
    public static readonly BOMB_THROWN_BY_A_LINK =                         new Entities('Bomb thrown by a Link',)
    public static readonly ARROW_THROWN_BY_A_LINK =                        new Entities('Arrow thrown by a Link',)

    public static readonly BIG_MUSHROOM =                                  new Entities('Big Mushroom',)
    public static readonly BIG_MUSHROOM_CLASSIC =                          new Entities('Big Mushroom (classic)',)
    public static readonly BIG_MUSHROOM_MODERN =                           new Entities('Big Mushroom (modern)',)

    public static readonly SMB2_MUSHROOM =                                 new Entities('SMB2 Mushroom',)

    public static readonly SUPER_LEAF =                                    new Entities('Super Leaf',)

    public static readonly FROG_SUIT =                                     new Entities('Frog Suit',)

    public static readonly CAPE_FEATHER =                                  new Entities('Cape Feather',)

    public static readonly POWER_BALLOON =                                 new Entities('Power Balloon',)

    public static readonly PROPELLER_MUSHROOM =                            new Entities('Propeller Mushroom',)

    public static readonly SUPER_ACORN =                                   new Entities('Super Acorn',)

    public static readonly SUPER_BELL =                                    new Entities('Super Bell',)

    public static readonly SUPER_HAMMER =                                  new Entities('Super Hammer',)
    public static readonly BUILDER_BOX_THROWN_BY_A_PLAYER =                new Entities('Builder Box thrown by a player',)

    public static readonly BOOMERANG_FLOWER =                              new Entities('Boomerang Flower',)
    public static readonly BOOMERANG_THROWN_BY_A_PLAYER =                  new Entities('Boomerang thrown by a player',)

    public static readonly CANNON_BOX =                                    new Entities('Cannon Box',)
    public static readonly CANNONBALL_THROWN_BY_A_PLAYER =                 new Entities('Cannonball thrown by a player',)

    public static readonly PROPELLER_BOX =                                 new Entities('Propeller Box',)

    public static readonly GOOMBA_MASK =                                   new Entities('Goomba Mask',)

    public static readonly BULLET_BILL_MASK =                              new Entities('Bullet Bill Mask',)

    public static readonly RED_POW_BOX =                                   new Entities('Red POW Box',)

    public static readonly SUPER_STAR =                                    new Entities('Super Star',)

    public static readonly ONE_UP_MUSHROOM =                               new Entities('1-Up Mushroom',)
    public static readonly ROTTEN_MUSHROOM =                               new Entities('Rotten Mushroom',)

    public static readonly SHOE_GOOMBA =                                   new Entities('Shoe Goomba',)
    public static readonly SHOE =                                          new Entities('Shoe',)
    public static readonly STILETTO_GOOMBA =                               new Entities('Stiletto Goomba',)
    public static readonly STILETTO =                                      new Entities('Stiletto',)
    public static readonly YOSHI_EGG =                                     new Entities('Yoshi’s Egg',)
    public static readonly YOSHI =                                         new Entities('Yoshi',)
    public static readonly FIRE_THROWN_BY_A_YOSHI =                        new Entities('Fire thrown by a Yoshi',)
    public static readonly POISON_THROWN_BY_A_YOSHI =                      new Entities('Poison thrown by a Yoshi',)
    public static readonly BONE_THROWN_BY_A_YOSHI =                        new Entities('Bone thrown by a Yoshi',)
    public static readonly WRENCH_THROWN_BY_A_YOSHI =                      new Entities('Wrench thrown by a Yoshi',)
    public static readonly HAMMER_THROWN_BY_A_YOSHI =                      new Entities('Hammer thrown by a Yoshi',)
    public static readonly RED_YOSHI_EGG =                                 new Entities('Red Yoshi’s Egg',)
    public static readonly RED_YOSHI =                                     new Entities('Red Yoshi',)
    public static readonly FIRE_THROWN_BY_A_RED_YOSHI =                    new Entities('Fire thrown by a Red Yoshi',)

    //endregion -------------------- Power-up / Yoshi / Shoe + projectiles --------------------
    //region -------------------- General enemies --------------------

    public static readonly GOOMBA =                                        new Entities('Goomba',)
    public static readonly GALOOMBA =                                      new Entities('Galoomba',)
    public static readonly GOOMBRAT =                                      new Entities('Goombrat',)
    public static readonly GOOMBUD =                                       new Entities('Goombud',)

    public static readonly GREEN_KOOPA_TROOPA =                            new Entities('Green Koopa Troopa',)
    public static readonly RED_KOOPA_TROOPA =                              new Entities('Red Koopa Troopa',)
    public static readonly GREEN_BEACH_KOOPA =                             new Entities('Green Beach Koopa',)
    public static readonly RED_BEACH_KOOPA =                               new Entities('Red Beach Koopa',)
    public static readonly GREEN_KOOPA_SHELL =                             new Entities('Green Koopa Shell',)
    public static readonly RED_KOOPA_SHELL =                               new Entities('Red Koopa Shell',)

    public static readonly DRY_BONES =                                     new Entities('Dry Bones',)
    public static readonly PARABONES =                                     new Entities('Parabones',)
    public static readonly BONE_THROWN_BY_A_DRY_BONES =                    new Entities('Bone thrown by a Dry Bones',)
    public static readonly DRY_BONES_SHELL =                               new Entities('Dry Bones Shell',)

    public static readonly BUZZY_BEETLE =                                  new Entities('Buzzy Beetle',)
    public static readonly PARA_BEETLE =                                   new Entities('Para-Beetle',)
    public static readonly BUZZY_SHELL =                                   new Entities('Buzzy Shell',)

    public static readonly SPINY =                                         new Entities('Spiny',)
    public static readonly WINGED_SPINY =                                  new Entities('Winged Spiny',)
    public static readonly WINGED_SPINY_PROJECTILE =                       new Entities('(Winged Spiny’s projectile)',)
    public static readonly SPINY_EGG =                                     new Entities('Spiny Egg',)
    public static readonly SPINY_SHELL =                                   new Entities('Spiny Shell',)

    public static readonly SPIKE_TOP =                                     new Entities('Spike Top',)
    public static readonly WINGED_SPIKE_TOP =                              new Entities('Winged Spike Top',)
    public static readonly FAST_SPIKE_TOP =                                new Entities('Fast Spike Top',)
    public static readonly FAST_WINGED_SPIKE_TOP =                         new Entities('Fast Winged Spike Top',)

    public static readonly SKIPSQUEAK =                                    new Entities('Skipsqueak',)
    public static readonly SPINY_SKIPSQUEAK =                              new Entities('Spiny Skipsqueak',)

    public static readonly ANT_TROOPER =                                   new Entities('Ant Trooper',)
    public static readonly HORNED_ANT_TROOPER =                            new Entities('Horned Ant Trooper',)

    public static readonly STINGBY =                                       new Entities('Stingby',)

    public static readonly CHEEP_CHEEP =                                   new Entities('Cheep Cheep',)
    public static readonly BLURPS =                                        new Entities('Blurps',)
    public static readonly DEEP_CHEEP =                                    new Entities('Deep Cheep',)
    public static readonly FISH_BONE =                                     new Entities('Fish Bone',)

    public static readonly BLOOPER =                                       new Entities('Blooper',)
    public static readonly BLOOPER_NANNY =                                 new Entities('Blooper Nanny',)
    public static readonly BABY_BLOOPER =                                  new Entities('Baby Blooper',)

    public static readonly PORCUPUFFER =                                   new Entities('Porcupuffer',)

    public static readonly WIGGLER =                                       new Entities('Wiggler',)
    public static readonly ANGRY_WIGGLER =                                 new Entities('Angry Wiggler',)

    public static readonly PIRANHA_PLANT =                                 new Entities('Piranha Plant',)
    public static readonly JUMPING_PIRANHA_PLANT =                         new Entities('Jumping Piranha Plant',)
    public static readonly FIRE_PIRANHA_PLANT =                            new Entities('Fire Piranha Plant',)
    public static readonly FIREBALL_THROWN_BY_A_FIRE_PIRANHA_PLANT =       new Entities('Fireball thrown by a Fire Piranha Plant',)
    public static readonly MUNCHER =                                       new Entities('Muncher',)
    public static readonly PIRANHA_CREEPER =                               new Entities('Piranha Creeper',)

    public static readonly CHAIN_CHOMP =                                   new Entities('Chain Chomp',)
    public static readonly UNCHAINED_CHOMP =                               new Entities('Unchained Chomp',)
    public static readonly CHAIN_CHOMP_STUMP =                             new Entities('Chain Chomp’s Stump',)

    public static readonly SPIKE =                                         new Entities('Spike',)
    public static readonly SPIKE_BALL =                                    new Entities('Spike Ball',)
    public static readonly SNOWBALL =                                      new Entities('Snowball',)

    public static readonly LAKITU =                                        new Entities('Lakitu',)
    public static readonly LAKITU_CLOUD =                                  new Entities('Lakitu’s Cloud',)

    public static readonly BOO =                                           new Entities('Boo',)
    public static readonly STRETCH =                                       new Entities('Stretch',)
    public static readonly BOO_BUDDIES =                                   new Entities('Boo Buddies',)
    public static readonly PEEPA =                                         new Entities('Peepa',)

    public static readonly BOB_OMB =                                       new Entities('Bob-omb',)
    public static readonly LIT_BOB_OMB =                                   new Entities('Lit Bob-omb',)

    public static readonly POKEY =                                         new Entities('Pokey',)
    public static readonly SNOW_POKEY =                                    new Entities('Snow Pokey',)

    public static readonly THWOMP =                                        new Entities('Thwomp',)

    public static readonly MONTY_MOLE =                                    new Entities('Monty Mole',)
    public static readonly ROCKY_WRENCH =                                  new Entities('Rocky Wrench',)
    public static readonly WRENCH_THROWN_BY_A_ROCKY_WRENCH =               new Entities('Wrench thrown by a Rocky Wrench',)

    public static readonly MAGIKOOPA =                                     new Entities('Magikoopa',)
    public static readonly MAGIKOOPA_PROJECTILE =                          new Entities('(Magikoopa’s projectile)',)

    public static readonly HAMMER_BRO =                                    new Entities('Hammer Bro',)
    public static readonly SLEDGE_BRO =                                    new Entities('Sledge Bro',)
    public static readonly HAMMER_THROWN_BY_A_HAMMER_SLEDGE_BRO =          new Entities('Hammer thrown by a Hammer / Sledge Bro',)
    public static readonly FIRE_BRO =                                      new Entities('Fire Bro',)
    public static readonly HEAVY_FIRE_BRO =                                new Entities('Heavy Fire Bro',)
    public static readonly FIREBALL_THROWN_BY_A_HEAVY_FIRE_BRO =           new Entities('Fireball thrown by a (Heavy) Fire Bro',)

    public static readonly LAVA_BUBBLE =                                   new Entities('Lava Bubble',)

    public static readonly MECHAKOOPA =                                    new Entities('Mechakoopa',)
    public static readonly BLASTA_MECHAKOOPA =                             new Entities('Blasta Mechakoopa',)
    public static readonly HOMING_MISSILE_THROWN_BY_A_BLASTA_MECHAKOOPA =  new Entities('Homing Missile thrown by a Blasta Mechakoopa',)
    public static readonly ZAPPA_MECHAKOOPA =                              new Entities('Zappa Mechakoopa',)
    public static readonly ELECTRICITY_BEAM_THROWN_BY_A_ZAPPA_MECHAKOOPA = new Entities('Electricity Beam thrown by a Zappa Mechakoopa',)

    public static readonly CHARVAARGH =                                    new Entities('Charvaargh',)

    public static readonly BULLY =                                         new Entities('Bully',)

    //endregion -------------------- General enemies --------------------
    //region -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------

    public static readonly BILL_BLASTER =                                  new Entities('Bill Blaster',)
    public static readonly BULLET_BILL =                                   new Entities('Bullet Bill',)
    public static readonly BULL_EYE_BLASTER =                              new Entities('Bull’s-Eye Blaster',)
    public static readonly BULL_EYE_BILL =                                 new Entities('Bull’s-Eye Bill',)
    public static readonly CAT_BULLET_BILL =                               new Entities('Cat Bullet Bill',)

    public static readonly BANZAI_BILL =                                   new Entities('Banzai Bill',)
    public static readonly BULL_EYE_BANZAI =                               new Entities('Bull’s-Eye Banzai',)
    public static readonly CAT_BANZAI_BILL =                               new Entities('Cat Banzai Bill',)

    public static readonly CANNON =                                        new Entities('Cannon',)
    public static readonly CANNONBALL =                                    new Entities('Cannonball',)
    public static readonly RED_CANNON =                                    new Entities('Red Cannon',)
    public static readonly RED_CANNONBALL =                                new Entities('Red Cannonball',)

    public static readonly BURNER =                                        new Entities('Burner',)

    public static readonly FIRE_BAR =                                      new Entities('Fire Bar',)

    public static readonly SKEWER =                                        new Entities('Skewer',)

    public static readonly KOOPA_CLOWN_CAR =                               new Entities('Koopa Clown Car',)
    public static readonly JUNIOR_CLOWN_CAR =                              new Entities('Junior Clown Car',)
    public static readonly FIRE_KOOPA_CLOWN_CAR =                          new Entities('Fire Koopa Clown Car',)
    public static readonly FIRE_JUNIOR_CLOWN_CAR =                         new Entities('Fire Junior Clown Car',)
    public static readonly FIRE_THROWN_BY_A_FIRE_KOOPA_JUNIOR_CLOWN_CAR =  new Entities('Fire thrown by a Fire [Koopa / Junior] Clown Car',)

    public static readonly KOOPA_TROOPA_CAR =                              new Entities('Koopa Troopa Car',)
    public static readonly CAR =                                           new Entities('Car',)

    public static readonly GRINDER =                                       new Entities('Grinder',)

    public static readonly ANGRY_SUN =                                     new Entities('Angry Sun',)
    public static readonly MOON =                                          new Entities('Moon',)

    //endregion -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------
    //region -------------------- Bosses + projectiles --------------------

    public static readonly BOWSER =                                        new Entities('Bowser',)
    public static readonly MEOWSER =                                       new Entities('Meowser',)
    public static readonly FIRE_THROWN_BY_A_BOWSER =                       new Entities('Fire thrown by a Bowser',)
    public static readonly FALLING_FIRE_THROWN_BY_A_BOWSER =               new Entities('Falling Fire thrown by a Bowser',)
    public static readonly HAMMER_THROWN_BY_A_BOWSER =                     new Entities('Hammer thrown by a Bowser',)

    public static readonly BOWSER_JR =                                     new Entities('Bowser Jr.',)
    public static readonly FIRE_THROWN_BY_A_BOWSER_JR =                    new Entities('Fire thrown by a Bowser Jr.',)

    public static readonly BOOM_BOOM =                                     new Entities('Boom Boom',)
    public static readonly POM_POM =                                       new Entities('Pom Pom',)
    public static readonly POM_POM_CLONE =                                 new Entities('Pom Pom’s clone',)
    public static readonly SHURIKEN_THROWN_BY_A_POM_POM =                  new Entities('Shuriken thrown by a Pom Pom',)

    public static readonly LARRY =                                         new Entities('Larry',)
    public static readonly LARRY_WAND =                                    new Entities('Larry’s Wand',)
    public static readonly LARRY_PROJECTILE =                              new Entities('(Larry’s projectile)',)

    public static readonly IGGY =                                          new Entities('Iggy',)
    public static readonly IGGY_WAND =                                     new Entities('Iggy’s Wand',)
    public static readonly IGGY_PROJECTILE =                               new Entities('(Iggy’s projectile)',)

    public static readonly WENDY =                                         new Entities('Wendy',)
    public static readonly WENDY_WAND =                                    new Entities('Wendy’s Wand',)
    public static readonly CANDY_RING_THROWN_BY_A_WENDY =                  new Entities('Candy Ring thrown by a Wendy',)
    public static readonly WENDY_PROJECTILE =                              new Entities('(Wendy’s projectile)',)

    public static readonly LEMMY =                                         new Entities('Lemmy',)
    public static readonly LEMMY_WAND =                                    new Entities('Lemmy’s Wand',)
    public static readonly MAGIC_BALL_THROWN_BY_A_LEMMY =                  new Entities('Magic Ball thrown by a Lemmy',)
    public static readonly LEMMY_PROJECTILE =                              new Entities('(Lemmy’s projectile)',)

    public static readonly ROY =                                           new Entities('Roy',)
    public static readonly ROY_WAND =                                      new Entities('Roy’s Wand',)
    public static readonly ROY_PROJECTILE =                                new Entities('(Roy’s projectile)',)

    public static readonly MORTON =                                        new Entities('Morton',)
    public static readonly MORTON_WAND =                                   new Entities('Morton’s Wand',)
    public static readonly MORTON_THROWN_PROJECTILE =                      new Entities('(Morton’s Thrown projectile)',)
    public static readonly MORTON_GROUND_PROJECTILE =                      new Entities('(Morton’s Ground projectile)',)

    public static readonly LUDWIG =                                        new Entities('Ludwig',)
    public static readonly LUDWIG_WAND =                                   new Entities('Ludwig’s Wand',)
    public static readonly LUDWIG_PROJECTILE =                             new Entities('(Ludwig’s projectile)',)

    //endregion -------------------- Bosses + projectiles --------------------
    //region -------------------- Passive gizmo / Key / Warp / Other --------------------

    public static readonly BUMPER =                                        new Entities('Bumper',)

    public static readonly SWINGING_CLAW =                                 new Entities('Swinging Claw',)

    public static readonly TWISTER =                                       new Entities('Twister',)

    public static readonly ONE_WAY_WALL =                                  new Entities('One-Way Wall',)

    public static readonly TRACK =                                         new Entities('Track',)
    public static readonly TRACK_BLOCK =                                   new Entities('Track Block',)

    public static readonly VINE =                                          new Entities('Vine',)
    public static readonly TREE =                                          new Entities('Tree',)

    public static readonly STARTING_ARROW =                                new Entities('Starting Arrow',)//A background entity
    public static readonly ARROW_SIGN =                                    new Entities('Arrow Sign',)

    public static readonly CHECKPOINT_FLAG =                               new Entities('Checkpoint Flag',)
    public static readonly GOAL_POLE =                                     new Entities('Goal Pole',)//An interactable partially solid & background entity
    public static readonly GOAL_WITH_CARDS =                               new Entities('Cards Roulette',)//An interactable background entity
    public static readonly GIANT_GATE =                                    new Entities('Giant Gate',)//An interactable background entity

    public static readonly CASTLE =                                        new Entities('Castle',)//A background entity
    public static readonly ENDING_CASTLE_DOOR =                            new Entities('Ending Castle Door',)//A background entity
    public static readonly AXE =                                           new Entities('Axe',)//An interactable partially solid & background entity

    public static readonly DASH_BLOCK =                                    new Entities('Dash Block',)

    public static readonly SNAKE_BLOCK =                                   new Entities('Snake Block',)
    public static readonly FAST_SNAKE_BLOCK =                              new Entities('Fast Snake Block',)

    public static readonly CONVEYOR_BELT =                                 new Entities('Conveyor Belt',)
    public static readonly FAST_CONVEYOR_BELT =                            new Entities('Fast Conveyor Belt',)

    public static readonly MUSHROOM_TRAMPOLINE =                           new Entities('Mushroom Trampoline',)
    public static readonly ON_OFF_TRAMPOLINE =                             new Entities('ON/OFF Trampoline',)

    public static readonly LIFT =                                          new Entities('Lift',)
    public static readonly FLIMSY_LIFT =                                   new Entities('Flimsy Lift',)
    public static readonly CLOUD_LIFT =                                    new Entities('Cloud Lift',)

    public static readonly SEESAW =                                        new Entities('Seesaw',)

    public static readonly LAVA_LIFT =                                     new Entities('Lava Lift',)
    public static readonly FAST_LAVA_LIFT =                                new Entities('Fast Lava Lift',)

    public static readonly CRATE =                                         new Entities('Crate',)

    public static readonly KEY =                                           new Entities('Key',)
    public static readonly CURSED_KEY =                                    new Entities('Cursed Key',)
    public static readonly PHANTO =                                        new Entities('Phanto',)

    public static readonly TRAMPOLINE =                                    new Entities('Trampoline',)
    public static readonly HOP_CHOPS =                                     new Entities('Hop-Chops',)

    public static readonly POW_BLOCK =                                     new Entities('POW Block',)
    public static readonly RED_POW_BLOCK =                                 new Entities('Red POW Block',)

    public static readonly P_SWITCH =                                      new Entities('P Switch',)

    public static readonly STONE =                                         new Entities('Stone',)

    public static readonly WARP_DOOR =                                     new Entities('Warp Door',)
    public static readonly P_WARP_DOOR =                                   new Entities('P Warp Door',)
    public static readonly KEY_DOOR =                                      new Entities('Key Door',)

    public static readonly WARP_BOX =                                      new Entities('Warp Box',)
    public static readonly WARP_BOX_WITH_KEY =                             new Entities('Warp Box (With Key)',)

    public static readonly WING =                                          new Entities('Wing',)
    public static readonly PARACHUTE =                                     new Entities('Parachute',)

    public static readonly TOAD =                                          new Entities('Toad',)
    public static readonly CAGED_TOADETTE =                                new Entities('Caged Toadette',)//A background entity

    public static readonly BUBBLE =                                        new Entities('Bubble',)//An interactable entity

    //endregion -------------------- Passive gizmo / Key / Warp / Other --------------------

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumByNameWithValidationSingleton<Entities, typeof Entities> = class CompanionEnum_Entities
        extends CompanionEnumByNameWithValidation<Entities, typeof Entities> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_Entities

        private constructor() {
            super(Entities,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_Entities()
        }

        //endregion -------------------- Singleton usage --------------------

        public override getValueByName(value: Nullable<| Entities | string>,): Entities {
            return getValueByEnglishName(value, this,)
        }

        public override hasValueByName(value: Nullable<| Entities | string>,): boolean {
            if (value == null)
                return false
            if (value instanceof this.instance)
                return true
            return hasByArray(this.instance.everyEnglishNames, value,)
        }

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleEnglishName, Entity>

    #reference?: Entity
    readonly #englishNameContainer
    #image?: EntityImage
    #editorImage?: EditorImage
    #clearConditionImage?: ClearConditionImage
    #inGameImage?: InGameImage
    #unusedRegularImage?: UnusedImage_Regular
    #unusedBigMushroomImage?: UnusedImage_BigMushroom

    #editorVoiceSound?: NullOr<EditorVoiceSound>

    #editorVoiceReference?: NullOr<EditorVoices>
    #entityImageReference?: EntityImages
    #editorEntityImageReference?: EditorEntityImages
    #clearConditionEntityImageReference?: ClearConditionEntityImages
    #inGameEntityImageReference?: InGameEntityImages
    #unusedEntityImageReference?: UnusedEntityImages
    #unusedBigMushroomEntityImageReference?: UnusedBigMushroomEntityImages

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(englishName: PossibleEnglishName,) {
        super()
        this.#englishNameContainer = new StringContainer(englishName)
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    //region -------------------- Getter methods (reference) --------------------

    public static get REFERENCE_MAP(): ReadonlyMap<PossibleEnglishName, Entity> {
        return this.#REFERENCE_MAP ??= Import.EntityLoader.get.load()
    }

    /**
     * {@inheritDoc}
     * @semiAsynchronously
     */
    public get reference(): Entity {
        return this.#reference ??= Entities.REFERENCE_MAP.get(this.englishName)!
    }

    //endregion -------------------- Getter methods (reference) --------------------
    //region -------------------- Getter methods (english name) --------------------

    public get englishName(): PossibleEnglishName {
        return this.#englishNameContainer.get
    }

    public get englishNameInHtml(): string {
        return this.#englishNameContainer.getInHtml
    }

    //endregion -------------------- Getter methods (english name) --------------------
    //region -------------------- Getter methods (image) --------------------

    public get image(): EntityImage { return this.#image ??= this.entityImageReference.image }

    public get editorImage(): EditorImage { return this.#editorImage ??= this.entityEditorImageReference.image }

    public get clearConditionImage(): ClearConditionImage { return this.#clearConditionImage ??= this.clearConditionEntityImageReference.image }

    public get inGameImage(): InGameImage { return this.#inGameImage ??= this.inGameEntityImageReference.image }

    public get unusedImage(): UnusedImage_Regular { return this.#unusedRegularImage ??= this.unusedEntityImageReference.image }

    public get unusedBigMushroomImage(): UnusedImage_BigMushroom { return this.#unusedBigMushroomImage ??= this.unusedBigMushroomEntityImageReference.image }

    //endregion -------------------- Getter methods (image) --------------------
    //region -------------------- Getter methods (sound) --------------------

    //region -------------------- editor sound --------------------

    public get editorVoiceSoundFileHolder(): NullOr<EditorVoiceSound> {
        const value = this.#editorVoiceSound
        if (value !== undefined)
            return value
        return this.#editorVoiceSound = this.editorVoiceReference?.editorVoiceSoundFileHolder ?? null
    }

    //endregion -------------------- editor sound --------------------

    //endregion -------------------- Getter methods (sound) --------------------
    //region -------------------- Getter methods (linked reference) --------------------

    public get editorVoiceReference(): NullOr<EditorVoices> {
        const value = this.#editorVoiceReference
        if (value !== undefined)
            return value

        //@ts-ignore: This is only to verify if it exists by its name (it is faster than using the companion enum)
        const reference: UndefinedOr<EditorVoices> = EditorVoices[this.name]
        if (reference != null)
            return this.#editorVoiceReference = reference
        if (EditorVoiceCompanion.hasReference(this,))
            return this.#editorVoiceReference = EditorVoiceCompanion.getValueByEntity(this,)
        return this.#editorVoiceReference = null
    }

    public get entityImageReference(): EntityImages { return this.#entityImageReference ??= Import.EntityImages[this.name] }

    public get entityEditorImageReference(): EditorEntityImages { return this.#editorEntityImageReference ??= Import.EditorEntityImages[this.name] }

    public get clearConditionEntityImageReference(): ClearConditionEntityImages { return this.#clearConditionEntityImageReference ??= ClearConditionEntityImages[this.name] }

    public get inGameEntityImageReference(): InGameEntityImages { return this.#inGameEntityImageReference ??= InGameEntityImages[this.name] }

    public get unusedEntityImageReference(): UnusedEntityImages { return this.#unusedEntityImageReference ??= UnusedEntityImages[this.name] }

    public get unusedBigMushroomEntityImageReference(): UnusedBigMushroomEntityImages { return this.#unusedBigMushroomEntityImageReference ??= UnusedBigMushroomEntityImages[this.name] }

    //endregion -------------------- Getter methods (linked reference) --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------

}

export namespace Entities {

    /** The companion instance of a {@link Entities} */
    export const Companion = Entities.CompanionEnum.get

    const values = Companion.values

    export const everyEnglishNames = values.map(it => it.englishName,).toArray()

    export const ALL = values.toArray()

}

// Entities.values.filter(it => it.uniqueImage !== EmptyUniqueImage.get,).forEach(it => console.log(`${it.englishName}\n\t`, Array.from(it.uniqueImage.map.values(), it => it.map(it => it.name,),).flat(),),)
// Entities.values.filter(it => it.editorImage !== EmptyEditorImage.get,).forEach(it => console.log(`${it.englishName}\n\t`, it.editorImage.all.map(it => it.name,),),)
// Entities.values.filter(it => it.clearConditionImage !== EmptyClearConditionImage.get,).forEach(it => console.log(`${it.englishName}\n\t`, GameStyles.values.map(it2 => it.clearConditionImage.get(it2,),).toArray().flat().map(it => it.name,),),)
// Entities.values.filter(it => it.inGameImage !== EmptyInGameImage.get,).map(it => console.log(`${it.englishName}\n\t`, it.inGameImage,),)
// Entities.values.filter(it => it.unusedImage.all.size !== 0,).forEach(it => console.log(`${it.englishName}\n\t`, [...it.unusedImage.all.entries(),].map(it => it[1]).flat(2),),)
// Entities.values.filter(it => it.unusedBigMushroomImage.all.length !== 0,).forEach(it => console.log(`${it.englishName}\n\t`, it.unusedBigMushroomImage.all.flat(),),)

// @ts-ignore: TODO remove this test variable when the application will be complete
(window.test ??= {}).Entities = Entities
