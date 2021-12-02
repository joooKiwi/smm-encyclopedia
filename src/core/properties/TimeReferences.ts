import type {Entity} from '../simple/Entity';
import type {Times}  from '../time/Times';

export interface TimeReferences {

    get referenceInDayTheme(): Entity

    get referenceInNightTheme(): Entity


    getReferenceFrom(time: Times,): Entity

    get everyTimeReferences(): readonly Entity[]

}
