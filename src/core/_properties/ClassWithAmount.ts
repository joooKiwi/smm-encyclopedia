import type {NullOrNumber} from '../../util/types'

export interface ClassWithAmount<AMOUNT extends NullOrNumber = NullOrNumber, > {

    get amount(): AMOUNT

}
