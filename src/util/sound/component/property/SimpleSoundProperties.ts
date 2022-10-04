import type {ReactProperties} from '../../../react/ReactProperties';
import type {Validators}      from '../../player/Validators';
import type {SoundFile}            from '../../SoundFile';

export interface SimpleSoundProperties<FILE extends SoundFile = SoundFile, TITLE extends string = string, >
    extends ReactProperties {

    /** The file of the audio element (excluding the {@link BasePath} */
    file: FILE

    /** The title of the audio element */
    title: TITLE

    /**
     * The validations to be made when creating the {@link SimpleSoundComponent component}.
     * By default, it uses the {@link Validators.default default validator}.
     */
    validator?: Validators

}
