import {Fragment} from 'react'

import type {PowerUpPriority} from 'app/powerUp/priority/PowerUpPriority'
import type {EntityImageFile} from 'core/entity/file/EntityImageFile'
import type {ReactProperties} from 'util/react/ReactProperties'

import NameComponent from 'lang/name/component/Name.component'
import Image         from 'app/tools/images/Image'

interface PowerUpPriorityProperties<T extends PowerUpPriority, >
    extends ReactProperties {

    id: string

    value: | T | readonly T[]

    images?: (priority: T,) => readonly EntityImageFile[]

    /**
     * @temporaryProperty
     */
    displayName?: boolean

}

const DEFAULT_CALLBACK = (priority: PowerUpPriority,) => priority.images

/**
 * @param properties
 * @reactComponent
 */
export default function PowerUpPriorityComponent<T extends PowerUpPriority, >({id, value, images: imagesCallback = DEFAULT_CALLBACK, displayName = false,}: PowerUpPriorityProperties<T>,) {
    const priorities = value instanceof Array ? value : [value]
    return <div key={`Power-up priority (${id})`} id={id}>
        {priorities.map((priority, index,) => {
                const priorityName = priority.name,
                    priorityEnglishName = priorityName.english

                return <Fragment key={`Power-up priority (group - ${priorityEnglishName} #${index + 1})`}>
                    {displayName ? <NameComponent key={`Power-up priority (name - ${priorityEnglishName} #${index + 1})`} id={`powerUpPriority-${priorityEnglishName}`} name={priorityName}/> : null}
                    {imagesCallback(priority).map((image, index2,) =>
                        <Image key={`Power-up priority (image - ${priorityEnglishName} #${index + 1}-${index2 + 1})`} file={image}/>)}
                </Fragment>
            }
        )}
    </div>
}
