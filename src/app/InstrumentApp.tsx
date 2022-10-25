import {lazy} from 'react'

import type {AppInterpreterWithCardList}                           from './interpreter/AppInterpreterWithCardList'
import type {AppProperties}                                        from './AppProperties.types'
import type {InstrumentAppStates}                                  from './AppStates.types'
import type {PossibleDimensionOnCardList, PossibleDimensionOnList} from './interpreter/DimensionOnList'
import type {ReactElement, ReactElementOrString}                   from '../util/react/ReactProperties'

import {AbstractCardListApp}    from './withInterpreter/AbstractCardListApp'
import {gameContentTranslation} from '../lang/components/translationMethods'
import {Instruments}            from '../core/instrument/Instruments'
import {ViewDisplays}           from './withInterpreter/ViewDisplays'

//region -------------------- dynamic imports --------------------

const SimpleSoundComponent = lazy(() => import('../util/sound/component/SimpleSound.component'))

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

    protected _createKey(): string {
        return 'instrument'
    }

    protected _createTitleContent(): ReactElementOrString {
        return gameContentTranslation('Every instruments')
    }

    protected _createAppOptionInterpreter(): AppInterpreterWithCardList<Instruments> {
        return new class implements AppInterpreterWithCardList<Instruments> {

            public get iterable(): IterableIterator<Instruments> {
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

            public createCardListContent({sounds, name,}: Instruments,): ReactElement {
                return <div className="instrument-sounds">{sounds.map((sound, index,) =>
                    <SimpleSoundComponent file={sound} title={`${name} (instrument #${index})`}/>
                )}</div>
            }

            //endregion -------------------- Card list interpreter --------------------

        }()
    }

    //endregion -------------------- Create methods --------------------

}
