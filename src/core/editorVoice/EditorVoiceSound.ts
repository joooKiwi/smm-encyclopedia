import type {EditorVoiceSoundFile}   from './file/EditorVoiceSoundFile'
import type {EditorVoiceSoundHolder} from './holder/EditorVoiceSoundHolder'

export interface EditorVoiceSound<T extends | EditorVoiceSoundFile<PossibleFileName> | null = | EditorVoiceSoundFile<PossibleFileName> | null, U extends | EditorVoiceSoundFile<PossibleFileName> | null = | EditorVoiceSoundFile<PossibleFileName> | null, > {

    get file(): T

    get europeanFile(): U

}

//region -------------------- Starting name --------------------

//region -------------------- Starting name (voice before) --------------------

export type PossibleStartingName_WithVoiceBefore =
    | `${| '' | 'start' | 'goal'}ground`
    | 'pipe'
    | 'spiketrap' | 'jellelectro' | 'seaechinus'
    | `${| 'mushroom' | 'semisolid'}platform` | 'bridge'

    | `${| '' | 'hard' | 'question' | 'hidden' | 'note' | 'donut' | 'cloud'}block` | 'iceblock2'
    | 'coin'

    | ItemWithPlayer_Mario<'super', 'mushroom'>
    | 'costumemario' | 'mysterymushroom'
    | ItemWithPlayer_Mario<'weired', 'mashroom'>
    | ItemWithPlayer_Mario<'fire', 'flower'>
    | ItemWithPlayer_Mario<'big', 'mashroom'>
    | 'superleaf' | 'lacoonmario'
    | ItemWithPlayer_Mario<'cape', 'feather'>
    | ItemWithPlayer_Mario<'propeller', 'mushroom'>
    | 'superstar'
    | 'oneupmushroom'
    | `${| 'shoe' | 'stiletto'}goomba`
    | 'yoshiegg'

    | 'goomba' | 'galoomba'
    | 'koopatrooper'
    | 'drybones'
    | 'buzzybeatle'
    | 'spiny'
    | 'spiketop'
    | 'cheapcheap'
    | 'blooper'
    | 'wiggler'
    | `${| '' | 'jumping' | 'fire'}piranhaplant`
    | 'monchar'
    | 'chainchomp'
    | `lakitu${| '' | 'cloud'}`
    | `boo${| '' | 'buddies'}`
    | 'bombomb'
    | 'thwomp'
    | 'montymole' | 'rockeyrench'
    | PossibleStartingName_Magikoopa[number]
    | `${| 'hammer' | 'sledge'}bro`
    | 'lavabubble'

    | 'billblaster'
    | 'cannon'
    | 'burner'
    | 'firebar'
    | PossibleStartingName_Skewer[number]
    | `${| '' | 'fire'}${| 'junior' | 'koopa'}clowncar`
    | 'grinder'

    | `bowser${| '' | 'jr'}`

    | 'bumper'
    | 'onewaywall'
    | 'track'
    | 'vine'
    | 'conveyorbelt'
    | `${| '' | 'flimsy'}lift`
    | 'lavalift'
    | 'trampline'
    | 'powblock'
    | 'pswitch'
    | `${| `${| '' | 'p'}warp` | 'key'}door`
    | 'wings'

//endregion -------------------- Starting name (voice before) --------------------
//region -------------------- Starting name (singing part before) --------------------

export type PossibleStartingName_WithSingingPartBefore =
    | `${| 'gentle' | 'steep'}slope`
    | 'ClearPipe'
    | 'SpikeBlock'

    | '!Block'
    | 'Dotted-LineBlock_nr' | 'ONOFFswitch'
    | `${| 'P' | 'Blinking'}Block`
    | 'icicle'
    | 'pinkcoin' | 'FrozenCoin' | `${| 10 | 30 | 50}-coin`

    | ItemWithPlayer_NotMario<'Super'>
    | ItemWithPlayer_NotMario<'Fire'>
    | ItemWithPlayer<'Superball', 'Flower'>
    | 'MasterSword' | 'Link'
    | ItemWithPlayer_NotMario<'Big', 'Mushroom'>
    | ItemWithPlayer<'SMB2', 'Mushroom'>
    | ItemWithPlayer_NotMario<'Raccoon'>
    | ItemWithPlayer<'Frog', 'Suit'>
    | ItemWithPlayer_NotMario<'Cape'>
    | 'PowerBalloon' | ItemWithPlayer<'Balloon'>
    | ItemWithPlayer_NotMario<'Propeller'>
    | 'SuperAcorn' | ItemWithPlayer<'FlyingSquirrel'>
    | 'SuperBell' | ItemWithPlayer<'Cat'>
    | 'SuperHammer' | ItemWithPlayer<'Builder'>
    | ItemWithPlayer<'Boomerang', 'Flower'>
    | `${| 'Cannon' | 'Propeller' | 'RedPOW'}Box` | `${| 'Goomba' | 'BulletBill'}Mask`
    | 'RottenMushroom'
    | 'BigRedYoshisEgg'

    | 'Goombrat' | 'Goombud'
    | 'DryBonesShell'
    | `${| '' | 'Spiny'}Skipsqueak`
    | `${| '' | 'Horned'}AntTrooper`
    | 'Stingby'
    | 'FishBones'
    | 'BlooperNanny'
    | 'Porcupuffer'
    | 'AngryWiggler'
    | 'PiranhaCreeper'
    | 'UnchainedChomp'
    | 'Spike' | `${| 'Spike' | 'Snow'}Ball`
    | 'Stretch' | 'Peepa'
    | 'litBob-omb'
    | `${| '' | 'Snow'}Pokey`
    | `${| '' | 'Heavy'}FireBro`
    | `${| '' | 'Blasta' | 'Zappa'}Mechakoopa`
    | 'Charvaargh'
    | 'Bully'

    | 'Bulls-EyeBlaster'
    | 'BanzaiBill' | 'Bulls-EyeBanzai'
    | 'redcannon'
    | 'KoopaTroopaCar'
    | 'Sun' | 'Moon'

    | 'Meowser'
    | 'BoomBoom' | 'PomPom'
    | 'Larry' | 'Iggy' | 'Wendy' | 'Lemmy' | 'Roy' | 'Morton' | 'Ludwig'

    | 'swingingclaw'
    | 'Twister'
    | 'TrackBlock'
    | 'tree'
    | 'arrowsign'
    | 'CheckpointFlag'
    | 'DashBlock'
    | `${| '' | 'Fast'}SnakeBlock`
    | 'fastconveyorbelt'
    | `${| 'Mushroom' | 'ONOFF'}Trampoline`
    | 'CloudLift'
    | 'seesaw'
    | 'FastLavaLift'
    | 'crate'
    | `${| '' | 'cursed'}key`
    | 'Hop-Chops'
    | 'redPOWBlock'
    | `WarpBox${| '' | '_withkey'}`

//endregion -------------------- Starting name (singing part before) --------------------

type PossibleStartingName_Magikoopa = readonly ['magikoopa', 'kameck_EU',]
type PossibleStartingName_Skewer = readonly ['skewer', 'spikepiller',]
export type PossibleStartingName_WithEuropeanAlternative = | PossibleStartingName_Magikoopa | PossibleStartingName_Skewer
export type PossibleStartingName_WithVoiceBefore_WithoutEuropeanAlternative = Exclude<PossibleStartingName_WithVoiceBefore, | PossibleStartingName_WithEuropeanAlternative[number]>

type ItemWithPlayer_Mario<START extends string, ITEM extends string, > = `${START}${| ITEM | 'mario'}`
type ItemWithPlayer<START extends string, ITEM extends string = never, > = `${START}${| ITEM | 'Mario' | 'Luigi' | 'Toad' | 'Toadette'}`
type ItemWithPlayer_NotMario<START extends string, ITEM extends string = never, > = `${START}${| ITEM | 'Luigi' | 'Toad' | 'Toadette'}`

//endregion -------------------- Starting name --------------------

export type PossibleFileName_WithVoiceBefore<T extends PossibleStartingName_WithVoiceBefore = PossibleStartingName_WithVoiceBefore, >
    = | `voice_${T}`
export type PossibleFileName_WithVoiceBefore_WithEuropeanAlternative_Regular = PossibleFileName_WithVoiceBefore<PossibleStartingName_WithEuropeanAlternative[0]>
export type PossibleFileName_WithVoiceBefore_WithEuropeanAlternative_European = PossibleFileName_WithVoiceBefore<PossibleStartingName_WithEuropeanAlternative[1]>
export type PossibleFileName_WithSingingPartBefore<T extends PossibleStartingName_WithSingingPartBefore = PossibleStartingName_WithSingingPartBefore, >
    = | `se_ui_singingparts_${T}`
export type PossibleFileName<T extends PossibleStartingName_WithVoiceBefore = PossibleStartingName_WithVoiceBefore, U extends PossibleStartingName_WithSingingPartBefore = PossibleStartingName_WithSingingPartBefore, >
    = | PossibleFileName_WithVoiceBefore<T> | PossibleFileName_WithSingingPartBefore<U>


export type PossibleSoundReceivedOnFactory = | EditorVoiceSoundHolder<PossibleFileName<PossibleStartingName_WithVoiceBefore_WithoutEuropeanAlternative, never>>
                                             | EditorVoiceSoundHolder<PossibleFileName<never>>
                                             | readonly [EditorVoiceSoundHolder<PossibleFileName<PossibleStartingName_WithEuropeanAlternative[0], never>>, EditorVoiceSoundHolder<PossibleFileName<PossibleStartingName_WithEuropeanAlternative[1], never>>,]
                                             | null
