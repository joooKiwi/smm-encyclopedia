import type {Entity, PossibleOtherEntities} from 'core/entity/Entity'
import type {Times}                         from 'core/time/Times'

export interface TimeReferences {

    get referenceInDayTheme(): PossibleOtherEntities

    get referenceInNightTheme(): PossibleOtherEntities


    getReferenceFrom(time: Times,): PossibleOtherEntities

    get everyTimeReferences(): readonly Entity[]

}
