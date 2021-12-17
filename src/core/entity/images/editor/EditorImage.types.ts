import type {PossibleEnglishName} from '../../Entities.types';
import type {PossibleGameName}    from '../../../theme/Themes.types';

interface ImageNameMap {

    //region -------------------- Ground / Pipe / Spike / Platform --------------------

    'Ground': ImageThatIsAGround<'Ground'>
    'Steep Slope': ImageThatIsAGround<'slope_l30'>
    'Gentle Slope': ImageThatIsAGround<'slope_l45'>

    'Pipe': ['Dokan', Name<'Dokan', | 0 | 1 | 2 | 3>,]
    'Clear Pipe': ImageThatHasOnly1Reference<'ToumeiDokan'>

    'Spike Trap': ['Toge', Name_0<Style<'Toge', Night<'snow'>>>,]
    'Jelectro': ['Toge', Name_0<Style<'Toge', 'water'>>,]
    'Sea Urchin': ['Toge', Name_0<Style<'Toge', 'water'>>,]
    'Spike Block': ['TogeBlock', Name_0_1_2<'TogeBlock'>,]

    'Semisolid Platform': ['GroundBox', Exclude<Name_0_1_2<Style<'GroundBox', | 'underground' | 'water' | 'desert' | 'snow' | 'athletic' | 'woods' | 'hauntedhouse' | 'airship' | 'castle' | Night<| 'snow' | 'airship'>>>, `GroundBox_airship_night_0${| 0 | 2}`>,]
    'Mushroom Platform': ['GroundMushroom', Name_0_1_2<Style<'GroundMushroom', | 'water' | 'snow' | 'airship' | Night<'snow'>>>,]
    'Bridge': ['Bridge', Name_0<Style<'Bridge', 'plain' | 'underground' | 'water' | 'desert' | 'snow' | 'athletic' | 'hauntedhouse' | 'woods' | 'airship' | 'castle' | Night<'snow'>>>,]

    //endregion -------------------- Ground / Pipe / Spike / Platform --------------------
    //region -------------------- Block / Coin --------------------

    'Brick Block': ['RengaBlock', Name_0<Style<'RengaBlock', | 'underground' | 'snow' | 'hauntedhouse' | 'castle' | Night<'snow'>>>,]
    'Cristal Block': ['RengaBlock', Name_0<Style<'RengaBlock', | 'underground' | 'woods'>>,]
    'Rotating Block': ImageThatHasOnly1Reference<'RengaBlock'>

    'Hard Block': ['HardBlock', Name_0<Style<'HardBlock', | 'underground' | 'water' | 'airship' | 'castle' | 'hauntedhouse' | 'snow' | Night<| 'underground' | 'snow' | 'airship'>>>,]
    'Rock Block': ImageThatHasOnly1Reference<'HardBlock'>

    '? Block': ['HatenaBlock', Name_0<Style<'HatenaBlock', Night<'snow'>>>,]
    'Hidden Block': ImageThatHasOnly1Reference<'ClearBlock'>
    'Empty Block': [null, null,]

    '! Block': ImageThatHasOnly1Reference<'BikkuriBlock'>

    'Note Block': ['OnpuBlock', Name<Style<'OnpuBlock', Night<'snow'>>, 0>,]
    'Music Block': ['OnpuBlock', Name<Style<'OnpuBlock', Night<'snow'>>, 1>,]

    'Donut Block': ['ChikuwaBlock', Name_0<Style<'ChikuwaBlock', Night<'snow'>>>,]

    'Cloud Block': ['KumoBlock', Name_0<Style<'KumoBlock', | 'water' | Night<'snow'>>>,]

    'ON/OFF Switch': ImageThatHasOnly1Reference<'OnOffSwitch'>
    'Dotted-Line Block': ['OnOffBlock', Name_0_1<'OnOffBlock'>,]

    'P Block': [null, null,]

    'Blinking Block': ['Chikachika', Name_0_1<'Chikachika'>,]

    'Ice Block': ['IceBlock', Name_0<Style<'IceBlock', Night<'snow'>>>,]
    'Icicle': ['Icicle', Name_0_1<'Icicle'>,]

    'Coin': ['Coin', Name<'Coin', 0>,]
    'Frozen Coin': ['Coin', Name<'Coin', 1>,]//TODO validate the real reference
    '10-Coin': ['10Coin', Name<'10Coin', 0>,]
    '30-Coin': ['10Coin', Name<'10Coin', 1>,]
    '50-Coin': ['10Coin', Name<'10Coin', 2>,]
    'Pink Coin': ImageThatHasOnly1Reference<'PinkCoin'>

    //endregion -------------------- Block / Coin --------------------
    //region -------------------- Power-up / Yoshi / Shoe + projectiles --------------------

    'Super Mushroom': ImageThatHasOnly1Reference<'SuperKinoko'>

    'Fire Flower': ['FireFlower', Name<PowerUp<'FireFlower'>, 0>,]
    'Fireball thrown by a player': NoImages

    'Superball Flower': ['FireFlower', Name<PowerUp<'FireFlower'>, 1>,]
    'Superball thrown by a player': NoImages

    'Mystery Mushroom': NoImages
    'Weird Mushroom': NoImages

    'Master Sword': [null, null,]
    'Bomb thrown by a Link': NoImages
    'Arrow thrown by a Link': NoImages

    'Big Mushroom': ImageThatIsPowerUp<'DekaKinoko'>
    'Big Mushroom (classic)': NoImages
    'Big Mushroom (modern)': NoImages

    'SMB2 Mushroom': [null, null,]

    'Super Leaf': ImageThatIsPowerUp<'SuperKonoha'>

    'Frog Suit': [null, null,]

    'Cape Feather': ImageThatIsPowerUp<'MantleWing'>

    'Power Balloon': [null, null,]

    'Propeller Mushroom': ImageThatIsPowerUp<'PropellerKinoko'>

    'Super Acorn': [null, null,]

    'Super Bell': ImageThatIsPowerUp<'SuperBell'>

    'Super Hammer': ImageThatIsPowerUp<'SuperHammer'>
    'Builder Box thrown by a player': NoImages

    'Boomerang Flower': [null, null,]
    'Boomerang thrown by a player': NoImages

    'Cannon Box': [null, null,]
    'Cannonball thrown by a player': NoImages

    'Propeller Box': [null, null,]

    'Goomba Mask': [null, null,]

    'Bullet Bill Mask': [null, null,]

    'Red POW Box': [null, null,]

    'Super Star': ImageThatHasOnly1Reference<'SuperStar'>

    '1-Up Mushroom': ImageThatHasOnly1Reference<'1upKinoko'>
    'Rotten Mushroom': ImageThatHasOnly1Reference<'DokuKinoko'>

    'Shoe Goomba': ['KutsuKuribo', Name<'KutsuKuribo', 0>,]
    'Shoe': NoImages
    'Stiletto Goomba': ['KutsuKuribo', Name<'KutsuKuribo', 1>,]
    'Stiletto': NoImages
    'Yoshi\'s Egg': ImageThatHasOnly1Reference<'YosshiEgg'>
    'Yoshi': NoImages
    'Fire thrown by a Yoshi': NoImages
    'Poison thrown by a Yoshi': NoImages
    'Bone thrown by a Yoshi': NoImages
    'Hammer thrown by a Yoshi': NoImages
    'Red Yoshi\'s Egg': ImageThatHasOnly1Reference<'YosshiEggRed'>
    'Red Yoshi': NoImages
    'Fire thrown by a Red Yoshi': NoImages

    //endregion -------------------- Power-up / Yoshi / Shoe + projectiles --------------------
    //region -------------------- General enemies --------------------

    'Goomba': ['Kuribo', Name<'Kuribo', 0>,]
    'Galoomba': ['Kuribo', Name<'Kuribo', 1>,]
    'Goombrat': ImageNameMap['Goomba']
    'Goombud': ImageNameMap['Galoomba']

    'Koopa Troopa': ['Nokonoko', Name_0_1<'Nokonoko'>,]
    'Beach Koopa': NoImages
    'Koopa Shell': NoImages

    'Dry Bones': ['Karon', Name<'Karon', 0>,]
    'Parabones': NoImages
    'Bone thrown by a Dry Bones': NoImages
    'Dry Bones Shell': ['Karon', Name<'Karon', 1>,]

    'Buzzy Beetle': ['Met', ImageThatIsDifferentInSMBAndSMB3<'Met'>,]
    'Para-Beetle': NoImages
    'Buzzy Shell': ['Met', ImageThatIsDifferentInSMBAndSMB3<'Met', 1>,]

    'Spiny': ['Togezo', Name<'Togezo', 0>,]
    'Winged Spiny': NoImages
    '(Winged Spiny\'s projectile)': NoImages
    'Spiny Egg': NoImages
    'Spiny Shell': ['Togezo', Name<'Togezo', 1>,]

    'Spike Top': ['TogeMet', Name<'TogeMet', 0>,]
    'Winged Spike Top': NoImages
    'Fast Spike Top': ['TogeMet', Name<'TogeMet', 1>,]
    'Fast Winged Spike Top': NoImages

    'Skipsqueak': ['Pyonchu', Name<'Pyonchu', 0>,]
    'Spiny Skipsqueak': ['Pyonchu', Name<'Pyonchu', 1>,]

    'Ant Trooper': ['Arihei', Name<'Arihei', 0>,]
    'Horned Ant Trooper': ['Arihei', Name<'Arihei', 1>,]

    'Stingby': ImageThatHasOnly1Reference<'Hacchin'>

    'Cheep Cheep': ['Pukupuku', Name<'Pukupuku', | 0 | 1>,]
    'Blurps': ['Pukupuku', Name<'Pukupuku', 1>,]
    'Deep Cheep': ['Pukupuku', Name<'Pukupuku', 1>,]

    'Fish Bone': ImageThatHasOnly1Reference<'FishBone'>

    'Blooper': ['Gesso', Name<'Gesso', 0>,]
    'Blooper Nanny': ['Gesso', Name<'Gesso', 1>,]
    'Baby Blooper': NoImages

    'Porcupuffer': ImageThatHasOnly1Reference<'Fugumannen'>

    'Wiggler': ['Hanachan', Name<'Hanachan', 0>,]
    'Angry Wiggler': ['Hanachan', Name<'Hanachan', 1>,]

    'Piranha Plant': ['Pakkun', Name<'Pakkun', 0>,]
    'Jumping Piranha Plant': ImageNameMap['Piranha Plant']
    'Fire Piranha Plant': ['Pakkun', Name<'Pakkun', 1>,]
    'Fireball thrown by a Fire Piranha Plant': NoImages
    'Muncher': ImageThatIsDifferentInSMBAndSMB3<'BlackPakkun'>
    'Piranha Creeper': ['PackunPipe', Name_0_1<'PackunPipe'>,]

    'Chain Chomp': ['Wanwan', ImageThatIsDifferentInSMBAndSMB3<'Wanwan'>,]
    'Unchained Chomp': ['Wanwan', ImageThatIsDifferentInSMBAndSMB3<'Wanwan', 1>,]
    'Chain Chomp\'s Stump': NoImages

    'Spike': [null, null,]
    'Spike Ball': [null, null,]
    'Snowball': [null, null,]

    'Lakitu': ['Jugem', Name<'Jugem', 0>,]
    'Lakitu\'s Cloud': ['Jugem', Name<'Jugem', 1>,]

    'Boo': ['Teresa', Name<'Teresa', 0>,]
    'Stretch': [null, null,]
    'Boo Buddies': ['Teresa', Name<'Teresa', 1>,]
    'Peepa': ImageNameMap['Boo Buddies']//TODO validate the real reference

    'Bob-omb': ['Bombhei', Name<'Bombhei', 0>,]
    'Lit Bob-omb': ['Bombhei', Name<'Bombhei', 1>,]

    'Pokey': [null, null,]
    'Snow Pokey': [null, null,]

    'Thwomp': ImageThatHasOnly1Reference<'Dossun'>

    'Monty Mole': ImageThatHasOnly1Reference<'ChoroPoo'>
    'Rocky Wrench': ImageThatHasOnly1Reference<'Poo'>
    'Wrench thrown by a Rocky Wrench': NoImages

    'Magikoopa': ImageThatHasOnly1Reference<'Kameck'>
    '(Magikoopa\'s projectile)': NoImages

    'Hammer Bro': ['Bros', Name<'Bros', 0>,]
    'Sledge Bro': ['MegaBros', Name<'MegaBros', 0>,]
    'Hammer thrown by a Hammer / Sledge Bro': NoImages
    'Fire Bro': ['Bros', Name<'Bros', 1>,]
    'Heavy Fire Bro': ['MegaBros', Name<'MegaBros', 1>,]
    'Fireball thrown by a (Heavy) Fire Bro': NoImages

    'Lava Bubble': ImageThatHasOnly1Reference<'Bubble'>

    'Mechakoopa': [null, null,]
    'Blasta Mechakoopa': [null, null,]
    'Homing Missile thrown by a Blasta Mechakoopa': NoImages
    'Zappa Mechakoopa': [null, null,]
    'Electricity Beam thrown by a Zappa Mechakoopa': NoImages

    'Charvaargh': ImageThatHasOnly1Reference<'MagmaFish'>

    'Bully': ImageThatHasOnly1Reference<'Donketsu'>

    //endregion -------------------- General enemies --------------------
    //region -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------

    'Bill Blaster': ImageThatIsDifferentInSMBAndSMB3<'KillerHoudai'>
    'Bullet Bill': [null, null,]
    'Bull\'s-Eye Blaster': ['KillerHoudai', Name<'KillerHoudai', 1>,]
    'Bull\'s-Eye Bill': [null, null,]
    'Cat Bullet Bill': [null, null,]

    'Banzai Bill': ['MagnumKiller', ImageThatIsDifferentInSMBAndSMB3<'MagnumKiller'>,]
    'Bull\'s-Eye Banzai': ['MagnumKiller', Name<'MagnumKiller', 1>,]
    'Cat Banzai Bill': ImageNameMap['Bull\'s-Eye Banzai']

    'Cannon': ImageThatIsDifferentInSMBAndSMB3<'Houdai'>
    'Cannonball': NoImages
    'Red Cannon': ['Houdai', Name<'Houdai', 1>,]
    'Red Cannonball': NoImages

    'Burner': ['Burner', Name_0_1<'Burner'>,]

    'Fire Bar': ImageThatHasOnly1Reference<'FireBar'>

    'Skewer': ['TogeKonbo', ImageThatIsDifferentInSMBAndSMB3<'TogeKonbo'>,]

    'Koopa Clown Car': ['KoopaClown', Name<'KoopaClown', 0>,]
    'Junior Clown Car': ImageNameMap['Koopa Clown Car']
    'Fire Koopa Clown Car': ['KoopaClown', Name<'KoopaClown', 1>,]
    'Fire Junior Clown Car': ImageNameMap['Fire Koopa Clown Car']
    'Fire thrown by a Fire Koopa / Junior Clown Car': NoImages

    'Koopa Troopa Car': ImageThatHasOnly1Reference<'KoopaCar'>
    'Car': NoImages

    'Grinder': ImageThatHasOnly1Reference<'Saw'>

    'Angry Sun': ['SunMoon', Name<'SunMoon', 0>,]
    'Moon': ['SunMoon', Name<'SunMoon', 1>,]

    //endregion -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------
    //region -------------------- Bosses + projectiles --------------------

    'Bowser': ImageThatHasOnly1Reference<'Koopa'>
    'Meowser': ImageNameMap['Bowser']
    'Fire thrown by a Bowser': NoImages
    'Falling Fire thrown by a Bowser': NoImages

    'Bowser Jr.': ImageThatHasOnly1Reference<'KoopaJr'>
    'Fire thrown by a Bowser Jr.': NoImages

    'Boom Boom': ['Bunbun', Name<'Bunbun', 1>,]
    'Pom Pom': ['Bunbun', Name<'Bunbun', 1>,]
    'Pom Pom\'s clone': NoImages
    'Shuriken thrown by a Pom Pom': NoImages

    'Larry': [null, null,]
    'Larry\'s Wand': NoImages
    '(Larry\'s projectile)': NoImages

    'Iggy': [null, null,]
    'Iggy\'s Wand': NoImages
    '(Iggy\'s projectile)': NoImages

    'Wendy': [null, null,]
    'Wendy\'s Wand': NoImages
    'Candy Ring thrown by a Wendy': NoImages

    'Lemmy': [null, null,]
    'Lemmy\'s Wand': NoImages
    'Magic Ball thrown by a Lemmy': NoImages

    'Roy': [null, null,]
    'Roy\'s Wand': NoImages
    '(Roy\'s projectile)': NoImages

    'Morton': [null, null,]
    'Morton\'s Wand': NoImages
    '(Morton\'s Thrown projectile)': NoImages
    '(Morton\'s Ground projectile)': NoImages

    'Ludwig': [null, null,]
    'Ludwig\'s Wand': NoImages
    '(Ludwig\'s projectile)': NoImages

    //endregion -------------------- Bosses + projectiles --------------------
    //region -------------------- Passive gizmo / Key / Warp / Other --------------------

    'Bumper': ImageThatHasOnly1Reference<'Marumaru'>

    'Swinging Claw': ImageThatHasOnly1Reference<'BurankoCrane'>

    'Twister': ImageThatHasOnly1Reference<'Tornado'>

    'One-Way Wall': ImageThatHasOnly1Reference<'Hanatari'>

    'Track': ImageThatHasOnly1Reference<'Rail'>
    'Track Block': ['OrbitBlock', Name_0_1<'OrbitBlock'>,]

    'Vine': ImageThatHasOnly1Reference<'TsutaBlock'>
    'Tree': ['BellTree', Name_0<Style<'BellTree', | 'underground' | 'water' | 'desert' | 'snow' | 'woods'>>,]

    'Arrow Sign': ImageThatHasOnly1Reference<'Yajirushi'>

    'Checkpoint Flag': ImageThatHasOnly1Reference<'MiddleFlag'>

    'Dash Block': [null, null,]

    'Snake Block': ['SnakeBlock', Name<'SnakeBlock', 0>,]
    'Fast Snake Block': ['SnakeBlock', Name<'SnakeBlock', 1>,]

    'Conveyor Belt': ['BeltConveyor', Name<'BeltConveyor', 0>,]
    'Fast Conveyor Belt': ['BeltConveyor', Name<'BeltConveyor', 1>,]

    'Mushroom Trampoline': ['Trampoline', Name_0_1<'Trampoline'>,]
    'ON/OFF Trampoline': [null, null,]

    'Lift': ['Lift', Name<'Lift', 0>,]
    'Flimsy Lift': ['Lift', Name<'Lift', 1>,]
    'Cloud Lift': ImageNameMap['Lift']

    'Seesaw': ImageThatHasOnly1Reference<'Seesaw'>

    'Lava Lift': ['YouganLift', Name<'YouganLift', 0>,]
    'Fast Lava Lift': ['YouganLift', Name<'YouganLift', 1>,]

    'Crate': ImageThatHasOnly1Reference<'WoodBox'>

    'Key': ['Key', Name<'Key', 0>,]
    'Cursed Key': ['Key', Name<'Key', 1>,]//TODO validate the real reference
    'Phanto': NoImages

    'Trampoline': ['JumpStep', Name_0_1<'JumpStep'>,]
    'Hop-Chops': ImageThatHasOnly1Reference<'Hopper'>

    'POW Block': ['PowBlock', Name<'PowBlock', 0>,]
    'Red POW Block': ['PowBlock', Name<'PowBlock', 1>,]//TODO validate the real reference

    'P Switch': ImageThatHasOnly1Reference<'PSwitch'>

    'Stone': [null, null,]

    'Warp Door': ['Door', Name<'Door', 0>,]
    'P Warp Door': ['Door', Name<'Door', 1>,]
    'Key Door': ['Door', Name<'Door', 2>,]

    'Warp Box': ['WarpBox', Name<'WarpBox', 0>,]
    'Warp Box (With Key)': ['WarpBox', Name<'WarpBox', 1>,],

    //endregion -------------------- Passive gizmo / Key / Warp / Other --------------------

}

export type PossibleRailExtended = `Rail${| 'U' | 'D' | `Branch${`${| 'U' | 'D'}${| 'L' | 'R'}` | `${| 'L' | 'R'}${| 'U' | 'D'}`}` | `Curve${| 'L' | 'R'}${| 'U' | 'D'}`}`;
export type PossibleConveyor = `${| 'Belt' | 'Slope'}Conveyor`;
type ImageThatIsAGround<NAME extends SimpleImageName, > = [NAME, Name_0<Style<NAME, | 'underground' | 'water' | 'desert' | 'snow' | 'athletic' | 'woods' | 'hauntedhouse' | 'airship' | 'castle' | Night<| 'water' | 'snow' | 'athletic' | 'airship'>>>,];
type ImageThatIsDifferentInSMBAndSMB3<NAME extends SimpleImageName, NUMBER extends | 0 | 1 = 0, > = [NAME, Name<Style<NAME, | 'underground' | 'castle' | Night<| 'plain' | 'water' | 'desert' | 'snow' | 'athletic' | 'woods' | 'hauntedhouse' | 'airship'>>, NUMBER>,];
type ImageThatHasOnly1Reference<NAME extends SimpleImageName, > = [NAME, Name_0<NAME>,];
type ImageThatIsPowerUp<NAME extends SimpleImageName, > = [NAME, PowerUp<NAME>,];
type NoImages = readonly [null, null,];

type PowerUp<NAME extends | SimpleImageName | string, > = `${NAME}${| '' | VariantEditorImage_PowerUp}`;
type Name<NAME extends | SimpleImageName | string, NUMBER extends VariantEditorImage_Number, > = `${NAME}_0${NUMBER}`;
type Name_0<NAME extends | SimpleImageName | string, > = Name<NAME, 0>;
type Name_0_1<NAME extends | SimpleImageName | string, > = Name<NAME, | 0 | 1>;
type Name_0_1_2<NAME extends | SimpleImageName | string, > = Name<NAME, | 0 | 1 | 2>;
type Style<NAME extends | SimpleImageName | string, STYLE extends VariantEditorImage_GameStyle = VariantEditorImage_GameStyle, > = | NAME | `${NAME}_${STYLE}`;


export type SimpleImageName = ImageNameMap[PossibleEnglishName][0];

export type ImageName = ImageNameMap[PossibleEnglishName][1];

export type Night<STYLE extends PossibleGameName, > = `${STYLE}_night`;
type VariantEditorImage_GameStyle = PossibleGameName | Night<PossibleGameName>;
type VariantEditorImage_Number = | 0 | 1 | 2 | 3;
export type VariantEditorImage_PowerUp = 'Uni';
export type VariantEditorImage =
    VariantEditorImage_Number
    | VariantEditorImage_PowerUp
    | VariantEditorImage_GameStyle;

export type EditorImageName = | readonly []
                              | readonly [ImageName,]
                              | readonly [ImageName, ImageName,]
                              | readonly [ImageName, ImageName, ImageName, ImageName,]
                              | readonly [ImageName, ImageName, ImageName, ImageName, ImageName, ImageName, ImageName, ImageName, ImageName, ImageName, ImageName, ImageName,];

/**
 * Describe the maximum amount of images possible in any possible Editor image in an {@link Entities}.
 */
export type PossibleAmountOfImages = | 1 | 2 | 3 | 4;
export type ImageNumber = | 0 | 1 | 2 | 3;