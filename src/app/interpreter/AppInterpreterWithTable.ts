import type {AbstractAppOption}            from '../options/AbstractAppOption';
import type {AppInterpreterWithCardList}   from './AppInterpreterWithCardList';
import type {AppWithVariableDisplayStates} from '../AppStates.types';
import type {Content}                      from './AppInterpreter';
import type {SingleHeaderContent}          from '../tools/table/SimpleHeader';
import type {TableProperties}              from '../tools/table/Table.types';
import type {ReactElement}                 from '../../util/react/ReactProperty';

/**
 * An application interpreter when using {@link AbstractTableApp}
 * to encapsulate the {@link Table table react element}.
 */
export interface AppInterpreterWithTable<CONTENT extends Content = Content, OPTION extends Option = Option, >
    extends AppInterpreterWithCardList<CONTENT> {


    /**
     * Set the enumerable (CONTENT) on the {@link AbstractAppOption option enum}.
     *
     * @param value the enumerable content to set on the {@link AbstractAppOption option enum}
     */
    set callbackToGetEnumerable(value: () => CONTENT,)

    /**
     * Get every option for the {@link Table table react element}.
     */
    get tableOptions(): readonly OPTION[]

    /**
     * Get the {@link TableProperties table properties} with some arguments (key, id, headers, content) removed.
     */
    get tableProperties(): SimplifiedTableProperties


    /**
     * Get the table content as an array of {@link ReactElement}
     * from the {@link AbstractAppOption application option} received.
     *
     * @param option the application option
     */
    createTableContent(option: OPTION,): readonly ReactElement[]

    /**
     * Get the {@link SingleHeaderContent table header} or null
     * from the {@link AbstractAppOption application option} received.
     *
     * @param option the application option
     */
    createTableHeader(option: OPTION,): | SingleHeaderContent | null

}

/**
 * A simplified {@link TableProperties table properties} used
 * for an {@link AppInterpreter application interpreter}.
 */
export type SimplifiedTableProperties = Omit<TableProperties, | 'key' | 'id' | 'headers' | 'content'>;
/**
 * An option made to display any table column
 * based on the {@link Content content receive}.
 */
export type Option = AbstractAppOption<any, AppWithVariableDisplayStates, any, any>;
