import {useRef} from 'react'

import Tooltip              from 'bootstrap/tooltip/Tooltip'
import {contentTranslation} from 'lang/components/translationMethods'

export default function GithubButton() {
    const htmlElement = useRef<HTMLAnchorElement>(null,)

    return <Tooltip option={{title: contentTranslation('Go to the GitHub repository',), placement: 'top',}} reference={htmlElement}>
        <a ref={htmlElement} type="button" id="github-button" href="https://github.com/joooKiwi/smm-encyclopedia" className="btn btn-lg btn-outline-light rounded-pill bi bi-github">
            <span className="d-none d-sm-inline">{contentTranslation('GitHub repository',)}</span>
        </a>
    </Tooltip>
}
