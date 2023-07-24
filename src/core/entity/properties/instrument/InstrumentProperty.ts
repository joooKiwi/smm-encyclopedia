import type {NotApplicableProperty}                         from 'core/_properties/PropertyWithEverything'
import type {PropertyThatCanBeUnknownWithComment}           from 'core/_properties/PropertyThatCanBeUnknownWithComment'
import type {PossibleCanMakeASoundOutOfAMusicBlock_Comment} from 'core/entity/properties/instrument/loader.types'
import type {Instrument}                                    from 'core/instrument/Instrument'

export interface InstrumentProperty {

    get instruments(): readonly Instrument[]

    //region -------------------- Can make a sound out of a music block --------------------

    get canMakeASoundOutOfAMusicBlockContainer(): CanMakeASoundOutOfAMusicBlockProperty

    get canMakeASoundOutOfAMusicBlock(): BooleanOrNotApplicable

    get canMakeASoundOutOfAMusicBlockComment(): NullOr<PossibleCanMakeASoundOutOfAMusicBlock_Comment>


    //endregion -------------------- Can make a sound out of a music block --------------------

}

/**
 * <p>
 *  A property for <u>can make a sound out of a music block</u>.
 * </p>
 *
 * <p>
 *  It divide both boolean & string into different fields:
 *
 *  <ol>
 *      <li>{@link boolean true, false} or {@link NotApplicable not applicable (N/A)}</li>
 *      <li>{@link PossibleCanMakeASoundOutOfAMusicBlock_Comment comment} or <b>null</b></li>
 *  </ol>
 * </p>
 *
 * <p>
 *  The possible outcome can only be:
 *
 *  <ol>
 *      <li>{@link NotApplicable N/A} & null</li>
 *      <li>false & null</li>
 *      <li>true & null</li>
 *      <li>true & {@link PossibleCanMakeASoundOutOfAMusicBlock_Comment comment}</li>
 *  </ol>
 * </p>
 *
 * @see InstrumentProperty
 * @see PossibleCanMakeASoundOutOfAMusicBlock_Comment
 */
export type CanMakeASoundOutOfAMusicBlockProperty<COMMENT extends NullOr<PossibleCanMakeASoundOutOfAMusicBlock_Comment> = NullOr<PossibleCanMakeASoundOutOfAMusicBlock_Comment>, >
    = | NotApplicableProperty | PropertyThatCanBeUnknownWithComment<boolean, false, COMMENT>
