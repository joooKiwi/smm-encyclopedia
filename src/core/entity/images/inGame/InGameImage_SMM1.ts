import type {InGameSMM1ImageFile}          from 'core/entity/file/InGameSMM1ImageFile'
import type {ImageWithThemesAndGameStyles} from 'core/entity/images/ImageWithThemesAndGameStyles'
import type {InGameImage}                  from 'core/entity/images/inGame/InGameImage'
import type {GameStyles}                   from 'core/gameStyle/GameStyles'
import type {Themes}                       from 'core/theme/Themes'

export interface InGameImage_SMM1
    extends InGameImage<InGameSMM1ImageFile>, ImageWithThemesAndGameStyles<InGameSMM1ImageFile> {

    get(expectEmpty: boolean, gameStyle: GameStyles,): readonly InGameSMM1ImageFile[]

    get(expectEmpty: boolean, gameStyle: GameStyles, theme: Themes,): readonly InGameSMM1ImageFile[]


    get(expectEmpty: boolean, theme: Themes,): readonly InGameSMM1ImageFile[]


    get(expectEmpty: boolean,): readonly InGameSMM1ImageFile[]

}
