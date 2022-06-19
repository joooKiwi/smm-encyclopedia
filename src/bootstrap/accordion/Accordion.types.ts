import type {HTMLDivProperties}                   from '../../util/react/html/HTMLDivProperties';
import type {HTMLHeadingProperties}               from '../../util/react/html/HTMLHeadingProperties';
import type {ReactElementOrString, ReactProperty} from '../../util/react/ReactProperty';

export interface AccordionProperties
    extends ReactProperty, Omit<HTMLDivProperties, 'children'> {

    /**
     * Align the header properties to the center
     */
    alignCenter?: boolean

    children: readonly (readonly [partialKey: string, id: string, isDisplayed: boolean, header: HeaderProperties, body: BodyProperties,])[]

}

export interface HeaderProperties
    extends ReactProperty, HTMLHeadingProperties {

    buttonContent: ReactElementOrString

    /**
     * Align the header content to the center.
     * It will be the {@link AccordionProperties} value if nothing is provided.
     */
    alignCenter?: boolean

}

export interface BodyProperties
    extends ReactProperty, HTMLDivProperties {

    bodyContent: ReactElementOrString

}
