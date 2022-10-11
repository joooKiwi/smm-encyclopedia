import type {Entity, PossibleOtherEntities} from '../../Entity'
import type {Times}                         from '../../../time/Times'

export interface TimeReferences {

    get referenceInDayTheme(): PossibleOtherEntities

    get referenceInNightTheme(): PossibleOtherEntities


    getReferenceFrom(time: Times,): PossibleOtherEntities

    get everyTimeReferences(): readonly Entity[]

}
