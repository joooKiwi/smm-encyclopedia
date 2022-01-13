import type {HTMLSpanProperties}          from '../../../../util/react/html/HTMLSpanProperties';
import type {ReactElement, ReactProperty} from '../../../../util/react/ReactProperty';

export interface TextProperties<T extends PossibleTextContent = PossibleTextContent, >
    extends ReactProperty, Omit<HTMLSpanProperties, | 'content' | 'className'> {

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

export type PossibleTextContent = | ReactElement | string | 'N/A'| '???' | number | boolean;
