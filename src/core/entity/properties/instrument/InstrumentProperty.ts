import type {PossibleCanMakeASoundOutOfAMusicBlock_Comment} from 'core/entity/properties/instrument/loader.types'
import type {Instrument}                                    from 'core/instrument/Instrument'

export interface InstrumentProperty {

    get instruments(): readonly Instrument[]

    get canMakeASoundOutOfAMusicBlock(): BooleanOrNotApplicable

    get canMakeASoundOutOfAMusicBlockComment(): NullOr<PossibleCanMakeASoundOutOfAMusicBlock_Comment>

}
