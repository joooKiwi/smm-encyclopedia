import type {CollectionHolder} from '@joookiwi/collection'
import {Fragment, useRef}      from 'react'

import type {ReactProperties} from 'util/react/ReactProperties'

import {Limits}            from 'core/limit/Limits'
import NameComponent       from 'lang/name/component/Name.component'
import {ProjectLanguages}  from 'lang/ProjectLanguages'
import TextComponent       from 'app/tools/text/TextComponent'
import Tooltip             from 'bootstrap/tooltip/Tooltip'
import {StringContainer}   from 'util/StringContainer'
import {CollectionFromMap} from 'util/collection/CollectionFromMap'

import getInHtml = StringContainer.getInHtml
import LanguageCompanion = ProjectLanguages.Companion

type Id = `${| 'editor' | 'play'}-${string}`

interface EditorLimitProperties
    extends ReactProperties {

    readonly id: Id

    readonly limits: | Limits | ReadonlyMap<Limits, boolean>

    readonly displayAcronymIfApplicable: boolean

}

interface ReturnOfLineProperties
    extends ReactProperties {

    readonly selectedLimits: CollectionHolder<Limits>

    readonly index: number

}

interface SingleComponentProperties
    extends ReactProperties {

    readonly id: Id

    readonly limit: Limits

    readonly displayAcronymIfApplicable: boolean

}

interface SingleNameComponentProperties
    extends ReactProperties {

    readonly id: Id

    readonly limit: Limits

}


/**
 *
 * @param properties
 * @reactComponent
 */
export default function LimitComponent({id, limits, displayAcronymIfApplicable,}: EditorLimitProperties,) {
    if (limits instanceof Limits)
        return <SingleComponent id={id} limit={limits} displayAcronymIfApplicable={displayAcronymIfApplicable}/>

    const selectedLimits = new CollectionFromMap(limits,).filter(it => it[1],).map(it => it[0],)
    return <>{selectedLimits.map((it, i,) =>
            <Fragment key={`${it.englishName} #${i + 1} → ${id}`}>
                <SingleComponent id={id} limit={it} displayAcronymIfApplicable={displayAcronymIfApplicable}/>
                <ReturnOfLine selectedLimits={selectedLimits} index={i}/>
            </Fragment>
        )}</>
}

function ReturnOfLine({selectedLimits, index,}: ReturnOfLineProperties,) {
    return index === selectedLimits.size - 1 ? <></> : <>{LanguageCompanion.current.comma}<br/></>
}

function SingleComponent({id, limit, displayAcronymIfApplicable,}: SingleComponentProperties,) {
    const htmlElement = useRef<HTMLSpanElement>(null,)

    if (displayAcronymIfApplicable) {
        const acronym = limit.acronym
        if (acronym == null)
            return <SingleNameComponent id={id} limit={limit}/>
        const acronymId = `limit-acronym-${id}-${getInHtml(limit.acronym!)}`
        //TODO Transform the tooltip to a popover to display every names instead
        return <Tooltip option={{title: limit.reference.nameContainer.languageValue,}} reference={htmlElement}>
            <TextComponent ref={htmlElement} key={`${limit.englishName} (acronym) → ${id}`} id={acronymId} content={acronym}/>
        </Tooltip>
    }
    return <SingleNameComponent id={id} limit={limit}/>
}

function SingleNameComponent({id, limit}: SingleNameComponentProperties,) {
    return <NameComponent key={`${limit.englishName} (name) → ${id}`} id={`limit-name-${id}`} name={limit.reference}/>
}
