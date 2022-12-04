import './TextComponent.scss'

import type {PossibleTextContent, TextProperties} from 'app/tools/text/properties/TextProperties'

import {EMPTY_REACT_ELEMENT} from 'util/emptyReactVariables'

const NOT_APPLICABLE = 'N/A'
const UNKNOWN_REFERENCE = '???'

/**
 *
 * @param properties
 * @reactComponent
 */
export default function TextComponent<T extends PossibleTextContent = PossibleTextContent, >({content, isUnknown, classes, ...otherProperties}: TextProperties<T>,) {
    if (isUnknown === true)
        (classes ??= []).push('is-unknown')

    switch (content) {
        case null:
            if (Object.getOwnPropertyNames(otherProperties).length === 0 && classes == null)
                return EMPTY_REACT_ELEMENT
            if (classes == null)
                return <span {...otherProperties}/>
            return <span className={classes.join(' ')} {...otherProperties}/>
        case NOT_APPLICABLE:
            return <span className="not-applicable" {...otherProperties}/>
        case UNKNOWN_REFERENCE:
            return <span className="unknown-reference" {...otherProperties}/>
    }

    if (classes == null)
        return <span {...otherProperties}>{content}</span>
    return <span className={classes.join(' ')} {...otherProperties}>{content}</span>
}
