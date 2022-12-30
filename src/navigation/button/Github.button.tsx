import Tooltip              from 'bootstrap/tooltip/Tooltip'
import {contentTranslation} from 'lang/components/translationMethods'

const ID = 'github-button'
export default function GithubButton() {
    return <Tooltip option={{title: contentTranslation('Go to the GitHub repository'), placement: 'top',}} elementId={ID}>
        <a id={ID} href="https://github.com/joooKiwi/smm-encyclopedia" className="btn btn-lg btn-outline-light rounded-pill bi bi-github">
            <span className="d-none d-sm-inline">{contentTranslation('GitHub repository')}</span>
        </a>
    </Tooltip>
}
