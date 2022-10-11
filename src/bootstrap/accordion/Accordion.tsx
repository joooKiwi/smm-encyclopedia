import './Accordion.scss'

import type {AccordionProperties} from './Accordion.types'

/**
 * @param properties
 * @reactComponent
 */
export default function Accordion({alignCenter: alignHeadersCenter = false, children, ...htmlProperties}: AccordionProperties,) {
    htmlProperties.className = `accordion ${htmlProperties.className ?? ''}`
    return <div {...htmlProperties}>
        {children.map(([partialKey, id, isDisplayed, {buttonContent, alignCenter = alignHeadersCenter, ...headerProperties}, {bodyContent, ...bodyProperties},]) => {
            headerProperties.className = `accordion-header ${headerProperties.className ?? ''}`
            bodyProperties.className = `accordion-body ${headerProperties.className ?? ''} w-100`

            return <div key={`${partialKey} (accordion item)`} className="accordion-item">
                <h2 {...headerProperties}>
                    <button key={`${partialKey} (accordion button`} className={`accordion-button ${isDisplayed ? '' : 'collapsed'} ${alignCenter ? 'center' : ''}`}
                            type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded={isDisplayed} aria-controls={id}>{buttonContent}</button>
                </h2>
                <div key={`${partialKey} (accordion body container)`} id={id} className={`accordion-collapse collapse ${isDisplayed ? 'show' : ''} w-100`} aria-labelledby={id}>
                    <div key={`${partialKey} (accordion body`} {...bodyProperties}>{bodyContent}</div>
                </div>
            </div>
        })}
    </div>
}
