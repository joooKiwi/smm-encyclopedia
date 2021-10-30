import type {TimeProperty}   from '../properties/TimeProperty';

import {AbstractDualEntityPropertyComponent} from '../_component/AbstractDualEntityPropertyComponent';
import GameContentTranslationComponent       from '../../lang/components/GameContentTranslationComponent';
import {Times}                               from './Times';

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
        return <i key={`${this.name.english} - ${time.englishName}`} className={`time_image ${time === Times.DAY ? 'bi-sun-fill' : 'bi-moon-fill'}`}/>;
    }

    protected _renderFirstComponent() {
        return this._renderSingleComponent(Times.DAY);
    }

    protected _renderSecondComponent() {
        return this._renderSingleComponent(Times.NIGHT);
    }

    protected _renderComponentForAll() {
        return <GameContentTranslationComponent children={translation => <span>{translation('Every times')}</span>}/>;
    }

}
