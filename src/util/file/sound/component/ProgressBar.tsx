import './ProgressBar.scss'

import type {Nullable, NullOrNumber} from '@joookiwi/type'
import type {MouseEvent, TouchEvent} from 'react'
import {useRef, useState}            from 'react'

import type {ReactProperties} from 'util/react/ReactProperties'

import {Empty}                from 'util/emptyVariables'
import {getOrNullByTouchList} from 'util/utilitiesMethods'

import EMPTY_STRING = Empty.EMPTY_STRING

// type NativeMouseEvent = globalThis.MouseEvent

interface ProgressBarProperties
    extends ReactProperties {

    readonly currentTime: number

    setCurrentTime(value: number,): void

    readonly totalTime: number

}

/**
 * @todo Maybe look the pointer event instead of mouse/touch event → https://medium.com/@elmarti/farewell-mouse-touch-events-welcome-pointer-events-db36cee48a8a
 * @todo Follow mouse movement outside of trigger → https://stackoverflow.com/questions/52410124/how-can-i-track-mouse-move-events-in-javascript-once-the-cursor-is-off-of-the-ta
 * @reactComponent
 */
export default function ProgressBar({currentTime, setCurrentTime, totalTime,}: ProgressBarProperties,) {
    const progressBarContainerElement = useRef<HTMLDivElement>(null,)
    const [canMove, setMove,] = useState(false,)
    const [fingerTargetToFollow, setFingerTargetToFollow,] = useState<NullOrNumber>(null,)
    const visualCurrentPercentage = Number((currentTime / totalTime * 100).toFixed(2,),)

    return <div ref={progressBarContainerElement} className={`progressBar-container${canMove || fingerTargetToFollow != null ? ' with-user-movement' : EMPTY_STRING} d-flex align-items-center bg-light bg-opacity-50 rounded mx-2`}
                role="progressbar"
                aria-valuemin={0} aria-valuenow={visualCurrentPercentage} aria-valuemax={100} style={{'--progress-percentage': `${visualCurrentPercentage}%`,}}
                onClick={it => changeCurrentTime(setCurrentTime, totalTime, progressBarContainerElement.current, it,) }
                onMouseDown={() => setMove(true,) }
                onMouseMove={it => { if (canMove) changeCurrentTime(setCurrentTime, totalTime, progressBarContainerElement.current, it,) } }
                onMouseUp={() => setMove(false,) }
                onMouseLeave={() => setMove(false,) }
                onTouchStart={it => setFingerTargetToFollow(it.targetTouches.item(0,).identifier,) }
                onTouchMove={it => { if (fingerTargetToFollow != null) changeCurrentFromMobile(setCurrentTime, totalTime, progressBarContainerElement.current, fingerTargetToFollow, it,) } }
                onTouchEnd={() => setFingerTargetToFollow(null,) }
                onTouchCancel={() => setFingerTargetToFollow(null,) }>
        <div className="progressBar-line bg-light rounded"/>
        <i className="current-progress small text-light bi bi-circle-fill"/>
    </div>
}

function changeCurrentTime(setCurrent: (value: number,) => void, totalTime: number, element: Nullable<HTMLDivElement>, event: MouseEvent<HTMLElement, globalThis.MouseEvent>,) {
    if (element == null)
        return // We cannot infer the position if the element is not present

    // We change the current time to the element clicked from its percentage based on the width
    // newPercent = (clickX - elementX) / width
    setCurrent(totalTime * (event.pageX - element.offsetLeft) / element.clientWidth,)
}

function changeCurrentFromMobile(setCurrent: (value: number,) => void, totalTime: number, element: Nullable<HTMLDivElement>, fingerTargetToFollow: number, event: TouchEvent<HTMLElement>,) {
    if (element == null)
        return // We cannot infer the position if the element is not present

    const targetToFollow = getOrNullByTouchList(event.touches, fingerTargetToFollow,)
    if (targetToFollow == null)
        return // No target was found, then nothing can be changed

    // We change the current time to the element touched (it can be multiple depending on the device) from its percentage based on the width
    // newPercent = (touchX - elementX) / width
    setCurrent(totalTime * (targetToFollow.pageX - element.offsetLeft) / element.clientWidth,)
}
