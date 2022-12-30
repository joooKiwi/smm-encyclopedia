import type {PossibleTooltipPlacement} from 'bootstrap/Bootstrap.types'
import type {PossibleContent}          from 'navigation/button/AbstractNavigationButton.types'

import {contentTranslation}       from 'lang/components/translationMethods'
import {AbstractNavigationButton} from 'navigation/button/AbstractNavigationButton'

/**
 * @reactComponent
 */
export default class ParameterButton
    extends AbstractNavigationButton {

    static readonly #ID = 'parameter-button'

    protected override get _isTopButton() {
        return true
    }

    protected override get _id() {
        return ParameterButton.#ID
    }

    protected override get _tooltipPlacement(): PossibleTooltipPlacement {
        return 'left'
    }

    protected override get _addedClass() {
        return 'bi-gear-fill'
    }

    protected override get _isDisabled(): boolean {
        return true
    }

    protected override _getContent(): PossibleContent {
        return [contentTranslation('Options'), 'lg',]
    }

}
