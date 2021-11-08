import './TextComponent.scss';

import type {ReactProperty} from '../../../util/react/ReactProperty';

export type PossibleTextContent = | string | 'N/A' | number | boolean;

interface TextProperties<T extends PossibleTextContent = PossibleTextContent, >
    extends ReactProperty {

    /**
     * The content used for the {@link TextComponent}
     * @see PossibleTextContent
     */
    content: | T | null | undefined

    /**
     * Tell whenever the value is unknown or not.
     *
     * @note It will add a "?" after the content as a CSS attribute (--is-unknown)
     * @see DEFAULT_IS_UNKNOWN
     */
    isUnknown?: boolean | null | undefined

    /**
     * The classes used for the text component.
     */
    classes?: | string[] | null | undefined

}

const DEFAULT_IS_UNKNOWN = false;

/**
 *
 * @param properties
 * @reactComponent
 */
export default function TextComponent<T extends PossibleTextContent = PossibleTextContent, >({content, isUnknown = DEFAULT_IS_UNKNOWN, classes,}: TextProperties<T>,) {
    if (content === 'N/A')
        return <span className="not-applicable"/>;

    if (isUnknown)
        (classes ??= []).push('is-unknown');

    if (classes == null)
        return <span>{content}</span>;
    return <span className={classes.join(' ')}>{content}</span>;
}
