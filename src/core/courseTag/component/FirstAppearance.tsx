import type {CourseTag}       from 'core/courseTag/CourseTag'
import type {ReactProperties} from 'util/react/ReactProperties'

interface FirstAppearanceProperties
    extends ReactProperties {

    readonly reference: CourseTag

}

/** @reactComponent */
export default function FirstAppearance({reference,}: FirstAppearanceProperties,) {
    const firstAppearance = reference.firstAppearance
    if (firstAppearance == null)
        return null
    return <sub className="first-appearance text-body text-opacity-50">{firstAppearance.simpleName}</sub>
}
