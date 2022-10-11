import AbstractGroup from './AbstractGroup'
import {Times}       from '../../../../core/time/Times'

import type {GlobalThemeOption} from '../GlobalThemeOption'
import type {GlobalAppOption}   from '../GlobalAppOption'
import type {OnClickCallback}   from './Group.types'
import type {ReactElement}      from '../../../../util/react/ReactProperties'
import type {Themes}            from '../../../../core/theme/Themes'

/**
 * @reactComponent
 */
export default class ThemeGroup
    extends AbstractGroup<Themes, GlobalThemeOption> {

    protected override _renderElement(element: Themes, option: GlobalAppOption<GlobalThemeOption>, [hasSMM2Selected, isDisabledNight,]: readonly [boolean, boolean,], onClickCallback: | OnClickCallback | null,): ReactElement {
        return <div key={`option container (${element.englishName})`} id={`${element.englishNameInHtml}-option-container`} className="btn-group-vertical" role="group">{
            hasSMM2Selected
                ? ThemeGroup.#renderElementWithDayAndNight(element, option, isDisabledNight,)
                : ThemeGroup.#renderElementWithOnlyDay(element, option,)
        }</div>
    }


    static #renderThemeImage(element: Themes, value: boolean, isDisabled: boolean, onClickCallback: () => void,): ReactElement {
        return <img key={`option image (${element.englishName})`} id={`${element.englishNameInHtml}-option-image`}
                    className={`btn btn${value ? '' : '-outline'}-secondary ${isDisabled ? 'disabled' : ''}`}
                    src={element.smallImagePath} alt={`option - ${element.englishName}`}
                    onClick={onClickCallback}/>
    }

    static #renderElementWithOnlyDay(element: Themes, option: GlobalAppOption<GlobalThemeOption>,): ReactElement {
        const optionValue = option.get
        const value = optionValue.dayValue

        return this.#renderThemeImage(element, value, false, () => option.set(optionValue.reverseDayValue),)
    }

    static #renderElementWithDayAndNight(element: Themes, option: GlobalAppOption<GlobalThemeOption>, isDisabledNight: boolean,): ReactElement {
        const optionValue = option.get
        const [value, timeValues,] = [optionValue.dayValue || optionValue.nightValue,
            [
                [Times.DAY, optionValue.dayValue, false, () => option.set(optionValue.reverseDayValue),],
                [Times.NIGHT, optionValue.nightValue, isDisabledNight, () => option.set(optionValue.reverseNightValue),],
            ],
        ] as const

        return <>
            {this.#renderThemeImage(element, value, isDisabledNight, () => option.set(optionValue.set(value)),)}
            <div key={`option time image (${element.englishName})`} id={`${element.englishNameInHtml}-option-time-image`} className="btn-group btn-group-sm">{
                timeValues.map(([time, value, isDisabled, callback,]) =>
                    <img key={`option image (${element.englishName} - ${time.englishName})`} id={`${element.englishNameInHtml}-${time.englishNameInHtml}-option-image`}
                         className={`btn btn${value ? '' : '-outline'}-secondary ${isDisabled ? 'disabled' : ''}`}
                         src={time.imagePath} alt={`option - ${element.englishName} (${time.englishName})`}
                         onClick={callback}/>)
            }</div>
        </>
    }

}
