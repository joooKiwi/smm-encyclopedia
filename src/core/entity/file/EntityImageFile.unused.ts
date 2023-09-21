import type {PossibleGameAcronym_SMM1} from 'core/gameStyle/GameStyles.types'
import type {PossibleEnglishName}      from 'core/entity/Entities.types'
import type {ImageFile}                from 'util/file/image/ImageFile'

export type UnusedSMM1ImageFile = | UnusedSMM1RegularImageFile | UnusedSMM1BigMushroomImageFile

//region -------------------- Unused (regular) --------------------

export type UnusedSMM1RegularImageFile = ImageFile<`entity/unused/${PossibleGameAcronym_SMM1} - ${ImageName_Unused_SMM1}`, ImageName_UnusedSMM1Regular, 'tiff'>


/** A simple map type made to associate each {@link UnusedSMM1RegularImageFile} name to a specific {@link Entities} */
interface ImageNameMap {

    //region -------------------- Ground / Pipe / Spike / Platform --------------------

    'Ground': NoImages
    'Start Ground': NoImages
    'Goal Ground': NoImages

    'Steep Slope': NoImages
    'Gentle Slope': NoImages

    'Start Block': NoImages
    'Occlude Block': NoImages

    'Water': NoImages
    'Lava': NoImages
    'Poison': NoImages

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
    'Cristal Block': NoImages
    'Rotating Block': NoImages

    'Hard Block': NoImages
    'Rock Block': NoImages

    '? Block': NoImages
    'Hidden Block': NoImages
    'Empty Block': NoImages

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
    'Superball thrown by a player': NoImages

    'Mystery Mushroom': NoImages
    'Weird Mushroom': NoImages

    'Master Sword': NoImages
    'Bomb thrown by a Link': NoImages
    'Arrow thrown by a Link': NoImages

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
    'Shoe': NoImages
    'Stiletto Goomba': NoImages
    'Stiletto': NoImages
    'Yoshi\'s Egg': NoImages
    'Yoshi': NoImages
    'Fire thrown by a Yoshi': NoImages
    'Poison thrown by a Yoshi': NoImages
    'Bone thrown by a Yoshi': NoImages
    'Wrench thrown by a Yoshi': NoImages
    'Hammer thrown by a Yoshi': NoImages
    'Red Yoshi\'s Egg': NoImages
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
    'Baby Blooper': NoImages

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
    'Stretch': ['Necchi', Enemy<'Necchi'>,]
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

    'Koopa Clown Car': ['KoopaClown', Enemy<'KoopaClown'>,]
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

    'Larry': NoImages
    'Larry\'s Wand': NoImages
    '(Larry\'s projectile)': NoImages

    'Iggy': NoImages
    'Iggy\'s Wand': NoImages
    '(Iggy\'s projectile)': NoImages

    'Wendy': NoImages
    'Wendy\'s Wand': NoImages
    'Candy Ring thrown by a Wendy': NoImages

    'Lemmy': NoImages
    'Lemmy\'s Wand': NoImages
    'Magic Ball thrown by a Lemmy': NoImages

    'Roy': NoImages
    'Roy\'s Wand': NoImages
    '(Roy\'s projectile)': NoImages

    'Morton': NoImages
    'Morton\'s Wand': NoImages
    '(Morton\'s Thrown projectile)': NoImages
    '(Morton\'s Ground projectile)': NoImages

    'Ludwig': NoImages
    'Ludwig\'s Wand': NoImages
    '(Ludwig\'s projectile)': NoImages

    //endregion -------------------- Bosses + projectiles --------------------
    //region -------------------- Passive gizmo / Key / Warp / Other --------------------

    'Bumper': NoImages

    'Swinging Claw': NoImages

    'Twister': NoImages

    'One-Way Wall': NoImages

    'Track': NoImages
    'Track Block': NoImages

    'Vine': ['Tuta', ObjectBlock<'Tuta'>,]
    'Tree': NoImages

    'Arrow Sign': NoImages

    'Checkpoint Flag': NoImages
    'Goal Pole': ['Goalpole', Object<'Goalpole'>,]
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
    'Phanto': NoImages

    'Trampoline': NoImages
    'Hop-Chops': NoImages

    'POW Block': NoImages
    'Red POW Block': NoImages

    'P Switch': ['PSwitch', Object<'PSwitch'>,]

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

    'Bubble': NoImages

    //endregion -------------------- Passive gizmo / Key / Warp / Other --------------------

}

type NoImages = readonly [null, null,]

type Enemy<NAME extends SimpleImageName_Unused_SMM1, > = `Enemy - ${NAME}`
type Object<NAME extends SimpleImageName_Unused_SMM1, > = `Object - ${NAME}`
type ObjectBlock<NAME extends SimpleImageName_Unused_SMM1, > = `Object Block - ${NAME}`

type SimpleImageName_Unused_SMM1 = NonNullable<ImageNameMap[PossibleEnglishName][0]>
export type ImageName_Unused_SMM1 = NonNullable<ImageNameMap[PossibleEnglishName][1]>

export type ImageName_UnusedSMM1Regular = | `down_switch_hatena_Alb.00${| 0 | 4}`
                                          | `out.${| 0 | 1 | 2 | 3 | 4}`
                                          | 'goalpole.1'
                                          | `wait.${0 | 1 | 2}`
                                          | `weep.${4 | 5 | 6 | 7}`

//endregion -------------------- Unused (regular) --------------------
//region -------------------- Unused (big mushroom) --------------------

export type UnusedSMM1BigMushroomImageFile = ImageFile<`entity/unused/M1 A - Enemy - ${SimpleImageName_BigMushroom_Unused_SMM1}`, ImageName_UnusedBigMushroom, 'tiff'>

export type SimpleImageName_BigMushroom_Unused_SMM1 = | 'KoopaClown' | 'Kuribo D' | 'Necchi' | `Koopa${| '' | 'Jr'}` | 'SenkanHoudai D'

export type ImageName_UnusedBigMushroom = | `anger.${| 4 | 5 | 6 | 7}`
                                          | `blink.${| 4 | 5 | 6 | 7}`
                                          | 'damage.0'
                                          | `fire.${1}`
                                          | 'kutsu'
                                          | 'iron_ball.1'
                                          | `out.${4}`
                                          | 'senkan_houdai_ball'
                                          | `swim.${| 0 | 1}`
                                          | 'tear.1'
                                          | `weep.${| 4 | 5 | 6 | 7}`
                                          | `wait.${| 0 | 2 | 4 | 5 | 6 | 7}`
                                          | `walk.${| 0 | 1}`


//endregion -------------------- Unused (big mushroom) --------------------
