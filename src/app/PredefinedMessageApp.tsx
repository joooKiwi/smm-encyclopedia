import type {AppInterpreterWithSimpleList} from 'app/interpreter/AppInterpreterWithSimpleList'
import type {PossibleDimensionOnList}      from 'app/interpreter/DimensionOnList'
import type {EveryPossibleRouteNames}      from 'route/everyRoutes.types'
import type {ReactElementOrString}         from 'util/react/ReactProperties'

import UnfinishedText           from 'app/tools/text/UnfinishedText'
import {AbstractSimpleListApp}  from 'app/withInterpreter/AbstractSimpleListApp'
import {PredefinedMessages}     from 'core/predefinedMessage/PredefinedMessages'
import {gameContentTranslation} from 'lang/components/translationMethods'

export default class PredefinedMessageApp
    extends AbstractSimpleListApp<AppInterpreterWithSimpleList<PredefinedMessages>> {

    //region -------------------- Create methods --------------------

    protected override _createKey() {
        return 'predefinedMessage'
    }


    protected override _createSimpleListRouteName(): EveryPossibleRouteNames {
        return 'everyPredefinedMessage (list)'
    }


    protected override _createTitleContent(): ReactElementOrString {
        return gameContentTranslation('predefined message.all', {
            singularName: <UnfinishedText key="predefined message (singular name)">predefined message</UnfinishedText>,//TODO add predefined reference (singular form)
            pluralName: <UnfinishedText key="predefined message (plural name)">predefined messages</UnfinishedText>,//TODO add predefined reference (plural form)
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
