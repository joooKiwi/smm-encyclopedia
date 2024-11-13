import type {GlobalAppOption}   from 'app/options/global/GlobalAppOption'
import type {GlobalThemeOption} from 'app/options/global/GlobalThemeOption'
import type {GroupProperties}   from 'app/options/global/group/Group.types'
import type {Themes}            from 'core/theme/Themes'

import Image   from 'app/tools/images/Image'
import {Times} from 'core/time/Times'
import {Empty} from 'util/emptyVariables'

import EMPTY_STRING = Empty.EMPTY_STRING

/**
 * @todo Change the theme group to not be global
 * @todo Change the theme group to be like the game and game style group
 * @reactComponent
 */
export default function ThemeGroup({isHidden = false, elements,}: GroupProperties<Themes, GlobalThemeOption>,) {
    if (isHidden)
        return null
    return <div key={`option container (themes)`} id="themes-option-container" className="container-fluid">{
        elements.map(([element, option, isDisabled, isHidden, onClickCallback = null,]) => {
            if (isHidden)
                return null

            const [hasSMM2Selected, isDisabledNight,] = isDisabled == null ? [false, false,] : typeof isDisabled == 'boolean' ? [isDisabled, false,] : isDisabled
            return <div key={`option container (${element.englishName})`} id={`${element.englishNameInHtml}-option-container`} className="btn-group-vertical" role="group">{
                hasSMM2Selected
                    ? renderElementWithDayAndNight(element, option, isDisabledNight,)
                    : renderElementWithOnlyDay(element, option,)
            }</div>
        },)
    }</div>
}

function renderElementWithDayAndNight(element: Themes, option: GlobalAppOption<GlobalThemeOption>, isDisabledNight: boolean,) {
    const optionValue = option.get
    const value = optionValue.dayValue || optionValue.nightValue

    return <>
        {renderThemeImage(element, value, isDisabledNight, () => option.set(optionValue.set(value)),)}
        <div key={`option time image (${element.englishName})`} id={`${element.englishNameInHtml}-option-time-image`} className="btn-group btn-group-sm">
            <Image id={`${element.englishNameInHtml}-day-option-image`}
                   className={`btn btn${optionValue.dayValue ? EMPTY_STRING : '-outline'}-secondary`}
                   file={Times.DAY.imageFile} onClick={() => option.set(optionValue.reverseDayValue,)}/>
            <Image id={`${element.englishNameInHtml}-night-option-image`}
                   className={`btn btn${optionValue.nightValue ? EMPTY_STRING : '-outline'}-secondary ${isDisabledNight ? 'disabled' : EMPTY_STRING}`}
                   file={Times.NIGHT.imageFile} onClick={() => option.set(optionValue.reverseNightValue,)}/>
        </div>
    </>
}

function renderElementWithOnlyDay(element: Themes, option: GlobalAppOption<GlobalThemeOption>,) {
    const optionValue = option.get
    const value = optionValue.dayValue

    return renderThemeImage(element, value, false, () => option.set(optionValue.reverseDayValue,),)
}

function renderThemeImage(element: Themes, value: boolean, isDisabled: boolean, onClickCallback: () => void,) {
    return <Image key={`option image (${element.englishName})`} id={`${element.englishNameInHtml}-option-image`}
                  className={`btn btn${value ? EMPTY_STRING : '-outline'}-secondary ${isDisabled ? 'disabled' : EMPTY_STRING}`}
                  file={element.smallImageFile} alt={`option - ${element.englishName}`}
                  onClick={onClickCallback}/>
}
