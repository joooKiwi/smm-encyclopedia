import type {EmptyString} from '@joookiwi/type'

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

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

//region -------------------- English name --------------------

export type PossibleEnglishName =
    | `${| 'Snare' | 'Steel' | 'Bass'} drum` | 'Taiko' | 'Gamelan'

    | 'Cowbell' | 'Cymbal' | 'Hi-hat' | 'Tom' | 'Synthetic tom'
    | 'Wood block' | `${| 'Sleigh' | 'Synthetic'} bell` | 'Wind chimes' | 'Gong'

    | 'Mokugyo' | 'Kazoo' | 'Music box'

    | 'Marimba' | 'Vibraphone' | `Timpani${| EmptyString | ' roll'}`
    | 'Timbales' | 'Tubular bell' | 'Organ' | 'Pipe organ'

    | 'Guitar (long)' | `${| 'Electric' | 'Acoustic'} guitar`
    | 'Bass' | `${| 'Electric' | 'Synthetic'} bass` | '“Sub bass” frequency' | 'Bass “glissando”'
    | 'Oud' | 'Santur' | 'Shamisen'

    | `Piano ${| 1 | 2 | '(4th A)'}` | `${| 'Reverse' | 'Honky-Tonk'} piano`
    | `“${| 'Pizzicato' | 'Staccato'}” string` | 'Harpsichord'

    | 'Recorder' | `Synthesizer${| EmptyString | ' chord'}` | 'C minor chord'

    | 'Flute' | 'Saxophone'
    | 'Trombone' | 'Horn' | 'Synthetic brass'
    | 'Violin' | 'Harp'
    | `Accordion (${| 'bass' | 'treble'} sound)`
    | 'Zurna' | 'Bagpipe'

    | 'Orchestra hit'

    | 'Dog’s bark' | 'Cat’s meow' | 'Chicken'
    | 'Ah' | 'Ok' | 'Hello' | 'Yeah'

    | 'Square wave' | 'Sound effect 1?'
    | 'Noise' | 'Bomb'

//endregion -------------------- English name --------------------
//region -------------------- Instrument file name --------------------

type ReverbCowbell = `Gamelan${| EmptyString | `_${| `L${| 1 | 5 | 6}` | 'M1_pi' | `S${| 1 | 6}`}`}`
type SpecificReverbCowbell<T extends ReverbCowbell = ReverbCowbell, > = `INST_${T}`
type GlissandoBass = `SE7_BassGliss${| 1 | 2}`
type SpecificGlissandoBass<T extends GlissandoBass = GlissandoBass, > = `INST_${T}`
type ReversePiano = `SE2_ReversePianoC${| 3 | 4 | 5}`
type SpecificReversePiano<T extends ReversePiano = ReversePiano, > = `INST_${T}`
type ChordCM = `chord_C${| 'm' | 'M7'}`
type SpecificChordCM<T extends ChordCM = ChordCM, > = `INST_${T}`

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

              | 'Marimba' | 'Vibraphone' | `${| EmptyString | 'Pipe'}Organ` | 'TublerBell'
              | `Epiano${| EmptyString | 2}` | 'Piano.a4'
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
}`

export type PossibleFileName_Single = Exclude<PossibleFileName,
    | SpecificReverbCowbell | SpecificGlissandoBass | SpecificReversePiano | SpecificChordCM>
export type PossibleFileName_ReverbCowbell = readonly [SpecificReverbCowbell<'Gamelan'>, SpecificReverbCowbell<'Gamelan_L1'>, SpecificReverbCowbell<'Gamelan_L5'>, SpecificReverbCowbell<'Gamelan_L6'>, SpecificReverbCowbell<'Gamelan_M1_pi'>, SpecificReverbCowbell<'Gamelan_S1'>, SpecificReverbCowbell<'Gamelan_S6'>,]
export type PossibleFileName_GlissandoBass = readonly [SpecificGlissandoBass<'SE7_BassGliss1'>, SpecificGlissandoBass<'SE7_BassGliss2'>,]
export type PossibleFileName_ReversePiano = readonly [SpecificReversePiano<'SE2_ReversePianoC3'>, SpecificReversePiano<'SE2_ReversePianoC4'>, SpecificReversePiano<'SE2_ReversePianoC5'>,]
export type PossibleFileName_SpecificChordCM = readonly [SpecificChordCM<'chord_Cm'>, SpecificChordCM<'chord_CM7'>,]
export type PossibleFileName_Array = | readonly [PossibleFileName_Single]
                                     | PossibleFileName_ReverbCowbell
                                     | PossibleFileName_GlissandoBass
                                     | PossibleFileName_ReversePiano
                                     | PossibleFileName_SpecificChordCM

//endregion -------------------- Instrument file name --------------------
