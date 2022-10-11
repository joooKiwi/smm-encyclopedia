import type {PossibleContent}          from './AbstractNavigationButton.types'
import type {PossibleTooltipPlacement} from '../../bootstrap/Bootstrap.types'
import type {TranslationMethod}        from '../../lang/components/TranslationProperty'

import {AbstractNavigationButton} from './AbstractNavigationButton'

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

    protected override _getContent(translation: TranslationMethod<'content'>,): PossibleContent {
        return [`${translation('Search')}…`, 'md',]
    }

}
