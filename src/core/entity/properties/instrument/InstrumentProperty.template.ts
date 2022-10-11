import type {CanMakeASoundOutOfAMusicBlock} from './loader.types'
import type {PossibleInstrument}            from '../../../instrument/loader.types'

/**
 * @template
 */
export interface InstrumentPropertyTemplate {

    instrument: PossibleInstrument

    canMakeASoundOutOfAMusicBlock: CanMakeASoundOutOfAMusicBlock

}
