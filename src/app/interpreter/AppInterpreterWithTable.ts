import type {Enumerable} from '@joookiwi/enumerable/dist/types'

import type {AppInterpreterWithCardList} from './AppInterpreterWithCardList'
import type {Content}                    from './AppInterpreter'
import type {NullOr}                     from '../../util/types'
import type {SingleHeaderContent}        from '../tools/table/SimpleHeader'
import type {TableProperties}            from '../tools/table/Table.types'
import type {ReactElement}               from '../../util/react/ReactProperties'

/**
 * An application interpreter when using {@link AbstractTableApp}
 * to encapsulate the {@link Table table react element}.
 */
export interface AppInterpreterWithTable<CONTENT extends Content = Content, OPTION extends Enumerable = Enumerable<any, any>, >
    extends AppInterpreterWithCardList<CONTENT> {


    /**
     * Set the enumerable (CONTENT) on the {@link Enumerable option enum}.
     *
     * @param value the enumerable content to set on the {@link Enumerable option enum}
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
     * from the {@link Enumerable application option} received.
     *
     * @param option the application option
     */
    createTableContent(option: OPTION,): readonly ReactElement[]

    /**
     * Get the {@link SingleHeaderContent table header} or null
     * from the {@link Enumerable application option} received.
     *
     * @param option the application option
     */
    createTableHeader(option: OPTION,): NullOr<SingleHeaderContent>

}

/**
 * A simplified {@link TableProperties table properties} used
 * for an {@link AppInterpreter application interpreter}.
 */
export type SimplifiedTableProperties = Omit<TableProperties, | 'key' | 'id' | 'headers' | 'content'>
