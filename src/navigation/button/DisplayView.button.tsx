import type {PossibleContent, PossibleTooltipPlacement} from './AbstractNavigationButton.types';
import type {TranslationMethod}                         from '../../lang/components/TranslationProperty';

import {AbstractNavigationButton} from './AbstractNavigationButton';

/**
 * @reactComponent
 */
export default class DisplayViewButton
    extends AbstractNavigationButton {

    static readonly #ID = 'displayView-button';

    protected override get _isTopButton() {
        return true;
    }

    protected override get _id() {
        return DisplayViewButton.#ID;
    }

    protected override get tooltipPlacement(): PossibleTooltipPlacement {
        return 'bottom';
    }

    protected override getContent(translation: TranslationMethod<'content'>,): PossibleContent {
        return `${translation('Display')}…`;
    }

}
