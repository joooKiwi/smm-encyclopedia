import './PageViewChanger.scss'

import type {SimpleReactPropertiesWithChildren} from 'util/react/ReactProperties'

import {contentTranslation} from 'lang/components/translationMethods'

export default function PageViewChanger({children,}: SimpleReactPropertiesWithChildren<NonNullReactElementOrArray>,) {
    return <aside id="pageViewChanger-container" className="rounded-5 p-3 ms-auto">
        <h4 className="fst-italic text-end">
            <span className="me-1">{contentTranslation('Visual',)}</span>
            <button type="button" id="btn-expand"   className="btn btn-outline-primary bi bi-arrows-expand p-1"   data-bs-toggle="collapse" data-bs-target=".pageViewChanger-content-container" aria-expanded="true" aria-controls="pageViewChanger-content-container"/>
            <button type="button" id="btn-collapse" className="btn btn-outline-primary bi bi-arrows-collapse p-1" data-bs-toggle="collapse" data-bs-target=".pageViewChanger-content-container" aria-expanded="true" aria-controls="pageViewChanger-content-container"/>
        </h4>
        <div id="pageViewChanger-content-container" className="pageViewChanger-content-container collapse show">
            <div className="d-flex flex-column-reverse flex-sm-row flex-wrap justify-content-end align-items-end align-items-sm-start">
                {children}
            </div>
        </div>
    </aside>
}
