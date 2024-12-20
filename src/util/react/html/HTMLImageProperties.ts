import type {EmptyString} from '@joookiwi/type'
import type {HTMLProps}   from 'react'

export interface HTMLImageProperties
    extends HTMLProps<HTMLImageElement> {

    crossOrigin?: | EmptyString | 'anonymous' | 'use-credentials'

}
