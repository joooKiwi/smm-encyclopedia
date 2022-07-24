import './LanguageChanger.button.scss';

import type {PossibleContent, PossibleTooltipPlacement} from './AbstractNavigationButton.types';
import type {TranslationMethod}                         from '../../lang/components/TranslationProperty';

import {AbstractNavigationButton} from './AbstractNavigationButton';

/**
 * @reactComponent
 * @todo change the color to not be black for the "Change the language" tooltip
 */
export default class LanguageChangerButton
    extends AbstractNavigationButton {

    static readonly #ID = 'languageChanger-button';

    protected override get _isTopButton() {
        return false;
    }

    protected override get _id() {
        return LanguageChangerButton.#ID;
    }

    protected override get _tooltipPlacement(): PossibleTooltipPlacement {
        return 'left';
    }

    protected override get _addedClass() {
        return 'bi-translate';
    }

    protected override _getContent(translation: TranslationMethod<'content'>,): PossibleContent {
        return translation('Change the language');
    }

}
