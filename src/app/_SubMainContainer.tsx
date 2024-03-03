import './_SubMainContainer.scss'

import type {ViewAndRouteName}                  from 'app/withInterpreter/DisplayButtonGroup.properties'
import type {SimpleReactPropertiesWithChildren} from 'util/react/ReactProperties'

import DisplayButtonGroup from 'app/withInterpreter/DisplayButtonGroup'
import {ViewDisplays}     from 'app/withInterpreter/ViewDisplays'
import UnfinishedText     from 'app/tools/text/UnfinishedText'

interface SubMainContainerProperties
    extends SimpleReactPropertiesWithChildren<ReactElementOrString> {

    readonly reactKey: string

    readonly viewDisplayAndRouteName: readonly ViewAndRouteName[]

    readonly viewDisplay: ViewDisplays

    readonly alert?: ReactElementOrString

    readonly titleContent: ReactElementOrString

    readonly asideContent?: ReactElementOrString

    readonly description?: ReactElementOrString

}

/** @reactComponent */
export default function SubMainContainer({reactKey, viewDisplayAndRouteName, viewDisplay, alert, titleContent, asideContent, description, children,}: SubMainContainerProperties,) {
    return <div className="subMain-container">
        <div id={`${reactKey}-app-container`} className={`app-container ${viewDisplay.htmlType}-container`}>
            <h1 id={`${reactKey}-app-title`} className="app-title">{titleContent}</h1>
            {alert == null ? null : <aside id={`${reactKey}-alert-container`} className="alert-container">{alert}</aside>}
            <aside className="viewChanger-container">
                <DisplayButtonGroup reactKey={reactKey} views={viewDisplayAndRouteName} currentView={viewDisplay}/>
                {asideContent}
            </aside>
            {description == null ? <UnfinishedText type="paragraph" isHidden>description</UnfinishedText> : <div className="description-container">{description}</div>}
            <div id={`${reactKey}-app-content`} className="app-content">{children}</div>
        </div>
    </div>
}
