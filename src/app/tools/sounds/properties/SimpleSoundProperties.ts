import type {ReactProperties} from '../../../../util/react/ReactProperties';
import type {SoundFounds}     from '../SoundFounds';

export interface SimpleSoundProperties
    extends ReactProperties {

    source: string

    title: string

    isSoundFound?: SoundFounds

}
