import type {AppInterpreterWithCardListOrSimpleList} from './AppInterpreterWithCardListOrSimpleList';
import type {Content}                                from './AppInterpreter';
import type {ReactElement}                           from '../../util/react/ReactProperty';

/**
 * An application interpreter when using {@link AbstractCardListApp}
 * to encapsulate the card list.
 */
export interface AppInterpreterWithCardList<CONTENT extends Content = Content, >
    extends AppInterpreterWithCardListOrSimpleList<CONTENT> {

    createCardListContent(enumerable: CONTENT,): ReactElement

}
