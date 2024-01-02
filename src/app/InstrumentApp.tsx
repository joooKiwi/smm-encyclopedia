import type {AppInterpreterWithCardList} from 'app/interpreter/AppInterpreterWithCardList'
import type {DimensionOnList}            from 'app/interpreter/DimensionOnList'
import type {PossibleRouteName}          from 'route/EveryRoutes.types'

import {AbstractCardListApp}    from 'app/withInterpreter/AbstractCardListApp'
import {Instruments}            from 'core/instrument/Instruments'
import {gameContentTranslation} from 'lang/components/translationMethods'
import SimpleSoundComponent     from 'util/file/sound/component/SimpleSound.component'

export default class InstrumentApp
    extends AbstractCardListApp<Instruments, AppInterpreterWithCardList<Instruments>> {

    //region -------------------- Create methods --------------------

    protected _createKey() {
        return 'instrument'
    }


    protected override _createSimpleListRouteName(): PossibleRouteName {
        return 'everyInstrument (list)'
    }

    protected override _createCardListRouteName(): PossibleRouteName {
        return 'everyInstrument (card)'
    }


    protected _createTitleContent(): ReactElementOrString {
        return gameContentTranslation('instrument.all')
    }

    protected _createAppOptionInterpreter() {
        return new class InstrumentAppInterpreter implements AppInterpreterWithCardList<Instruments> {

            public get content() {
                return Instruments.CompanionEnum.get.values.toArray()
            }

            //region -------------------- List interpreter --------------------

            public createListDimension(): DimensionOnList {
                return {
                    default: 1,
                    small: 3,
                    medium: 4,
                    large: 5,
                    extraLarge: 6,
                }
            }

            //endregion -------------------- List interpreter --------------------
            //region -------------------- Card list interpreter --------------------

            public createCardListDimension() {
                return this.createListDimension()
            }

            public createCardListContent({sounds, name,}: Instruments,) {
                return <div className="instrument-sounds">{sounds.map((sound, index,) =>
                    <SimpleSoundComponent file={sound} title={`${name} (instrument #${index})`}/>
                )}</div>
            }

            //endregion -------------------- Card list interpreter --------------------

        }()
    }

    //endregion -------------------- Create methods --------------------

}
