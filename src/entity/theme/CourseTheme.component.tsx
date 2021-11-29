import type {ThemeProperty} from '../properties/ThemeProperty';

import GameContentTranslationComponent from '../../lang/components/GameContentTranslationComponent';
import {ThemeComponent}                from './Theme.component';
import {Themes}                        from './Themes';

/**
 * @reactComponent
 */
export default class CourseThemeComponent
    extends ThemeComponent<ThemeProperty> {


    protected get map() {
        return this.reference.toCourseThemeMap();
    }

    protected get _isInAll() {
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

    protected _renderSingleComponent(theme: Themes,) {
        return CourseThemeComponent.renderSingleComponent(theme, true, this.name.english,);
    }

    protected _renderComponentForAllAsText() {
        return <GameContentTranslationComponent children={translation => <span>{translation('Every themes')}</span>}/>;
    }

    protected _renderComponentForAllAsImages() {
        return <div key={`${this.name.english} (every course themes)`}>{Themes.courseThemes.map(courseTheme => this._renderSingleComponent(courseTheme))}</div>;
    }

}
