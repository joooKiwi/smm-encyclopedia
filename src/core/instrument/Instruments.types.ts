import type {EnumByName as OriginalEnumByName, EnumByNumber as OriginalEnumByNumber, EnumByOrdinal as OriginalEnumByOrdinal, EnumByPossibleString as OriginalEnumByPossibleString, EnumByString as OriginalEnumByString, SimpleEnum as OriginalSimpleEnum} from '../../util/enum/Enum.types';
import type {Instruments as RealEnum}                                                                                                                                                                                                                      from './Instruments';
import {BasePath}                                                                                                                                                                                                                                          from '../../variables';


export type PossibleNonNullableValue = | RealEnum | Ordinals | PossibleStringValue;
export type PossibleStringValue = | Names | PossibleFileName | PossibleEnglishName;
export type PossibleValue = | RealEnum | string | number | null | undefined;

enum Enum {

    SNARE_DRUM,//P-Switch
    STEEL_DRUM,//Player
    BASS_DRUM,//POW Block
    TAIKO,//Thwomp
    GAMELAN,//Buzzy Beetle / Buzzy Shell

    COWBELL,//Yoshi's Egg / Red Yoshi's Egg
    CYMBAL,//Trampoline (regular)
    HI_HAT,//Trampoline (sideway)
    TOM,//Spike Ball
    SYNTHETIC_TOM,//Snowball
    WOOD_BLOCK,//Shoe / Stiletto
    SLEIGH_BELL,//Coin
    SYNTHETIC_BELL,//Icicle
    WIND_CHIMES,//10-Coin / 30-Coin / 50-Coin
    GONG,//Skewer

    MOKUGYO,//Chain Chomp's Stump
    KAZOO,//Falling Fire thrown by a Bowser
    MUSIC_BOX,//Super Star

    MARIMBA,//Green Koopa Troopa
    VIBRAPHONE,//Red Koopa Troopa
    TIMPANI,//Bill Blaster / Bull's-Eye Blaster
    TIMPANI_ROLL,//Ludwig
    TIMBALES,//Cannon / Red Cannon
    TUBULAR_BELL,//Wiggler / Angry Wiggler
    ORGAN,//1-Up Mushroom
    PIPE_ORGAN,//Superball Flower


    GUITAR_LONG,//Hammer Bro
    ELECTRIC_GUITAR,//Bowser
    ACOUSTIC_GUITAR,//Pokey
    BASS,//Sledge Bro
    ELECTRIC_BASS,//Spike
    SYNTHETIC_BASS,//Rotten Mushroom
    SUB_BASS,//Blasta Mechakoopa
    BASS_GLISSANDO,//Roy
    OUD,//Rocky Wrench
    SANTUR,//Monty Mole
    SHAMISEN,//Big Mushroom

    PIANO_1,//Unchained Chomp
    PIANO_2,//Muncher
    PIANO_4TH_A,//Goomba / Galoomba
    REVERSE_PIANO,//Larry
    HONKY_TONK_PIANO,//Goombrat / Goombud
    PIZZICATO_STRING,//Piranha Plant / Jumping Piranha Plant
    STACCATO_STRING,//SMB2 Mushroom / Frog Suit / Power Balloon / Super Acorn
    HARPSICHORD,//Spike Top / Fast Spike Top


    RECORDER,//Fire Flower
    SYNTHESIZER,//Mechakoopa
    SYNTHESIZER_CHORD,//Koopa Clown Car / Junior Clown Car / Fire Koopa Clown Car / Fire Junior Clown Car
    CHORD_CM,//Zappa Mechakoopa


    FLUTE,//Dry Bones / Dry Bones Shell
    SAXOPHONE,//Bowser Jr.
    TROMBONE,//Spiny / Spiny Shell
    HORN,//Boom Boom
    SYNTHETIC_BRASS,//Master Sword
    VIOLIN,//Fire Piranha Plant
    HARP,//Music Block
    ACCORDION_BASS_SOUND,//Shoe Goomba
    ACCORDION_TREBLE_SOUND,//Stiletto Goomba
    ZURNA,//Yoshi / Red Yoshi
    BAGPIPE,//Snow Pokey

    ORCHESTRA_HIT,//Bob-omb / Lit Bob-omb


    DOG_BARK, //Green Naked Koopa
    CAT_MEOW,//Red Naked Koopa
    CHICKEN,//Bomb thrown by a Link
    AH,//Magikoopa
    OK,//Lemmy
    HELLO,//Lemmy
    YEAH,//Magic Ball thrown by a Lemmy

    SQUARE_WAVE,//Super Mushroom
    SOUND_EFFECT_1,//Wendy
    NOISE,//Iggy
    BOMB,//Morton

}

//region -------------------- Number types --------------------

export type Ordinals = typeof Enum[Names]

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type Names = keyof typeof Enum;

//region -------------------- English name --------------------

export type PossibleEnglishName =
    | `${| 'Snare' | 'Steel' | 'Bass'} drum` | 'Taiko' | 'Gamelan'

    | 'Cowbell' | 'Cymbal' | 'Hi-hat' | 'Tom' | 'Synthetic tom'
    | 'Wood block' | `${| 'Sleigh' | 'Synthetic'} bell` | 'Wind chimes' | 'Gong'

    | 'Mokugyo' | 'Kazoo' | 'Music box'

    | 'Marimba' | 'Vibraphone' | `Timpani${| '' | ' roll'}`
    | 'Timbales' | 'Tubular bell' | 'Organ' | 'Pipe organ'

    | 'Guitar (long)' | `${| 'Electric' | 'Acoustic'} guitar`
    | 'Bass' | `${| 'Electric' | 'Synthetic'} bass` | 'Sub bass?' | 'Bass "glissando"'
    | 'Oud' | 'Santur' | 'Shamisen'

    | `Piano ${| 1 | 2 | '(4th A)'}` | `${| 'Reverse' | 'Honky-Tonk'} piano`
    | `"${| 'Pizzicato' | 'Staccato'}" string` | 'Harpsichord'

    | 'Recorder' | `Synthesizer${| '' | ' chord'}` | 'Chord CM?'

    | 'Flute' | 'Saxophone'
    | 'Trombone' | 'Horn' | 'Synthetic brass'
    | 'Violin' | 'Harp'
    | `Accordion (${| 'bass' | 'treble'} sound)`
    | 'Zurna' | 'Bagpipe'

    | 'Orchestra hit'

    | 'Dog\'s bark' | 'Cat\'s meow' | 'Chicken'
    | 'Ah' | 'Ok' | 'Hello' | 'Yeah'

    | 'Square wave' | 'Sound effect 1?'
    | 'Noise' | 'Bomb';

//endregion -------------------- English name --------------------
//region -------------------- Instrument file name --------------------

type ReverbCowbell = `Gamelan${| '' | `_${| `L${| 1 | 5 | 6}` | 'M1_pi' | `S${| 1 | 6}`}`}`;
type SpecificReverbCowbell<T extends ReverbCowbell = ReverbCowbell, > = `INST_${T}`;
type GlissandoBass = `SE7_BassGliss${| 1 | 2}`;
type SpecificGlissandoBass<T extends GlissandoBass = GlissandoBass, > = `INST_${T}`;
type ReversePiano = `SE2_ReversePianoC${| 3 | 4 | 5}`;
type SpecificReversePiano<T extends ReversePiano = ReversePiano, > = `INST_${T}`;
type ChordCM = `chord_C${| 'm' | 'M7'}`;
type SpecificChordCM<T extends ChordCM = ChordCM, > = `INST_${T}`;

export type PossibleFileName =
    | 'block_dog' | `SE_${| 'INST_CAT' | 'intWoodblock'}`
    | `INST_${| '074vlFlute'
              | 'Accordion' | 'Acordion2'
              | 'AcousticGuitar'
              | 'Bagpipe'
              | 'Chicken'
              | ChordCM

              | 'EgitarLong1'
              | 'FCSQ'
              | 'FingeredElectricBass'

              | 'HARP'
              | 'Harpsichord'
              | 'HonkyTonk'
              | 'Horn'

              | 'Marimba' | 'Vibraphone' | `${| '' | 'Pipe'}Organ` | 'TublerBell'
              | `Epiano${| '' | 2}` | 'Piano.a4'
              | 'GONG' | `${| 'Bass' | 'Snare'}Drum` | 'Cymbal' | 'HIHAT'
              | 'handbell' | 'WindChime' | 'Cowbell' | 'Kazoo'
              | ReverbCowbell

              | 'Mokugyo'
              | 'MusicBox'
              | 'Oud'
              | 'PAD' | 'Recorder'
              | `${| 'Real' | 'Synth'}Tom`
              | 'RichMetal'
              | 'Santur'
              | 'Sax'
              | `sc${| 'OrcheHit' | 'SlapBass1' | 'StlDrum' | 'Timpani'}`
              | `SE${| 1 | '2_hello' | '3_ok3' | '4_noise' | '5_Bomb'
                     | '6_Timpaniroll' | '8_yeah'}` | ReversePiano | GlissandoBass
              | 'Shamisen'
              | 'StringPizz.c6' | 'StaccatoStrings'
              | 'SubBass'
              | 'Synlead'
              | `Synth${| 'Bass' | 'Bell' | 'Brass'}`
              | 'taiko'
              | 'Timparess'
              | 'Trombone'
              | 'ViolinLong'
              | 'Zurna'

              | 'AH'

}`;

export type PossibleSoundPath = `|${BasePath}/instrument/${PossibleFileName}.wav`;

export type PossibleSoundPath_Single = Exclude<PossibleFileName,
    | SpecificReverbCowbell | SpecificGlissandoBass | SpecificReversePiano | SpecificChordCM>;
export type PossibleSoundPath_ReverbCowbell = readonly [SpecificReverbCowbell<'Gamelan'>, SpecificReverbCowbell<'Gamelan_L1'>, SpecificReverbCowbell<'Gamelan_L5'>, SpecificReverbCowbell<'Gamelan_L6'>, SpecificReverbCowbell<'Gamelan_M1_pi'>, SpecificReverbCowbell<'Gamelan_S1'>, SpecificReverbCowbell<'Gamelan_S6'>,];
export type PossibleSoundPath_GlissandoBass = readonly [SpecificGlissandoBass<'SE7_BassGliss1'>, SpecificGlissandoBass<'SE7_BassGliss2'>,];
export type PossibleSoundPath_ReversePiano = readonly [SpecificReversePiano<'SE2_ReversePianoC3'>, SpecificReversePiano<'SE2_ReversePianoC4'>, SpecificReversePiano<'SE2_ReversePianoC5'>,];
export type PossibleSoundPath_SpecificChordCM = readonly [SpecificChordCM<'chord_Cm'>, SpecificChordCM<'chord_CM7'>,];
export type PossibleSoundPath_Array = | readonly [PossibleSoundPath_Single]
                                      | PossibleSoundPath_ReverbCowbell
                                      | PossibleSoundPath_GlissandoBass
                                      | PossibleSoundPath_ReversePiano
                                      | PossibleSoundPath_SpecificChordCM;

//endregion -------------------- Instrument file name --------------------


//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEnum<E extends RealEnum = RealEnum, > = OriginalSimpleEnum<Names, E>;

export type EnumByOrdinal<O extends Ordinals, E extends RealEnum = RealEnum, > = OriginalEnumByOrdinal<EnumArray<E>, O, E>;
export type EnumByNumber<O extends number, E extends RealEnum = RealEnum, > = OriginalEnumByNumber<EnumArray<E>, O>;

export type EnumByName<N extends Names, E extends RealEnum = RealEnum, > = OriginalEnumByName<N, E>;
export type EnumByPossibleString<S extends PossibleStringValue, E extends RealEnum = RealEnum, > = OriginalEnumByPossibleString<S, Names, E>;
export type EnumByString<S extends string, E extends RealEnum = RealEnum, > = OriginalEnumByString<S, PossibleStringValue, Names, E>;

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type EnumArray<T extends RealEnum = RealEnum, > = readonly [
    SimpleEnum<T>['SNARE_DRUM'],
    SimpleEnum<T>['STEEL_DRUM'],
    SimpleEnum<T>['BASS_DRUM'],
    SimpleEnum<T>['TAIKO'],

    SimpleEnum<T>['COWBELL'],
    SimpleEnum<T>['GAMELAN'],
    SimpleEnum<T>['CYMBAL'],
    SimpleEnum<T>['HI_HAT'],
    SimpleEnum<T>['TOM'],
    SimpleEnum<T>['SYNTHETIC_TOM'],
    SimpleEnum<T>['WOOD_BLOCK'],
    SimpleEnum<T>['SLEIGH_BELL'],
    SimpleEnum<T>['SYNTHETIC_BELL'],
    SimpleEnum<T>['WIND_CHIMES'],
    SimpleEnum<T>['GONG'],

    SimpleEnum<T>['MOKUGYO'],
    SimpleEnum<T>['KAZOO'],
    SimpleEnum<T>['MUSIC_BOX'],

    SimpleEnum<T>['MARIMBA'],
    SimpleEnum<T>['VIBRAPHONE'],
    SimpleEnum<T>['TIMPANI'],
    SimpleEnum<T>['TIMPANI_ROLL'],
    SimpleEnum<T>['TIMBALES'],
    SimpleEnum<T>['TUBULAR_BELL'],
    SimpleEnum<T>['ORGAN'],
    SimpleEnum<T>['PIPE_ORGAN'],


    SimpleEnum<T>['GUITAR_LONG'],
    SimpleEnum<T>['ELECTRIC_GUITAR'],
    SimpleEnum<T>['ACOUSTIC_GUITAR'],
    SimpleEnum<T>['BASS'],
    SimpleEnum<T>['ELECTRIC_BASS'],
    SimpleEnum<T>['SYNTHETIC_BASS'],
    SimpleEnum<T>['SUB_BASS'],
    SimpleEnum<T>['BASS_GLISSANDO'],
    SimpleEnum<T>['OUD'],
    SimpleEnum<T>['SANTUR'],
    SimpleEnum<T>['SHAMISEN'],


    SimpleEnum<T>['PIANO_1'],
    SimpleEnum<T>['PIANO_2'],
    SimpleEnum<T>['PIANO_4TH_A'],
    SimpleEnum<T>['REVERSE_PIANO'],
    SimpleEnum<T>['HONKY_TONK_PIANO'],
    SimpleEnum<T>['PIZZICATO_STRING'],
    SimpleEnum<T>['STACCATO_STRING'],
    SimpleEnum<T>['HARPSICHORD'],


    SimpleEnum<T>['RECORDER'],
    SimpleEnum<T>['SYNTHESIZER'],
    SimpleEnum<T>['SYNTHESIZER_CHORD'],
    SimpleEnum<T>['CHORD_CM'],

    SimpleEnum<T>['FLUTE'],
    SimpleEnum<T>['SAXOPHONE'],
    SimpleEnum<T>['TROMBONE'],
    SimpleEnum<T>['HORN'],
    SimpleEnum<T>['SYNTHETIC_BRASS'],
    SimpleEnum<T>['VIOLIN'],
    SimpleEnum<T>['ACCORDION_BASS_SOUND'],
    SimpleEnum<T>['ACCORDION_TREBLE_SOUND'],
    SimpleEnum<T>['ZURNA'],
    SimpleEnum<T>['BAGPIPE'],

    SimpleEnum<T>['ORCHESTRA_HIT'],

    SimpleEnum<T>['DOG_BARK'],
    SimpleEnum<T>['CAT_MEOW'],
    SimpleEnum<T>['CHICKEN'],
    SimpleEnum<T>['AH'],
    SimpleEnum<T>['OK'],
    SimpleEnum<T>['HELLO'],
    SimpleEnum<T>['YEAH'],

    SimpleEnum<T>['SQUARE_WAVE'],
    SimpleEnum<T>['SOUND_EFFECT_1'],
    SimpleEnum<T>['NOISE'],
    SimpleEnum<T>['BOMB'],
];

//endregion -------------------- Array types --------------------
