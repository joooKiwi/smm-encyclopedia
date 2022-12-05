import type {ReactElement, ReactProperties}   from 'util/react/ReactProperties'
import type {HTMLSpanProperties}              from 'util/react/html/HTMLSpanProperties'
import type {Nullable}                        from 'util/types/nullable'
import type {NotApplicable, UnknownReference} from 'util/types/variables'

export interface TextProperties<T extends PossibleTextContent = PossibleTextContent, >
    extends ReactProperties, Omit<HTMLSpanProperties, | 'content' | 'className'> {

    /**
     * The content used for the {@link TextComponent}
     * @see PossibleTextContent
     */
    content: Nullable<T>

    /**
     * Tell whenever the value is unknown or not.
     *
     * @note It will add a "?" after the content as a CSS attribute (--is-unknown)
     * @see DEFAULT_IS_UNKNOWN
     */
    isUnknown?: Nullable<boolean>

    /** The classes used for the text component*/
    classes?: Nullable<string[]>

}

export type PossibleTextContent = | ReactElement | string | NotApplicable | UnknownReference | number | boolean
