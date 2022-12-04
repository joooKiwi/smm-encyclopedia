import type {NullOrNumber} from 'util/types/nullable'

export interface ClassWithAmount<AMOUNT extends NullOrNumber = NullOrNumber, > {

    get amount(): AMOUNT

}
