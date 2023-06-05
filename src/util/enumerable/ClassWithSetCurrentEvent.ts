import type {Enumerable}               from '@joookiwi/enumerable/dist/types'
import type {Dispatch, SetStateAction} from 'react'

import type {NullOr} from 'util/types/nullable'

/** A simple class made to handle the event when a {@link ClassWithCurrent.current} is being set */
export interface ClassWithSetCurrentEvent<T extends Enumerable, > {

    /** Get the event listener on the setting of {@link ClassWithCurrent.current} or <b>null</b> (if it has not been initialized) */
    get onSetCurrentEventOrNull(): NullOr<Dispatch<SetStateAction<NullOr<T>>>>

    /**
     * Get the event listener on the setting of {@link ClassWithCurrent.current}
     *
     * @throws {ReferenceError} The event listener has not been initialized
     */
    get onSetCurrentEvent(): Dispatch<SetStateAction<NullOr<T>>>

    /**
     * Initialize the event listener to set the {@link ClassWithCurrent.current}
     *
     * @param value The event listener to set
     * @shouldOnlyBeCalledOnce
     */
    set onSetCurrentEvent(value: Dispatch<SetStateAction<NullOr<T>>>,)

}
