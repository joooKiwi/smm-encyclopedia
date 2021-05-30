import {withTranslation} from 'react-i18next';
import React             from 'react';

import {GameContentTranslationElement} from '../../lang/components/elements/GameContentTranslationElement';
import GameContentTranslationComponent from '../../lang/components/GameContentTranslationComponent';
import {Name}                          from '../../lang/name/Name';
import {IsInTimeProperty}              from '../properties/IsInTimeProperty';
import {Times}                         from './Times';

export interface TimeElement
    extends GameContentTranslationElement {

    reference: IsInTimeProperty

    name: Name

}

class TimeComponent
    extends GameContentTranslationComponent<TimeElement> {

    protected get reference() {
        return this.props.reference;
    }

    protected get name() {
        return this.props.name;
    }

    protected get isInEveryTimes(): boolean {
        return this.reference.isInDayTheme
            && (this.reference.isInNightTheme ?? false);
    }


    private __createSingleTime(time: Times,): JSX.Element {
        return <i key={`${this.name.english} - ${time.englishName}`} className={`time_image ${time === Times.DAY ? 'bi-sun-fill' : 'bi-moon-fill'}`}/>;
    }

    public render(): JSX.Element {
        if (this.isInEveryTimes)
            return <span>{this.translation('Every times')}</span>;

        return this.reference.isInDayTheme
            ? this.__createSingleTime(Times.DAY)
            : this.__createSingleTime(Times.NIGHT);
    }

}

export default withTranslation('gameContent')(TimeComponent);
