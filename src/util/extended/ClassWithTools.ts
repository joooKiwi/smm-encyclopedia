import type {ConditionalIntermediate} from 'util/extended/tools/ConditionalIntermediate'

export interface ClassWithTools {

    join(separator?: string,): string


    if(callback: ($this: this,) => boolean,): ConditionalIntermediate<this>

}
