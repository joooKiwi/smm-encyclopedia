import {Fragment} from 'react'

import type {ReactProperties} from 'util/react/ReactProperties'

import {Limits}           from 'core/limit/Limits'
import NameComponent      from 'lang/name/component/Name.component'
import {ProjectLanguages} from 'lang/ProjectLanguages'
import TextComponent      from 'app/tools/text/TextComponent'
import Tooltip            from 'bootstrap/tooltip/Tooltip'
import {StringContainer}  from 'util/StringContainer'

type Id = `${| 'editor' | 'play'}-${string}`

interface EditorLimitProperties
    extends ReactProperties {

    readonly id: Id

    readonly limits: | Limits | ReadonlyMap<Limits, boolean>

    readonly displayAcronymIfApplicable: boolean

}

/**
 *
 * @param properties
 * @reactComponent
 */
export default function LimitComponent({id, limits, displayAcronymIfApplicable,}: EditorLimitProperties,) {
    if (limits instanceof Limits)
        return createSingleComponent(id, limits, displayAcronymIfApplicable,)

    const selectedLimits = [...limits].filter(([, hasLimit]) => hasLimit).map(([limit,]) => limit)
    return selectedLimits.length === 0
        ? <></>
        : <>{selectedLimits.map((limit, index,) =>
            <Fragment key={`${limit.englishName} #${index + 1} → ${id}`}>{createSingleComponent(id, limit, displayAcronymIfApplicable,)}{createReturnOfLine(selectedLimits, index,)}</Fragment>
        )}</>
}

function createReturnOfLine(selectedLimits: readonly Limits[], index: number,) {
    return index === selectedLimits.length - 1 ? <></> : <>{ProjectLanguages.current.comma}<br/></>
}

function createSingleComponent(id: Id, limit: Limits, displayAcronymIfApplicable: boolean,) {
    if (displayAcronymIfApplicable) {
        const acronym = limit.acronym
        if (acronym == null)
            return createSingleNameComponent(id, limit,)
        const acronymId = `limit-acronym-${id}-${StringContainer.getInHtml(limit.acronym!)}`
        //TODO Transform the tooltip to a popover to display every names instead
        return <Tooltip option={{title: limit.reference.nameContainer.languageValue,}} elementId={acronymId}>
            <TextComponent key={`${limit.englishName} (acronym) → ${id}`} id={acronymId} content={acronym}/>
        </Tooltip>
    }
    return createSingleNameComponent(id, limit,)
}

function createSingleNameComponent(id: Id, limit: Limits,) {
    return <NameComponent key={`${limit.englishName} (name) → ${id}`} id={`limit-name-${id}`} name={limit.reference}/>
}