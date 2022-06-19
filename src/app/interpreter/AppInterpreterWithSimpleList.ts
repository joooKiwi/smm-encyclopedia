import type {AppInterpreter, Content} from './AppInterpreter';

/**
 * An application interpreter when using {@link AbstractSimpleListApp}
 * to encapsulate the simple list.
 */
export interface AppInterpreterWithSimpleList<CONTENT extends Content = Content, >
    extends AppInterpreter<CONTENT> {

}
