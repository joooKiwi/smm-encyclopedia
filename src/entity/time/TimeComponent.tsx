import type {TimeProperty}   from '../properties/TimeProperty';

import {AbstractDualEntityPropertyComponent} from '../_component/AbstractDualEntityPropertyComponent';
import GameContentTranslationComponent       from '../../lang/components/GameContentTranslationComponent';
import {Times}                               from './Times';

/**
 * @reactComponent
 */
export default class TimeComponent
    extends AbstractDualEntityPropertyComponent<TimeProperty> {

    protected get _isInAll(): boolean {
        return this.reference.isInDayTheme
            && (this.reference.isInNightTheme ?? false);
    }

    protected get _isInFirst(): boolean {
        return this.reference.isInDayTheme;
    }

    protected _renderSingleComponent(time: Times,): JSX.Element {
        return <i key={`${this.name.english} - ${time.englishName}`} className={`time_image ${time === Times.DAY ? 'bi-sun-fill' : 'bi-moon-fill'}`}/>;
    }

    protected _renderFirstComponent(): JSX.Element {
        return this._renderSingleComponent(Times.DAY);
    }

    protected _renderSecondComponent(): JSX.Element {
        return this._renderSingleComponent(Times.NIGHT);
    }

    protected _renderComponentForAll(): JSX.Element {
        return <GameContentTranslationComponent children={translation => <span>{translation('Every times')}</span>}/>;
    }

}
