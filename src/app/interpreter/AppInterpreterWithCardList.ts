import type {AppInterpreter, Content}      from 'app/interpreter/AppInterpreter'
import type {DimensionOnList}              from 'app/interpreter/DimensionOnList'

/** An application interpreter when using a {@link ViewDisplays.CARD_LIST} as the visual represented */
export interface AppInterpreterWithCardList<out CONTENT extends Content = Content, >
    extends AppInterpreter<CONTENT> {

    createCardListDimension(): DimensionOnList

    createCardListContent(enumerable: CONTENT,): ReactElement

}

