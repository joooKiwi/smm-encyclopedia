import type {Nullable, NullableBoolean} from '@joookiwi/type'

import type {ReactProperties}    from 'util/react/ReactProperties'
import type {HTMLSpanProperties} from 'util/react/html/HTMLSpanProperties'

export interface TextProperties<T extends PossibleTextContent = PossibleTextContent, >
    extends ReactProperties, Omit<HTMLSpanProperties, | 'content'> {

    /**
     * The content used for the {@link TextComponent}
     * @see PossibleTextContent
     */
    readonly content: Nullable<T>

    /**
     * Tell whenever the value is unknown or not.
     *
     * @note It will add a "?" after the content as a CSS attribute (--is-unknown)
     * @see DEFAULT_IS_UNKNOWN
     */
    readonly isUnknown?: NullableBoolean

}

export type PossibleTextContent = | ReactElementOrString | NotApplicable | UnknownReference | number | boolean
