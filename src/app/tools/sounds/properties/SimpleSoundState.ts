import type {ReactState} from '../../../../util/react/ReactState';
import type SimpleSound  from '../SimpleSound';

export interface SimpleSoundState
    extends ReactState {

    state: PossibleStates

}

type PossibleStates = typeof SimpleSound['POSSIBLE_STATES'][number];
