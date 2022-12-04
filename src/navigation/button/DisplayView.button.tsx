import type {PossibleTooltipPlacement} from 'bootstrap/Bootstrap.types'
import type {PossibleContent}          from 'navigation/button/AbstractNavigationButton.types'

import {contentTranslation}       from 'lang/components/translationMethods'
import {AbstractNavigationButton} from 'navigation/button/AbstractNavigationButton'

/**
 * @reactComponent
 */
export default class DisplayViewButton
    extends AbstractNavigationButton {

    static readonly #ID = 'displayView-button'

    protected override get _isTopButton() {
        return true
    }

    protected override get _id() {
        return DisplayViewButton.#ID
    }

    protected override get _tooltipPlacement(): PossibleTooltipPlacement {
        return 'bottom'
    }

    protected override _getContent(): PossibleContent {
        return `${contentTranslation('Display')}…`
    }

}
