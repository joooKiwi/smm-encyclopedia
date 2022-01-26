import type {TranslationMethod} from '../lang/components/TranslationProperty';

import {AbstractNavigationButton} from './AbstractNavigationButton';

/**
 * @reactComponent
 */
export default class ParameterButton
    extends AbstractNavigationButton {

    static readonly #ID = 'parameter-button';

    protected get _id(): string {
        return ParameterButton.#ID;
    }

    protected get tooltipPlacement(): | 'bottom' | 'left' {
        return 'left';
    }

    protected get _addedClass(): string {
        return 'bi-gear-fill';
    }

    protected getContent(translation: TranslationMethod<'content'>,): string {
        return translation('Options');
    }

}
