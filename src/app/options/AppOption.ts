import type {Enumerable} from '@joookiwi/enumerable'

import type {SingleHeaderContent} from 'app/tools/table/SimpleHeader'

/**
 * A simple option made to be used by a {@link AppInterpreterWithTable}.
 *
 * It utilizes both a content and a header for the same option.
 */
export interface AppOption<out T extends Enumerable, > {

    renderContent(enumeration: T,): readonly ReactElement[]

    renderTableHeader(): NullOr<SingleHeaderContent>

}
