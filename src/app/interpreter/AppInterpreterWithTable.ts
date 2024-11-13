import type {Enumerable}                                           from '@joookiwi/enumerable'
import type {Array, Nullable, NullableString, NullOr, StringArray} from '@joookiwi/type'

import type {AppInterpreterWithCardList} from 'app/interpreter/AppInterpreterWithCardList'
import type {Content}                    from 'app/interpreter/AppInterpreter'
import type {SingleHeaderContent} from 'app/tools/table/SimpleHeader'

/**
 * An application interpreter when using a {@link ViewDisplays.TABLE} as the visual represented
 *
 * @todo Change The requirement of the "Content" to not use the english name
 */
export interface AppInterpreterWithTable<out CONTENT extends Content = Content,
    out OPTION extends Enumerable = Enumerable<any, any>, >
    extends AppInterpreterWithCardList<CONTENT> {

    readonly tableHeadersColor?: NullableString<BootstrapThemeColor>
    readonly tableColor?: NullableString<BootstrapThemeColor>
    readonly tableCaption: ReactElementOrString

    /**
     * Get every option for the {@link Table table react element}.
     *
     * Any {@link Nullable nullable value} will be ignored in the final content.
     */
    get tableOptions(): Array<Nullable<OPTION>>

    /**
     * Get the additional {@link Element.classList classes} for a selected {@link option}
     *
     * @param option The application option
     */
    getAdditionalClass?(option: OPTION,): StringArray

    /**
     * Get the table content as an array of {@link ReactElement}
     * from the {@link Enumerable application option} received.
     *
     * @param content The content to display
     * @param option the application option
     */
    createTableContent(content: CONTENT, option: OPTION,): Array<ReactElement>

    /**
     * Get the {@link SingleHeaderContent table header} or null
     * from the {@link Enumerable application option} received.
     *
     * @param option the application option
     */
    createTableHeader(option: OPTION,): NullOr<SingleHeaderContent>

}
