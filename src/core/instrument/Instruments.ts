import type {CollectionHolder} from '@joookiwi/collection'
import type {Array}            from '@joookiwi/type'
import {Enum}                  from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                                                                                                                                                                                                                     from 'core/ClassWithEnglishName'
import type {Names, Ordinals, PossibleEnglishName, PossibleFileName, PossibleFileName_Array, PossibleFileName_GlissandoBass, PossibleFileName_ReverbCowbell, PossibleFileName_ReversePiano, PossibleFileName_Single, PossibleFileName_SpecificChordCM} from 'core/instrument/Instruments.types'
import type {InstrumentSoundFile}                                                                                                                                                                                                                      from 'core/instrument/file/InstrumentSoundFile'
import type {Instrument}                                                                                                                                                                                                                               from 'core/instrument/Instrument'
import type {CompanionEnumByNameSingleton}                                                                                                                                                                                                             from 'util/enumerable/Singleton.types'

import {instrumentSound}                from 'core/instrument/file/fileCreator'
import {Import}                         from 'util/DynamicImporter'
import {StringContainer}                from 'util/StringContainer'
import {ArrayAsCollection}              from 'util/collection/ArrayAsCollection'
import {CompanionEnumByEnglishNameOnly} from 'util/enumerable/companion/CompanionEnumByEnglishNameOnly'

export class Instruments
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName> {

    //region -------------------- Enum instances --------------------

    public static readonly SNARE_DRUM =             new Instruments('Snare drum',               'INST_SnareDrum',)
    public static readonly STEEL_DRUM =             new Instruments('Steel drum',               'INST_scStlDrum',)
    public static readonly BASS_DRUM =              new Instruments('Bass drum',                'INST_BassDrum',)
    public static readonly TAIKO =                  new Instruments('Taiko',                    'INST_taiko',)
    public static readonly GAMELAN =                new Instruments('Gamelan',                  'INST_Gamelan', 'INST_Gamelan_L1', 'INST_Gamelan_L5', 'INST_Gamelan_L6', 'INST_Gamelan_M1_pi', 'INST_Gamelan_S1', 'INST_Gamelan_S6',)

    public static readonly COWBELL =                new Instruments('Cowbell',                  'INST_Cowbell',)
    public static readonly CYMBAL =                 new Instruments('Cymbal',                   'INST_Cymbal',)
    public static readonly HI_HAT =                 new Instruments('Hi-hat',                   'INST_HIHAT',)
    public static readonly TOM =                    new Instruments('Tom',                      'INST_RealTom',)
    public static readonly SYNTHETIC_TOM =          new Instruments('Synthetic tom',            'INST_SynthTom',)
    public static readonly WOOD_BLOCK =             new Instruments('Wood block',               'SE_intWoodblock',)
    public static readonly SLEIGH_BELL =            new Instruments('Sleigh bell',              'INST_handbell',)
    public static readonly SYNTHETIC_BELL =         new Instruments('Synthetic bell',           'INST_SynthBell',)
    public static readonly WIND_CHIMES =            new Instruments('Wind chimes',              'INST_WindChime',)
    public static readonly GONG =                   new Instruments('Gong',                     'INST_GONG',)

    public static readonly MOKUGYO =                new Instruments('Mokugyo',                  'INST_Mokugyo',)
    public static readonly KAZOO =                  new Instruments('Kazoo',                    'INST_Kazoo',)
    public static readonly MUSIC_BOX =              new Instruments('Music box',                'INST_MusicBox',)

    public static readonly MARIMBA =                new Instruments('Marimba',                  'INST_Marimba',)
    public static readonly VIBRAPHONE =             new Instruments('Vibraphone',               'INST_Vibraphone',)
    public static readonly TIMPANI =                new Instruments('Timpani',                  'INST_scTimpani',)
    public static readonly TIMPANI_ROLL =           new Instruments('Timpani roll',             'INST_SE6_Timpaniroll',)
    public static readonly TIMBALES =               new Instruments('Timbales',                 'INST_Timparess',)
    public static readonly TUBULAR_BELL =           new Instruments('Tubular bell',             'INST_TublerBell',)
    public static readonly ORGAN =                  new Instruments('Organ',                    'INST_Organ',)
    public static readonly PIPE_ORGAN =             new Instruments('Pipe organ',               'INST_PipeOrgan',)


    public static readonly GUITAR_LONG =            new Instruments('Guitar (long)',            'INST_EgitarLong1',)
    public static readonly ELECTRIC_GUITAR =        new Instruments('Electric guitar',          'INST_RichMetal',)
    public static readonly ACOUSTIC_GUITAR =        new Instruments('Acoustic guitar',          'INST_AcousticGuitar',)
    public static readonly BASS =                   new Instruments('Bass',                     'INST_scSlapBass1',)
    public static readonly ELECTRIC_BASS =          new Instruments('Electric bass',            'INST_FingeredElectricBass',)
    public static readonly SYNTHETIC_BASS =         new Instruments('Synthetic bass',           'INST_SynthBass',)
    public static readonly SUB_BASS =               new Instruments('“Sub bass” frequency',     'INST_SubBass',)
    public static readonly BASS_GLISSANDO =         new Instruments('Bass “glissando”',         'INST_SE7_BassGliss1', 'INST_SE7_BassGliss2',)
    public static readonly OUD =                    new Instruments('Oud',                      'INST_Oud',)
    public static readonly SANTUR =                 new Instruments('Santur',                   'INST_Santur',)
    public static readonly SHAMISEN =               new Instruments('Shamisen',                 'INST_Shamisen',)

    public static readonly PIANO_1 =                new Instruments('Piano 1',                  'INST_Epiano',)
    public static readonly PIANO_2 =                new Instruments('Piano 2',                  'INST_Epiano2',)
    public static readonly PIANO_4TH_A =            new Instruments('Piano (4th A)',            'INST_Piano.a4',)
    public static readonly REVERSE_PIANO =          new Instruments('Reverse piano',            'INST_SE2_ReversePianoC3', 'INST_SE2_ReversePianoC4', 'INST_SE2_ReversePianoC5',)
    public static readonly HONKY_TONK_PIANO =       new Instruments('Honky-Tonk piano',         'INST_HonkyTonk',)
    public static readonly PIZZICATO_STRING =       new Instruments('“Pizzicato” string',       'INST_StringPizz.c6',)
    public static readonly STACCATO_STRING =        new Instruments('“Staccato” string',        'INST_StaccatoStrings',)
    public static readonly HARPSICHORD =            new Instruments('Harpsichord',              'INST_Harpsichord',)


    public static readonly RECORDER =               new Instruments('Recorder',                 'INST_Recorder',)
    public static readonly SYNTHESIZER =            new Instruments('Synthesizer',              'INST_Synlead',)
    public static readonly SYNTHESIZER_CHORD =      new Instruments('Synthesizer chord',        'INST_PAD',)
    public static readonly CHORD_CM =               new Instruments('C minor chord',            'INST_chord_Cm', 'INST_chord_CM7',)


    public static readonly FLUTE =                  new Instruments('Flute',                    'INST_074vlFlute',)
    public static readonly SAXOPHONE =              new Instruments('Saxophone',                'INST_Sax',)
    public static readonly TROMBONE =               new Instruments('Trombone',                 'INST_Trombone',)
    public static readonly HORN =                   new Instruments('Horn',                     'INST_Horn',)
    public static readonly SYNTHETIC_BRASS =        new Instruments('Synthetic brass',          'INST_SynthBrass',)
    public static readonly VIOLIN =                 new Instruments('Violin',                   'INST_ViolinLong',)
    public static readonly HARP =                   new Instruments('Harp',                     'INST_HARP',)
    public static readonly ACCORDION_BASS_SOUND =   new Instruments('Accordion (bass sound)',   'INST_Accordion',)
    public static readonly ACCORDION_TREBLE_SOUND = new Instruments('Accordion (treble sound)', 'INST_Acordion2',)
    public static readonly ZURNA =                  new Instruments('Zurna',                    'INST_Zurna',)
    public static readonly BAGPIPE =                new Instruments('Bagpipe',                  'INST_Bagpipe',)

    public static readonly ORCHESTRA_HIT =          new Instruments('Orchestra hit',            'INST_scOrcheHit',)


    public static readonly DOG_BARK =               new Instruments('Dog’s bark',               'block_dog',)
    public static readonly CAT_MEOW =               new Instruments('Cat’s meow',               'SE_INST_CAT',)
    public static readonly CHICKEN =                new Instruments('Chicken',                  'INST_Chicken',)
    public static readonly AH =                     new Instruments('Ah',                       'INST_AH',)
    public static readonly OK =                     new Instruments('Ok',                       'INST_SE3_ok3',)
    public static readonly HELLO =                  new Instruments('Hello',                    'INST_SE2_hello',)
    public static readonly YEAH =                   new Instruments('Yeah',                     'INST_SE8_yeah',)

    public static readonly SQUARE_WAVE =            new Instruments('Square wave',              'INST_FCSQ',)
    public static readonly SOUND_EFFECT_1 =         new Instruments('Sound effect 1?',          'INST_SE1',)
    public static readonly NOISE =                  new Instruments('Noise',                    'INST_SE4_noise',)
    public static readonly BOMB =                   new Instruments('Bomb',                     'INST_SE5_Bomb',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumByNameSingleton<Instruments, typeof Instruments> = class CompanionEnum_Instruments
        extends CompanionEnumByEnglishNameOnly<Instruments, typeof Instruments> {

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
    #sounds?: CollectionHolder<InstrumentSoundFile>

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
        return this.#REFERENCE_MAP ??= Import.InstrumentLoader.get.load()
    }

    /**
     * {@inheritDoc}
     * @semiAsynchronously
     */
    public get reference(): Instrument {
        return this.#reference ??= Instruments.REFERENCE_MAP.get(this.englishName,)!
    }


    public get englishName(): PossibleEnglishName {
        return this.#englishName.get
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml
    }

    public get fileNames(): Array<PossibleFileName> {
        return this.#fileNames
    }

    public get sounds(): CollectionHolder<InstrumentSoundFile> {
        return this.#sounds ??= new ArrayAsCollection(this.fileNames,).map(it => instrumentSound(it,),)
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------

}

export namespace Instruments {// eslint-disable-line @typescript-eslint/no-namespace

    /** The companion instance of a {@link Instruments} */
    export const Companion = Instruments.CompanionEnum.get

    /** All the {@link Instruments} */
    export const ALL = Companion.values.toArray()

    /** All the {@link Instruments} they are ordered by its category */
    export const ALL_ORDER_BY_CATEGORY = ALL

    /** All the {@link Instruments} ordered by the {@link Entities} order */
    export const ALL_ORDER_BY_ENTITY = [
        Instruments.HARP, Instruments.STEEL_DRUM,

        Instruments.SLEIGH_BELL, Instruments.SYNTHETIC_BELL, Instruments.WIND_CHIMES,
        Instruments.SQUARE_WAVE, Instruments.RECORDER, Instruments.PIPE_ORGAN,
        Instruments.SYNTHETIC_BRASS, Instruments.CHICKEN, Instruments.SHAMISEN,
        Instruments.STACCATO_STRING, Instruments.MUSIC_BOX, Instruments.ORGAN,
        Instruments.SYNTHETIC_BASS, Instruments.WOOD_BLOCK, Instruments.ACCORDION_BASS_SOUND,
        Instruments.ACCORDION_TREBLE_SOUND, Instruments.COWBELL, Instruments.ZURNA,

        Instruments.PIANO_4TH_A, Instruments.HONKY_TONK_PIANO, Instruments.MARIMBA,
        Instruments.VIBRAPHONE, Instruments.DOG_BARK, Instruments.CAT_MEOW,
        Instruments.FLUTE, Instruments.GAMELAN, Instruments.TROMBONE,
        Instruments.HARPSICHORD, Instruments.TUBULAR_BELL, Instruments.PIZZICATO_STRING,
        Instruments.VIOLIN, Instruments.PIANO_2, Instruments.PIANO_1,
        Instruments.MOKUGYO, Instruments.ELECTRIC_BASS, Instruments.TOM,
        Instruments.SYNTHETIC_TOM, Instruments.ORCHESTRA_HIT, Instruments.ACOUSTIC_GUITAR,
        Instruments.BAGPIPE, Instruments.TAIKO, Instruments.SANTUR,
        Instruments.OUD, Instruments.AH, Instruments.GUITAR_LONG,
        Instruments.BASS, Instruments.SYNTHESIZER, Instruments.SUB_BASS,
        Instruments.CHORD_CM,

        Instruments.TIMPANI, Instruments.TIMBALES, Instruments.GONG,
        Instruments.SYNTHESIZER_CHORD,

        Instruments.ELECTRIC_GUITAR, Instruments.KAZOO, Instruments.SAXOPHONE,
        Instruments.HORN, Instruments.REVERSE_PIANO, Instruments.NOISE,
        Instruments.SOUND_EFFECT_1, Instruments.OK, Instruments.HELLO,
        Instruments.YEAH, Instruments.BASS_GLISSANDO, Instruments.BOMB,
        Instruments.TIMPANI_ROLL,

        Instruments.CYMBAL, Instruments.HI_HAT, Instruments.BASS_DRUM,
        Instruments.SNARE_DRUM
    ] as const

}

//TODO remove this test variable when the application will be complete
(window.test ??= {}).Instruments = Instruments
