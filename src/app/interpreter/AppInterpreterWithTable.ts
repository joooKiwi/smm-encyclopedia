import type {Enumerable} from '@joookiwi/enumerable/dist/types'

import type {AppInterpreterWithCardList} from 'app/interpreter/AppInterpreterWithCardList'
import type {Content}                    from 'app/interpreter/AppInterpreter'
import type {SingleHeaderContent}        from 'app/tools/table/SimpleHeader'

/**
 * An application interpreter when using {@link AbstractTableApp}
 * to encapsulate a {@link HTMLTableElement table-like element}
 *
 * @todo Change The requirement of the "Content" to not use the english name as a requirement
 */
export interface AppInterpreterWithTable<out CONTENT extends Content = Content,
    out OPTION extends Enumerable = Enumerable<any, any>, >
    extends AppInterpreterWithCardList<CONTENT> {

    readonly tableHeadersColor?: Nullable<BootstrapThemeColor>
    readonly tableColor?: Nullable<BootstrapThemeColor>
    readonly tableCaption: ReactElementOrString

    /**
     * Get every option for the {@link Table table react element}.
     *
     * Any {@link Nullable nullable value} will be ignored in the final content.
     */
    get tableOptions(): readonly Nullable<OPTION>[]

    /**
     * Get the table content as an array of {@link ReactElement}
     * from the {@link Enumerable application option} received.
     *
     * @param content The content to display
     * @param option the application option
     */
    createTableContent(content: CONTENT, option: OPTION,): readonly ReactElement[]

    /**
     * Get the {@link SingleHeaderContent table header} or null
     * from the {@link Enumerable application option} received.
     *
     * @param option the application option
     */
    createTableHeader(option: OPTION,): NullOr<SingleHeaderContent>

}
