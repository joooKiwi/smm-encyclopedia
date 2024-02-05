import type {AppInterpreterWithSimpleList} from 'app/interpreter/AppInterpreterWithSimpleList'
import type {Content}                      from 'app/interpreter/AppInterpreter'
import type {DimensionOnList}              from 'app/interpreter/DimensionOnList'

/** An application interpreter when using a {@link ViewDisplays.CARD_LIST} as the visual represented */
export interface AppInterpreterWithCardList<out CONTENT extends Content = Content, >
    extends AppInterpreterWithSimpleList<CONTENT> {

    createCardListDimension(): DimensionOnList

    createCardListContent(enumerable: CONTENT,): ReactElement

}

