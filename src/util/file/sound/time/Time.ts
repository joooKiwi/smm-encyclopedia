import type {Equalizable} from 'util/equal/Equalizable'

export interface Time<out MILLISECOND extends number = number,
    out SECOND extends number = number, >
    extends Equalizable<Time> {

    get millisecond(): MILLISECOND

    get second(): SECOND

}
