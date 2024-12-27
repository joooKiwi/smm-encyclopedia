import type {ViewDisplays}                from 'app/withInterpreter/ViewDisplays'
import type {ReactPropertiesWithChildren} from 'util/react/ReactProperties'

interface SubMainProperties
    extends ReactPropertiesWithChildren<ArrayNonNullReactElement> {

    /** The starting {@link Element.id id} of the {@link HTMLDivElement} */
    readonly 'partial-id': string

    /** The {@link ViewDisplays} to retrieve its {@link ViewDisplays.htmlType html type} */
    readonly viewDisplay: ViewDisplays

}

/** @reactComponent */
export default function SubMain(properties: SubMainProperties,) {
    const partialId = properties['partial-id']

    return <div id={`${partialId}-subMain-container`} className="subMain-container">
        <div id={`${partialId}-app-container`} className={`app-container ${properties.viewDisplay.type}-container`}>
            {properties.children}
        </div>
    </div>
}
