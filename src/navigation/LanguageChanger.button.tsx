import './LanguageChanger.scss';

import type {PossibleContent, PossibleTooltipPlacement} from './AbstractNavigationButton.types';
import type {TranslationMethod}                         from '../lang/components/TranslationProperty';

import {AbstractNavigationButton}                  from './AbstractNavigationButton';


/**
 * @reactComponent
 * @todo change the color to not be black for the "Change the language" tooltip
 */
export default class LanguageChangerButton
    extends AbstractNavigationButton {

    static readonly #ID = 'languageChanger-button';

    protected get _isTopButton(): boolean {
        return false;
    }

    protected get _id(): string {
        return LanguageChangerButton.#ID;
    }

    protected get tooltipPlacement(): PossibleTooltipPlacement {
        return 'left';
    }

    protected get _addedClass(): string {
        return 'bi-translate';
    }

    protected getContent(translation: TranslationMethod<'content'>,): PossibleContent {
        return [translation('Change the language'), 'md',];
    }

}
