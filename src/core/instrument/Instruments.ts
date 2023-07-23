import type {CollectionHolder}                                  from '@joookiwi/collection'
import type {CompanionEnumSingleton, PossibleEnumerableValueBy} from '@joookiwi/enumerable'
import {CompanionEnum, Enum}                                    from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                                                                                                                                                                                                                     from 'core/ClassWithEnglishName'
import type {Names, Ordinals, PossibleEnglishName, PossibleFileName, PossibleFileName_Array, PossibleFileName_GlissandoBass, PossibleFileName_ReverbCowbell, PossibleFileName_ReversePiano, PossibleFileName_Single, PossibleFileName_SpecificChordCM} from 'core/instrument/Instruments.types'
import type {InstrumentSoundFile}                                                                                                                                                                                                                      from 'core/instrument/file/InstrumentSoundFile'
import type {Instrument}                                                                                                                                                                                                                               from 'core/instrument/Instrument'

import {InstrumentLoader}                          from 'core/instrument/Instrument.loader'
import {InstrumentSoundFileContainer as SoundFile} from 'core/instrument/file/InstrumentSoundFile.container'
import {StringContainer}                           from 'util/StringContainer'
import {getValueByEnglishName}                     from 'util/utilitiesMethods'

/**
 * @recursiveReference<{@link InstrumentLoader}>
 */
export class Instruments
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName> {

    //region -------------------- Enum instances --------------------

    public static readonly SNARE_DRUM =             new Instruments('Snare drum', 'INST_SnareDrum',)
    public static readonly STEEL_DRUM =             new Instruments('Steel drum', 'INST_scStlDrum',)
    public static readonly BASS_DRUM =              new Instruments('Bass drum', 'INST_BassDrum',)
    public static readonly TAIKO =                  new Instruments('Taiko', 'INST_taiko',)
    public static readonly GAMELAN =                new Instruments('Gamelan', 'INST_Gamelan', 'INST_Gamelan_L1', 'INST_Gamelan_L5', 'INST_Gamelan_L6', 'INST_Gamelan_M1_pi', 'INST_Gamelan_S1', 'INST_Gamelan_S6',)

    public static readonly COWBELL =                new Instruments('Cowbell', 'INST_Cowbell',)
    public static readonly CYMBAL =                 new Instruments('Cymbal', 'INST_Cymbal',)
    public static readonly HI_HAT =                 new Instruments('Hi-hat', 'INST_HIHAT',)
    public static readonly TOM =                    new Instruments('Tom', 'INST_RealTom',)
    public static readonly SYNTHETIC_TOM =          new Instruments('Synthetic tom', 'INST_SynthTom',)
    public static readonly WOOD_BLOCK =             new Instruments('Wood block', 'SE_intWoodblock',)
    public static readonly SLEIGH_BELL =            new Instruments('Sleigh bell', 'INST_handbell',)
    public static readonly SYNTHETIC_BELL =         new Instruments('Synthetic bell', 'INST_SynthBell',)
    public static readonly WIND_CHIMES =            new Instruments('Wind chimes', 'INST_WindChime',)
    public static readonly GONG =                   new Instruments('Gong', 'INST_GONG',)

    public static readonly MOKUGYO =                new Instruments('Mokugyo', 'INST_Mokugyo',)
    public static readonly KAZOO =                  new Instruments('Kazoo', 'INST_Kazoo',)
    public static readonly MUSIC_BOX =              new Instruments('Music box', 'INST_MusicBox',)

    public static readonly MARIMBA =                new Instruments('Marimba', 'INST_Marimba',)
    public static readonly VIBRAPHONE =             new Instruments('Vibraphone', 'INST_Vibraphone',)
    public static readonly TIMPANI =                new Instruments('Timpani', 'INST_scTimpani',)
    public static readonly TIMPANI_ROLL =           new Instruments('Timpani roll', 'INST_SE6_Timpaniroll',)
    public static readonly TIMBALES =               new Instruments('Timbales', 'INST_Timparess',)
    public static readonly TUBULAR_BELL =           new Instruments('Tubular bell', 'INST_TublerBell',)
    public static readonly ORGAN =                  new Instruments('Organ', 'INST_Organ',)
    public static readonly PIPE_ORGAN =             new Instruments('Pipe organ', 'INST_PipeOrgan',)


    public static readonly GUITAR_LONG =            new Instruments('Guitar (long)', 'INST_EgitarLong1',)
    public static readonly ELECTRIC_GUITAR =        new Instruments('Electric guitar', 'INST_RichMetal',)
    public static readonly ACOUSTIC_GUITAR =        new Instruments('Acoustic guitar', 'INST_AcousticGuitar',)
    public static readonly BASS =                   new Instruments('Bass', 'INST_scSlapBass1',)
    public static readonly ELECTRIC_BASS =          new Instruments('Electric bass', 'INST_FingeredElectricBass',)
    public static readonly SYNTHETIC_BASS =         new Instruments('Synthetic bass', 'INST_SynthBass',)
    public static readonly SUB_BASS =               new Instruments('Sub bass?', 'INST_SubBass',)
    public static readonly BASS_GLISSANDO =         new Instruments('Bass "glissando"', 'INST_SE7_BassGliss1', 'INST_SE7_BassGliss2',)
    public static readonly OUD =                    new Instruments('Oud', 'INST_Oud',)
    public static readonly SANTUR =                 new Instruments('Santur', 'INST_Santur',)
    public static readonly SHAMISEN =               new Instruments('Shamisen', 'INST_Shamisen',)

    public static readonly PIANO_1 =                new Instruments('Piano 1', 'INST_Epiano',)
    public static readonly PIANO_2 =                new Instruments('Piano 2', 'INST_Epiano2',)
    public static readonly PIANO_4TH_A =            new Instruments('Piano (4th A)', 'INST_Piano.a4',)
    public static readonly REVERSE_PIANO =          new Instruments('Reverse piano', 'INST_SE2_ReversePianoC3', 'INST_SE2_ReversePianoC4', 'INST_SE2_ReversePianoC5',)
    public static readonly HONKY_TONK_PIANO =       new Instruments('Honky-Tonk piano', 'INST_HonkyTonk',)
    public static readonly PIZZICATO_STRING =       new Instruments('"Pizzicato" string', 'INST_StringPizz.c6',)
    public static readonly STACCATO_STRING =        new Instruments('"Staccato" string', 'INST_StaccatoStrings',)
    public static readonly HARPSICHORD =            new Instruments('Harpsichord', 'INST_Harpsichord',)


    public static readonly RECORDER =               new Instruments('Recorder', 'INST_Recorder',)
    public static readonly SYNTHESIZER =            new Instruments('Synthesizer', 'INST_Synlead',)
    public static readonly SYNTHESIZER_CHORD =      new Instruments('Synthesizer chord', 'INST_PAD',)
    public static readonly CHORD_CM =               new Instruments('Chord CM?', 'INST_chord_Cm', 'INST_chord_CM7',)


    public static readonly FLUTE =                  new Instruments('Flute', 'INST_074vlFlute',)
    public static readonly SAXOPHONE =              new Instruments('Saxophone', 'INST_Sax',)
    public static readonly TROMBONE =               new Instruments('Trombone', 'INST_Trombone',)
    public static readonly HORN =                   new Instruments('Horn', 'INST_Horn',)
    public static readonly SYNTHETIC_BRASS =        new Instruments('Synthetic brass', 'INST_SynthBrass',)
    public static readonly VIOLIN =                 new Instruments('Violin', 'INST_ViolinLong',)
    public static readonly HARP =                   new Instruments('Harp', 'INST_HARP',)
    public static readonly ACCORDION_BASS_SOUND =   new Instruments('Accordion (bass sound)', 'INST_Accordion',)
    public static readonly ACCORDION_TREBLE_SOUND = new Instruments('Accordion (treble sound)', 'INST_Acordion2',)
    public static readonly ZURNA =                  new Instruments('Zurna', 'INST_Zurna',)
    public static readonly BAGPIPE =                new Instruments('Bagpipe', 'INST_Bagpipe',)

    public static readonly ORCHESTRA_HIT =          new Instruments('Orchestra hit', 'INST_scOrcheHit',)


    public static readonly DOG_BARK =               new Instruments('Dog\'s bark', 'block_dog',)
    public static readonly CAT_MEOW =               new Instruments('Cat\'s meow', 'SE_INST_CAT',)
    public static readonly CHICKEN =                new Instruments('Chicken', 'INST_Chicken',)
    public static readonly AH =                     new Instruments('Ah', 'INST_AH',)
    public static readonly OK =                     new Instruments('Ok', 'INST_SE3_ok3',)
    public static readonly HELLO =                  new Instruments('Hello', 'INST_SE2_hello',)
    public static readonly YEAH =                   new Instruments('Yeah', 'INST_SE8_yeah',)

    public static readonly SQUARE_WAVE =            new Instruments('Square wave', 'INST_FCSQ',)
    public static readonly SOUND_EFFECT_1 =         new Instruments('Sound effect 1?', 'INST_SE1',)
    public static readonly NOISE =                  new Instruments('Noise', 'INST_SE4_noise',)
    public static readonly BOMB =                   new Instruments('Bomb', 'INST_SE5_Bomb',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumSingleton<Instruments, typeof Instruments> = class CompanionEnum_Instruments
        extends CompanionEnum<Instruments, typeof Instruments> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_Instruments

        private constructor() {
            super(Instruments,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_Instruments()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleEnglishName, Instrument>

    #reference?: Instrument
    readonly #englishName
    readonly #fileNames
    #sounds?: readonly InstrumentSoundFile[]

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(englishName: PossibleEnglishName, fileName: PossibleFileName_Single,)
    private constructor(englishName: PossibleEnglishName, ...reverbCowbell: PossibleFileName_ReverbCowbell)
    private constructor(englishName: PossibleEnglishName, ...glissandoBass: PossibleFileName_GlissandoBass)
    private constructor(englishName: PossibleEnglishName, ...reversePiano: PossibleFileName_ReversePiano)
    private constructor(englishName: PossibleEnglishName, ...chordCM: PossibleFileName_SpecificChordCM)
    private constructor(englishName: PossibleEnglishName, ...fileNames: PossibleFileName_Array) {
        super()
        this.#englishName = new StringContainer(englishName)
        this.#fileNames = fileNames
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public static get REFERENCE_MAP(): ReadonlyMap<PossibleEnglishName, Instrument> {
        return this.#REFERENCE_MAP ??= InstrumentLoader.get.load()
    }

    /**
     * {@inheritDoc}
     * @semiAsynchronously
     */
    public get reference(): Instrument {
        return this.#reference ??= Instruments.REFERENCE_MAP.get(this.englishName)!
    }


    public get englishName(): PossibleEnglishName {
        return this.#englishName.get
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml
    }

    public get fileNames(): readonly PossibleFileName[] {
        return this.#fileNames
    }

    public get sounds(): readonly InstrumentSoundFile[] {
        return this.#sounds ??= this.fileNames.map(fileName => new SoundFile(fileName,))
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public static getValueByName(value: Nullable<| Instruments | string>,): Instruments {
        return getValueByEnglishName(value, this,)
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    public static getValue(value: PossibleEnumerableValueBy<Instruments>,): Instruments {
        return Instruments.CompanionEnum.get.getValue(value,)
    }

    public static get values(): CollectionHolder<Instruments> {
        return Instruments.CompanionEnum.get.values
    }

    public static* [Symbol.iterator](): IterableIterator<Instruments> {
        yield* Instruments.CompanionEnum.get
    }

    //endregion -------------------- Enum methods --------------------

}
