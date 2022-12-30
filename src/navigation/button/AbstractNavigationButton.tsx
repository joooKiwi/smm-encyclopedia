import {PureComponent} from 'react'

import type {PossibleTooltipPlacement} from 'bootstrap/Bootstrap.types'
import type {ModalProperties}          from 'navigation/ModalContainers.types'
import type {PossibleContent}          from 'navigation/button/AbstractNavigationButton.types'
import type {ReactComponent}           from 'util/react/ReactComponent'
import type {ReactProperties}          from 'util/react/ReactProperties'

import ModalButton from 'bootstrap/modal/element/ModalButton'
import Tooltip     from 'bootstrap/tooltip/Tooltip'

interface NavButtonProperties
    extends ReactProperties, ModalProperties {

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
    protected abstract get _isTopButton(): boolean

    /**
     * The current id of the {@link ModalButton button}
     */
    protected abstract get _id(): string

    /**
     * The tooltip placement as only left for the right buttons
     * & bottom for the centered buttons.
     *
     * @return the tooltip placement
     */
    protected abstract get _tooltipPlacement(): PossibleTooltipPlacement

    /** The added classes (as a bootstrap svg) */
    protected get _addedClass(): string {
        return ''
    }

    /**
     * A temporary getter method to disable the button
     * @temporary
     */
    protected get _isDisabled(): boolean {
        return false
    }

    /**
     * Get the content from the translation in the "content" resource.
     *
     * @return a single content or a content that is hidden once the screen is shorter
     */
    protected abstract _getContent(): PossibleContent

    public override render(): JSX.Element {
        const isTopButton = this._isTopButton,
            id = this._id,
            contentValue = this._getContent(),
            willBeHiddenOnShorterScreen = typeof contentValue != 'string',
            content = willBeHiddenOnShorterScreen ? contentValue[0] : contentValue,
            disableClass = this._isDisabled ? 'disabled' : ''

        return <Tooltip elementId={id} option={({title: content, placement: this._tooltipPlacement,})}>
            <ModalButton key={`navigation button (${id})`} id={id} elementToShow={this.props.id} className={`btn btn-lg btn-outline-${isTopButton ? 'primary' : 'light'} btn-navigation ${this._addedClass} rounded-pill ${disableClass}`}>{
                willBeHiddenOnShorterScreen
                    ? <span key={`navigation text button (${id})`} className={`btn-navigation-text d-none d-${contentValue[1]}-inline-block`}>{content}</span>
                    : <span key={`navigation text button (${id})`} className="btn-navigation-text">{content}</span>
            }
            </ModalButton>
        </Tooltip>
    }

}
