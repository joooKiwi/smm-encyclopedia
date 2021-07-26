import React, {PureComponent} from 'react';

import type {Name}                          from '../../lang/name/Name';
import type {TimeProperty}                  from '../properties/TimeProperty';

import {Times}                          from './Times';
import GameContentTranslationComponent  from '../../lang/components/GameContentTranslationComponent';

export interface TimeElement {

    reference: TimeProperty

    name: Name

}

export default class TimeComponent
    extends PureComponent<TimeElement> {

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
            return <span><GameContentTranslationComponent renderCallback={translation => translation('Every times')}/></span>;

        return this.reference.isInDayTheme
            ? this.__createSingleTime(Times.DAY)
            : this.__createSingleTime(Times.NIGHT);
    }

}
