import type {AppInterpreter, Content} from './AppInterpreter'
import type {PossibleDimensionOnList} from './DimensionOnList'

/**
 * An application interpreter when using {@link AbstractSimpleListApp}
 * to encapsulate the simple list.
 */
export interface AppInterpreterWithSimpleList<CONTENT extends Content = Content, >
    extends AppInterpreter<CONTENT> {

    createListDimension(): PossibleDimensionOnList

}
