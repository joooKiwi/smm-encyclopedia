import {PureComponent} from 'react';

import type {ModalProperties}                           from '../ModalContainers.types';
import type {PossibleContent, PossibleTooltipPlacement} from './AbstractNavigationButton.types';
import type {ReactComponent}                            from '../../util/react/ReactComponent';
import type {ReactElement, ReactProperty}               from '../../util/react/ReactProperty';
import type {TranslationMethod}                         from '../../lang/components/TranslationProperty';

import ContentTranslationComponent from '../../lang/components/ContentTranslationComponent';
import Tooltip                     from '../../bootstrap/tooltip/Tooltip';
import ModalButton                 from '../../bootstrap/modal/element/ModalButton';

interface NavButtonProperties
    extends ReactProperty, ModalProperties {

}

/**
 * A generic navigation button.
 * It contains a {@link Tooltip} & a {@link ModalButton}.
 *
 * @reactComponent
 */
export abstract class AbstractNavigationButton
    extends PureComponent<NavButtonProperties>
    implements ReactComponent {

    /**
     * <p>
     * Tell whenever it is a top ot bottom button.
     * </p>
     *
     * <p>
     * If it's <b>true</b>, then the color will be "primary".
     * Otherwise (<b>false</b>), this will be "light".
     * </b>
     */
    protected abstract get _isTopButton(): boolean;

    /**
     * The current id of the {@link ModalButton button}
     */
    protected abstract get _id(): string;

    /**
     * The tooltip placement as only left for the right buttons
     * & bottom for the centered buttons.
     *
     * @return the tooltip placement
     */
    protected abstract get _tooltipPlacement(): PossibleTooltipPlacement;

    /**
     * The added classes (as a bootstrap svg)
     */
    protected get _addedClass(): string {
        return '';
    }

    /**
     * Get the content from the translation in the "content" resource.
     *
     * @param translation the {@link TranslationMethod translation method}
     * @return a single content or a content that is hidden once the screen is shorter
     */
    protected abstract _getContent(translation: TranslationMethod<'content'>,): PossibleContent;

    public override render(): ReactElement {
        return <ContentTranslationComponent>{translation => {
            const isTopButton = this._isTopButton;
            const id = this._id;
            const contentValue = this._getContent(translation);
            const willBeHiddenOnShorterScreen = typeof contentValue != 'string';
            const content = willBeHiddenOnShorterScreen ? contentValue[0] : contentValue;

            return <Tooltip elementId={id} option={({title: content, placement: this._tooltipPlacement,})}>
                <ModalButton key={`navigation button (${id})`} id={id} elementToShow={this.props.id}
                             className={`btn btn-lg btn-outline-${isTopButton ? 'primary' : 'light'} btn-navigation ${this._addedClass} rounded-pill`}>{
                    willBeHiddenOnShorterScreen
                        ? <span key={`navigation text button (${id})`} className={`btn-navigation-text d-none d-${contentValue[1]}-inline-block`}>{content}</span>
                        : <span key={`navigation text button (${id})`} className="btn-navigation-text">{content}</span>
                }
                </ModalButton>
            </Tooltip>;
        }
        }</ContentTranslationComponent>;
    }

}
