import type {AppInterpreter, Content} from 'app/interpreter/AppInterpreter'
import type {DimensionOnList}         from 'app/interpreter/DimensionOnList'

/** An application interpreter when using a {@link ViewDisplays.SIMPLE_LIST} as the visual represented */
export interface AppInterpreterWithSimpleList<out CONTENT extends Content = Content, >
    extends AppInterpreter<CONTENT> {

    createListDimension(): DimensionOnList

}
