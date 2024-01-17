import type {ReactProperties} from 'util/react/ReactProperties'
import type {Validators}      from 'util/file/sound/player/Validators'
import type {SoundFile}       from 'util/file/sound/SoundFile'

export interface SimpleSoundProperties<out FILE extends SoundFile = SoundFile, out TITLE extends string = string, >
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
