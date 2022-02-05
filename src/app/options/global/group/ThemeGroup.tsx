import AbstractGroup from './AbstractGroup';
import {Times}       from '../../../../core/time/Times';

import type {GlobalThemeOption} from '../GlobalThemeOption';
import type {GlobalAppOption}   from '../GlobalAppOption';
import type {OnClickCallback}   from './Group.types';
import type {ReactElement}      from '../../../../util/react/ReactProperty';
import type {Themes}            from '../../../../core/theme/Themes';

/**
 * @reactComponent
 */
export default class ThemeGroup
    extends AbstractGroup<Themes, GlobalThemeOption> {

    protected _renderElement(element: Themes, option: GlobalAppOption<GlobalThemeOption>, isDisabled: boolean, onClickCallback: | OnClickCallback | null,): ReactElement {
        const optionValue = option.get;
        const [value, timeValues,] = [optionValue.dayValue || optionValue.nightValue,
            [
                [Times.DAY, optionValue.dayValue, false, () => option.set(optionValue.reverseDayValue),],
                [Times.NIGHT, optionValue.nightValue, isDisabled, () => option.set(optionValue.reverseNightValue),],
            ],
        ] as const;

        return <div key={`option container (${element.englishName})`} id={`${element.englishNameInHtml}-option-container`} className="btn-group-vertical" role="group">
            <img key={`option image (${element.englishName})`} id={`${element.englishNameInHtml}-option-image`} className={`btn btn${value ? '' : '-outline'}-secondary`}
                 src={element.smallImagePath} alt={`option - ${element.englishName}`}
                 onClick={() => option.set(optionValue.set(value))}/>
            <div key={`option time image (${element.englishName})`} id={`${element.englishNameInHtml}-option-time-image`} className="btn-group btn-group-sm">{
                timeValues.map(([time, value, isDisabled, callback,]) =>
                    <img key={`option image (${element.englishName} - ${time.englishName})`} id={`${element.englishNameInHtml}-${time.englishNameInHtml}-option-image`}
                         className={`btn btn${value ? '' : '-outline'}-secondary ${isDisabled ? 'disabled' : ''}`}
                         src={time.imagePath} alt={`option - ${element.englishName} (${time.englishName})`}
                         onClick={callback}/>)
            }
            </div>
        </div>;
    }

}
