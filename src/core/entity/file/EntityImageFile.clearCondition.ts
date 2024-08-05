import type {PossibleAcronym_InFile as PossibleAcronym_InFile_GameStyle} from 'core/gameStyle/GameStyles.types'
import type {ImageFile}                                                  from 'util/file/image/ImageFile'

export type ClearConditionImageFile = ImageFile<`entity/clear condition/`, `${PossibleAcronym_InFile_GameStyle}_Lyt_M_${ImageName_ClearCondition}`, 'tiff'>


/** A simple map type made to associate each {@link ClearConditionImageFile} name to a specific {@link Entities} */
interface ImageNameMap {

    //region -------------------- Block / Coin --------------------

    'Coin': Name<'Coin'>
    '10-Coin': Name<'10Coin'>
    '30-Coin': Name<'10Coin', 1>
    '50-Coin': Name<'10Coin', 2>

    //endregion -------------------- Block / Coin --------------------
    //region -------------------- Power-up / Yoshi / Shoe + projectile --------------------

    'Super Mushroom': Name<'SuperKinoko'>

    'Fire Flower': Name<'FireFlower'>

    'Superball Flower': Name<'FireFlower', 1>

    'Master Sword': Name<'SuperKinoko', 1>

    'Big Mushroom': Name<'DekaKinoko'>

    'SMB2 Mushroom': Name<'KinokoUSA'>

    'Super Leaf': Name<'SuperKonoha'>

    'Frog Suit': Name<'FrogSuit'>

    'Cape Feather': Name<'MantleWing'>

    'Power Balloon': Name<'PowerBalloon'>

    'Propeller Mushroom': Name<'PropellerKinoko'>

    'Super Acorn': Name<'SuperDonguri'>

    'Super Bell': Name<'SuperBell'>

    'Super Hammer': Name<'SuperHammer'>

    'Boomerang Flower': Name<'BoomerangFlower'>

    'Cannon Box': Name<'BoxKiller'>

    'Propeller Box': Name<'BoxPropeller'>

    'Goomba Mask': Name<'BoxKuribo'>

    'Bullet Bill Mask': Name<'BoxKillerPlayer'>

    'Red POW Box': Name<'BoxPow'>

    'Super Star': Name<'SuperStar'>

    '1-Up Mushroom': Name<'1upKinoko'>

    'Shoe': Name<'KutsuKuribo'>
    'Yoshi\'s Egg': Name<'YosshiEgg'>

    //endregion -------------------- Power-up / Yoshi / Shoe + projectile --------------------
    //region -------------------- General enemy --------------------

    'Goomba': Name<'Kuribo'>
    'Galoomba': this['Goomba']
    'Goombrat': Name<'Kuribo', 1>
    'Goombud': this['Goombrat']

    'Green Koopa Troopa': Name<'Nokonoko'>
    'Green Koopa Shell': Name<'NokonokoShell'>

    'Dry Bones': Name<'Karon'>
    'Dry Bones Shell': Name<'Karon', 1>

    'Buzzy Beetle': Name<'Met'>
    'Buzzy Shell': Name<'Met', 1>

    'Spiny': Name<'Togezo'>
    'Spiny Shell': Name<'Togezo', 1>

    'Spike Top': Name<'TogeMet'>

    'Skipsqueak': Name<'Pyonchu'>

    'Ant Trooper': Name<'Arihei'>

    'Stingby': Name<'Hacchin'>

    'Cheep Cheep': Name<'Pukupuku'>
    'Blurps': Name<'Pukupuku', 1>
    'Deep Cheep': this['Blurps']
    'Fish Bone': Name<'FishBone'>

    'Blooper': Name<'Gesso'>

    'Porcupuffer': Name<'Fugumannen'>

    'Wiggler': Name<'Hanachan'>

    'Piranha Plant': Name<'Pakkun'>
    'Jumping Piranha Plant': Name<'Pakkun'>
    'Fire Piranha Plant': Name<'Pakkun', 1>
    'Muncher': Name<'BlackPakkun'>
    'Piranha Creeper': Name<'PackunPipe'>

    'Unchained Chomp': Name<'Wanwan'>

    'Spike': Name<'Gabon'>

    'Lakitu': Name<'Jugem'>
    'Lakitu\'s Cloud': Name<'Jugem', 1>

    'Boo': Name<'Teresa'>
    'Boo Buddies': Name<'Teresa', 1>
    'Peepa': this['Boo Buddies']

    'Bob-omb': Name<'Bombhei'>

    'Pokey': Name<'Sambo'>

    'Thwomp': Name<'Dossun'>

    'Monty Mole': Name<'ChoroPoo'>
    'Rocky Wrench': Name<'Poo'>

    'Magikoopa': Name<'Kameck'>

    'Hammer Bro': Name<'Bros'>
    'Sledge Bro': Name<'MegaBros'>

    'Lava Bubble': Name<'Bubble'>

    'Mechakoopa': Name<'KoopaMecha'>

    'Charvaargh': Name<'MagmaFish'>

    'Bully': Name<'Donketsu'>

    //endregion -------------------- General enemy --------------------
    //region -------------------- Dangerous gizmo + enemy-related gizmo + other enemy --------------------

    'Bullet Bill': Name<'Killer'>

    'Banzai Bill': Name<'MagnumKiller'>

    'Koopa Clown Car': Name<'KoopaClown'>
    'Junior Clown Car': this['Koopa Clown Car']

    'Koopa Troopa Car': Name<'KoopaCar'>

    'Angry Sun': Name<'SunMoon'>

    //endregion -------------------- Dangerous gizmo + enemy-related gizmo + other enemy --------------------
    //region -------------------- Boss + projectile --------------------

    'Bowser': Name<'Koopa'>
    'Meowser': this['Bowser']

    'Bowser Jr.': Name<'KoopaJr'>

    'Boom Boom': Name<'Bunbun'>
    'Pom Pom': Name<'Bunbun', 1>

    'Larry': Name<'Larry'>

    'Iggy': Name<'Iggy'>

    'Wendy': Name<'Wendy'>

    'Lemmy': Name<'Lemmy'>

    'Roy': Name<'Roy'>

    'Morton': Name<'Morton'>

    'Ludwig': Name<'Ludwig'>

    //endregion -------------------- Boss + projectile --------------------
    //region -------------------- Passive gizmo / Key / Warp / Other --------------------

    'Swinging Claw': Name<'BurankoCrane'>

    'Tree': Name<'BellTree'>

    'Crate': Name<'WoodBox'>

    'Trampoline': Name<'JumpStep'>

    'POW Block': Name<'PowBlock'>
    'Red POW Block': Name<'PowBlock', 1>

    'P Switch': Name<'PSwitch'>

    'Stone': Name<'Stone'>

    //endregion -------------------- Passive gizmo / Key / Warp / Other --------------------

}

type Name<NAME extends string, NUMBER extends ImageNumber = 0, > = `${NAME}_0${NUMBER}`

type ImageNumber = | 0 | 1 | 2
export type ImageName_ClearCondition = ImageNameMap[keyof ImageNameMap]
