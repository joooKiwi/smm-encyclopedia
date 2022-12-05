import type {AppInterpreterWithSimpleList} from 'app/interpreter/AppInterpreterWithSimpleList'
import type {Content}                      from 'app/interpreter/AppInterpreter'
import type {PossibleDimensionOnCardList}  from 'app/interpreter/DimensionOnList'
import type {ReactElement}                 from 'util/react/ReactProperties'

/**
 * An application interpreter when using {@link AbstractCardListApp}
 * to encapsulate the card list.
 */
export interface AppInterpreterWithCardList<CONTENT extends Content = Content, >
    extends AppInterpreterWithSimpleList<CONTENT> {

    createCardListDimension(): PossibleDimensionOnCardList

    createCardListContent(enumerable: CONTENT,): ReactElement

}

