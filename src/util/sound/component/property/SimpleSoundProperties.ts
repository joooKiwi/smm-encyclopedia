import type {ReactProperties} from '../../../react/ReactProperties';
import type {Validators}      from '../../Validators';

export interface SimpleSoundProperties<SOURCE extends string = string, TITLE extends string = string, >
    extends ReactProperties {

    /** The source of the audio element (excluding the {@link BasePath} */
    source: SOURCE

    /** The title of the audio element */
    title: TITLE

    /**
     * The validations to be made when creating the {@link SimpleSoundComponent component}.
     * By default, it uses the {@link Validators.default default validator}.
     */
    validator?: Validators

}
