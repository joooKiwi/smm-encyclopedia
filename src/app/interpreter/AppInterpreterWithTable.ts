import type {Enumerable} from '@joookiwi/enumerable'

import type {AppInterpreterWithCardList} from 'app/interpreter/AppInterpreterWithCardList'
import type {Content}                    from 'app/interpreter/AppInterpreter'

/**
 * An application interpreter when using a {@link ViewDisplays.TABLE} as the visual represented
 *
 * @deprecated This interface should no longer be used
 */
export interface AppInterpreterWithTable<out CONTENT extends Content = Content,
    out OPTION extends Enumerable = Enumerable<any, any>, >
    extends AppInterpreterWithCardList<CONTENT> {}
