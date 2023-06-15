import type {InGameSMM1ImageFile}          from 'core/entity/file/InGameSMM1ImageFile'
import type {InGameSMM2ImageFile}          from 'core/entity/file/InGameSMM2ImageFile'
import type {ImageWithTimesThemesAndGameStyles} from 'core/entity/images/ImageWithTimesThemesAndGameStyles'

export interface InGameImage<IMAGE_FILE extends | InGameSMM1ImageFile | InGameSMM2ImageFile = | InGameSMM1ImageFile | InGameSMM2ImageFile, >
    extends ImageWithTimesThemesAndGameStyles<IMAGE_FILE> {}
