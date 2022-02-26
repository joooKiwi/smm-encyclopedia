import type {ReactState}  from '../../../../util/react/ReactState';
import type {SoundStates} from '../SoundStates';

export interface SimpleSoundState
    extends ReactState {

    state: SoundStates

    /**
     * Tell whenever the source has been retrieved or not.
     * By default, the value is set to false
     */
    isSourceRetrieved: boolean

}
