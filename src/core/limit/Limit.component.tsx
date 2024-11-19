import type {CollectionHolder} from '@joookiwi/collection'
import {filterByArray}         from '@joookiwi/collection'
import {Fragment}              from 'react'

import type {ReactProperties} from 'util/react/ReactProperties'

import {Limits}           from 'core/limit/Limits'
import NameComponent      from 'lang/name/component/Name.component'
import {ProjectLanguages} from 'lang/ProjectLanguages'
import TextComponent      from 'app/tools/text/TextComponent'
import Tooltip            from 'bootstrap/tooltip/Tooltip'
import {StringContainer}  from 'util/StringContainer'

import getInHtml = StringContainer.getInHtml

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

    const selectedLimits = filterByArray([...limits], it => it[1],).map(it => it[0],)
    return <>{selectedLimits.map((it, i,) =>
            <Fragment key={`${it.englishName} #${i + 1} → ${id}`}>{createSingleComponent(id, it, displayAcronymIfApplicable,)}{createReturnOfLine(selectedLimits, i,)}</Fragment>
        )}</>
}

function createReturnOfLine(selectedLimits: CollectionHolder<Limits>, index: number,) {
    return index === selectedLimits.size - 1 ? <></> : <>{ProjectLanguages.current.comma}<br/></>
}

function createSingleComponent(id: Id, limit: Limits, displayAcronymIfApplicable: boolean,) {
    if (displayAcronymIfApplicable) {
        const acronym = limit.acronym
        if (acronym == null)
            return createSingleNameComponent(id, limit,)
        const acronymId = `limit-acronym-${id}-${getInHtml(limit.acronym!)}`
        //TODO Transform the tooltip to a popover to display every names instead
        return <Tooltip option={{title: limit.reference.nameContainer.languageValue,}} reference={acronymId}>
            <TextComponent key={`${limit.englishName} (acronym) → ${id}`} id={acronymId} content={acronym}/>
        </Tooltip>
    }
    return createSingleNameComponent(id, limit,)
}

function createSingleNameComponent(id: Id, limit: Limits,) {
    return <NameComponent key={`${limit.englishName} (name) → ${id}`} id={`limit-name-${id}`} name={limit.reference}/>
}
