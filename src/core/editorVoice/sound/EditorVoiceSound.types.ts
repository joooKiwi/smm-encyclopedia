import type {EmptyString} from '@joookiwi/type'

//region -------------------- Starting name --------------------

//region -------------------- Starting name (voice before) --------------------

/**
 * Every possible starting file name (with "voice" before its file name) for an {@link EditorVoices}
 *
 * @see PossibleStartingName_WithEuropeanAlternative
 * @see PossibleStartingName_WithVoiceBefore_WithoutEuropeanAlternative
 */
export type PossibleStartingName_WithVoiceBefore =
    | `${| EmptyString | 'start' | 'goal'}ground`
    | 'pipe'
    | 'spiketrap' | 'jellelectro' | 'seaechinus'
    | `${| 'mushroom' | 'semisolid'}platform` | 'bridge'

    | `${| EmptyString | 'hard' | 'question' | 'hidden' | 'note' | 'donut' | 'cloud'}block` | 'iceblock2'
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
    | `${| EmptyString | 'jumping' | 'fire'}piranhaplant`
    | 'monchar'
    | 'chainchomp'
    | `lakitu${| EmptyString | 'cloud'}`
    | `boo${| EmptyString | 'buddies'}`
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
    | `${| EmptyString | 'fire'}${| 'junior' | 'koopa'}clowncar`
    | 'grinder'

    | `bowser${| EmptyString | 'jr'}`

    | 'bumper'
    | 'onewaywall'
    | 'track'
    | 'vine'
    | 'conveyorbelt'
    | `${| EmptyString | 'flimsy'}lift`
    | 'lavalift'
    | 'trampline'
    | 'powblock'
    | 'pswitch'
    | `${| `${| EmptyString | 'p'}warp` | 'key'}door`
    | 'wings'

//endregion -------------------- Starting name (voice before) --------------------
//region -------------------- Starting name (singing part before) --------------------

/** Every possible starting file name (with "singing part" before its file name) for an {@link EditorVoices} */
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
    | ItemWithPlayer_NotMario<'Racoon'>
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
    | `${| EmptyString | 'Spiny'}Skipsqueak`
    | `${| EmptyString | 'Horned'}AntTrooper`
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
    | `${| EmptyString | 'Snow'}Pokey`
    | `${| EmptyString | 'Heavy'}FireBro`
    | `${| EmptyString | 'Blasta' | 'Zappa'}Mechakoopa`
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
    | `${| EmptyString | 'Fast'}SnakeBlock`
    | 'fastconveyorbelt'
    | `${| 'Mushroom' | 'ONOFF'}Trampoline`
    | 'CloudLift'
    | 'seesaw'
    | 'FastLavaLift'
    | 'crate'
    | `${| EmptyString | 'cursed'}key`
    | 'Hop-Chops'
    | 'redPOWBlock'
    | `WarpBox${| EmptyString | '_withkey'}`

//endregion -------------------- Starting name (singing part before) --------------------

type PossibleStartingName_Magikoopa = readonly ['magikoopa', 'kameck_EU',]
type PossibleStartingName_Skewer = readonly ['skewer', 'spikepiller',]
export type PossibleStartingName_WithEuropeanAlternative = | PossibleStartingName_Magikoopa | PossibleStartingName_Skewer
export type PossibleStartingName_WithVoiceBefore_WithoutEuropeanAlternative = Exclude<PossibleStartingName_WithVoiceBefore, | PossibleStartingName_WithEuropeanAlternative[number]>

type ItemWithPlayer_Mario<START extends string, ITEM extends string, > = `${START}${| ITEM | 'mario'}`
type ItemWithPlayer<START extends string, ITEM extends string = never, > = `${START}${| ITEM | 'Mario' | 'Luigi' | 'Toad' | 'Toadette'}`
type ItemWithPlayer_NotMario<START extends string, ITEM extends string = never, > = `${START}${| ITEM | 'Luigi' | 'Toad' | 'Toadette'}`

//endregion -------------------- Starting name --------------------

/**
 * A {@link String} type {@link EditorVoices} sound file path with "voice" before its name
 *
 * @see PossibleFileName
 */
export type PossibleFileName_WithVoiceBefore<T extends PossibleStartingName_WithVoiceBefore = PossibleStartingName_WithVoiceBefore, > = `voice_${T}`
/**
 * A {@link String} type {@link EditorVoices} sound file with "signing part" before its name
 *
 * @see PossibleFileName
 */
export type PossibleFileName_WithSingingPartBefore<T extends PossibleStartingName_WithSingingPartBefore = PossibleStartingName_WithSingingPartBefore, > = `se_ui_singingparts_${T}`
/**
 * Every possible {@link EditorVoices} sound file with either "voice" or "singing part" before their its name
 *
 * @see PossibleFileName_WithVoiceBefore
 * @see PossibleFileName_WithSingingPartBefore
 */
export type PossibleFileName<FILE_NAME_WITH_VOICE_BEFORE extends PossibleStartingName_WithVoiceBefore = PossibleStartingName_WithVoiceBefore, FILE_NAME_WITH_SINGING_PART_BEFORE extends PossibleStartingName_WithSingingPartBefore = PossibleStartingName_WithSingingPartBefore, > = | PossibleFileName_WithVoiceBefore<FILE_NAME_WITH_VOICE_BEFORE> | PossibleFileName_WithSingingPartBefore<FILE_NAME_WITH_SINGING_PART_BEFORE>
