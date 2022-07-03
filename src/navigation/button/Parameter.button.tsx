import type {PossibleContent, PossibleTooltipPlacement} from './AbstractNavigationButton.types';
import type {TranslationMethod}                         from '../../lang/components/TranslationProperty';

import {AbstractNavigationButton} from './AbstractNavigationButton';

/**
 * @reactComponent
 */
export default class ParameterButton
    extends AbstractNavigationButton {

    static readonly #ID = 'parameter-button';

    protected override get _isTopButton() {
        return true;
    }

    protected override get _id() {
        return ParameterButton.#ID;
    }

    protected override get _tooltipPlacement(): PossibleTooltipPlacement {
        return 'left';
    }

    protected override get _addedClass() {
        return 'bi-gear-fill';
    }

    protected override _getContent(translation: TranslationMethod<'content'>,): PossibleContent {
        return [translation('Options'), 'lg',];
    }

}
