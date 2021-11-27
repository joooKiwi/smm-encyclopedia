import type {TimeProperty} from '../properties/TimeProperty';

import {AbstractDualEntityPropertyComponent} from '../_component/AbstractDualEntityPropertyComponent';
import GameContentTranslationComponent       from '../../lang/components/GameContentTranslationComponent';
import {Times}                               from './Times';
import {StringContainer}                     from '../StringContainer';

/**
 * @reactComponent
 */
export default class TimeComponent
    extends AbstractDualEntityPropertyComponent<TimeProperty> {

    protected get _isInAll() {
        return this.reference.isInDayTheme
            && (this.reference.isInNightTheme ?? false);
    }

    protected get _isInFirst() {
        return this.reference.isInDayTheme;
    }

    protected _renderSingleComponent(time: Times,) {
        return TimeComponent.renderSingleComponent(time, this.name.english,);
    }

    public static renderSingleComponent(time: Times, identifier?: string,) {
        const timeEnglishNameInHtml = time.englishNameInHtml;
        const key = identifier == null ? time.englishName : `${identifier} - ${time.englishName}`;
        const id = identifier == null ? `${timeEnglishNameInHtml}-image` : `${StringContainer.getInHtml(identifier)}-${timeEnglishNameInHtml}-time-image`;

        return <i key={key} id={id} className={`time-image ${timeEnglishNameInHtml}-image ${time === Times.DAY ? 'bi-sun-fill' : 'bi-moon-fill'}`}/>;
    }

    protected _renderFirstComponent() {
        return this._renderSingleComponent(Times.DAY);
    }

    protected _renderSecondComponent() {
        return this._renderSingleComponent(Times.NIGHT);
    }

    protected _renderComponentForAll() {
        return <GameContentTranslationComponent>{translation => <span>{translation('Every times')}</span>}</GameContentTranslationComponent>;
    }

}
