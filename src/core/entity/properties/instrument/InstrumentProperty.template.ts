import type {CanMakeASoundOutOfAMusicBlock} from 'core/entity/properties/instrument/loader.types'
import type {PossibleInstrument}            from 'core/instrument/loader.types'

/**
 * @template
 */
export interface InstrumentPropertyTemplate {

    instrument: PossibleInstrument

    canMakeASoundOutOfAMusicBlock: CanMakeASoundOutOfAMusicBlock

}
