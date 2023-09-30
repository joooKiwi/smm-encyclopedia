import type {PossibleEnglishName}                                        from 'core/entity/Entities.types'
import type {PossibleAcronym_InFile as PossibleAcronym_InFile_GameStyle} from 'core/gameStyle/GameStyles.types'
import type {ImageFile}                                                  from 'util/file/image/ImageFile'

export type ClearConditionImageFile = ImageFile<`entity/clear condition/`, `${PossibleAcronym_InFile_GameStyle}_Lyt_M_${ImageName_ClearCondition}`, 'tiff'>


/** A simple map type made to associate each {@link ClearConditionImageFile} name to a specific {@link Entities} */
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

    'Coin': ['Coin', Name<'Coin'>,]
    'Frozen Coin': NoImages
    '10-Coin': ['10Coin', Name<'10Coin'>,]
    '30-Coin': ['10Coin', Name<'10Coin', 1>,]
    '50-Coin': ['10Coin', Name<'10Coin', 2>,]
    'Pink Coin': NoImages

    //endregion -------------------- Block / Coin --------------------
    //region -------------------- Power-up / Yoshi / Shoe + projectiles --------------------

    'Super Mushroom': ['SuperKinoko', Name<'SuperKinoko'>,]

    'Fire Flower': ['FireFlower', Name<'FireFlower'>,]
    'Fireball thrown by a player': NoImages

    'Superball Flower': ['FireFlower', Name<'FireFlower', 1>,]
    'Superball thrown by a player': NoImages

    'Mystery Mushroom': NoImages
    'Weird Mushroom': NoImages

    'Master Sword': ['SuperKinoko', Name<'SuperKinoko', 1>,]
    'Bomb thrown by a Link': NoImages
    'Arrow thrown by a Link': NoImages

    'Big Mushroom': ['DekaKinoko', Name<'DekaKinoko'>,]
    'Big Mushroom (classic)': NoImages
    'Big Mushroom (modern)': NoImages

    'SMB2 Mushroom': ['KinokoUSA', Name<'KinokoUSA'>,]

    'Super Leaf': ['SuperKonoha', Name<'SuperKonoha'>,]

    'Frog Suit': ['FrogSuit', Name<'FrogSuit'>,]

    'Cape Feather': ['MantleWing', Name<'MantleWing'>,]

    'Power Balloon': ['PowerBalloon', Name<'PowerBalloon'>,]

    'Propeller Mushroom': ['PropellerKinoko', Name<'PropellerKinoko'>,]

    'Super Acorn': ['SuperDonguri', Name<'SuperDonguri'>,]

    'Super Bell': ['SuperBell', Name<'SuperBell'>,]

    'Super Hammer': ['SuperHammer', Name<'SuperHammer'>,]
    'Builder Box thrown by a player': NoImages

    'Boomerang Flower': ['BoomerangFlower', Name<'BoomerangFlower'>,]
    'Boomerang thrown by a player': NoImages

    'Cannon Box': ['BoxKiller', Name<'BoxKiller'>,]
    'Cannonball thrown by a player': NoImages

    'Propeller Box': ['BoxPropeller', Name<'BoxPropeller'>,]

    'Goomba Mask': ['BoxKuribo', Name<'BoxKuribo'>,]

    'Bullet Bill Mask': ['BoxKillerPlayer', Name<'BoxKillerPlayer'>,]

    'Red POW Box': ['BoxPow', Name<'BoxPow'>,]

    'Super Star': ['SuperStar', Name<'SuperStar'>,]

    '1-Up Mushroom': ['1upKinoko', Name<'1upKinoko'>,]
    'Rotten Mushroom': NoImages

    'Shoe Goomba': NoImages
    'Shoe': ['KutsuKuribo', Name<'KutsuKuribo'>,]
    'Stiletto Goomba': NoImages
    'Stiletto': NoImages
    'Yoshi\'s Egg': ['YosshiEgg', Name<'YosshiEgg'>,]
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

    'Goomba': ['Kuribo', Name<'Kuribo'>,]
    'Galoomba': this['Goomba']
    'Goombrat': ['Kuribo', Name<'Kuribo', 1>,]
    'Goombud': this['Goombrat']

    'Green Koopa Troopa': ['Nokonoko', Name<'Nokonoko'>,]
    'Red Koopa Troopa': NoImages
    'Green Beach Koopa': NoImages
    'Red Beach Koopa': NoImages
    'Green Koopa Shell': ['NokonokoShell', Name<'NokonokoShell'>,]
    'Red Koopa Shell': NoImages

    'Dry Bones': ['Karon', Name<'Karon'>,]
    'Parabones': NoImages
    'Bone thrown by a Dry Bones': NoImages
    'Dry Bones Shell': ['Karon', Name<'Karon', 1>,]

    'Buzzy Beetle': ['Met', Name<'Met'>,]
    'Para-Beetle': NoImages
    'Buzzy Shell': ['Met', Name<'Met', 1>,]

    'Spiny': ['Togezo', Name<'Togezo'>,]
    'Winged Spiny': NoImages
    '(Winged Spiny\'s projectile)': NoImages
    'Spiny Egg': NoImages
    'Spiny Shell': ['Togezo', Name<'Togezo', 1>,]

    'Spike Top': ['TogeMet', Name<'TogeMet'>,]
    'Winged Spike Top': NoImages
    'Fast Spike Top': NoImages
    'Fast Winged Spike Top': NoImages

    'Skipsqueak': ['Pyonchu', Name<'Pyonchu'>,]
    'Spiny Skipsqueak': NoImages

    'Ant Trooper': ['Arihei', Name<'Arihei'>,]
    'Horned Ant Trooper': NoImages

    'Stingby': ['Hacchin', Name<'Hacchin'>,]

    'Cheep Cheep': ['Pukupuku', Name<'Pukupuku'>,]
    'Blurps': ['Pukupuku', Name<'Pukupuku', 1>,]
    'Deep Cheep': this['Blurps']
    'Fish Bone': ['FishBone', Name<'FishBone'>,]

    'Blooper': ['Gesso', Name<'Gesso'>,]
    'Blooper Nanny': NoImages
    'Baby Blooper': NoImages

    'Porcupuffer': ['Fugumannen', Name<'Fugumannen'>,]

    'Wiggler': ['Hanachan', Name<'Hanachan'>,]
    'Angry Wiggler': NoImages

    'Piranha Plant': ['Pakkun', Name<'Pakkun'>,]
    'Jumping Piranha Plant': ['Pakkun', Name<'Pakkun'>,]
    'Fire Piranha Plant': ['Pakkun', Name<'Pakkun', 1>,]
    'Fireball thrown by a Fire Piranha Plant': NoImages
    'Muncher': ['BlackPakkun', Name<'BlackPakkun'>,]
    'Piranha Creeper': ['PackunPipe', Name<'PackunPipe'>,]

    'Chain Chomp': NoImages
    'Unchained Chomp': ['Wanwan', Name<'Wanwan'>,]
    'Chain Chomp\'s Stump': NoImages

    'Spike': ['Gabon', Name<'Gabon'>,]
    'Spike Ball': NoImages
    'Snowball': NoImages

    'Lakitu': ['Jugem', Name<'Jugem'>,]
    'Lakitu\'s Cloud': ['Jugem', Name<'Jugem', 1>,]

    'Boo': ['Teresa', Name<'Teresa'>,]
    'Stretch': NoImages
    'Boo Buddies': ['Teresa', Name<'Teresa', 1>,]
    'Peepa': this['Boo Buddies']

    'Bob-omb': ['Bombhei', Name<'Bombhei'>,]
    'Lit Bob-omb': NoImages

    'Pokey': ['Sambo', Name<'Sambo'>,]
    'Snow Pokey': NoImages

    'Thwomp': ['Dossun', Name<'Dossun'>,]

    'Monty Mole': ['ChoroPoo', Name<'ChoroPoo'>,]
    'Rocky Wrench': ['Poo', Name<'Poo'>,]
    'Wrench thrown by a Rocky Wrench': NoImages

    'Magikoopa': ['Kameck', Name<'Kameck'>,]
    '(Magikoopa\'s projectile)': NoImages

    'Hammer Bro': ['Bros', Name<'Bros'>,]
    'Sledge Bro': ['MegaBros', Name<'MegaBros'>,]
    'Hammer thrown by a Hammer / Sledge Bro': NoImages
    'Fire Bro': NoImages
    'Heavy Fire Bro': NoImages
    'Fireball thrown by a (Heavy) Fire Bro': NoImages

    'Lava Bubble': ['Bubble', Name<'Bubble'>,]

    'Mechakoopa': ['KoopaMecha', Name<'KoopaMecha'>,]
    'Blasta Mechakoopa': NoImages
    'Homing Missile thrown by a Blasta Mechakoopa': NoImages
    'Zappa Mechakoopa': NoImages
    'Electricity Beam thrown by a Zappa Mechakoopa': NoImages

    'Charvaargh': ['MagmaFish', Name<'MagmaFish'>,]

    'Bully': ['Donketsu', Name<'Donketsu'>,]

    //endregion -------------------- General enemies --------------------
    //region -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------

    'Bill Blaster': NoImages
    'Bullet Bill': ['Killer', Name<'Killer'>,]
    'Bull\'s-Eye Blaster': NoImages
    'Bull\'s-Eye Bill': NoImages
    'Cat Bullet Bill': NoImages

    'Banzai Bill': ['MagnumKiller', Name<'MagnumKiller'>,]
    'Bull\'s-Eye Banzai': NoImages
    'Cat Banzai Bill': NoImages

    'Cannon': NoImages
    'Cannonball': NoImages
    'Red Cannon': NoImages
    'Red Cannonball': NoImages

    'Burner': NoImages

    'Fire Bar': NoImages

    'Skewer': NoImages

    'Koopa Clown Car': ['KoopaClown', Name<'KoopaClown'>,]
    'Junior Clown Car': this['Koopa Clown Car']
    'Fire Koopa Clown Car': NoImages
    'Fire Junior Clown Car': NoImages
    'Fire thrown by a Fire [Koopa / Junior] Clown Car': NoImages

    'Koopa Troopa Car': ['KoopaCar', Name<'KoopaCar'>,]
    'Car': NoImages

    'Grinder': NoImages

    'Angry Sun': ['SunMoon', Name<'SunMoon'>,]
    'Moon': NoImages

    //endregion -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------
    //region -------------------- Bosses + projectiles --------------------

    'Bowser': ['Koopa', Name<'Koopa'>,]
    'Meowser': this['Bowser']
    'Fire thrown by a Bowser': NoImages
    'Falling Fire thrown by a Bowser': NoImages

    'Bowser Jr.': ['KoopaJr', Name<'KoopaJr'>,]
    'Fire thrown by a Bowser Jr.': NoImages

    'Boom Boom': ['Bunbun', Name<'Bunbun'>,]
    'Pom Pom': ['Bunbun', Name<'Bunbun', 1>,]
    'Pom Pom\'s clone': NoImages
    'Shuriken thrown by a Pom Pom': NoImages

    'Larry': ['Larry', Name<'Larry'>,]
    'Larry\'s Wand': NoImages
    '(Larry\'s projectile)': NoImages

    'Iggy': ['Iggy', Name<'Iggy'>,]
    'Iggy\'s Wand': NoImages
    '(Iggy\'s projectile)': NoImages

    'Wendy': ['Wendy', Name<'Wendy'>,]
    'Wendy\'s Wand': NoImages
    'Candy Ring thrown by a Wendy': NoImages

    'Lemmy': ['Lemmy', Name<'Lemmy'>,]
    'Lemmy\'s Wand': NoImages
    'Magic Ball thrown by a Lemmy': NoImages

    'Roy': ['Roy', Name<'Roy'>,]
    'Roy\'s Wand': NoImages
    '(Roy\'s projectile)': NoImages

    'Morton': ['Morton', Name<'Morton'>,]
    'Morton\'s Wand': NoImages
    '(Morton\'s Thrown projectile)': NoImages
    '(Morton\'s Ground projectile)': NoImages

    'Ludwig': ['Ludwig', Name<'Ludwig'>,]
    'Ludwig\'s Wand': NoImages
    '(Ludwig\'s projectile)': NoImages

    //endregion -------------------- Bosses + projectiles --------------------
    //region -------------------- Passive gizmo / Key / Warp / Other --------------------

    'Bumper': NoImages

    'Swinging Claw': ['BurankoCrane', Name<'BurankoCrane'>,]

    'Twister': NoImages

    'One-Way Wall': NoImages

    'Track': NoImages
    'Track Block': NoImages

    'Vine': NoImages
    'Tree': ['BellTree', Name<'BellTree'>,]

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

    'Crate': ['WoodBox', Name<'WoodBox'>,]

    'Key': NoImages
    'Cursed Key': NoImages
    'Phanto': NoImages

    'Trampoline': ['JumpStep', Name<'JumpStep'>,]
    'Hop-Chops': NoImages

    'POW Block': ['PowBlock', Name<'PowBlock'>,]
    'Red POW Block': ['PowBlock', Name<'PowBlock', 1>,]

    'P Switch': ['PSwitch', Name<'PSwitch'>,]

    'Stone': ['Stone', Name<'Stone'>,]

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

type Name<NAME extends SimpleImageName, NUMBER extends ImageNumber = 0, > = `${NAME}_0${NUMBER}`

type SimpleImageName = NonNullable<ImageNameMap[PossibleEnglishName][0]>
type ImageNumber = | 0 | 1 | 2
export type ImageName_ClearCondition = NonNullable<ImageNameMap[PossibleEnglishName][1]>
