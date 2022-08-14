import type {HTMLIProperties} from '../../../../util/react/html/HTMLIProperties';
import type {ReactProperty}   from '../../../../util/react/ReactProperty';

export interface ImageFromVariableProperties
    extends ReactProperty, HTMLIProperties {

    /** Any variable from the css variables */
    variable: PossibleVariableImage

    /** Define if the height is equivalent to the width */
    isSquared?: boolean

}

export type PossibleVariableImage =
    | `${|'music'}-block` | `question-block${| '' | '-sm3dw'}`
    | `${| 'super' | 'mystery' | 'big' | 'smb2' | 'propeller'}-mushroom` | 'big-mushroom-classic'
    | `${| 'fire' | 'superball' | 'boomerang'}-flower`
    | 'master-sword'
    | 'super-leaf' | 'frog-suit'
    | 'cape-feather' | 'power-balloon'
    | `super-${| 'acorn' | 'bell' | 'hammer'}`
    | 'shoe' | 'stiletto'
    | 'yoshi'
    | `${| 'dry-bones' | 'buzzy' | 'spiny'}-shell`
    | 'cloud' | 'clown-car'
    | 'swinging-claw';
