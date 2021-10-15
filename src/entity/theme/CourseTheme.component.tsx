import type {ThemeProperty} from '../properties/ThemeProperty';
import type {Themes}        from './Themes';

import {AbstractEntityPropertyComponent} from '../_component/AbstractEntityPropertyComponent';
import GameContentTranslationComponent   from '../../lang/components/GameContentTranslationComponent';

/**
 * @reactComponent
 */
export default class CourseThemeComponent
    extends AbstractEntityPropertyComponent<ThemeProperty, Themes> {


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
        return <img key={`${this.name.english} - ${theme.englishName}`} src={theme.smallImagePath} alt={theme.englishName} className="theme_image"/>;
    }

    protected _renderComponentForAll() {
        return <GameContentTranslationComponent children={translation => <span>{translation('Every themes')}</span>}/>;
    }

}
