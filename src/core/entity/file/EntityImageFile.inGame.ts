import type {PossibleEnglishName}                                                                from 'core/entity/Entities.types'
import type {PossibleAcronym_InFile as PossibleAcronym_InFile_GameStyle, PossibleShortImagePath} from 'core/gameStyle/GameStyles.types'
import type {ImageFile}                                                                          from 'util/file/image/ImageFile'

export type InGameImageFile = | InGameSMM1ImageFile | InGameSMM2ImageFile

//region -------------------- In game (SMM1) --------------------

export type InGameSMM1ImageFile = ImageFile<`entity/${PossibleShortImagePath}/In game/SMM1/Item - ${SimpleImageName_SMM1}/`, 'wait.0', 'png'>

export type SimpleImageName_SMM1 = `MegaKinoko${| '' | 2}` | `Kinoko${| 2 | 'Funny'}`

//endregion -------------------- In game (SMM1) --------------------
//region -------------------- In game (SMM2) --------------------

export type InGameSMM2ImageFile = ImageFile<`entity/in game/${ImagePath}`, PossibleInGameSMM2ImageFileName, 'tiff'>


/** A simple map type made to associate each {@link InGameSMM2ImageFile} name to a specific {@link Entities} */
interface ImageNameMap {

    //region -------------------- Ground / Pipe / Spike / Platform --------------------

    'Ground': NoImages
    'Start Ground': NoImages
    'Goal Ground': NoImages

    'Steep Slope': NoImages
    'Gentle Slope': NoImages

    'Start Block': ['StartBlock', Object<'StartBlock'>,]
    'Occlude Block': NoImages

    'Water': ['WaterHalf', Object<'WaterHalf'>,]
    'Lava': ['MagmaHalf', Object<'MagmaHalf'>,]
    'Poison': ['PoisonHalf', Object<'PoisonHalf'>,]

    'Pipe': NoImages
    'Clear Pipe': NoImages

    'Spike Trap': NoImages
    'Jelectro': NoImages
    'Sea Urchin': NoImages
    'Spike Block': NoImages

    'Semisolid Platform': NoImages
    'Mushroom Platform': NoImages
    'Bridge': NoImages

    //endregion -------------------- Ground / Pipe / Spike / Platform --------------------
    //region -------------------- Block / Coin --------------------

    'Brick Block': NoImages
    'Cristal Block': this['Brick Block']
    'Rotating Block': this['Brick Block']

    'Hard Block': NoImages
    'Rock Block': this['Hard Block']

    '? Block': NoImages
    'Hidden Block': NoImages
    'Empty Block': ['BlockKara', Object<'BlockKara'>,]

    '! Block': NoImages

    'Note Block': NoImages
    'Music Block': NoImages

    'Donut Block': NoImages

    'Cloud Block': NoImages

    'ON/OFF Switch': NoImages
    'Dotted-Line Block': NoImages

    'P Block': NoImages

    'Blinking Block': NoImages

    'Ice Block': NoImages
    'Icicle': NoImages

    'Coin': NoImages
    'Frozen Coin': NoImages
    '10-Coin': NoImages
    '30-Coin': NoImages
    '50-Coin': NoImages
    'Pink Coin': NoImages

    //endregion -------------------- Block / Coin --------------------
    //region -------------------- Power-up / Yoshi / Shoe + projectiles --------------------

    'Super Mushroom': NoImages

    'Fire Flower': NoImages
    'Fireball thrown by a player': NoImages

    'Superball Flower': NoImages
    'Superball thrown by a player': ['Superball', Object<'Superball'>,]

    'Mystery Mushroom': NoImages
    'Weird Mushroom': NoImages

    'Master Sword': NoImages
    'Bomb thrown by a Link': ['LinkBomb', Enemy<'LinkBomb'>,]
    'Arrow thrown by a Link': ['Arrow', Object<'Arrow'>,]

    'Big Mushroom': NoImages
    'Big Mushroom (classic)': NoImages
    'Big Mushroom (modern)': NoImages

    'SMB2 Mushroom': NoImages

    'Super Leaf': NoImages

    'Frog Suit': NoImages

    'Cape Feather': NoImages

    'Power Balloon': NoImages

    'Propeller Mushroom': NoImages

    'Super Acorn': NoImages

    'Super Bell': NoImages

    'Super Hammer': NoImages
    'Builder Box thrown by a player': NoImages

    'Boomerang Flower': NoImages
    'Boomerang thrown by a player': NoImages

    'Cannon Box': NoImages
    'Cannonball thrown by a player': NoImages

    'Propeller Box': NoImages

    'Goomba Mask': NoImages

    'Bullet Bill Mask': NoImages

    'Red POW Box': NoImages

    'Super Star': NoImages

    '1-Up Mushroom': NoImages
    'Rotten Mushroom': NoImages

    'Shoe Goomba': NoImages
    'Shoe': ['KutsuKuriboA', Enemy<'KutsuKuriboA'>,]
    'Stiletto Goomba': NoImages
    'Stiletto': ['KutsuKuriboB', Enemy<'KutsuKuriboB'>,]
    'Yoshi\'s Egg': ['KutsuKuriboA', Enemy<'KutsuKuriboA'>,]
    'Yoshi': NoImages
    'Fire thrown by a Yoshi': ['YoshiFire', Player<'YoshiFire'>,]
    'Poison thrown by a Yoshi': ['YoshiPoison', Player<'YoshiPoison'>,]
    'Bone thrown by a Yoshi': NoImages
    'Wrench thrown by a Yoshi': NoImages
    'Hammer thrown by a Yoshi': NoImages
    'Red Yoshi\'s Egg': ['KutsuKuriboB', Enemy<'KutsuKuriboB'>,]
    'Red Yoshi': NoImages
    'Fire thrown by a Red Yoshi': NoImages

    //endregion -------------------- Power-up / Yoshi / Shoe + projectiles --------------------
    //region -------------------- General enemies --------------------

    'Goomba': NoImages
    'Galoomba': NoImages
    'Goombrat': NoImages
    'Goombud': NoImages

    'Green Koopa Troopa': NoImages
    'Red Koopa Troopa': NoImages
    'Green Beach Koopa': NoImages
    'Red Beach Koopa': NoImages
    'Green Koopa Shell': NoImages
    'Red Koopa Shell': NoImages

    'Dry Bones': NoImages
    'Parabones': NoImages
    'Bone thrown by a Dry Bones': NoImages
    'Dry Bones Shell': NoImages

    'Buzzy Beetle': NoImages
    'Para-Beetle': NoImages
    'Buzzy Shell': NoImages

    'Spiny': NoImages
    'Winged Spiny': NoImages
    '(Winged Spiny\'s projectile)': NoImages
    'Spiny Egg': NoImages
    'Spiny Shell': NoImages

    'Spike Top': NoImages
    'Winged Spike Top': NoImages
    'Fast Spike Top': NoImages
    'Fast Winged Spike Top': NoImages

    'Skipsqueak': NoImages
    'Spiny Skipsqueak': NoImages

    'Ant Trooper': NoImages
    'Horned Ant Trooper': NoImages

    'Stingby': NoImages

    'Cheep Cheep': NoImages
    'Blurps': NoImages
    'Deep Cheep': NoImages
    'Fish Bone': NoImages

    'Blooper': NoImages
    'Blooper Nanny': NoImages
    'Baby Blooper': ['GessoMini', Enemy<'GessoMini'>,]

    'Porcupuffer': NoImages

    'Wiggler': NoImages
    'Angry Wiggler': NoImages

    'Piranha Plant': NoImages
    'Jumping Piranha Plant': NoImages
    'Fire Piranha Plant': NoImages
    'Fireball thrown by a Fire Piranha Plant': NoImages
    'Muncher': NoImages
    'Piranha Creeper': NoImages

    'Chain Chomp': NoImages
    'Unchained Chomp': NoImages
    'Chain Chomp\'s Stump': NoImages

    'Spike': NoImages
    'Spike Ball': NoImages
    'Snowball': NoImages

    'Lakitu': NoImages
    'Lakitu\'s Cloud': NoImages

    'Boo': NoImages
    'Stretch': NoImages
    'Boo Buddies': NoImages
    'Peepa': NoImages

    'Bob-omb': NoImages
    'Lit Bob-omb': NoImages

    'Pokey': NoImages
    'Snow Pokey': NoImages

    'Thwomp': NoImages

    'Monty Mole': NoImages
    'Rocky Wrench': NoImages
    'Wrench thrown by a Rocky Wrench': NoImages

    'Magikoopa': NoImages
    '(Magikoopa\'s projectile)': NoImages

    'Hammer Bro': NoImages
    'Sledge Bro': NoImages
    'Hammer thrown by a Hammer / Sledge Bro': NoImages
    'Fire Bro': NoImages
    'Heavy Fire Bro': NoImages
    'Fireball thrown by a (Heavy) Fire Bro': NoImages

    'Lava Bubble': NoImages

    'Mechakoopa': NoImages
    'Blasta Mechakoopa': NoImages
    'Homing Missile thrown by a Blasta Mechakoopa': NoImages
    'Zappa Mechakoopa': NoImages
    'Electricity Beam thrown by a Zappa Mechakoopa': NoImages

    'Charvaargh': NoImages

    'Bully': NoImages

    //endregion -------------------- General enemies --------------------
    //region -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------

    'Bill Blaster': NoImages
    'Bullet Bill': NoImages
    'Bull\'s-Eye Blaster': NoImages
    'Bull\'s-Eye Bill': NoImages
    'Cat Bullet Bill': NoImages

    'Banzai Bill': NoImages
    'Bull\'s-Eye Banzai': NoImages
    'Cat Banzai Bill': NoImages

    'Cannon': NoImages
    'Cannonball': NoImages
    'Red Cannon': NoImages
    'Red Cannonball': NoImages

    'Burner': NoImages

    'Fire Bar': NoImages

    'Skewer': NoImages

    'Koopa Clown Car': NoImages
    'Junior Clown Car': NoImages
    'Fire Koopa Clown Car': NoImages
    'Fire Junior Clown Car': NoImages
    'Fire thrown by a Fire [Koopa / Junior] Clown Car': NoImages

    'Koopa Troopa Car': NoImages
    'Car': NoImages

    'Grinder': NoImages

    'Angry Sun': NoImages
    'Moon': NoImages

    //endregion -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------
    //region -------------------- Bosses + projectiles --------------------

    'Bowser': NoImages
    'Meowser': NoImages
    'Fire thrown by a Bowser': NoImages
    'Falling Fire thrown by a Bowser': NoImages

    'Bowser Jr.': NoImages
    'Fire thrown by a Bowser Jr.': NoImages

    'Boom Boom': NoImages
    'Pom Pom': NoImages
    'Pom Pom\'s clone': NoImages
    'Shuriken thrown by a Pom Pom': NoImages

    'Larry': ['Larry', Enemy<'Larry'>]
    'Larry\'s Wand': this['Larry']
    '(Larry\'s projectile)': this['Larry']

    'Iggy': ['Iggy', Enemy<'Iggy'>]
    'Iggy\'s Wand': this['Iggy']
    '(Iggy\'s projectile)': this['Iggy']

    'Wendy': ['Wendy', Enemy<'Wendy'>]
    'Wendy\'s Wand': this['Wendy']
    'Candy Ring thrown by a Wendy': this['Wendy']

    'Lemmy': ['Lemmy', Enemy<'Lemmy'>]
    'Lemmy\'s Wand': this['Lemmy']
    'Magic Ball thrown by a Lemmy': this['Lemmy']

    'Roy': ['Roy', Enemy<'Roy'>]
    'Roy\'s Wand': this['Roy']
    '(Roy\'s projectile)': this['Roy']

    'Morton': ['Morton', Enemy<'Morton'>]
    'Morton\'s Wand': this['Morton']
    '(Morton\'s Thrown projectile)': this['Morton']
    '(Morton\'s Ground projectile)': this['Morton']

    'Ludwig': ['Ludwig', Enemy<'Ludwig'>]
    'Ludwig\'s Wand': this['Ludwig']
    '(Ludwig\'s projectile)': this['Ludwig']

    //endregion -------------------- Bosses + projectiles --------------------
    //region -------------------- Passive gizmo / Key / Warp / Other --------------------

    'Bumper': NoImages

    'Swinging Claw': NoImages

    'Twister': NoImages

    'One-Way Wall': NoImages

    'Track': NoImages
    'Track Block': NoImages

    'Vine': NoImages
    'Tree': NoImages

    'Arrow Sign': NoImages

    'Checkpoint Flag': NoImages
    'Goal Pole': NoImages
    'Cards Roulette': NoImages
    'Giant Gate': NoImages

    'Dash Block': NoImages

    'Snake Block': NoImages
    'Fast Snake Block': NoImages

    'Conveyor Belt': NoImages
    'Fast Conveyor Belt': NoImages

    'Mushroom Trampoline': NoImages
    'ON/OFF Trampoline': NoImages

    'Lift': NoImages
    'Flimsy Lift': NoImages
    'Cloud Lift': NoImages

    'Seesaw': NoImages

    'Lava Lift': NoImages
    'Fast Lava Lift': NoImages

    'Crate': NoImages

    'Key': NoImages
    'Cursed Key': NoImages
    'Phanto': ['Phanto', Object<'Phanto'>,]

    'Trampoline': NoImages
    'Hop-Chops': NoImages

    'POW Block': NoImages
    'Red POW Block': NoImages

    'P Switch': NoImages

    'Stone': NoImages

    'Warp Door': NoImages
    'P Warp Door': NoImages
    'Key Door': NoImages

    'Warp Box': NoImages
    'Warp Box (With Key)': NoImages

    'Wing': NoImages
    'Parachute': NoImages

    'Toad': NoImages
    'Caged Toadette': NoImages

    'Bubble': ['Balloon', Object<'Balloon'>,]

    //endregion -------------------- Passive gizmo / Key / Warp / Other --------------------

}

type NoImages = readonly [null, null,]
type Enemy<NAME extends SimpleImageName_SMM2, > = `Enemy - ${NAME}`
type Object<NAME extends SimpleImageName_SMM2, > = `Object - ${NAME}`
// type ObjectBlock<NAME extends SimpleImageName_SMM2, > = `Object Block - ${NAME}`
type Player<NAME extends SimpleImageName_SMM2, > = `Player - ${NAME}`

/** A simple type containing the koopaling file name */
export type KoopalingImageName = ImageNameMap[| 'Iggy' | 'Larry' | 'Lemmy' | 'Ludwig' | 'Morton' | 'Roy' | 'Wendy'][1]
/** A simple type for the blooper & the mini blooper file name */
export type BlooperImageName = ImageNameMap[| 'Blooper' | 'Blooper Nanny'][1]
/** A simple type for the key, cursed key and phanto file name*/
export type KeyAndPhantoImageName = ImageNameMap[| 'Key' | 'Cursed Key' | 'Phanto'][1]
/** A simple type containing the liquid in the game (water, poison & lava) */
export type LiquidName = ImageNameMap[| 'Water' | 'Poison' | 'Lava'][1]
/** A simple type containing the liquid in the game (poison & lava) */
export type DangerousImageFileName = ImageNameMap[| 'Poison' | 'Lava'][1]
/** A simple type containing every block object (from ?, ice, empty, snake and others) */
export type BlockImageName = ImageNameMap[| 'Start Block' | 'Brick Block' | 'Hard Block' | '? Block' | 'Hidden Block'
                                          | 'Empty Block' | '! Block' | 'Note Block' | 'Music Block' | 'Donut Block'
                                          | 'Cloud Block' | 'Dotted-Line Block' | 'P Block' | 'Blinking Block' | 'Ice Block'
                                          | 'Dash Block' | 'Snake Block' | 'Fast Snake Block']
export type ShoeImageFileName = ImageNameMap[| 'Shoe' | 'Stiletto'][1]
export type YoshiProjectileImageFileName = ImageNameMap[| 'Fire thrown by a Yoshi' | 'Poison thrown by a Yoshi']
type ImagePath = `${PossibleAcronym_InFile_GameStyle} ${ImageName_SMM2}`
type SimpleImageName_SMM2 = NonNullable<ImageNameMap[PossibleEnglishName][0]>
export type ImageName_SMM2 = NonNullable<ImageNameMap[PossibleEnglishName][1]>

export type PossibleInGameSMM2ImageFileName = | 'arrow'
                                              | `balloon${| '' | 2}.0`
                                              | 'ball.0'
                                              | 'ball_specular'
                                              | `body.${| 0 | 1 | 2 | 3}`
                                              | `effect.${| 0 | 1 | 2}`
                                              | `fire.${| 0 | 1 | 2}`
                                              | 'gesso_mini_Alb.000'
                                              | `ring.${| 0 | 1 | 2}`
                                              | 'startblock'
                                              | 'superball'
                                              | `top.${| 0 | 1 | 2 | 3}`
                                              | 'TractorBubble_Alb'
                                              | `walk.${| 0 | 1 | 2}`
                                              | `wait.${| 0 | 1 | 2 | 3}`
                                              | 'wand'

//endregion -------------------- In game (SMM2) --------------------
