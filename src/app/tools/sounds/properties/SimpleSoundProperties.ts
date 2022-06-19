import type {ReactProperty} from '../../../../util/react/ReactProperty';
import type {SoundFounds}        from '../SoundFounds';

export interface SimpleSoundProperties
    extends ReactProperty {

    source: string

    title: string

    isSoundFound?: SoundFounds

}
