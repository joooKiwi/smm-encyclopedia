import type {AppInterpreter, Content} from './AppInterpreter';
import type {ReactElementOrString}    from '../../util/react/ReactProperty';

/**
 * An application interpreter when using {@link AbstractCardListApp} or {@link AbstractSimpleListApp}
 * to encapsulate the list & card list.
 *
 * @see AppInterpreterWithSimpleList
 * @see AppInterpreterWithCardList
 */
export interface AppInterpreterWithCardListOrSimpleList<CONTENT extends Content = Content, >
    extends AppInterpreter<CONTENT> {

    get createListTitleContent(): ReactElementOrString

}
