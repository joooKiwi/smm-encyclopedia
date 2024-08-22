import type {ReactProperties} from 'util/react/ReactProperties'
import type {HTMLIProperties} from 'util/react/html/HTMLIProperties'

export interface ImageFromVariableProperties
    extends ReactProperties, HTMLIProperties {

    /** Any variable from the css variables */
    readonly variable: PossibleVariableImage

    /** Define if the height is equivalent to the width */
    readonly isSquared?: boolean

}

export type PossibleVariableImage =
    | `smm${| 1 | '3ds' | 2}`
    | `${|'music'}-block` | `question-block${| '' | '-sm3dw'}`
    | `${| 'super' | 'weird' | 'mystery' | 'big' | 'smb2' | 'propeller'}-mushroom` | 'big-mushroom-classic'
    | `${| 'fire' | 'superball' | 'boomerang'}-flower`
    | 'master-sword'
    | 'super-leaf' | 'frog-suit'
    | 'cape-feather' | 'power-balloon'
    | `super-${| 'acorn' | 'bell' | 'hammer'}`
    | 'shoe' | 'stiletto'
    | `${| '' | 'red-'}yoshi`
    | `${| 'dry-bones' | 'buzzy' | 'spiny'}-shell`
    | 'lakitu-cloud' | 'clown-car'
    | 'swinging-claw'
