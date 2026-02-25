import type {Medals}          from 'core/medal/Medals'
import type {ReactProperties} from 'util/react/ReactProperties'

import TextComponent from 'app/tools/text/TextComponent'

interface MaximumQuantityOfCoursesToBeUploadedProperties
    extends ReactProperties {

    readonly reference: Medals

}

/** @reactComponent */
export default function MaximumQuantityOfCoursesToBeUploaded({reference,}: MaximumQuantityOfCoursesToBeUploadedProperties,) {
    return <TextComponent content={reference.reference.maximumAmountAllowedToUploadALevel}/>
}
