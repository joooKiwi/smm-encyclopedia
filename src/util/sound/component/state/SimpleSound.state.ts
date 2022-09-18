import type {ReactState}  from '../../../react/ReactState';
import type {SoundStates} from '../../player/SoundStates';

export interface SimpleSoundState
    extends ReactState {

    /** The state of the {@link SimpleSoundComponent component} */
    state: SoundStates

    /**
     * Tell whenever the source has been retrieved or not.
     * By default, the value is set to false
     */
    isSourceRetrieved: boolean

}
