import {Fragment} from 'react'

import type {ReactProperties} from 'util/react/ReactProperties'

import {EntityLimits}     from 'core/entityLimit/EntityLimits'
import NameComponent      from 'lang/name/component/Name.component'
import {ProjectLanguages} from 'lang/ProjectLanguages'
import TextComponent      from 'app/tools/text/TextComponent'
import Tooltip            from 'bootstrap/tooltip/Tooltip'
import {StringContainer}  from 'util/StringContainer'

type Id = `${| 'editor' | 'whilePlaying'}-${string}`

interface EditorLimitProperties
    extends ReactProperties {

    id: Id

    limits: | EntityLimits | ReadonlyMap<EntityLimits, boolean>

    displayAcronymIfApplicable: boolean

}

/**
 *
 * @param properties
 * @reactComponent
 */
export default function LimitComponent({id, limits, displayAcronymIfApplicable,}: EditorLimitProperties,) {
    if (limits instanceof EntityLimits)
        return createSingleComponent(id, limits, displayAcronymIfApplicable,)

    const selectedLimits = [...limits].filter(([, hasLimit]) => hasLimit).map(([limit,]) => limit)
    return selectedLimits.length === 0
        ? <></>
        : <>{selectedLimits.map((limit, index,) =>
            <Fragment key={`${limit.englishName} #${index + 1} → ${id}`}>{createSingleComponent(id, limit, displayAcronymIfApplicable,)}{createReturnOfLine(selectedLimits, index,)}</Fragment>
        )}</>
}

function createReturnOfLine(selectedLimits: readonly EntityLimits[], index: number,) {
    return index === selectedLimits.length - 1 ? <></> : <>{ProjectLanguages.currentLanguage.comma}<br/></>
}

function createSingleComponent(id: Id, entityLimit: EntityLimits, displayAcronymIfApplicable: boolean,) {
    if (displayAcronymIfApplicable) {
        const acronym = entityLimit.acronym
        if (acronym == null)
            return createSingleNameComponent(id, entityLimit,)
        const acronymId = `limit-acronym-${id}-${StringContainer.getInHtml(entityLimit.acronym!)}`
        //TODO Transform the tooltip to a popover to display every names instead
        return <Tooltip option={{title: entityLimit.reference.nameContainer.languageValue,}} elementId={acronymId}>
            <TextComponent key={`${entityLimit.englishName} (acronym) → ${id}`} id={acronymId} content={acronym}/>
        </Tooltip>
    }
    return createSingleNameComponent(id, entityLimit,)
}

function createSingleNameComponent(id: Id, entityLimit: EntityLimits,) {
    return <NameComponent key={`${entityLimit.englishName} (name) → ${id}`} id={`limit-name-${id}`} name={entityLimit.reference}/>
}