import './TextComponent.scss'

import type {PossibleTextContent, TextProperties} from 'app/tools/text/properties/TextProperties'

import {NOT_APPLICABLE, UNKNOWN_REFERENCE} from 'util/commonVariables'
import {Empty}                             from 'util/emptyVariables'
import {ArrayAsCollection}                 from 'util/collection/ArrayAsCollection'

import EMPTY_STRING = Empty.EMPTY_STRING

/**
 *
 * @param properties
 * @reactComponent
 */
export default function TextComponent<T extends PossibleTextContent = PossibleTextContent, >({content, isUnknown, className, ...otherProperties}: TextProperties<T>,) {
    if (isUnknown === true)
        className = (className ?? EMPTY_STRING).concat(' is-unknown')

    switch (content) {
        case null:
            if (new ArrayAsCollection(Object.getOwnPropertyNames(otherProperties,),).isEmpty)
                if (className == null)
                    return null
            if (className == null)
                return <span {...otherProperties}/>
            return <span className={className} {...otherProperties}/>
        case NOT_APPLICABLE:
            return <span className="not-applicable" {...otherProperties}/>
        case UNKNOWN_REFERENCE:
            return <span className="unknown-reference" {...otherProperties}/>
    }

    if (className == null)
        return <span {...otherProperties}>{content}</span>
    return <span className={className} {...otherProperties}>{content}</span>
}
