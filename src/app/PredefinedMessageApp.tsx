import {Fragment} from 'react'

import type {AppProperties}                from 'app/AppProperties.types'
import type {AppInterpreterWithSimpleList} from 'app/interpreter/AppInterpreterWithSimpleList'
import type {PossibleDimensionOnList}      from 'app/interpreter/DimensionOnList'
import type {ReactElementOrString}         from 'util/react/ReactProperties'

import {AbstractSimpleListApp}  from 'app/withInterpreter/AbstractSimpleListApp'
import {ViewDisplays}           from 'app/withInterpreter/ViewDisplays'
import {PredefinedMessages}     from 'core/predefinedMessage/PredefinedMessages'
import {gameContentTranslation} from 'lang/components/translationMethods'

export default class PredefinedMessageApp
    extends AbstractSimpleListApp<AppInterpreterWithSimpleList<PredefinedMessages>> {

    public constructor(props: AppProperties,) {
        super(props,)
        this.state = {
            typeDisplayed: ViewDisplays.SIMPLE_LIST,
        }
    }

    //region -------------------- Create methods --------------------

    protected override _createKey() {
        return 'predefinedMessage'
    }

    protected override _createTitleContent(): ReactElementOrString {
        return gameContentTranslation('Every predefined messages', {
            predefinedMessages: <Fragment key="predefined message title (plural predefined message)">--predefined messages--</Fragment>,//TODO add predefined message reference
        },)
    }

    protected override _createAppOptionInterpreter(): AppInterpreterWithSimpleList<PredefinedMessages> {
        return new class implements AppInterpreterWithSimpleList<PredefinedMessages> {

            public get iterable() {
                return PredefinedMessages[Symbol.iterator]()
            }

            //region -------------------- List interpreter --------------------

            public createListDimension(): PossibleDimensionOnList {
                return null
            }

            //endregion -------------------- List interpreter --------------------

        }()
    }

    //endregion -------------------- Create methods --------------------

}
