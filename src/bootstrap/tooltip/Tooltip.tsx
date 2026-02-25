import type {Nullable}                        from '@joookiwi/type'
import type {default as TooltipFromBootstrap} from 'bootstrap/js/dist/tooltip'
import {RefObject, useEffect}                 from 'react'

import type {TooltipEvents}                       from 'bootstrap/tooltip/TooltipEvents'
import type {ReactPropertiesWithOptionalChildren} from 'util/react/ReactProperties'

import {BootstrapInstanceHandler} from 'bootstrap/BootstrapInstanceHandler'
import {TooltipInstance}          from 'bootstrap/tooltip/TooltipInstance'
import {Empty}                    from 'util/emptyVariables'

import EMPTY_CALLBACK = Empty.EMPTY_CALLBACK

interface TooltipProperties
    extends ReactPropertiesWithOptionalChildren<ReactElement> {

    readonly option: Partial<TooltipFromBootstrap.Options>

    readonly on?: Nullable<Partial<TooltipEvents<any>>>// eslint-disable-line @typescript-eslint/no-explicit-any

    readonly reference: RefObject<Nullable<HTMLElement>>

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
        const referenceFound = reference.current
        if (referenceFound == null)
            return EMPTY_CALLBACK
        const instance = BootstrapInstanceHandler.get.add(referenceFound, new TooltipInstance(referenceFound, option, triggers,),)
        return () => BootstrapInstanceHandler.get.remove(instance,).destroy()
    },)
    return children ?? null
}
