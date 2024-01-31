import type {ReactProperties, ReactPropertiesWithChildren} from 'util/react/ReactProperties'

import {isInProduction} from 'variables'

interface UnfinishedTextProperties
    extends ReactProperties {

    /** Tell if the text is hidden in production */
    readonly isHidden?: boolean

    /** The type of text (by default it is a text)*/
    readonly type?: | 'paragraph' | 'text'

}

/** @reactComponent */
export default function UnfinishedText({children, isHidden = false, type = 'text',}: ReactPropertiesWithChildren<UnfinishedTextProperties, string>,) {
    return isInProduction
        ? isHidden ? null : type === 'text'
            ? <span>{children}</span>
            : <p>{children}</p>
        : type === 'text'
            ? <span>--{children}--</span>
            : <p>--{children}--</p>
}

export function unfinishedText(value: string,) {
    return isInProduction ? value : `--${value}--`
}
