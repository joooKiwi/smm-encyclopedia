import './Github.button.scss'

import ContentTranslationComponent from '../../lang/components/ContentTranslationComponent'
import {contentTranslation}        from '../../lang/components/translationMethods'
import Tooltip                     from '../../bootstrap/tooltip/Tooltip'

const ID = 'github-button'
export default function GithubButton() {
    return <ContentTranslationComponent>{translation =>
        <Tooltip option={{title: translation('Go to the GitHub repository'), placement: 'top',}} elementId={ID}>
            <a id={ID} href="https://github.com/joooKiwi/smm-encyclopedia" className="btn btn-lg btn-outline-light rounded-pill bi bi-github">
                <span>{contentTranslation('GitHub repository')}</span>
            </a>
        </Tooltip>
    }</ContentTranslationComponent>
}
