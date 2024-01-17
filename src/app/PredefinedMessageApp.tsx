import type {AppInterpreterWithSimpleList} from 'app/interpreter/AppInterpreterWithSimpleList'
import type {DimensionOnList}              from 'app/interpreter/DimensionOnList'
import type {PossibleRouteName}            from 'route/EveryRoutes.types'

import UnfinishedText           from 'app/tools/text/UnfinishedText'
import {AbstractSimpleListApp}  from 'app/withInterpreter/AbstractSimpleListApp'
import {PredefinedMessages}     from 'core/predefinedMessage/PredefinedMessages'
import {gameContentTranslation} from 'lang/components/translationMethods'

export default class PredefinedMessageApp
    extends AbstractSimpleListApp<PredefinedMessages, AppInterpreterWithSimpleList<PredefinedMessages>> {

    //region -------------------- Create methods --------------------

    protected override _createKey() {
        return 'predefinedMessage'
    }


    protected override _createSimpleListRouteName(): PossibleRouteName {
        return 'everyPredefinedMessage (list)'
    }


    protected override _createTitleContent(): ReactElementOrString {
        return gameContentTranslation('predefined message.all', {
            singularName: <UnfinishedText key="predefined message (singular name)">predefined message</UnfinishedText>,//TODO add predefined reference (singular form)
            pluralName: <UnfinishedText key="predefined message (plural name)">predefined messages</UnfinishedText>,//TODO add predefined reference (plural form)
        },)
    }

    protected override _createAppOptionInterpreter() {
        return new class PredefinedMessageAppInterpreter implements AppInterpreterWithSimpleList<PredefinedMessages> {

            public get content() {
                return PredefinedMessages.CompanionEnum.get.values.toArray()
            }

            //region -------------------- List interpreter --------------------

            public createListDimension(): DimensionOnList {
                return {
                    default: 1,
                    small: 2,
                    medium: 3,
                    large: 5,
                    extraLarge: 6,
                }
            }

            //endregion -------------------- List interpreter --------------------

        }()
    }

    //endregion -------------------- Create methods --------------------

}
