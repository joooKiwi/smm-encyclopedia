import type {GroupProperties} from 'app/options/global/group/Group.types'
import type {Times}           from 'core/time/Times'

import Image from 'app/tools/images/Image'

/**
 * @todo Change the time group to not be global
 * @todo Change the time group to be like the game and game style group
 * @reactComponent
 */
export default function TimeGroup({isHidden = false, elements,}: GroupProperties<Times, boolean>,) {
    if (isHidden)
        return null
    return <div key={`option container (times)`} id="times-option-container" className="container-fluid">{
        elements.map(([element, option, isDisabled, isHidden, onClickCallback = null,]) => {
            if (isHidden)
                return null

            const isDisabled2 = isDisabled == null ? false : typeof isDisabled == 'boolean' ? isDisabled : isDisabled[0]
            return <Image key={`option input (${element.englishName})`} id={`optionInput-${element.englishNameInHtml}`}
                          className={`btn btn${option.get ? '' : '-outline'}-secondary  ${isDisabled2 ? 'disabled' : ''}`} data-bs-toggle="button"
                          file={element.imageFile}
                          onClick={() => {
                              option.set(!option.get,)
                              onClickCallback?.()
                          }}/>
        })
    }</div>
}
