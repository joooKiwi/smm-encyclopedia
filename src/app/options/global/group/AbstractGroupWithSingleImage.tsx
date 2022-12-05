import type {GlobalAppOption}                                       from 'app/options/global/GlobalAppOption'
import type {GlobalThemeOption}                                     from 'app/options/global/GlobalThemeOption'
import type {OnClickCallback, PossibleElement, PossibleOptionValue} from 'app/options/global/group/Group.types'
import type {Themes}                                                from 'core/theme/Themes'
import type {ReactElement}                                          from 'util/react/ReactProperties'
import type {NullOr}                                                from 'util/types/nullable'

import AbstractGroup from 'app/options/global/group/AbstractGroup'
import Image         from 'app/tools/images/Image'

/**
 * @reactComponent
 */
export abstract class AbstractGroupWithSingleImage<T extends Exclude<PossibleElement, Themes>, U extends Exclude<PossibleOptionValue, GlobalThemeOption>, >
    extends AbstractGroup<T, U> {

    protected override _renderElement(element: T, option: GlobalAppOption<U>, [isDisabled,]: readonly [boolean, boolean,], onClickCallback: NullOr<OnClickCallback>,): ReactElement {
        return <Image key={`option input (${element.englishName})`} id={`optionInput-${element.englishNameInHtml}`}
                      className={`btn btn${option.get ? '' : '-outline'}-secondary  ${isDisabled ? 'disabled' : ''}`} data-bs-toggle="button"
                      source={element.imagePath} fallbackName={`option - ${element.englishName}`}
                      onClick={() => {
                          option.set(!option.get as U)
                          onClickCallback?.()
                      }}/>
    }
}
