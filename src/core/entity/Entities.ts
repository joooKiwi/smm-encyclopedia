import type {Builder}                                                                                                                                                                                    from '../../util/Builder';
import type {ClassWithEnglishName}                                                                                                                                                                       from '../ClassWithEnglishName';
import type {ClassWithReference}                                                                                                                                                                         from '../ClassWithReference';
import type {Image}                                                                                                                                                                                      from './images/Image';
import type {Entity}                                                                                                                                                                                     from './Entity';
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleEnglishName, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './Entities.types';
import type {ObjectHolder}                                                                                                                                                                               from '../../util/holder/ObjectHolder';
import type {SimpleImageName}                                                                                                                                                                            from './images/EditorImage.types';
import type {StaticReference}                                                                                                                                                                            from '../../util/enum/Enum.types';

import {DelayedObjectHolderContainer} from '../../util/holder/DelayedObjectHolderContainer';
import {EditorImageBuilder}           from './images/EditorImageBuilder';
import {EmptyEditorImage}             from './images/EmptyEditorImage';
import {Enum}                         from '../../util/enum/Enum';
import {GameStyles}                   from '../gameStyle/GameStyles';
import {GenericSingleInstanceBuilder} from '../../util/GenericSingleInstanceBuilder';
import {ObjectHolderContainer}        from '../../util/holder/ObjectHolderContainer';
import {StringContainer}              from '../../util/StringContainer';
import {Themes}                       from '../theme/Themes';

/**
 * @recursiveReference<{@link EntityLoader}>
 */
export class Entities
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName>,
        ClassWithReference<Entity> {

    //region -------------------- Enum instances --------------------

    //region -------------------- Ground / Pipe / Spike / Platform --------------------

    public static readonly GROUND =                                        new Entities('Ground',                                       new EditorImageBuilder('Ground').setAsGround(),);
    public static readonly STEEP_SLOPE =                                   new Entities('Steep Slope',                                  new EditorImageBuilder('slope_l30').setAsGround(),);
    public static readonly GENTLE_SLOPE =                                  new Entities('Gentle Slope',                                 new EditorImageBuilder('slope_l45').setAsGround(),);

    public static readonly PIPE =                                          new Entities('Pipe',                                         new EditorImageBuilder('Dokan').setAsPipe(),);
    public static readonly CLEAR_PIPE =                                    new Entities('Clear Pipe',                                   new EditorImageBuilder('ToumeiDokan').setOnlySM3DW(),);

    public static readonly SPIKE_TRAP =                                    new Entities('Spike Trap',                                   new EditorImageBuilder('Toge').setNightTheme(GameStyles.SUPER_MARIO_BROS, Themes.SNOW,).setNightTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.SNOW,).setNotSM3DW(),);
    public static readonly JELECTRO =                                      new Entities('Jelectro',                                     new EditorImageBuilder('Toge').hasNoDefaultImage().setTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.UNDERWATER,),);
    public static readonly SEA_URCHIN =                                    new Entities('Sea Urchin',                                   new EditorImageBuilder('Toge').hasNoDefaultImage().setTheme(GameStyles.SUPER_MARIO_WORLD, Themes.UNDERWATER,),);
    public static readonly SPIKE_BLOCK =                                   new Entities('Spike Block',                                  new EditorImageBuilder('TogeBlock').setAmount(3).setOnlySM3DW(),);

    public static readonly MUSHROOM_PLATFORM =                             new Entities('Mushroom Platform',                            new EditorImageBuilder('GroundMushroom').setAsMushroomPlatform(),);
    public static readonly SEMISOLID_PLATFORM =                            new Entities('Semisolid Platform',                           new EditorImageBuilder('GroundBox').setAsSemisolidPlatform(),);
    public static readonly BRIDGE =                                        new Entities('Bridge',                                       new EditorImageBuilder('Bridge').setAsBridge(),);

    //endregion -------------------- Ground / Pipe / Spike / Platform --------------------
    //region -------------------- Block / Coin --------------------

    public static readonly BRICK_BLOCK =                                   new Entities('Brick Block',                                  new EditorImageBuilder('RengaBlock').setAsBrickBlock().setNotGameStyle(GameStyles.SUPER_MARIO_WORLD,),);
    public static readonly CRISTAL_BLOCK =                                 new Entities('Cristal Block',                                new EditorImageBuilder('RengaBlock').hasNoDefaultImage().setTheme(GameStyles.SUPER_MARIO_3D_WORLD, Themes.UNDERGROUND, Themes.FOREST,),);
    public static readonly ROTATING_BLOCK =                                new Entities('Rotating Block',                               new EditorImageBuilder('RengaBlock').setGameStyle(GameStyles.SUPER_MARIO_WORLD,),);

    public static readonly HARD_BLOCK =                                    new Entities('Hard Block',                                   new EditorImageBuilder('HardBlock').setAsHardBlock().setNotSM3DW(),);
    public static readonly ROCK_BLOCK =                                    new Entities('Rock Block',                                   new EditorImageBuilder('HardBlock').setOnlySM3DW(),);

    public static readonly QUESTION_MARK_BLOCK =                           new Entities('? Block',                                      new EditorImageBuilder('HatenaBlock').setAsQuestionMarkBlock(),);
    public static readonly HIDDEN_BLOCK =                                  new Entities('Hidden Block',                                 'ClearBlock',);
    public static readonly EMPTY_BLOCK =                                   new Entities('Empty Block',);

    public static readonly EXCLAMATION_MARK_BLOCK =                        new Entities('! Block',                                      new EditorImageBuilder('BikkuriBlock').setOnlySM3DW(),);

    public static readonly NOTE_BLOCK =                                    new Entities('Note Block',                                   new EditorImageBuilder('OnpuBlock', 1,).setNotSM3DW().setNightTheme(GameStyles.SUPER_MARIO_BROS, Themes.SNOW,).setNightTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.SNOW,),);
    public static readonly MUSIC_BLOCK =                                   new Entities('Music Block',                                  new EditorImageBuilder('OnpuBlock', 2,).setNotSM3DW().setNightTheme(GameStyles.SUPER_MARIO_BROS, Themes.SNOW,).setNightTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.SNOW,),);

    public static readonly DONUT_BLOCK =                                   new Entities('Donut Block',                                  new EditorImageBuilder('ChikuwaBlock').setAsDonutBlock(),);

    public static readonly CLOUD_BLOCK =                                   new Entities('Cloud Block',                                  new EditorImageBuilder('KumoBlock').setAsCloudBlock(),);

    public static readonly ON_OFF_SWITCH =                                 new Entities('ON/OFF Switch',                                'OnOffSwitch',);
    public static readonly DOTTED_LINE_BLOCK =                             new Entities('Dotted-Line Block',                            new EditorImageBuilder('OnOffBlock').setAmount(2),);

    public static readonly P_BLOCK =                                       new Entities('P Block',                                      null,);

    public static readonly BLINKING_BLOCK =                                new Entities('Blinking Block',                               new EditorImageBuilder('Chikachika').setAmount(2).setOnlySM3DW(),);

    public static readonly ICE_BLOCK =                                     new Entities('Ice Block',                                    new EditorImageBuilder('IceBlock').setAllGameStyles().setNightTheme(GameStyles.SUPER_MARIO_BROS_3, Themes.SNOW,),);
    public static readonly ICICLE =                                        new Entities('Icicle',                                       new EditorImageBuilder('Icicle').setAmount(2),);

    public static readonly COIN =                                          new Entities('Coin',                                         new EditorImageBuilder('Coin', 1,).setAllGameStyles(),);
    public static readonly FROZEN_COIN =                                   new Entities('Frozen Coin',                                  null,);
    public static readonly TEN_COIN =                                      new Entities('10-Coin',                                      new EditorImageBuilder('10Coin', 1,).setAllGameStyles(),);
    public static readonly THIRTY_COIN =                                   new Entities('30-Coin',                                      new EditorImageBuilder('10Coin', 2,).setAllGameStyles(),);
    public static readonly FIFTY_COIN =                                    new Entities('50-Coin',                                      new EditorImageBuilder('10Coin', 3,).setAllGameStyles(),);
    public static readonly PINK_COIN =                                     new Entities('Pink Coin',                                    'PinkCoin',);

    //endregion -------------------- Block / Coin --------------------
    //region -------------------- Power-up / Yoshi / Shoe + projectiles --------------------

    public static readonly SUPER_MUSHROOM =                                new Entities('Super Mushroom',                               'SuperKinoko',);

    public static readonly FIRE_FLOWER =                                   new Entities('Fire Flower',                                  new EditorImageBuilder('FireFlower', 1,).setAsPowerUp().setAllGameStyles(),);
    public static readonly FIREBALL_THROWN_BY_A_PLAYER =                   new Entities('Fireball thrown by a player',                  );

    public static readonly SUPERBALL_FLOWER =                              new Entities('Superball Flower',                             new EditorImageBuilder('FireFlower', 2,).setAsPowerUp().setGameStyle(GameStyles.SUPER_MARIO_BROS),);
    public static readonly SUPERBALL_THROWN_BY_A_PLAYER =                  new Entities('Superball thrown by a player',                 );

    public static readonly MYSTERY_MUSHROOM =                              new Entities('Mystery Mushroom',);
    public static readonly WEIRD_MUSHROOM =                                new Entities('Weird Mushroom',);

    public static readonly MASTER_SWORD =                                  new Entities('Master Sword',                                 null,);
    public static readonly BOMB_THROWN_BY_A_LINK =                         new Entities('Bomb thrown by a Link',                        );
    public static readonly ARROW_THROWN_BY_A_LINK =                        new Entities('Arrow thrown by a Link',                       );

    public static readonly BIG_MUSHROOM =                                  new Entities('Big Mushroom',                                 new EditorImageBuilder('DekaKinoko').setAsPowerUp().setGameStyle(GameStyles.SUPER_MARIO_BROS,),);
    public static readonly BIG_MUSHROOM_CLASSIC =                          new Entities('Big Mushroom (classic)',);
    public static readonly BIG_MUSHROOM_MODERN =                           new Entities('Big Mushroom (modern)',);

    public static readonly SMB2_MUSHROOM =                                 new Entities('SMB2 Mushroom',                                null,);

    public static readonly SUPER_LEAF =                                    new Entities('Super Leaf',                                   new EditorImageBuilder('SuperKonoha').setAsPowerUp().setGameStyle(GameStyles.SUPER_MARIO_BROS_3,),);

    public static readonly FROG_SUIT =                                     new Entities('Frog Suit',                                    null,);

    public static readonly CAPE_FEATHER =                                  new Entities('Cape Feather',                                 new EditorImageBuilder('MantleWing').setAsPowerUp().setGameStyle(GameStyles.SUPER_MARIO_WORLD,),);

    public static readonly POWER_BALLOON =                                 new Entities('Power Balloon',                                null,);

    public static readonly PROPELLER_MUSHROOM =                            new Entities('Propeller Mushroom',                           new EditorImageBuilder('PropellerKinoko').setAsPowerUp().setGameStyle(GameStyles.NEW_SUPER_MARIO_BROS_U,),);

    public static readonly SUPER_ACORN =                                   new Entities('Super Acorn',                                  null,);

    public static readonly SUPER_BELL =                                    new Entities('Super Bell',                                   new EditorImageBuilder('SuperBell').setAsPowerUp().setOnlySM3DW(),);

    public static readonly SUPER_HAMMER =                                  new Entities('Super Hammer',                                 new EditorImageBuilder('SuperHammer').setAsPowerUp().setOnlySM3DW(),);
    public static readonly BUILDER_BOX_THROWN_BY_A_PLAYER =                new Entities('Builder Box thrown by a player',               );

    public static readonly BOOMERANG_FLOWER =                              new Entities('Boomerang Flower',                             null,);
    public static readonly BOOMERANG_THROWN_BY_A_PLAYER =                  new Entities('Boomerang thrown by a player',                 );

    public static readonly CANNON_BOX =                                    new Entities('Cannon Box',                                   null,);
    public static readonly CANNONBALL_THROWN_BY_A_PLAYER =                 new Entities('Cannonball thrown by a player',                );

    public static readonly PROPELLER_BOX =                                 new Entities('Propeller Box',                                null,);

    public static readonly GOOMBA_MASK =                                   new Entities('Goomba Mask',                                  null,);

    public static readonly BULLET_BILL_MASK =                              new Entities('Bullet Bill Mask',                             null,);

    public static readonly RED_POW_BOX =                                   new Entities('Red POW Box',                                  null,);

    public static readonly SUPER_STAR =                                    new Entities('Super Star',                                   'SuperStar',);

    public static readonly ONE_UP_MUSHROOM =                               new Entities('1-Up Mushroom',                                '1upKinoko',);
    public static readonly ROTTEN_MUSHROOM =                               new Entities('Rotten Mushroom',                              new EditorImageBuilder('DokuKinoko').setNotSM3DW(),);

    public static readonly SHOE_GOOMBA =                                   new Entities('Shoe Goomba',                                  new EditorImageBuilder('KutsuKuribo', 1,).setGameStyle(GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_BROS_3,),);
    public static readonly SHOE =                                          new Entities('Shoe',                                         );
    public static readonly STILETTO_GOOMBA =                               new Entities('Stiletto Goomba',                              new EditorImageBuilder('KutsuKuribo', 2,).setGameStyle(GameStyles.SUPER_MARIO_BROS, GameStyles.SUPER_MARIO_BROS_3,),);
    public static readonly STILETTO =                                      new Entities('Stiletto',                                     );
    public static readonly YOSHI_EGG =                                     new Entities('Yoshi\'s Egg',                                 new EditorImageBuilder('YosshiEgg').setGameStyle(GameStyles.SUPER_MARIO_WORLD, GameStyles.NEW_SUPER_MARIO_BROS_U,),);
    public static readonly YOSHI =                                         new Entities('Yoshi',                                        );
    public static readonly FIRE_THROWN_BY_A_YOSHI =                        new Entities('Fire thrown by a Yoshi',                       );
    public static readonly POISON_THROWN_BY_A_YOSHI =                      new Entities('Poison thrown by a Yoshi',                     );
    public static readonly BONE_THROWN_BY_A_YOSHI =                        new Entities('Bone thrown by a Yoshi',                       );
    public static readonly HAMMER_THROWN_BY_A_YOSHI =                      new Entities('Hammer thrown by a Yoshi',                     );
    public static readonly RED_YOSHI_EGG =                                 new Entities('Red Yoshi\'s Egg',                             new EditorImageBuilder('YosshiEggRed').setGameStyle(GameStyles.SUPER_MARIO_WORLD, GameStyles.NEW_SUPER_MARIO_BROS_U,),);
    public static readonly RED_YOSHI =                                     new Entities('Red Yoshi',                                    );
    public static readonly FIRE_THROWN_BY_A_RED_YOSHI =                    new Entities('Fire thrown by a Red Yoshi',                   );

    //endregion -------------------- Power-up / Yoshi / Shoe + projectiles --------------------
    //region -------------------- General enemies --------------------

    public static readonly GOOMBA =                                        new Entities('Goomba',                                       new EditorImageBuilder('Kuribo', 1,).setNotGameStyle(GameStyles.SUPER_MARIO_WORLD,),);
    public static readonly GALOOMBA =                                      new Entities('Galoomba',                                     new EditorImageBuilder('Kuribo', 1,).setGameStyle(GameStyles.SUPER_MARIO_WORLD,),);
    public static readonly GOOMBRAT =                                      new Entities('Goombrat',                                     new EditorImageBuilder('Kuribo', 2,).setNotGameStyle(GameStyles.SUPER_MARIO_WORLD, GameStyles.SUPER_MARIO_3D_WORLD,),);
    public static readonly GOOMBUD =                                       new Entities('Goombud',                                      new EditorImageBuilder('Kuribo', 2,).setGameStyle(GameStyles.SUPER_MARIO_WORLD,),);

    public static readonly KOOPA_TROOPA =                                  new Entities('Koopa Troopa',                                 new EditorImageBuilder('Nokonoko').setAmount(2).setAllGameStyles(),);
    public static readonly BEACH_KOOPA =                                   new Entities('Beach Koopa',);
    public static readonly KOOPA_SHELL =                                   new Entities('Koopa Shell',                                  );

    public static readonly DRY_BONES =                                     new Entities('Dry Bones',                                    new EditorImageBuilder('Karon', 1,).setAllGameStyles(),);
    public static readonly PARABONES =                                     new Entities('Parabones',);
    public static readonly BONE_THROWN_BY_A_DRY_BONES =                    new Entities('Bone thrown by a Dry Bones',                   );
    public static readonly DRY_BONES_SHELL =                               new Entities('Dry Bones Shell',                              new EditorImageBuilder('Karon', 2,).setNotSM3DW(),);

    public static readonly BUZZY_BEETLE =                                  new Entities('Buzzy Beetle',                                 new EditorImageBuilder('Met', 1,).setAsDifferentInSMBAndSMB3().setNotSM3DW(),);
    public static readonly PARA_BEETLE =                                   new Entities('Para-Beetle',);
    public static readonly BUZZY_SHELL =                                   new Entities('Buzzy Shell',                                  new EditorImageBuilder('Met', 2,).setAsDifferentInSMBAndSMB3().setNotSM3DW(),);

    public static readonly SPINY =                                         new Entities('Spiny',                                        new EditorImageBuilder('Togezo', 1).setAllGameStyles(),);
    public static readonly WINGED_SPINY =                                  new Entities('Winged Spiny',);
    public static readonly WINGED_SPINY_PROJECTILE =                       new Entities('(Winged Spiny\'s projectile)',                 );
    public static readonly SPINY_EGG =                                     new Entities('Spiny Egg',);
    public static readonly SPINY_SHELL =                                   new Entities('Spiny Shell',                                  new EditorImageBuilder('Togezo', 2).setNotSM3DW(),);

    public static readonly SPIKE_TOP =                                     new Entities('Spike Top',                                    new EditorImageBuilder('TogeMet', 1,).setNotSM3DW(),);
    public static readonly WINGED_SPIKE_TOP =                              new Entities('Winged Spike Top',);
    public static readonly FAST_SPIKE_TOP =                                new Entities('Fast Spike Top',                               new EditorImageBuilder('TogeMet', 2,).setNotSM3DW(),);
    public static readonly FAST_WINGED_SPIKE_TOP =                         new Entities('Fast Winged Spike Top',);

    public static readonly SKIPSQUEAK =                                    new Entities('Skipsqueak',                                   new EditorImageBuilder('Pyonchu', 1,).setOnlySM3DW(),);
    public static readonly SPINY_SKIPSQUEAK =                              new Entities('Spiny Skipsqueak',                             new EditorImageBuilder('Pyonchu', 2,).setOnlySM3DW(),);

    public static readonly ANT_TROOPER =                                   new Entities('Ant Trooper',                                  new EditorImageBuilder('Arihei', 1,).setOnlySM3DW(),);
    public static readonly HORNED_ANT_TROOPER =                            new Entities('Horned Ant Trooper',                           new EditorImageBuilder('Arihei', 2,).setOnlySM3DW(),);

    public static readonly STINGBY =                                       new Entities('Stingby',                                      new EditorImageBuilder('Hacchin', ).setOnlySM3DW(),);

    public static readonly CHEEP_CHEEP =                                   new Entities('Cheep Cheep',                                  new EditorImageBuilder('Pukupuku').setAsRegularCheepCheep(),);
    public static readonly BLURPS =                                        new Entities('Blurps',                                       new EditorImageBuilder('Pukupuku',1,).setGameStyle(GameStyles.SUPER_MARIO_WORLD,),);
    public static readonly DEEP_CHEEP =                                    new Entities('Deep Cheep',                                   new EditorImageBuilder('Pukupuku',1,).setGameStyle(GameStyles.NEW_SUPER_MARIO_BROS_U,),);
    public static readonly FISH_BONE =                                     new Entities('Fish Bone',                                    'FishBone',);

    public static readonly BLOOPER =                                       new Entities('Blooper',                                      new EditorImageBuilder('Gesso',1,).setAllGameStyles(),);
    public static readonly BLOOPER_NANNY =                                 new Entities('Blooper Nanny',                                new EditorImageBuilder('Gesso',2,).setNotSM3DW(),);
    public static readonly BABY_BLOOPER =                                  new Entities('Baby Blooper',);

    public static readonly PORCUPUFFER =                                   new Entities('Porcupuffer',                                  new EditorImageBuilder('Fugumannen').setOnlySM3DW(),);

    public static readonly WIGGLER =                                       new Entities('Wiggler',                                      new EditorImageBuilder('Hanachan', 1,).setNotSM3DW(),);
    public static readonly ANGRY_WIGGLER =                                 new Entities('Angry Wiggler',                                new EditorImageBuilder('Hanachan', 2,).setNotSM3DW(),);

    public static readonly PIRANHA_PLANT =                                 new Entities('Piranha Plant',                                new EditorImageBuilder('Pakkun', 1,).setNotGameStyle(GameStyles.SUPER_MARIO_WORLD,),);
    public static readonly JUMPING_PIRANHA_PLANT =                         new Entities('Jumping Piranha Plant',                        new EditorImageBuilder('Pakkun', 1,).setGameStyle(GameStyles.SUPER_MARIO_WORLD,),);
    public static readonly FIRE_PIRANHA_PLANT =                            new Entities('Fire Piranha Plant',                           new EditorImageBuilder('Pakkun', 2,).setAllGameStyles(),);
    public static readonly FIREBALL_THROWN_BY_A_FIRE_PIRANHA_PLANT =       new Entities('Fireball thrown by a Fire Piranha Plant',      );
    public static readonly MUNCHER =                                       new Entities('Muncher',                                      new EditorImageBuilder('BlackPakkun').setAsDifferentInSMBAndSMB3().setNotSM3DW(),);
    public static readonly PIRANHA_CREEPER =                               new Entities('Piranha Creeper',                              new EditorImageBuilder('PackunPipe').setAmount(2).setOnlySM3DW(),);

    public static readonly CHAIN_CHOMP =                                   new Entities('Chain Chomp',                                  new EditorImageBuilder('Wanwan', 1,).setAsDifferentInSMBAndSMB3().setNotSM3DW(),);
    public static readonly UNCHAINED_CHOMP =                               new Entities('Unchained Chomp',                              new EditorImageBuilder('Wanwan', 2,).setAsDifferentInSMBAndSMB3().setNotSM3DW(),);
    public static readonly CHAIN_CHOMP_STUMP =                             new Entities('Chain Chomp\'s Stump',);

    public static readonly SPIKE =                                         new Entities('Spike',                                        null,);
    public static readonly SPIKE_BALL =                                    new Entities('Spike Ball',                                   null,);
    public static readonly SNOWBALL =                                      new Entities('Snowball',                                     null,);

    public static readonly LAKITU =                                        new Entities('Lakitu',                                       new EditorImageBuilder('Jugem', 1,).setNotSM3DW(),);
    public static readonly LAKITU_CLOUD =                                  new Entities('Lakitu\'s Cloud',                              new EditorImageBuilder('Jugem', 2,).setNotSM3DW(),);

    public static readonly BOO =                                           new Entities('Boo',                                          new EditorImageBuilder('Teresa', 1,).setAllGameStyles(),);
    public static readonly STRETCH =                                       new Entities('Stretch',);
    public static readonly BOO_BUDDIES =                                   new Entities('Boo Buddies',                                  new EditorImageBuilder('Teresa', 2,).setNotSM3DW(),);
    public static readonly PEEPA =                                         new Entities('Peepa',                                        new EditorImageBuilder('Teresa', 2,).setOnlySM3DW(),);

    public static readonly BOB_OMB =                                       new Entities('Bob-omb',                                      new EditorImageBuilder('Bombhei',1,).setAllGameStyles(),);
    public static readonly LIT_BOB_OMB =                                   new Entities('Lit Bob-omb',                                  new EditorImageBuilder('Bombhei',2,).setAllGameStyles(),);

    public static readonly POKEY =                                         new Entities('Pokey',                                        null,);
    public static readonly SNOW_POKEY =                                    new Entities('Snow Pokey',                                   null,);

    public static readonly THWOMP =                                        new Entities('Thwomp',                                       'Dossun',);

    public static readonly MONTY_MOLE =                                    new Entities('Monty Mole',                                   new EditorImageBuilder('ChoroPoo').setNotSM3DW(),);
    public static readonly ROCKY_WRENCH =                                  new Entities('Rocky Wrench',                                 new EditorImageBuilder('Poo').setNotSM3DW(),);
    public static readonly WRENCH_THROWN_BY_A_ROCKY_WRENCH =               new Entities('Wrench thrown by a Rocky Wrench',              );

    public static readonly MAGIKOOPA =                                     new Entities('Magikoopa',                                    'Kameck');
    public static readonly MAGIKOOPA_PROJECTILE =                          new Entities('(Magikoopa\'s projectile)',                    );

    public static readonly HAMMER_BRO =                                    new Entities('Hammer Bro',                                   new EditorImageBuilder('Bros', 1,).setAllGameStyles(),);
    public static readonly SLEDGE_BRO =                                    new Entities('Sledge Bro',                                   new EditorImageBuilder('MegaBros', 1,).setAllGameStyles(),);
    public static readonly HAMMER_THROWN_BY_A_HAMMER_SLEDGE_BRO =          new Entities('Hammer thrown by a Hammer / Sledge Bro',       );
    public static readonly FIRE_BRO =                                      new Entities('Fire Bro',                                     new EditorImageBuilder('Bros', 2,).setOnlySM3DW(),);
    public static readonly HEAVY_FIRE_BRO =                                new Entities('Heavy Fire Bro',                               new EditorImageBuilder('MegaBros', 2,).setOnlySM3DW(),);
    public static readonly FIREBALL_THROWN_BY_A_HEAVY_FIRE_BRO =           new Entities('Fireball thrown by a (Heavy) Fire Bro',        );

    public static readonly LAVA_BUBBLE =                                   new Entities('Lava Bubble',                                  'Bubble',);

    public static readonly MECHAKOOPA =                                    new Entities('Mechakoopa',                                   null,);
    public static readonly BLASTA_MECHAKOOPA =                             new Entities('Blasta Mechakoopa',                            null,);
    public static readonly HOMING_MISSILE_THROWN_BY_A_BLASTA_MECHAKOOPA =  new Entities('Homing Missile thrown by a Blasta Mechakoopa', );
    public static readonly ZAPPA_MECHAKOOPA =                              new Entities('Zappa Mechakoopa',                             null,);
    public static readonly ELECTRICITY_BEAM_THROWN_BY_A_ZAPPA_MECHAKOOPA = new Entities('Electricity Beam thrown by a Zappa Mechakoopa',);

    public static readonly CHARVAARGH =                                    new Entities('Charvaargh',                                   new EditorImageBuilder('MagmaFish').setOnlySM3DW(),);

    public static readonly BULLY =                                         new Entities('Bully',                                        new EditorImageBuilder('Donketsu').setOnlySM3DW(),);

    //endregion -------------------- General enemies --------------------
    //region -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------

    public static readonly BILL_BLASTER =                                  new Entities('Bill Blaster',                                 new EditorImageBuilder('KillerHoudai', 1,).setAllGameStyles().setAsDifferentInSMBAndSMB3(),);
    public static readonly BULLET_BILL =                                   new Entities('Bullet Bill',                                  );
    public static readonly BULL_EYE_BLASTER =                              new Entities('Bull\'s-Eye Blaster',                          new EditorImageBuilder('KillerHoudai', 2,).setAllGameStyles(),);
    public static readonly BULL_EYE_BILL =                                 new Entities('Bull\'s-Eye Bill',                             );
    public static readonly CAT_BULLET_BILL =                               new Entities('Cat Bullet Bill',                              );

    public static readonly BANZAI_BILL =                                   new Entities('Banzai Bill',                                  new EditorImageBuilder('MagnumKiller', 1,).setAllGameStyles().setAsDifferentInSMBAndSMB3(),);
    public static readonly BULL_EYE_BANZAI =                               new Entities('Bull\'s-Eye Banzai',                           new EditorImageBuilder('MagnumKiller', 2,).setNotSM3DW(),);
    public static readonly CAT_BANZAI_BILL =                               new Entities('Cat Banzai Bill',                              new EditorImageBuilder('MagnumKiller', 2,).setOnlySM3DW(),);

    public static readonly CANNON =                                        new Entities('Cannon',                                       new EditorImageBuilder('Houdai', 1,).setAsDifferentInSMBAndSMB3().setNotSM3DW(),);
    public static readonly CANNONBALL =                                    new Entities('Cannonball',                                   );
    public static readonly RED_CANNON =                                    new Entities('Red Cannon',                                   new EditorImageBuilder('Houdai', 2,).setNotSM3DW(),);
    public static readonly RED_CANNONBALL =                                new Entities('Red Cannonball',                               );

    public static readonly BURNER =                                        new Entities('Burner',                                       new EditorImageBuilder('Burner').setAmount(2).setNotSM3DW(),);

    public static readonly FIRE_BAR =                                      new Entities('Fire Bar',                                     new EditorImageBuilder('FireBar').setNotSM3DW(),);

    public static readonly SKEWER =                                        new Entities('Skewer',                                       new EditorImageBuilder('TogeKonbo').setAsDifferentInSMBAndSMB3().setNotSM3DW(),);

    public static readonly KOOPA_CLOWN_CAR =                               new Entities('Koopa Clown Car',                              new EditorImageBuilder('KoopaClown', 1).setNotGameStyle(GameStyles.NEW_SUPER_MARIO_BROS_U, GameStyles.SUPER_MARIO_3D_WORLD,),);
    public static readonly JUNIOR_CLOWN_CAR =                              new Entities('Junior Clown Car',                             new EditorImageBuilder('KoopaClown', 1).setGameStyle(GameStyles.NEW_SUPER_MARIO_BROS_U,),);
    public static readonly FIRE_KOOPA_CLOWN_CAR =                          new Entities('Fire Koopa Clown Car',                         new EditorImageBuilder('KoopaClown', 2).setNotGameStyle(GameStyles.NEW_SUPER_MARIO_BROS_U, GameStyles.SUPER_MARIO_3D_WORLD,),);
    public static readonly FIRE_JUNIOR_CLOWN_CAR =                         new Entities('Fire Junior Clown Car',                        new EditorImageBuilder('KoopaClown', 2).setGameStyle(GameStyles.NEW_SUPER_MARIO_BROS_U,),);
    public static readonly FIRE_THROWN_BY_A_FIRE_KOOPA_JUNIOR_CLOWN_CAR =  new Entities('Fire thrown by a Fire Koopa / Junior Clown Car',);

    public static readonly KOOPA_TROOPA_CAR =                              new Entities('Koopa Troopa Car',                             new EditorImageBuilder('KoopaCar').setOnlySM3DW(),);
    public static readonly CAR =                                           new Entities('Car',);

    public static readonly GRINDER =                                       new Entities('Grinder',                                      new EditorImageBuilder('Saw').setNotSM3DW(),);

    public static readonly ANGRY_SUN =                                     new Entities('Angry Sun',                                    new EditorImageBuilder('SunMoon', 1,).setNotSM3DW(),);
    public static readonly MOON =                                          new Entities('Moon',                                         new EditorImageBuilder('SunMoon', 2,).setNotSM3DW(),);

    //endregion -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------
    //region -------------------- Bosses + projectiles --------------------

    public static readonly BOWSER =                                        new Entities('Bowser',                                       new EditorImageBuilder('Koopa').setNotSM3DW(),);
    public static readonly MEOWSER =                                       new Entities('Meowser',                                      new EditorImageBuilder('Koopa').setOnlySM3DW(),);
    public static readonly FIRE_THROWN_BY_A_BOWSER =                       new Entities('Fire thrown by a Bowser',                      );
    public static readonly FALLING_FIRE_THROWN_BY_A_BOWSER =               new Entities('Falling Fire thrown by a Bowser',              );

    public static readonly BOWSER_JR =                                     new Entities('Bowser Jr.',                                   new EditorImageBuilder('KoopaJr').setNotSM3DW(),);
    public static readonly FIRE_THROWN_BY_A_BOWSER_JR =                    new Entities('Fire thrown by a Bowser Jr.',                  );

    public static readonly BOOM_BOOM =                                     new Entities('Boom Boom',                                    new EditorImageBuilder('Bunbun', 1,).setAllGameStyles(),);
    public static readonly POM_POM =                                       new Entities('Pom Pom',                                      new EditorImageBuilder('Bunbun', 2,).setOnlySM3DW(),);
    public static readonly POM_POM_CLONE =                                 new Entities('Pom Pom\'s clone',);
    public static readonly SHURIKEN_THROWN_BY_A_POM_POM =                  new Entities('Shuriken thrown by a Pom Pom',                 );

    public static readonly LARRY =                                         new Entities('Larry',                                        null,);
    public static readonly LARRY_WAND =                                    new Entities('Larry\'s Wand',                                null,);
    public static readonly LARRY_PROJECTILE =                              new Entities('(Larry\'s projectile)',                        null,);

    public static readonly IGGY =                                          new Entities('Iggy',                                         null,);
    public static readonly IGGY_WAND =                                     new Entities('Iggy\'s Wand',                                 null,);
    public static readonly IGGY_PROJECTILE =                               new Entities('(Iggy\'s projectile)',                         null,);

    public static readonly WENDY =                                         new Entities('Wendy',                                        null,);
    public static readonly WENDY_WAND =                                    new Entities('Wendy\'s Wand',                                null,);
    public static readonly CANDY_RING_THROWN_BY_A_WENDY =                  new Entities('Candy Ring thrown by a Wendy',                 null,);

    public static readonly LEMMY =                                         new Entities('Lemmy',                                        null,);
    public static readonly LEMMY_WAND =                                    new Entities('Lemmy\'s Wand',                                null,);
    public static readonly MAGIC_BALL_THROWN_BY_A_LEMMY =                  new Entities('Magic Ball thrown by a Lemmy',                 null,);

    public static readonly ROY =                                           new Entities('Roy',                                          null,);
    public static readonly ROY_WAND =                                      new Entities('Roy\'s Wand',                                  null,);
    public static readonly ROY_PROJECTILE =                                new Entities('(Roy\'s projectile)',                          null,);

    public static readonly MORTON =                                        new Entities('Morton',                                       null,);
    public static readonly MORTON_WAND =                                   new Entities('Morton\'s Wand',                               null,);
    public static readonly MORTON_THROWN_PROJECTILE =                      new Entities('(Morton\'s Thrown projectile)',                null,);
    public static readonly MORTON_GROUND_PROJECTILE =                      new Entities('(Morton\'s Ground projectile)',                null,);

    public static readonly LUDWIG =                                        new Entities('Ludwig',                                       null,);
    public static readonly LUDWIG_WAND =                                   new Entities('Ludwig\'s Wand',                               null,);
    public static readonly LUDWIG_PROJECTILE =                             new Entities('(Ludwig\'s projectile)',                       null,);

    //endregion -------------------- Bosses + projectiles --------------------
    //region -------------------- Passive gizmo / Key / Warp / Other --------------------

    public static readonly BUMPER =                                        new Entities('Bumper',                                       new EditorImageBuilder('Marumaru').setNotSM3DW(),);

    public static readonly SWINGING_CLAW =                                 new Entities('Swinging Claw',                                new EditorImageBuilder('BurankoCrane').setNotSM3DW(),);

    public static readonly TWISTER =                                       new Entities('Twister',                                      'Tornado',);

    public static readonly ONE_WAY_WALL =                                  new Entities('One-Way Wall',                                 new EditorImageBuilder('Hanatari').setNotSM3DW(),);

    public static readonly TRACK =                                         new Entities('Track',                                        new EditorImageBuilder('Rail').setNotSM3DW(),);
    public static readonly TRACK_BLOCK =                                   new Entities('Track Block',                                  new EditorImageBuilder('OrbitBlock').setAmount(2).setOnlySM3DW(),);

    public static readonly VINE =                                          new Entities('Vine',                                         new EditorImageBuilder('TsutaBlock').setNotSM3DW(),);
    public static readonly TREE =                                          new Entities('Tree',                                         new EditorImageBuilder('BellTree').setTheme(GameStyles.SUPER_MARIO_3D_WORLD, Themes.UNDERGROUND, Themes.UNDERWATER, Themes.DESERT, Themes.SNOW, Themes.FOREST,),);

    public static readonly ARROW_SIGN =                                    new Entities('Arrow Sign',                                   'Yajirushi',);

    public static readonly CHECKPOINT_FLAG =                               new Entities('Checkpoint Flag',                              'MiddleFlag',);

    public static readonly DASH_BLOCK =                                    new Entities('Dash Block',                                   null,);

    public static readonly SNAKE_BLOCK =                                   new Entities('Snake Block',                                  new EditorImageBuilder('SnakeBlock', 1,).setAllGameStyles(),);
    public static readonly FAST_SNAKE_BLOCK =                              new Entities('Fast Snake Block',                             new EditorImageBuilder('SnakeBlock', 2,).setAllGameStyles(),);

    public static readonly CONVEYOR_BELT =                                 new Entities('Conveyor Belt',                                new EditorImageBuilder('BeltConveyor', 1,).setAllGameStyles(),);
    public static readonly FAST_CONVEYOR_BELT =                            new Entities('Fast Conveyor Belt',                           new EditorImageBuilder('BeltConveyor', 2,).setAllGameStyles(),);

    public static readonly MUSHROOM_TRAMPOLINE =                           new Entities('Mushroom Trampoline',                          new EditorImageBuilder('Trampoline').setAmount(2).setOnlySM3DW(),);
    public static readonly ON_OFF_TRAMPOLINE =                             new Entities('ON/OFF Trampoline',                            null,);

    public static readonly LIFT =                                          new Entities('Lift',                                         new EditorImageBuilder('Lift', 1,).setNotSM3DW(),);
    public static readonly FLIMSY_LIFT =                                   new Entities('Flimsy Lift',                                  new EditorImageBuilder('Lift', 2,).setNotSM3DW(),);
    public static readonly CLOUD_LIFT =                                    new Entities('Cloud Lift',                                   new EditorImageBuilder('Lift', 1,).setOnlySM3DW(),);

    public static readonly SEESAW =                                        new Entities('Seesaw',                                       new EditorImageBuilder('Seesaw').setNotSM3DW(),);

    public static readonly LAVA_LIFT =                                     new Entities('Lava Lift',                                    new EditorImageBuilder('YouganLift', 1,).setNotSM3DW(),);
    public static readonly FAST_LAVA_LIFT =                                new Entities('Fast Lava Lift',                               new EditorImageBuilder('YouganLift', 2,).setNotSM3DW(),);

    public static readonly CRATE =                                         new Entities('Crate',                                        new EditorImageBuilder('WoodBox').setOnlySM3DW(),);

    public static readonly KEY =                                           new Entities('Key',                                          new EditorImageBuilder('Key', 1,).setAllGameStyles(),);
    public static readonly CURSED_KEY =                                    new Entities('Cursed Key',                                   null,);
    public static readonly PHANTO =                                        new Entities('Phanto',                                       );

    public static readonly TRAMPOLINE =                                    new Entities('Trampoline',                                   new EditorImageBuilder('JumpStep').setAmount(2).setAllGameStyles(),);
    public static readonly HOP_CHOPS =                                     new Entities('Hop-Chops',                                    new EditorImageBuilder('Hopper').setOnlySM3DW(),);

    public static readonly POW_BLOCK =                                     new Entities('POW Block',                                    new EditorImageBuilder('PowBlock', 1,).setAllGameStyles(),);
    public static readonly RED_POW_BLOCK =                                 new Entities('Red POW Block',                                new EditorImageBuilder('PowBlock', 2,).setOnlySM3DW(),);

    public static readonly P_SWITCH =                                      new Entities('P Switch',                                     'PSwitch',);

    public static readonly STONE =                                         new Entities('Stone',                                        );

    public static readonly WARP_DOOR =                                     new Entities('Warp Door',                                    new EditorImageBuilder('Door', 1,).setAllGameStyles(),);
    public static readonly P_WARP_DOOR =                                   new Entities('P Warp Door',                                  new EditorImageBuilder('Door', 2,).setAllGameStyles(),);
    public static readonly KEY_DOOR =                                      new Entities('Key Door',                                     new EditorImageBuilder('Door', 3,).setAllGameStyles(),);

    public static readonly WARP_BOX =                                      new Entities('Warp Box',                                     new EditorImageBuilder('WarpBox', 1,).setOnlySM3DW(),);
    public static readonly WARP_BOX_WITH_KEY =                             new Entities('Warp Box (With Key)',                          new EditorImageBuilder('WarpBox', 2,).setOnlySM3DW(),);

    //endregion -------------------- Passive gizmo / Key / Warp / Other --------------------

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Attributes --------------------

    static #map?: ReadonlyMap<PossibleEnglishName, Entity>;

    #reference?: Entity;
    readonly #englishNameContainer;
    readonly #editorImageBuilder: | Builder<Image> | null;
    readonly #editorImageName: ObjectHolder<Image>;

    //endregion -------------------- Attributes --------------------

    private constructor(englishName: PossibleEnglishName,)
    private constructor(englishName: PossibleEnglishName, imageThatWillEventuallyBeUsed: null,)
    private constructor(englishName: PossibleEnglishName, image: SimpleImageName,)
    private constructor(englishName: PossibleEnglishName, editorImageBuilder: EditorImageBuilder,)
    private constructor(englishName: PossibleEnglishName, editorImageBuilder: | Builder<Image> | null,)
    private constructor(englishName: PossibleEnglishName, image: | Builder<Image> | SimpleImageName | null = null,) {
        super();
        this.#englishNameContainer = new StringContainer(englishName);
        if (image == null) {
            this.#editorImageBuilder = null;
            this.#editorImageName = new ObjectHolderContainer(EmptyEditorImage.get);
        } else {
            this.#editorImageBuilder = new GenericSingleInstanceBuilder(typeof image == 'string' ? new EditorImageBuilder(image).setAllGameStyles() : image);
            this.#editorImageName = new DelayedObjectHolderContainer(() => this._editorImageBuilder!.build());
        }
    }

    //region -------------------- Getter methods --------------------

    private static get __map() {
        return this.#map ??= require('./Entity.loader').EntityLoader.get.load();
    }

    /**
     * {@inheritDoc}
     * @semiAsynchronously
     */
    public get reference(): Entity {
        return this.#reference ??= Entities.__map.get(this.englishName).entity;
    }


    public get englishName(): PossibleEnglishName {
        return this.#englishNameContainer.get;
    }

    public get englishNameInHtml(): string {
        return this.#englishNameContainer.getInHtml;
    }

    protected get _editorImageBuilder(): | Builder<Image> | null {
        return this.#editorImageBuilder;
    }

    public get editorImageName(): Image {
        return this.#editorImageName.get;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public static get everyEnglishNames(): readonly PossibleEnglishName[] {
        return this.values.map(limit => limit.englishName);
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected get _static(): StaticReference<Entities> {
        return Entities;
    }


    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(name: S,): EnumByPossibleString<S>
    public static getValue<S extends string = string, >(name: S,): EnumByString<S>
    public static getValue<I extends Entities = Entities, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): Entities
    public static getValue(value: PossibleValue,): | Entities | null
    public static getValue(value: PossibleValue,) {
        return value == null
            ? null
            : typeof value === 'string'
                ? Reflect.get(this, value.toUpperCase(),)
                ?? this.values.find(enumerable => enumerable.englishName === value)
                ?? null
                : typeof value === 'number'
                    ? this.values[value] ?? null
                    : value;
    }

    public static get values(): EnumArray {
        return Enum.getValuesOn(this);
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}
