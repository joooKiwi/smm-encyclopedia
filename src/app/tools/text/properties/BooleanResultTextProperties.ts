import type {BooleanTextProperties} from 'app/tools/text/properties/BooleanTextProperties'
import type {ReactProperties}       from 'util/react/ReactProperties'

export interface BooleanResultTextProperties
    extends ReactProperties, Omit<BooleanTextProperties, `${boolean}`> {

    readonly true: BooleanValue

    readonly false: BooleanValue

}

export type TextColor = `text-${string}`
export type BooleanValue = string | [value: string, color: TextColor,]
