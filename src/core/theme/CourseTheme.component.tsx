import type {ThemeProperty} from 'core/entity/properties/theme/ThemeProperty'

import {ThemeComponent}         from 'core/theme/Theme.component'
import {Themes}                 from 'core/theme/Themes'
import {gameContentTranslation} from 'lang/components/translationMethods'

/**
 * @reactComponent
 */
export default class CourseThemeComponent
    extends ThemeComponent<ThemeProperty> {


    protected override get _map() {
        return this.reference.toCourseThemeMap()
    }

    protected override get _isInAll() {
        return this.reference.isInGroundTheme
            && this.reference.isInUndergroundTheme
            && this.reference.isInUnderwaterTheme
            && (this.reference.isInDesertTheme ?? false)
            && (this.reference.isInSnowTheme ?? false)
            && (this.reference.isInSkyTheme ?? false)
            && (this.reference.isInForestTheme ?? false)
            && this.reference.isInGhostHouseTheme
            && this.reference.isInAirshipTheme
            && this.reference.isInCastleTheme
    }

    protected override _renderSingleComponent(theme: Themes,) {
        return CourseThemeComponent.renderSingleComponent(theme, true, this.name.english,)
    }

    protected override _renderComponentForAllAsText() {
        return <span>{gameContentTranslation('Every themes')}</span>
    }

    protected override _renderComponentForAllAsImages() {
        return <div key={`${this.name.english} (every course themes)`}>{Themes.courseThemes.map(courseTheme => this._renderSingleComponent(courseTheme))}</div>
    }

}
