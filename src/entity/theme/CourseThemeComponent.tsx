import React             from 'react';
import {withTranslation} from 'react-i18next';

import GameContentTranslationComponent from '../../lang/components/GameContentTranslationComponent';
import {GameContentTranslationElement} from '../../lang/components/elements/GameContentTranslationElement';
import {Themes}                        from './Themes';
import {IsInThemeProperty}             from '../properties/IsInThemeProperty';
import {Name}                          from '../../lang/name/Name';


export interface ThemeElement
    extends GameContentTranslationElement {

    reference: IsInThemeProperty

    name: Name

}

class CourseThemeComponent
    extends GameContentTranslationComponent<ThemeElement> {

    protected get reference() {
        return this.props.reference;
    }

    protected get name() {
        return this.props.name;
    }

    protected get isInEveryGameStyles(): boolean {
        return this.reference.isInGroundTheme
            && this.reference.isInUndergroundTheme
            && this.reference.isInUnderwaterTheme
            && (this.reference.isInDesertTheme ?? false)
            && (this.reference.isInSnowTheme ?? false)
            && (this.reference.isInSkyTheme ?? false)
            && (this.reference.isInForestTheme ?? false)
            && this.reference.isInGhostHouseTheme
            && this.reference.isInAirshipTheme
            && this.reference.isInCastleTheme;
    }

    private __createSingleThemeImage(theme: Themes): JSX.Element {
        return <img key={`${this.name.english} - ${theme.englishName}`} src={theme.smallImagePath} alt={theme.englishName} className="theme_image"/>;
    }


    public render(): JSX.Element {
        if (this.isInEveryGameStyles)
            return <span>{this.translation('Every themes')}</span>;

        const themes = [] as Themes[];
        this.reference.toCourseThemeMap().forEach((isInTheme, theme) => {
            if (isInTheme)
                themes.push(theme);
        });
        if (themes.length === 1)
            return this.__createSingleThemeImage(themes[0]);
        return <div>{themes.map(theme => this.__createSingleThemeImage(theme))}</div>;
    }


}

export default withTranslation('gameContent')(CourseThemeComponent);