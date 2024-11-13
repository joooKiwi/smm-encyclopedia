import type {Nullable}                                  from '@joookiwi/type'
import type {TooltipEvents}                             from 'bootstrap/tooltip/TooltipEvents'
import type {SimpleReactPropertiesWithOptionalChildren} from 'util/react/ReactProperties'
import {RefObject, useEffect}                           from 'react'

import {BootstrapInstanceHandler}        from 'bootstrap/BootstrapInstanceHandler'
import {TooltipInstance}                 from 'bootstrap/tooltip/TooltipInstance'
import {default as TooltipFromBootstrap} from 'bootstrap/js/dist/tooltip'
import {EMPTY_CALLBACK}                  from 'util/emptyVariables'


interface TooltipProperties
    extends SimpleReactPropertiesWithOptionalChildren<Nullable<ReactElement>> {

    readonly option: Partial<TooltipFromBootstrap.Options>

    readonly on?: Nullable<Partial<TooltipEvents<any>>>

    readonly reference: Nullable<| RefObject<HTMLElement> | HTMLElement | string>

}

/**
 * Create a new {@link bootstrap.Tooltip Tooltip} instance
 *
 * @param properties the properties received (containing the content, the option, the triggers & the id)
 * @reactComponent
 * @see https://getbootstrap.com/docs/5.3/components/tooltips
 */
export default function Tooltip({children, option, on: triggers, reference,}: TooltipProperties,) {
    useEffect(() => {
        const referenceFound = getReference(reference,)
        if (referenceFound == null)
            return EMPTY_CALLBACK
        const instance = BootstrapInstanceHandler.get.add(referenceFound, new TooltipInstance(referenceFound, option, triggers,),)
        return () => BootstrapInstanceHandler.get.remove(instance,).destroy()
    },)
    return children ?? null
}

function getReference(reference: Nullable<| RefObject<HTMLElement> | HTMLElement | string>,) {
    if (reference == null)
        return null

    if (typeof reference == 'string')
        return reference
    if (reference instanceof HTMLElement)
        return reference

    const referenceValue = reference.current
    if (referenceValue == null)
        return null
    return referenceValue
}
