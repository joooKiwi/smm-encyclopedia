import {GameContentTranslationElement} from '../../lang/components/elements/GameContentTranslationElement';
import GameContentTranslationComponent from '../../lang/components/GameContentTranslationComponent';
import {Times}                         from './Times';
import {Name}                          from '../../lang/name/Name';
import React                           from 'react';
import {IsInTimeProperty}              from '../properties/IsInTimeProperty';
// import {BsMoon, BsSun}                 from 'react-icons/bs';
import {withTranslation}               from 'react-i18next';

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
