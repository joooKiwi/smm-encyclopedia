import type {PossibleTooltipPlacement} from 'bootstrap/Bootstrap.types'
import type {PossibleContent}          from 'navigation/button/AbstractNavigationButton.types'

import {contentTranslation}       from 'lang/components/translationMethods'
import {AbstractNavigationButton} from 'navigation/button/AbstractNavigationButton'

/**
 * @reactComponent
 */
export default class SearchButton
    extends AbstractNavigationButton {

    static readonly #ID = 'search-button'

    protected override get _isTopButton() {
        return true
    }

    protected override get _id() {
        return SearchButton.#ID
    }

    protected override get _tooltipPlacement(): PossibleTooltipPlacement {
        return 'bottom'
    }

    protected override get _addedClass() {
        return 'bi-search'
    }

    protected override _getContent(): PossibleContent {
        return [`${contentTranslation('Search')}…`, 'md',]
    }

}
