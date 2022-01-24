import type {PossibleEnglishName} from '../../Entities.types';

interface ImageNameMap {

    //region -------------------- Ground / Pipe / Spike / Platform --------------------

    'Ground': NoImages
    'Starting Ground': NoImages
    'Ending Ground': NoImages
    'Steep Slope': NoImages
    'Gentle Slope': NoImages
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

    'Coin': ['Coin', Name_0<'Coin'>,]
    'Frozen Coin': NoImages
    '10-Coin': ['10Coin', Name<'10Coin', 0>,]
    '30-Coin': ['10Coin', Name<'10Coin', 1>,]
    '50-Coin': ['10Coin', Name<'10Coin', 2>,]
    'Pink Coin': NoImages

    //endregion -------------------- Block / Coin --------------------
    //region -------------------- Power-up / Yoshi / Shoe + projectiles --------------------

    'Super Mushroom': ['SuperKinoko', Name<'SuperKinoko', 0>,]

    'Fire Flower': ['FireFlower', Name<'FireFlower', 0>,]
    'Fireball thrown by a player': NoImages

    'Superball Flower': ['FireFlower', Name<'FireFlower', 1>,]
    'Superball thrown by a player': NoImages

    'Mystery Mushroom': NoImages
    'Weird Mushroom': NoImages

    'Master Sword': ['SuperKinoko', Name<'SuperKinoko', 1>,]
    'Bomb thrown by a Link': NoImages
    'Arrow thrown by a Link': NoImages

    'Big Mushroom': ['DekaKinoko', Name_0<'DekaKinoko'>,]
    'Big Mushroom (classic)': NoImages
    'Big Mushroom (modern)': NoImages

    'SMB2 Mushroom': ['KinokoUSA', Name_0<'KinokoUSA'>,]

    'Super Leaf': ['SuperKonoha', Name_0<'SuperKonoha'>,]

    'Frog Suit': ['FrogSuit', Name_0<'FrogSuit'>,]

    'Cape Feather': ['MantleWing', Name_0<'MantleWing'>,]

    'Power Balloon': ['PowerBalloon', Name_0<'PowerBalloon'>,]

    'Propeller Mushroom': ['PropellerKinoko', Name_0<'PropellerKinoko'>,]

    'Super Acorn': ['SuperDonguri', Name_0<'SuperDonguri'>,]

    'Super Bell': ['SuperBell', Name_0<'SuperBell'>,]

    'Super Hammer': ['SuperHammer', Name_0<'SuperHammer'>,]
    'Builder Box thrown by a player': NoImages

    'Boomerang Flower': ['BoomerangFlower', Name_0<'BoomerangFlower'>,]
    'Boomerang thrown by a player': NoImages

    'Cannon Box': ['BoxKiller', Name_0<'BoxKiller'>,]
    'Cannonball thrown by a player': NoImages

    'Propeller Box': ['BoxPropeller', Name_0<'BoxPropeller'>,]

    'Goomba Mask': ['BoxKuribo', Name_0<'BoxKuribo'>,]

    'Bullet Bill Mask': ['BoxKillerPlayer', Name_0<'BoxKillerPlayer'>,]

    'Red POW Box': ['BoxPow', Name_0<'BoxPow'>,]

    'Super Star': ['SuperStar', Name_0<'SuperStar'>,]

    '1-Up Mushroom': ['1upKinoko', Name_0<'1upKinoko'>,]
    'Rotten Mushroom': NoImages

    'Shoe Goomba': NoImages
    'Shoe': ['KutsuKuribo', Name_0<'KutsuKuribo'>,]
    'Stiletto Goomba': NoImages
    'Stiletto': NoImages
    'Yoshi\'s Egg': ['YosshiEgg', Name_0<'YosshiEgg'>,]
    'Yoshi': NoImages
    'Fire thrown by a Yoshi': NoImages
    'Poison thrown by a Yoshi': NoImages
    'Bone thrown by a Yoshi': NoImages
    'Hammer thrown by a Yoshi': NoImages
    'Red Yoshi\'s Egg': NoImages
    'Red Yoshi': NoImages
    'Fire thrown by a Red Yoshi': NoImages

    //endregion -------------------- Power-up / Yoshi / Shoe + projectiles --------------------
    //region -------------------- General enemies --------------------

    'Goomba': ['Kuribo', Name<'Kuribo', 0>,]
    'Galoomba': ImageNameMap['Goomba']
    'Goombrat': ['Kuribo', Name<'Kuribo', 1>,]
    'Goombud': ImageNameMap['Goombrat']

    'Koopa Troopa': ['Nokonoko', Name_0<'Nokonoko'>,]
    'Beach Koopa': NoImages
    'Koopa Shell': ['NokonokoShell', Name_0<'NokonokoShell'>,]

    'Dry Bones': ['Karon', Name<'Karon', 0>,]
    'Parabones': NoImages
    'Bone thrown by a Dry Bones': NoImages
    'Dry Bones Shell': ['Karon', Name<'Karon', 1>,]

    'Buzzy Beetle': ['Met', Name<'Met', 0>,]
    'Para-Beetle': NoImages
    'Buzzy Shell': ['Met', Name<'Met', 1>,]

    'Spiny': ['Togezo', Name<'Togezo', 0>,]
    'Winged Spiny': NoImages
    '(Winged Spiny\'s projectile)': NoImages
    'Spiny Egg': NoImages
    'Spiny Shell': ['Togezo', Name<'Togezo', 1>,]

    'Spike Top': ['TogeMet', Name_0<'TogeMet'>,]
    'Winged Spike Top': NoImages
    'Fast Spike Top': NoImages
    'Fast Winged Spike Top': NoImages

    'Skipsqueak': ['Pyonchu', Name_0<'Pyonchu'>,]
    'Spiny Skipsqueak': NoImages

    'Ant Trooper': ['Arihei', Name_0<'Arihei'>,]
    'Horned Ant Trooper': NoImages

    'Stingby': ['Hacchin', Name_0<'Hacchin'>,]

    'Cheep Cheep': ['Pukupuku', Name_0<'Pukupuku'>,]
    'Blurps': ImageNameMap['Cheep Cheep']
    'Deep Cheep': ImageNameMap['Cheep Cheep']
    'Fish Bone': ['FishBone', Name_0<'FishBone'>,]

    'Blooper': ['Gesso', Name_0<'Gesso'>,]
    'Blooper Nanny': NoImages
    'Baby Blooper': NoImages

    'Porcupuffer': ['Fugumannen', Name_0<'Fugumannen'>,]

    'Wiggler': ['Hanachan', Name_0<'Hanachan'>,]
    'Angry Wiggler': NoImages

    'Piranha Plant': ['Pakkun', Name<'Pakkun', 0>,]
    'Jumping Piranha Plant': ['Pakkun', Name<'Pakkun', 0>,]
    'Fire Piranha Plant': ['Pakkun', Name<'Pakkun', 1>,]
    'Fireball thrown by a Fire Piranha Plant': NoImages
    'Muncher': ['BlackPakkun', Name_0<'BlackPakkun'>,]
    'Piranha Creeper': ['PackunPipe', Name_0<'PackunPipe'>,]

    'Chain Chomp': NoImages
    'Unchained Chomp': ['Wanwan', Name_0<'Wanwan'>,]
    'Chain Chomp\'s Stump': NoImages

    'Spike': ['Gabon', Name_0<'Gabon'>,]
    'Spike Ball': NoImages
    'Snowball': NoImages

    'Lakitu': ['Jugem', Name<'Jugem', 0>,]
    'Lakitu\'s Cloud': ['Jugem', Name<'Jugem', 1>,]

    'Boo': ['Teresa', Name_0<'Teresa'>,]
    'Stretch': NoImages
    'Boo Buddies': NoImages
    'Peepa': NoImages

    'Bob-omb': ['Bombhei', Name_0<'Bombhei'>,]
    'Lit Bob-omb': NoImages

    'Pokey': ['Sambo', Name_0<'Sambo'>,]
    'Snow Pokey': NoImages

    'Thwomp': ['Dossun', Name_0<'Dossun'>,]

    'Monty Mole': ['ChoroPoo', Name_0<'ChoroPoo'>,]
    'Rocky Wrench': ['Poo', Name_0<'Poo'>,]
    'Wrench thrown by a Rocky Wrench': NoImages

    'Magikoopa': ['Kameck', Name_0<'Kameck'>,]
    '(Magikoopa\'s projectile)': NoImages

    'Hammer Bro': ['Bros', Name_0<'Bros'>,]
    'Sledge Bro': ['MegaBros', Name_0<'MegaBros'>,]
    'Hammer thrown by a Hammer / Sledge Bro': NoImages
    'Fire Bro': NoImages
    'Heavy Fire Bro': NoImages
    'Fireball thrown by a (Heavy) Fire Bro': NoImages

    'Lava Bubble': ['Bubble', Name_0<'Bubble'>,]

    'Mechakoopa': ['KoopaMecha', Name_0<'KoopaMecha'>,]
    'Blasta Mechakoopa': NoImages
    'Homing Missile thrown by a Blasta Mechakoopa': NoImages
    'Zappa Mechakoopa': NoImages
    'Electricity Beam thrown by a Zappa Mechakoopa': NoImages

    'Charvaargh': ['MagmaFish', Name_0<'MagmaFish'>,]

    'Bully': ['Donketsu', Name_0<'Donketsu'>,]

    //endregion -------------------- General enemies --------------------
    //region -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------

    'Bill Blaster': NoImages
    'Bullet Bill': ['Killer', Name_0<'Killer'>,]
    'Bull\'s-Eye Blaster': NoImages
    'Bull\'s-Eye Bill': NoImages
    'Cat Bullet Bill': NoImages

    'Banzai Bill': ['MagnumKiller', Name_0<'MagnumKiller'>,]
    'Bull\'s-Eye Banzai': NoImages
    'Cat Banzai Bill': NoImages

    'Cannon': NoImages
    'Cannonball': NoImages
    'Red Cannon': NoImages
    'Red Cannonball': NoImages

    'Burner': NoImages

    'Fire Bar': NoImages

    'Skewer': NoImages

    'Koopa Clown Car': ['KoopaClown', Name_0<'KoopaClown'>,]
    'Junior Clown Car': ImageNameMap['Koopa Clown Car']
    'Fire Koopa Clown Car': NoImages
    'Fire Junior Clown Car': NoImages
    'Fire thrown by a Fire [Koopa / Junior] Clown Car': NoImages

    'Koopa Troopa Car': ['KoopaCar', Name_0<'KoopaCar'>,]
    'Car': NoImages

    'Grinder': NoImages

    'Angry Sun': ['SunMoon', Name_0<'SunMoon'>,]
    'Moon': NoImages

    //endregion -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------
    //region -------------------- Bosses + projectiles --------------------

    'Bowser': ['Koopa', Name_0<'Koopa'>,]
    'Meowser': ImageNameMap['Bowser']
    'Fire thrown by a Bowser': NoImages
    'Falling Fire thrown by a Bowser': NoImages

    'Bowser Jr.': ['KoopaJr', Name_0<'KoopaJr'>,]
    'Fire thrown by a Bowser Jr.': NoImages

    'Boom Boom': ['Bunbun', Name<'Bunbun', 0>,]
    'Pom Pom': ['Bunbun', Name<'Bunbun', 1>,]
    'Pom Pom\'s clone': NoImages
    'Shuriken thrown by a Pom Pom': NoImages

    'Larry': ['Larry', Name_0<'Larry'>,]
    'Larry\'s Wand': NoImages
    '(Larry\'s projectile)': NoImages

    'Iggy': ['Iggy', Name_0<'Iggy'>,]
    'Iggy\'s Wand': NoImages
    '(Iggy\'s projectile)': NoImages

    'Wendy': ['Wendy', Name_0<'Wendy'>,]
    'Wendy\'s Wand': NoImages
    'Candy Ring thrown by a Wendy': NoImages

    'Lemmy': ['Lemmy', Name_0<'Lemmy'>,]
    'Lemmy\'s Wand': NoImages
    'Magic Ball thrown by a Lemmy': NoImages

    'Roy': ['Roy', Name_0<'Morton'>,]
    'Roy\'s Wand': NoImages
    '(Roy\'s projectile)': NoImages

    'Morton': ['Morton', Name_0<'Morton'>,]
    'Morton\'s Wand': NoImages
    '(Morton\'s Thrown projectile)': NoImages
    '(Morton\'s Ground projectile)': NoImages

    'Ludwig': ['Ludwig', Name_0<'Ludwig'>,]
    'Ludwig\'s Wand': NoImages
    '(Ludwig\'s projectile)': NoImages

    //endregion -------------------- Bosses + projectiles --------------------
    //region -------------------- Passive gizmo / Key / Warp / Other --------------------

    'Bumper': NoImages

    'Swinging Claw': ['BurankoCrane', Name_0<'BurankoCrane'>,]

    'Twister': NoImages

    'One-Way Wall': NoImages

    'Track': NoImages
    'Track Block': NoImages

    'Vine': NoImages
    'Tree': ['BellTree', Name_0<'BellTree'>,]

    'Arrow Sign': NoImages

    'Checkpoint Flag': NoImages

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

    'Crate': ['WoodBox', Name_0<'WoodBox'>,]

    'Key': NoImages
    'Cursed Key': NoImages
    'Phanto': NoImages

    'Trampoline': ['JumpStep', Name_0<'JumpStep'>,]
    'Hop-Chops': NoImages

    'POW Block': ['PowBlock', Name<'PowBlock', 0>,]
    'Red POW Block': ['PowBlock', Name<'PowBlock', 1>,]

    'P Switch': ['PSwitch', Name_0<'PSwitch'>,]

    'Stone': ['Stone', Name_0<'Stone'>,]

    'Warp Door': NoImages
    'P Warp Door': NoImages
    'Key Door': NoImages

    'Warp Box': NoImages
    'Warp Box (With Key)': NoImages

    'Bubble': NoImages,

    //endregion -------------------- Passive gizmo / Key / Warp / Other --------------------

    //Toad

}

type NoImages = readonly [null, null,];

type Name<NAME extends SimpleImageName, NUMBER extends ImageNumber, > = `${NAME}_0${NUMBER}`;
type Name_0<NAME extends SimpleImageName, > = Name<NAME, 0>;

export type SimpleImageName = ImageNameMap[PossibleEnglishName][0];
export type ImageName = ImageNameMap[PossibleEnglishName][1];

export type PossibleAmountOfImages = | 1 | 2 | 3;
export type ImageNumber = | 0 | 1 | 2;