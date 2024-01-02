import type {AppInterpreterWithSimpleList} from 'app/interpreter/AppInterpreterWithSimpleList'
import type {Content}                      from 'app/interpreter/AppInterpreter'
import type {DimensionOnList}              from 'app/interpreter/DimensionOnList'

/**
 * An application interpreter when using {@link AbstractCardListApp}
 * to encapsulate the card list.
 */
export interface AppInterpreterWithCardList<CONTENT extends Content = Content, >
    extends AppInterpreterWithSimpleList<CONTENT> {

    createCardListDimension(): DimensionOnList

    createCardListContent(enumerable: CONTENT,): ReactElement

}

