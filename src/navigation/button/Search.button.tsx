import type {PossibleContent, PossibleTooltipPlacement} from './AbstractNavigationButton.types';
import type {TranslationMethod}                         from '../../lang/components/TranslationProperty';

import {AbstractNavigationButton} from './AbstractNavigationButton';

/**
 * @reactComponent
 */
export default class SearchButton
    extends AbstractNavigationButton {

    static readonly #ID = 'search-button';

    protected get _isTopButton(): boolean {
        return true;
    }

    protected get _id(): string {
        return SearchButton.#ID;
    }

    protected get tooltipPlacement(): PossibleTooltipPlacement {
        return 'bottom';
    }

    protected get _addedClass(): string {
        return 'bi-search';
    }

    protected getContent(translation: TranslationMethod<'content'>,): PossibleContent {
        return [`${translation('Search')}…`, 'md',];
    }

}
