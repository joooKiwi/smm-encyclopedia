import type {ReactPropertiesWithChildren} from 'util/react/ReactProperties'

import {isInProduction} from 'variables'

interface UnfinishedTextProperties
    extends ReactPropertiesWithChildren<string> {

    /** Tell if the text is hidden in production */
    readonly isHidden?: boolean

    /** The type of text (by default it is a text)*/
    readonly type?: | 'paragraph' | 'text' | 'small'

}

/** @reactComponent */
export default function UnfinishedText({children, isHidden = false, type = 'text',}: UnfinishedTextProperties,) {
    if (isInProduction)
        if (isHidden)
            return null

    if (type === 'text')
        return <span>--{children}--</span>
    if (type === 'small')
        return <small>--{children}--</small>
    return <p>--{children}--</p>
}

export function unfinishedText(value: string,) {
    return isInProduction ? value : `--${value}--`
}
