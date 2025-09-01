import './ButtonWithYoshiImage.scss'

import type {MouseEvent} from 'react'

import type {ImageFile}       from 'util/file/image/ImageFile'
import type {ReactProperties} from 'util/react/ReactProperties'

import Image      from 'app/tools/images/Image'
import MuteButton from 'util/file/sound/component/MuteButton'

interface MuteWithYoshiImageButtonProperties
    extends ReactProperties {

    readonly isMuted?: boolean

    readonly isDisabled?: boolean

    readonly image: ImageFile

    action(isMuted: boolean, event: MouseEvent,): void

}

/** @reactComponent */
export default function MuteWithYoshiImageButton({isMuted = false, isDisabled = false, image, action,}: MuteWithYoshiImageButtonProperties,) {
    return <div className="muteWithYoshiImage-button-container buttonWithYoshiImage-container d-inline-block position-relative z-0">
        <Image file={image} className="yoshi-image position-absolute top-0 end-50 z-n1"/>
        <MuteButton isMuted={isMuted} isDisabled={isDisabled} action={action}/>
    </div>
}
