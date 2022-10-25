import './LanguageChanger.button.scss'

import type {PossibleContent}          from './AbstractNavigationButton.types'
import type {PossibleTooltipPlacement} from '../../bootstrap/Bootstrap.types'

import {AbstractNavigationButton} from './AbstractNavigationButton'
import {contentTranslation}       from '../../lang/components/translationMethods'

/**
 * @reactComponent
 * @todo change the color to not be black for the "Change the language" tooltip
 */
export default class LanguageChangerButton
    extends AbstractNavigationButton {

    static readonly #ID = 'languageChanger-button'

    protected override get _isTopButton() {
        return false
    }

    protected override get _id() {
        return LanguageChangerButton.#ID
    }

    protected override get _tooltipPlacement(): PossibleTooltipPlacement {
        return 'left'
    }

    protected override get _addedClass() {
        return 'bi-translate'
    }

    protected override _getContent(): PossibleContent {
        return contentTranslation('Change the language')
    }

}
