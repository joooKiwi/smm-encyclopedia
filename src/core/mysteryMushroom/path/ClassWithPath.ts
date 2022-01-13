export interface ClassWithPath {

}

//region -------------------- Image path --------------------

export type PossiblePath =
    | '1 - Yamamura'
    | '2 - Mary O'
    | '3 - Undodog'

    | '4 - Mr. Game & Watch'

    | '5 - PAC-MAN'

    | '6 - Mario'
    | '7 - Peach'
    | '8 - Daisy'
    | '9 - Rosalina'
    | '10 - Luigi'
    | '11 - Professor E. Gadd'
    | '12 - Toad'
    | '13 - Toadette'
    | '14 - Captain Toad'
    | '15 - Yoshi'
    | '16 - Birdo'
    | '17 - Wario'
    | '18 - Ashley'
    | '19 - Waluigi'
    | '20 - Bowser'
    | '21 - Bowser Jr'
    | '22 - Goomba'
    | '23 - Shy Guy'
    | '24 - Nabbit'
    | '25 - Builder Mario'
    | '26 - Mario (Silver)'
    | '27 - Mario (Gold)'
    | '28 - Dr. Mario'
    | '29 - Frog Mario'
    | '30 - Statue Mario'
    | '31 - Mario Trio'
    | '32 - Kart Mario'
    | '33 - Cat Mario'
    | '34 - Cat Peach'
    | '35 - Sky Pop'
    | '36 - Baby Mario'
    | '37 - Question Mark Block'
    | '38 - Trampoline'
    | '39 - Mario (MB)'
    | '40 - Sidestepper'
    | '41 - Shellcreeper'
    | '42 - Fighter Fly'

    | '43 - Green Yarn Yoshi'
    | '44 - Pink Yarn Yoshi'
    | '45 - Light-Blue Yarn Yoshi'
    | '46 - Mega Yarn Yoshi'

    | '47 - Donkey Kong'
    | '48 - Donkey Kong Jr'
    | '49 - Diddy Kong'

    | '50 - Little Mac'

    | '51 - Duck Hunt'

    | '52 - Bubbles'

    | '53 - Bike'

    | '54 - Balloon Fighter'

    | '55 - Popo & Nana'

    | '56 - Foreman Spike'

    | '57 - Link'
    | '58 - Zelda'
    | '59 - Sheik'
    | '60 - Toon Link'
    | '61 - Tetra'
    | '62 - Tingle'
    | '63 - Ganondorf'
    | '64 - Wolf Link'
    | '65 - Totem Link'

    | '66 - Samus'
    | '67 - Zero Suit Samus'

    | '68 - Volleyball Player'

    | '69 - Pit'
    | '70 - Palutena'
    | '71 - Dark Pit'

    | '72 - Donbe'
    | '73 - Hikari'

    | '74 - Mega Man'

    | '75 - Ayumi Tachibana'

    | '76 - Marth'
    | '77 - Ike'
    | '78 - Lucina'
    | '79 - Robin'

    | '80 - Captain Falcon'

    | '81 - Sonic'

    | '82 - Kirby'
    | '83 - King Dedede'
    | '84 - Meta Knight'

    | '85 - Fox McCloud'
    | '86 - Falco Lombardi'
    | '87 - Slippy Toad'
    | '88 - Peppy Hare'
    | '89 - Arwing'

    | '90 - Ness'
    | '91 - Lucas'
    | '92 - Master Belch'
    | '93 - Mr. Saturn'

    | '94 - Bulbasaur'
    | '95 - Charmander'
    | '96 - Charizard'
    | '97 - Squirtle'
    | '98 - Pikachu'
    | '99 - Jigglypuff'
    | '100 - Mewtwo'
    | '101 - Lucario'
    | '102 - Greninja'

    | '103 - Villager'
    | '104 - Tom Nook'
    | '105 - K.K. Slider'
    | '106 - Resetti'
    | '107 - Rover'
    | '108 - Timmy & Tommy'
    | '109 - Blathers'
    | '110 - Mabel'
    | '111 - Kapp\'n'
    | '112 - Celeste'
    | '113 - Kicks'
    | '114 - Isabelle (Summer Outfit)'
    | '115 - Isabelle (Winter Outfit)'
    | '116 - Digby'
    | '117 - Cyrus'
    | '118 - Reese'
    | '119 - Lottie'

    | '120 - Captain Olimar'
    | '121 - Pikmin'

    | '122 - Chibi-Robo'

    | '123 - Wii Balance Board'
    | '124 - Wii Fit Trainer'

    | '125 - Shulk'

    | '126 - Felyne'

    | '127 - Yu Ayasaki'

    | '128 - Dr. Kawashima'

    | '129 - Dr. Lobe'

    | '130 - Barbara the Bat'

    | '131 - Starfy'

    | '132 - Mallo'

    | '133 - Nikki'
    | '134 - Iris Archwell'
    | '135 - Arcade bunny'

    | '136 - Chitoge Kirisaki'

    | '137 - Inkling Squid'
    | '138 - Inkling Boy'
    | '139 - Inkling Girl'
    | '140 - Callie'
    | '141 - Marie'

    | '142 - R.O.B'
    | '143 - Diskun'
    | '144 - Mahjong Tile'

    | '145 - Kitty White'
    | '146 - Melody'
    | '147 - Shaun the Sheep'

    | '148 - Arino KACHO'
    | '149 - SUPER MARIO KUN'
    | '150 - Necky'
    | '151 - GLA'
    | '152 - BABYMETAL';

//endregion -------------------- Image path --------------------
//region -------------------- Specific image / sound files --------------------

export type PossibleImages = | WaitingImage
                             | TauntImage
                             | DownImage
                             | WalkImage
                             | RunningImage
                             | SwimmingImage
                             | JumpImage | FallingAfterJumpImage
                             | TurningImage
                             | ClimbingImage
                             | GoalPoleImage;

export type PossibleSounds = | PowerUpCollectedSound
                             | TauntSound
                             | JumpSound
                             | OnGroundAfterJumpSound
                             | TurningSound
                             | GoalPoleSound
                             | LostALifeSound;

export type PossibleImagesOrSounds = | PossibleImages | PossibleSounds;

export type PowerUpCollectedSound = `powerup.wav`;

export type WaitingImage = 'wait.0.png';

export type TauntImage = 'appeal.0.png';
export type TauntSound = 'appeal.wav';

export type DownImage = 'stoop.0.png';

export type WalkImageNumber = | 0 | 1 | 2;
export type WalkImage<N extends WalkImageNumber = WalkImageNumber, > = `walk.${N}.png`;

export type RunningImageNumber = | 0 | 1 | 2;
export type RunningImage<N extends RunningImageNumber = RunningImageNumber, > = `/b_dash.${N}.png`;

export type SwimmingImageNumber = | 0 | 1 | 2 | 3 | 4 | 5;
export type SwimmingImage<N extends SwimmingImageNumber = SwimmingImageNumber, > = `swim.${N}.png`;

export type JumpImageNumber = | 0 | 1 | 2;
export type JumpImage<N extends JumpImageNumber = JumpImageNumber> = `jump.${N}.png`;
export type JumpSoundNumber = | '' | 2;
export type JumpSound<N extends JumpSoundNumber = JumpSoundNumber, > = `jump${N}.wav`;

export type FallingAfterJumpImage = 'jump_fall.0.png';
export type OnGroundAfterJumpSound = 'ground.wav';

export type TurningImage = 'turn.0.png';
export type TurningSound = 'slip.wav';

export type ClimbingImageNumber = | 0 | 1;
export type ClimbingImage<N extends ClimbingImageNumber = ClimbingImageNumber, > = `climb.${N}.png`;

export type GoalPoleImageNumber = | 0 | 1;
export type GoalPoleImage<N extends GoalPoleImageNumber = GoalPoleImageNumber, > = `pole.${N}.png`;
export type GoalPoleSound = 'goal.wav';

export type LostALifeSound = 'down.wav';

//endregion -------------------- Specific image / sound files --------------------
//region -------------------- Path (starting / ending) --------------------

export type BasicStartingPath = '/mystery mushroom/';
export type JapanesePath = '/Japanese';
export type LeftVariationPath = '/Left variation';
export type UnderwaterVariationPath = '/Underwater variation';

//endregion -------------------- Path (starting / ending) --------------------
//region -------------------- Possible paths --------------------

export type PossibleBasicPath<T extends PossiblePath = PossiblePath, > = `${BasicStartingPath}${T}`;
export type PossibleJapaneseImagePath<T extends PossiblePath = PossiblePath, > = `${BasicStartingPath}${T}${JapanesePath}`;
export type PossibleLeftVariationImagePath<T extends PossiblePath = PossiblePath, > = `${BasicStartingPath}${T}${LeftVariationPath}`;
export type PossibleUnderwaterVariationImagePath<T extends PossiblePath = PossiblePath, > = `${BasicStartingPath}${T}${UnderwaterVariationPath}`;

//endregion -------------------- Possible paths --------------------
//region -------------------- Possible paths (array) --------------------

export type PossiblePaths_Array<T extends PossiblePath = PossiblePath, > =
    | readonly []
    | readonly [PossibleBasicPath<T>,]
    | readonly [PossibleBasicPath<T>, PossibleJapaneseImagePath<T>,]
    | readonly [PossibleBasicPath<T>, PossibleLeftVariationImagePath<T>,]
    | readonly [PossibleBasicPath<T>, PossibleUnderwaterVariationImagePath<T>,];

//endregion -------------------- Possible paths (array) --------------------
