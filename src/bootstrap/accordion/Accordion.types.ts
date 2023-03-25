import type {HTMLDivProperties}                     from 'util/react/html/HTMLDivProperties'
import type {HTMLHeadingProperties}                 from 'util/react/html/HTMLHeadingProperties'
import type {ReactElementOrString, ReactProperties} from 'util/react/ReactProperties'
import type {Nullable}                              from 'util/types/nullable'

export interface AccordionProperties
    extends ReactProperties, Omit<HTMLDivProperties, 'children'> {

    /**
     * Align the header properties to the center
     */
    alignCenter?: boolean

    children: readonly Nullable<SingleAccordionProperties>[]

}

export type SingleAccordionProperties = readonly [partialKey: string, id: string, isDisplayed: boolean, header: HeaderProperties, body: BodyProperties,]

export interface HeaderProperties
    extends ReactProperties, HTMLHeadingProperties {

    buttonContent: ReactElementOrString

    /**
     * Align the header content to the center.
     * It will be the {@link AccordionProperties} value if nothing is provided.
     */
    alignCenter?: boolean

}

export interface BodyProperties
    extends ReactProperties, HTMLDivProperties {

    bodyContent: ReactElementOrString

}
