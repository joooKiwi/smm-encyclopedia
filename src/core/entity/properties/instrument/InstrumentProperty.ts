import type {InferredBooleanPropertyThatCanBeNotApplicableWithComment, PossibleBoolean} from '../../../_properties/Property';
import type {Instrument}                                                                from '../../../instrument/Instrument';
import type {PossibleCanMakeASoundOutOfAMusicBlock_Comment}                             from './loader.types';

export interface InstrumentProperty<CAN_MAKE_A_SOUND_OUT_OF_A_MUSIC_BLOCK extends CanMakeASoundOutOfAMusicBlockProperty = CanMakeASoundOutOfAMusicBlockProperty, > {

    get instruments(): readonly Instrument[]

    //region -------------------- Can make a sound out of a music block --------------------

    get canMakeASoundOutOfAMusicBlockContainer(): CAN_MAKE_A_SOUND_OUT_OF_A_MUSIC_BLOCK

    get canMakeASoundOutOfAMusicBlock(): CAN_MAKE_A_SOUND_OUT_OF_A_MUSIC_BLOCK['value']

    get canMakeASoundOutOfAMusicBlockComment(): CAN_MAKE_A_SOUND_OUT_OF_A_MUSIC_BLOCK['comment']


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
export type CanMakeASoundOutOfAMusicBlockProperty<COMMENT extends | PossibleCanMakeASoundOutOfAMusicBlock_Comment | null = | PossibleCanMakeASoundOutOfAMusicBlock_Comment | null, >
    = InferredBooleanPropertyThatCanBeNotApplicableWithComment<PossibleBoolean, COMMENT>;
