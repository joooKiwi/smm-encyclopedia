import type {TranslationMethod} from '../lang/components/TranslationProperty';

import {AbstractNavigationButton} from './AbstractNavigationButton';

/**
 * @reactComponent
 */
export default class DisplayViewButton
    extends AbstractNavigationButton {

    static readonly #ID = 'displayView-button';

    protected get _id(): string {
        return DisplayViewButton.#ID;
    }

    protected get tooltipPlacement(): | 'bottom' | 'left' {
        return 'bottom';
    }

    protected getContent(translation: TranslationMethod<'content'>,): string {
        return `${translation('Display')}…`;
    }

}
