import './TextComponent.scss'

import type {PossibleTextContent, TextProperties} from 'app/tools/text/properties/TextProperties'

import {NOT_APPLICABLE, SPACE, UNKNOWN_REFERENCE} from 'util/commonVariables'

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
                return null
            if (classes == null)
                return <span {...otherProperties}/>
            return <span className={classes.join(SPACE)} {...otherProperties}/>
        case NOT_APPLICABLE:
            return <span className="not-applicable" {...otherProperties}/>
        case UNKNOWN_REFERENCE:
            return <span className="unknown-reference" {...otherProperties}/>
    }

    if (classes == null)
        return <span {...otherProperties}>{content}</span>
    return <span className={classes.join(SPACE)} {...otherProperties}>{content}</span>
}
