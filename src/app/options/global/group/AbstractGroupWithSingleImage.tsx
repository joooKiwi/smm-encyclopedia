import AbstractGroup from './AbstractGroup';
import Image         from '../../../tools/images/Image';

import type {OnClickCallback, PossibleElement, PossibleOptionValue} from './Group.types';
import type {GlobalAppOption}                                       from '../GlobalAppOption';
import type {ReactElement}                                          from '../../../../util/react/ReactProperty';
import type {Themes}                                                from '../../../../core/theme/Themes';
import type {GlobalThemeOption}                                     from '../GlobalThemeOption';

/**
 * @reactComponent
 */
export abstract class AbstractGroupWithSingleImage<T extends Exclude<PossibleElement, Themes>, U extends Exclude<PossibleOptionValue, GlobalThemeOption>, >
    extends AbstractGroup<T, U> {

    protected _renderElement(element: T, option: GlobalAppOption<U>, [isDisabled,]: readonly [boolean, boolean,], onClickCallback: OnClickCallback | null): ReactElement {
        return <Image key={`option input (${element.englishName})`} id={`optionInput-${element.englishNameInHtml}`}
                      className={`btn btn${option.get ? '' : '-outline'}-secondary  ${isDisabled ? 'disabled' : ''}`} data-bs-toggle="button"
                      source={element.imagePath} fallbackName={`option - ${element.englishName}`}
                      onClick={() => {
                          option.set(!option.get as U);
                          onClickCallback?.();
                      }}/>;
    }
}
