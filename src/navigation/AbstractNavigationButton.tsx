import {PureComponent} from 'react';

import type {ModalProperties}   from './ModalContainers.types';
import type {ReactComponent}    from '../util/react/ReactComponent';
import type {ReactProperty}     from '../util/react/ReactProperty';
import type {TranslationMethod} from '../lang/components/TranslationProperty';

import ContentTranslationComponent from '../lang/components/ContentTranslationComponent';
import Tooltip                     from '../bootstrap/tooltip/Tooltip';
import ModalButton                 from '../bootstrap/modal/element/ModalButton';

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
     * The current id of the {@link ModalButton button}
     */
    protected abstract get _id(): string;

    /**
     * The tooltip placement as only left for the right buttons
     * & bottom for the centered buttons.
     */
    protected abstract get tooltipPlacement(): | 'bottom' | 'left';

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
     */
    protected abstract getContent(translation: TranslationMethod<'content'>,): string;

    public render() {
        return <ContentTranslationComponent>{translation => {
            const id = this._id;
            const content = this.getContent(translation);

            return <Tooltip elementId={id} option={({title: content, placement: this.tooltipPlacement,})}>
                <ModalButton id={id} elementToShow={this.props.id} className={`btn btn-lg btn-outline-primary ${this._addedClass} rounded-pill`}>
                    {content}
                </ModalButton>
            </Tooltip>;
        }
        }</ContentTranslationComponent>;
    }

}
