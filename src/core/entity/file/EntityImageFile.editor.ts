import type {PossibleEnglishName}                  from 'core/entity/Entities.types'
import type {PossibleGameAcronym}                  from 'core/gameStyle/GameStyles.types'
import type {DayOrNightGameName, PossibleGameName} from 'core/theme/Themes.types'
import type {ImageFile}                            from 'util/file/image/ImageFile'

export type EditorImageFile = | GenericEditorImageFile | PowerUpEditorImageFile

export type GenericEditorImageFile = ImageFile<`entity/editor`, `${PossibleGameAcronym}_Lyt_P_${SimpleImageName_Editor}_${| '' | `${DayOrNightGameName}_`}0${ImageNumber_Editor}`, 'tiff'>
export type PowerUpEditorImageFile = ImageFile<`entity/editor`, `${PossibleGameAcronym}_Lyt_P_${SimpleImageName_Editor}${| '_' | `${VariantEditorImage_PowerUp}_`}0${ImageNumber_PowerUp_Editor}`, 'tiff'>


interface ImageNameMap {

    //region -------------------- Ground / Pipe / Spike / Platform --------------------

    'Ground': ImageThatIsAGround<'Ground'>
    'Start Ground': NoImages
    'Goal Ground': NoImages

    'Steep Slope': ImageThatIsAGround<'slope_l45'>
    'Gentle Slope': ImageThatIsAGround<'slope_l30'>

    'Start Block': NoImages
    'Occlude Block': NoImages

    'Water': NoImages
    'Lava': NoImages
    'Poison': NoImages

    'Pipe': ['Dokan', Name<Style<'Dokan', Night<'snow'>>, | 0 | 1 | 2 | 3>,]
    'Clear Pipe': SimpleName<'ToumeiDokan'>

    'Spike Trap': ['Toge', Name_0<Style<'Toge', Night<'snow'>>>,]
    'Jelectro': ['Toge', Name_0<Style<'Toge', 'water'>>,]
    'Sea Urchin': ['Toge', Name_0<Style<'Toge', 'water'>>,]
    'Spike Block': SimpleName<'TogeBlock', | 0 | 1 | 2>

    'Semisolid Platform': ['GroundBox', Exclude<Name_0_1_2<Style<'GroundBox', | 'underground' | 'water' | 'desert' | 'snow' | 'athletic' | 'woods' | 'hauntedhouse' | 'airship' | 'castle' | Night<| 'snow' | 'airship'>>>, `GroundBox_airship_night_0${| 0 | 2}`>,]
    'Mushroom Platform': ['GroundMushroom', Name_0_1_2<Style<'GroundMushroom', | 'water' | 'snow' | 'airship' | Night<'snow'>>>,]
    'Bridge': ['Bridge', Name_0<Style<'Bridge', 'plain' | 'underground' | 'water' | 'desert' | 'snow' | 'athletic' | 'hauntedhouse' | 'woods' | 'airship' | 'castle' | Night<'snow'>>>,]

    //endregion -------------------- Ground / Pipe / Spike / Platform --------------------
    //region -------------------- Block / Coin --------------------

    'Brick Block': ['RengaBlock', Name_0<Style<'RengaBlock', | 'underground' | 'snow' | 'hauntedhouse' | 'castle' | Night<'snow'>>>,]
    'Cristal Block': ['RengaBlock', Name_0<Style<'RengaBlock', | 'underground' | 'woods'>>,]
    'Rotating Block': SimpleName<'RengaBlock'>

    'Hard Block': ['HardBlock', Name_0<Style<'HardBlock', | 'underground' | 'water' | 'snow' | 'athletic' | 'woods' | 'hauntedhouse' | 'airship' | 'castle' | Night<| 'underground' | 'snow' | 'airship'>>>,]
    'Rock Block': SimpleName<'HardBlock'>

    '? Block': ['HatenaBlock', Name_0<Style<'HatenaBlock', Night<'snow'>>>,]
    'Hidden Block': SimpleName<'ClearBlock'>
    'Empty Block': NoImages

    '! Block': SimpleName<'BikkuriBlock'>

    'Note Block': ['OnpuBlock', Name<Style<'OnpuBlock', Night<'snow'>>, 0>,]
    'Music Block': ['OnpuBlock', Name<Style<'OnpuBlock', Night<'snow'>>, 1>,]

    'Donut Block': ['ChikuwaBlock', Name_0<Style<'ChikuwaBlock', Night<'snow'>>>,]

    'Cloud Block': ['KumoBlock', Name_0<Style<'KumoBlock', | 'water' | Night<'snow'>>>,]

    'ON/OFF Switch': SimpleName<'OnOffSwitch'>
    'Dotted-Line Block': SimpleName<'OnOffBlock', | 0 | 1>

    'P Block': SimpleName<'PBlock', | 0 | 1>

    'Blinking Block': SimpleName<'Chikachika', | 0 | 1>

    'Ice Block': ['IceBlock', Name_0<Style<'IceBlock', Night<'snow'>>>,]
    'Icicle': SimpleName<'Icicle', | 0 | 1>

    'Coin': SimpleName<'Coin'>
    'Frozen Coin': ['Coin', Name<Style<'Coin', Night<'snow'>>, 1>,]
    '10-Coin': SimpleName<'10Coin'>
    '30-Coin': SimpleName<'10Coin', 1>
    '50-Coin': SimpleName<'10Coin', 2>
    'Pink Coin': SimpleName<'PinkCoin'>

    //endregion -------------------- Block / Coin --------------------
    //region -------------------- Power-up / Yoshi / Shoe + projectiles --------------------

    'Super Mushroom': SimplePowerUpName<'SuperKinoko'>

    'Fire Flower': SimplePowerUpName<'FireFlower'>
    'Fireball thrown by a player': NoImages

    'Superball Flower': SimplePowerUpName<'FireFlower', 1>
    'Superball thrown by a player': NoImages

    'Mystery Mushroom': NoImages
    'Weird Mushroom': NoImages

    'Master Sword': SimpleName<'SuperKinoko', 1>
    'Bomb thrown by a Link': NoImages
    'Arrow thrown by a Link': NoImages

    'Big Mushroom': SimplePowerUpName<'DekaKinoko'>
    'Big Mushroom (classic)': NoImages
    'Big Mushroom (modern)': NoImages

    'SMB2 Mushroom': SimplePowerUpName<'KinokoUSA'>

    'Super Leaf': SimplePowerUpName<'SuperKonoha'>

    'Frog Suit': SimplePowerUpName<'FrogSuit'>

    'Cape Feather': SimplePowerUpName<'MantleWing'>

    'Power Balloon': SimplePowerUpName<'PowerBalloon'>

    'Propeller Mushroom': SimplePowerUpName<'PropellerKinoko'>

    'Super Acorn': SimplePowerUpName<'SuperDonguri'>

    'Super Bell': SimplePowerUpName<'SuperBell'>

    'Super Hammer': SimplePowerUpName<'SuperHammer'>
    'Builder Box thrown by a player': NoImages

    'Boomerang Flower': SimplePowerUpName<'BoomerangFlower'>
    'Boomerang thrown by a player': NoImages

    'Cannon Box': SimpleName<'BoxKiller'>
    'Cannonball thrown by a player': NoImages

    'Propeller Box': SimpleName<'BoxPropeller'>

    'Goomba Mask': SimpleName<'BoxKuribo'>

    'Bullet Bill Mask': SimpleName<'BoxKillerPlayer'>

    'Red POW Box': SimpleName<'BoxPow'>

    'Super Star': SimpleName<'SuperStar'>

    '1-Up Mushroom': SimpleName<'1upKinoko'>
    'Rotten Mushroom': SimpleName<'DokuKinoko'>

    'Shoe Goomba': SimpleName<'KutsuKuribo'>
    'Shoe': NoImages
    'Stiletto Goomba': SimpleName<'KutsuKuribo', 1>
    'Stiletto': NoImages
    'Yoshi\'s Egg': SimpleName<'YosshiEgg'>
    'Yoshi': NoImages
    'Fire thrown by a Yoshi': NoImages
    'Poison thrown by a Yoshi': NoImages
    'Wrench thrown by a Yoshi': NoImages
    'Bone thrown by a Yoshi': NoImages
    'Hammer thrown by a Yoshi': NoImages
    'Red Yoshi\'s Egg': SimpleName<'YosshiEggRed'>
    'Red Yoshi': NoImages
    'Fire thrown by a Red Yoshi': NoImages

    //endregion -------------------- Power-up / Yoshi / Shoe + projectiles --------------------
    //region -------------------- General enemies --------------------

    'Goomba': SimpleName<'Kuribo'>
    'Galoomba': SimpleName<'Kuribo', 1>
    'Goombrat': this['Goomba']
    'Goombud': this['Galoomba']

    'Green Koopa Troopa': SimpleName<'Nokonoko'>
    'Red Koopa Troopa': SimpleName<'Nokonoko', 1>
    'Green Beach Koopa': NoImages
    'Red Beach Koopa': NoImages
    'Green Koopa Shell': NoImages
    'Red Koopa Shell': NoImages

    'Dry Bones': SimpleName<'Karon'>
    'Parabones': NoImages
    'Bone thrown by a Dry Bones': NoImages
    'Dry Bones Shell': SimpleName<'Karon', 1>

    'Buzzy Beetle': ['Met', ImageThatHasBlueVariant<'Met'>,]
    'Para-Beetle': NoImages
    'Buzzy Shell': ['Met', ImageThatHasBlueVariant<'Met', 1>,]

    'Spiny': SimpleName<'Togezo'>
    'Winged Spiny': NoImages
    '(Winged Spiny\'s projectile)': NoImages
    'Spiny Egg': NoImages
    'Spiny Shell': SimpleName<'Togezo', 1>

    'Spike Top': SimpleName<'TogeMet'>
    'Winged Spike Top': NoImages
    'Fast Spike Top': SimpleName<'TogeMet', 1>
    'Fast Winged Spike Top': NoImages

    'Skipsqueak': SimpleName<'Pyonchu'>
    'Spiny Skipsqueak': SimpleName<'Pyonchu', 1>

    'Ant Trooper': SimpleName<'Arihei'>
    'Horned Ant Trooper': SimpleName<'Arihei', 1>

    'Stingby': SimpleName<'Hacchin'>

    'Cheep Cheep': SimpleName<'Pukupuku', | 0 | 1>
    'Blurps': SimpleName<'Pukupuku', 1>
    'Deep Cheep': this['Blurps']

    'Fish Bone': SimpleName<'FishBone'>

    'Blooper': SimpleName<'Gesso'>
    'Blooper Nanny': SimpleName<'Gesso', 1>
    'Baby Blooper': NoImages

    'Porcupuffer': SimpleName<'Fugumannen'>

    'Wiggler': SimpleName<'Hanachan'>
    'Angry Wiggler': SimpleName<'Hanachan', 1>

    'Piranha Plant': SimpleName<'Pakkun'>
    'Jumping Piranha Plant': this['Piranha Plant']
    'Fire Piranha Plant': SimpleName<'Pakkun', 1>
    'Fireball thrown by a Fire Piranha Plant': NoImages
    'Muncher': ['BlackPakkun', ImageThatHasBlueVariant<'BlackPakkun'>,]
    'Piranha Creeper': SimpleName<'PackunPipe', | 0 | 1>

    'Chain Chomp': ['Wanwan', ImageThatHasBlueVariant<'Wanwan'>,]
    'Unchained Chomp': ['Wanwan', ImageThatHasBlueVariant<'Wanwan', 1>,]
    'Chain Chomp\'s Stump': NoImages

    'Spike': SimpleName<'Gabon'>
    'Spike Ball': ['Gabon', Name<Style<'Gabon', | 'underground' | 'water' | 'hauntedhouse' | 'castle' | Night<| 'plain' | 'desert' | 'athletic' | 'woods' | 'airship'>>, 1>,]
    'Snowball': ['Gabon', Name<Style<'Gabon', 'snow'>, 1>,]

    'Lakitu': SimpleName<'Jugem'>
    'Lakitu\'s Cloud': SimpleName<'Jugem', 1>

    'Boo': SimpleName<'Teresa'>
    'Stretch': NoImages
    'Boo Buddies': SimpleName<'Teresa', 1>
    'Peepa': this['Boo Buddies']

    'Bob-omb': SimpleName<'Bombhei'>
    'Lit Bob-omb': SimpleName<'Bombhei', 1>

    'Pokey': SimpleName<'Sambo'>
    'Snow Pokey': ['Sambo', Name_0<Style<'Sambo', 'snow'>>,]

    'Thwomp': SimpleName<'Dossun'>

    'Monty Mole': SimpleName<'ChoroPoo'>
    'Rocky Wrench': SimpleName<'Poo'>
    'Wrench thrown by a Rocky Wrench': NoImages

    'Magikoopa': SimpleName<'Kameck'>
    '(Magikoopa\'s projectile)': NoImages

    'Hammer Bro': SimpleName<'Bros'>
    'Sledge Bro': SimpleName<'MegaBros'>
    'Hammer thrown by a Hammer / Sledge Bro': NoImages
    'Fire Bro': SimpleName<'Bros', 1>
    'Heavy Fire Bro': SimpleName<'MegaBros', 1>
    'Fireball thrown by a (Heavy) Fire Bro': NoImages

    'Lava Bubble': SimpleName<'Bubble'>

    'Mechakoopa': SimpleName<'KoopaMecha'>
    'Blasta Mechakoopa': SimpleName<'KoopaMecha', 1>
    'Homing Missile thrown by a Blasta Mechakoopa': NoImages
    'Zappa Mechakoopa': SimpleName<'KoopaMecha', 2>
    'Electricity Beam thrown by a Zappa Mechakoopa': NoImages

    'Charvaargh': SimpleName<'MagmaFish'>

    'Bully': SimpleName<'Donketsu'>

    //endregion -------------------- General enemies --------------------
    //region -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------

    'Bill Blaster': ['KillerHoudai', ImageThatHasBlueVariant<'KillerHoudai'>,]
    'Bullet Bill': NoImages
    'Bull\'s-Eye Blaster': SimpleName<'KillerHoudai', 1>
    'Bull\'s-Eye Bill': NoImages
    'Cat Bullet Bill': NoImages

    'Banzai Bill': ['MagnumKiller', ImageThatHasBlueVariant<'MagnumKiller'>,]
    'Bull\'s-Eye Banzai': SimpleName<'MagnumKiller', 1>
    'Cat Banzai Bill': this['Bull\'s-Eye Banzai']

    'Cannon': ['Houdai', ImageThatHasBlueVariant<'Houdai'>,]
    'Cannonball': NoImages
    'Red Cannon': SimpleName<'Houdai', 1>
    'Red Cannonball': NoImages

    'Burner': SimpleName<'Burner', | 0 | 1>

    'Fire Bar': SimpleName<'FireBar'>

    'Skewer': ['TogeKonbo', ImageThatHasBlueVariant<'TogeKonbo'>,]

    'Koopa Clown Car': SimpleName<'KoopaClown'>
    'Junior Clown Car': this['Koopa Clown Car']
    'Fire Koopa Clown Car': SimpleName<'KoopaClown', 1>
    'Fire Junior Clown Car': this['Fire Koopa Clown Car']
    'Fire thrown by a Fire [Koopa / Junior] Clown Car': NoImages

    'Koopa Troopa Car': SimpleName<'KoopaCar'>
    'Car': NoImages

    'Grinder': SimpleName<'Saw'>

    'Angry Sun': SimpleName<'SunMoon'>
    'Moon': SimpleName<'SunMoon', 1>

    //endregion -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------
    //region -------------------- Bosses + projectiles --------------------

    'Bowser': SimpleName<'Koopa'>
    'Meowser': this['Bowser']
    'Fire thrown by a Bowser': NoImages
    'Falling Fire thrown by a Bowser': NoImages

    'Bowser Jr.': SimpleName<'KoopaJr'>
    'Fire thrown by a Bowser Jr.': NoImages

    'Boom Boom': SimpleName<'Bunbun'>
    'Pom Pom': SimpleName<'Bunbun', 1>
    'Pom Pom\'s clone': NoImages
    'Shuriken thrown by a Pom Pom': NoImages

    'Larry': SimpleName<'Larry'>
    'Larry\'s Wand': NoImages
    '(Larry\'s projectile)': NoImages

    'Iggy': SimpleName<'Iggy'>
    'Iggy\'s Wand': NoImages
    '(Iggy\'s projectile)': NoImages

    'Wendy': SimpleName<'Wendy'>
    'Wendy\'s Wand': NoImages
    'Candy Ring thrown by a Wendy': NoImages

    'Lemmy': SimpleName<'Lemmy'>
    'Lemmy\'s Wand': NoImages
    'Magic Ball thrown by a Lemmy': NoImages

    'Roy': SimpleName<'Roy'>
    'Roy\'s Wand': NoImages
    '(Roy\'s projectile)': NoImages

    'Morton': SimpleName<'Morton'>
    'Morton\'s Wand': NoImages
    '(Morton\'s Thrown projectile)': NoImages
    '(Morton\'s Ground projectile)': NoImages

    'Ludwig': SimpleName<'Ludwig'>
    'Ludwig\'s Wand': NoImages
    '(Ludwig\'s projectile)': NoImages

    //endregion -------------------- Bosses + projectiles --------------------
    //region -------------------- Passive gizmo / Key / Warp / Other --------------------

    'Bumper': SimpleName<'Marumaru'>

    'Swinging Claw': SimpleName<'BurankoCrane'>

    'Twister': SimpleName<'Tornado'>

    'One-Way Wall': SimpleName<'Hanatari'>

    'Track': SimpleName<'Rail'>
    'Track Block': SimpleName<'OrbitBlock', | 0 | 1>

    'Vine': SimpleName<'TsutaBlock'>
    'Tree': ['BellTree', Name_0<Style<'BellTree', | 'underground' | 'water' | 'desert' | 'snow' | 'woods'>>,]

    'Arrow Sign': SimpleName<'Yajirushi'>

    'Checkpoint Flag': SimpleName<'MiddleFlag'>
    'Goal Pole': NoImages
    'Cards Roulette': NoImages
    'Giant Gate': NoImages

    'Dash Block': SimpleName<'DashBlock'>

    'Snake Block': SimpleName<'SnakeBlock'>
    'Fast Snake Block': SimpleName<'SnakeBlock', 1>

    'Conveyor Belt': SimpleName<'BeltConveyor'>
    'Fast Conveyor Belt': SimpleName<'BeltConveyor', 1>

    'Mushroom Trampoline': SimpleName<'Trampoline', | 0 | 1>
    'ON/OFF Trampoline': SimpleName<'OnOffTrampoline', | 0 | 1>

    'Lift': SimpleName<'Lift'>
    'Flimsy Lift': SimpleName<'Lift', 1>
    'Cloud Lift': this['Lift']

    'Seesaw': SimpleName<'Seesaw'>

    'Lava Lift': SimpleName<'YouganLift'>
    'Fast Lava Lift': SimpleName<'YouganLift', 1>

    'Crate': SimpleName<'WoodBox'>

    'Key': SimpleName<'Key'>
    'Cursed Key': SimpleName<'Key', 1>
    'Phanto': NoImages

    'Trampoline': SimpleName<'JumpStep', | 0 | 1>
    'Hop-Chops': SimpleName<'Hopper'>

    'POW Block': SimpleName<'PowBlock'>
    'Red POW Block': SimpleName<'PowBlock', 1>

    'P Switch': SimpleName<'PSwitch'>

    'Stone': NoImages

    'Warp Door': SimpleName<'Door'>
    'P Warp Door': SimpleName<'Door', 1>
    'Key Door': SimpleName<'Door', 2>

    'Warp Box': SimpleName<'WarpBox'>
    'Warp Box (With Key)': SimpleName<'WarpBox', 1>

    'Wing': SimpleName<'Wing'>
    'Parachute': SimpleName<'parachute'>

    'Toad': NoImages
    'Caged Toadette': NoImages

    'Bubble': NoImages

    //endregion -------------------- Passive gizmo / Key / Warp / Other --------------------

}

export type PossibleRailExtended = `Rail${| 'U' | 'D' | `Branch${`${| 'U' | 'D'}${| 'L' | 'R'}` | `${| 'L' | 'R'}${| 'U' | 'D'}`}` | `Curve${| 'L' | 'R'}${| 'U' | 'D'}`}`
export type PossibleConveyor = `${| 'Belt' | 'Slope'}Conveyor`
type ImageThatIsAGround<NAME extends SimpleImageName_Editor, > = [NAME, Name_0<Style<NAME, | 'underground' | 'water' | 'desert' | 'snow' | 'athletic' | 'woods' | 'hauntedhouse' | 'airship' | 'castle' | Night<| 'water' | 'snow' | 'athletic' | 'airship'>>>,]
type ImageThatHasBlueVariant<NAME extends SimpleImageName_Editor, NUMBER extends | 0 | 1 = 0, > = Name<Style<NAME, | 'underground' | 'hauntedhouse' | 'castle' | Night<| 'plain' | 'water' | 'desert' | 'snow' | 'athletic' | 'woods' | 'airship'>>, NUMBER>
type SimpleName<NAME extends string, NUMBER extends | 0 | 1 | 2 = 0, > = [NAME, Name<NAME, NUMBER>,]
type SimplePowerUpName<NAME extends string, NUMBER extends ImageNumber_PowerUp_Editor = 0, > = [NAME, Name<PowerUp<NAME>, NUMBER>,]
type NoImages = readonly [null, null,]

type PowerUp<NAME extends | SimpleImageName_Editor | string, > = `${NAME}${| '' | VariantEditorImage_PowerUp}`
type Name<NAME extends | SimpleImageName_Editor | string, NUMBER extends VariantEditorImage_Number, > = `${NAME}_0${NUMBER}`
type Name_0<NAME extends | SimpleImageName_Editor | string, > = Name<NAME, 0>
type Name_0_1<NAME extends | SimpleImageName_Editor | string, > = Name<NAME, | 0 | 1>
type Name_0_1_2<NAME extends | SimpleImageName_Editor | string, > = Name<NAME, | 0 | 1 | 2>
type Style<NAME extends | SimpleImageName_Editor | string, STYLE extends VariantEditorImage_GameStyle = VariantEditorImage_GameStyle, > = | NAME | `${NAME}_${STYLE}`


export type SimpleImageName_Editor = NonNullable<ImageNameMap[PossibleEnglishName][0]>
export type SimpleImageName_Editor_GroundOrSlope = ImageNameMap['Ground' | 'Gentle Slope' | 'Steep Slope'][0]
export type SimpleImageName_Editor_WithBlueVariant = ImageNameMap[| 'Buzzy Beetle' | 'Buzzy Shell' | 'Muncher' | 'Chain Chomp' | 'Unchained Chomp'
                                                                  | 'Bill Blaster' | 'Banzai Bill' | 'Cannon' | 'Skewer'][0]

export type ImageName_Editor = NonNullable<ImageNameMap[PossibleEnglishName][1]>

type Night<STYLE extends PossibleGameName, > = `${STYLE}_night`
type VariantEditorImage_GameStyle = PossibleGameName | Night<PossibleGameName>
type VariantEditorImage_Number = | 0 | 1 | 2 | 3
export type VariantEditorImage_PowerUp = 'Uni'

export type ImageNumber_Editor = | 0 | 1 | 2 | 3
export type ImageNumber_PowerUp_Editor = | 0 | 1