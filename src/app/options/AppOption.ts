import type {Array, NullOr} from '@joookiwi/type'
import type {Enumerable}    from '@joookiwi/enumerable'

import type {SingleHeaderContent} from 'app/tools/table/SimpleHeader'

/**
 * An option made to be used by a {@link AppInterpreterWithTable}.
 *
 * It uses both a content and a header for the same option.
 */
export interface AppOption<out T extends Enumerable, > {

    renderContent(enumeration: T,): Array<ReactElement>

    renderTableHeader(): NullOr<SingleHeaderContent>

}
