import type {ThemeProperty} from '../properties/ThemeProperty';
import type {Themes}        from './Themes';

import GameContentTranslationComponent from '../../lang/components/GameContentTranslationComponent';
import {ThemeComponent}                from './Theme.component';

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

    protected _renderComponentForAll() {
        return <GameContentTranslationComponent children={translation => <span>{translation('Every themes')}</span>}/>;
    }

}
