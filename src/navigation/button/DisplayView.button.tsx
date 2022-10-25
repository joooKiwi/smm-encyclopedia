import type {PossibleContent}          from './AbstractNavigationButton.types'
import type {PossibleTooltipPlacement} from '../../bootstrap/Bootstrap.types'

import {AbstractNavigationButton} from './AbstractNavigationButton'
import {contentTranslation}       from '../../lang/components/translationMethods'

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
