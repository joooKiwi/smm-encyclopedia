import {lazy} from 'react'

import type {AppProperties}                                        from 'app/AppProperties.types'
import type {InstrumentAppStates}                                  from 'app/AppStates.types'
import type {AppInterpreterWithCardList}                           from 'app/interpreter/AppInterpreterWithCardList'
import type {PossibleDimensionOnCardList, PossibleDimensionOnList} from 'app/interpreter/DimensionOnList'
import type {ReactElementOrString}                                 from 'util/react/ReactProperties'

import {AbstractCardListApp}    from 'app/withInterpreter/AbstractCardListApp'
import {ViewDisplays}           from 'app/withInterpreter/ViewDisplays'
import {Instruments}            from 'core/instrument/Instruments'
import {gameContentTranslation} from 'lang/components/translationMethods'

//region -------------------- dynamic imports --------------------

const SimpleSoundComponent = lazy(() => import('util/sound/component/SimpleSound.component'))

//endregion -------------------- dynamic imports --------------------

export default class InstrumentApp
    extends AbstractCardListApp<AppInterpreterWithCardList<Instruments>, AppProperties, InstrumentAppStates> {

    public constructor(props: AppProperties,) {
        super(props,)
        this.state = {
            typeDisplayed: ViewDisplays.CARD_LIST,
        }
    }

    //region -------------------- Create methods --------------------

    protected _createKey() {
        return 'instrument'
    }

    protected _createTitleContent(): ReactElementOrString {
        return gameContentTranslation('Every instruments')
    }

    protected _createAppOptionInterpreter(): AppInterpreterWithCardList<Instruments> {
        return new class implements AppInterpreterWithCardList<Instruments> {

            public get iterable() {
                return Instruments[Symbol.iterator]()
            }

            //region -------------------- List interpreter --------------------

            public createListDimension(): PossibleDimensionOnList {
                return null
            }

            //endregion -------------------- List interpreter --------------------
            //region -------------------- Card list interpreter --------------------

            public createCardListDimension(): PossibleDimensionOnCardList {
                return 'list'
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
