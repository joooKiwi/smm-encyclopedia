import type {AppInterpreter, Content} from 'app/interpreter/AppInterpreter'
import type {DimensionOnList}         from 'app/interpreter/DimensionOnList'

/**
 * An application interpreter when using {@link AbstractSimpleListApp}
 * to encapsulate the simple list.
 */
export interface AppInterpreterWithSimpleList<out CONTENT extends Content = Content, >
    extends AppInterpreter<CONTENT> {

    createListDimension(): DimensionOnList

}
