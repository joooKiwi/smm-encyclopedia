import type {PossibleContent, PossibleTooltipPlacement} from './AbstractNavigationButton.types';
import type {TranslationMethod}                         from '../lang/components/TranslationProperty';

import {AbstractNavigationButton} from './AbstractNavigationButton';

/**
 * @reactComponent
 */
export default class DisplayViewButton
    extends AbstractNavigationButton {

    static readonly #ID = 'displayView-button';

    protected get _isTopButton(): boolean {
        return true;
    }

    protected get _id(): string {
        return DisplayViewButton.#ID;
    }

    protected get tooltipPlacement(): PossibleTooltipPlacement {
        return 'bottom';
    }

    protected getContent(translation: TranslationMethod<'content'>,): PossibleContent {
        return `${translation('Display')}…`;
    }

}
