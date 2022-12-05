import type {TimeProperty} from 'core/entity/properties/time/TimeProperty'

import Image                                 from 'app/tools/images/Image'
import TextComponent                         from 'app/tools/text/TextComponent'
import {AbstractDualEntityPropertyComponent} from 'core/_component/AbstractDualEntityPropertyComponent'
import {Times}                               from 'core/time/Times'
import {gameContentTranslation}              from 'lang/components/translationMethods'
import {StringContainer}                     from 'util/StringContainer'

/**
 * @reactComponent
 */
export default class TimeComponent
    extends AbstractDualEntityPropertyComponent<TimeProperty> {

    protected override get _isInAll() {
        return this.reference.isInDayTheme
            && (this.reference.isInNightTheme ?? false)
    }

    protected override get _isInFirst() {
        return this.reference.isInDayTheme
    }

    protected _renderSingleComponent(time: Times,) {
        return TimeComponent.renderSingleComponent(time, this.name.english,)
    }

    public static renderSingleComponent(time: Times, identifier?: string,) {
        const timeEnglishNameInHtml = time.englishNameInHtml
        const key = identifier == null ? time.englishName : `${identifier} - ${time.englishName}`
        const id = identifier == null ? `${timeEnglishNameInHtml}-image` : `${StringContainer.getInHtml(identifier)}-${timeEnglishNameInHtml}-time-image`

        return <Image key={key} id={id} source={time.imagePath} fallbackName={`${time.englishName} - image`} className={`time-image ${timeEnglishNameInHtml}-image`}/>
    }

    protected override _renderFirstComponent() {
        return this._renderSingleComponent(Times.DAY)
    }

    protected override _renderSecondComponent() {
        return this._renderSingleComponent(Times.NIGHT)
    }

    protected override _renderComponentForAllAsText() {
        return <TextComponent content={gameContentTranslation('Every times')}/>
    }

    protected override _renderComponentForAllAsImages() {
        return <div key={`Every times images (${this.name.english})`}>{Times.values.map(time => this._renderSingleComponent(time))}</div>
    }

}
