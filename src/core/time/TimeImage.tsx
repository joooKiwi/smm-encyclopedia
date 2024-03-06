import type {Times}           from 'core/time/Times'
import type {ReactProperties} from 'util/react/ReactProperties'
import Image                  from 'app/tools/images/Image'

interface TimeImageProperties
    extends ReactProperties {

    readonly reference: Times

}

export default function TimeImage({reference,}: TimeImageProperties,) {
    return <Image file={reference.imageFile} className={`time-image ${reference.englishNameInHtml}-image`}/>
}
