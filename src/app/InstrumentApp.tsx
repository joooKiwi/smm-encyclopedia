import type {AppInterpreterWithCardList}         from './interpreter/AppInterpreterWithCardList';
import type {InstrumentAppStates}                from './AppStates.types';
import type {ReactElement, ReactElementOrString} from '../util/react/ReactProperties';

import {AbstractCardListApp}           from './withInterpreter/AbstractCardListApp';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import {Instruments}                   from '../core/instrument/Instruments';
import {ViewDisplays}                  from './withInterpreter/ViewDisplays';
import SimpleSound                     from './tools/sounds/SimpleSound';

export default class InstrumentApp
    extends AbstractCardListApp<AppInterpreterWithCardList<Instruments>, {}, InstrumentAppStates> {

    public constructor(props: {},) {
        super(props,);
        this.state = {
            typeDisplayed: ViewDisplays.CARD_LIST,
        };
    }

    //region -------------------- Create methods --------------------

    protected _createKey(): string {
        return 'instrument';
    }

    protected _createTitleContent(): ReactElementOrString {
        return <GameContentTranslationComponent translationKey="Every instruments"/>;
    }

    protected _createAppOptionInterpreter(): AppInterpreterWithCardList<Instruments> {
        return new class implements AppInterpreterWithCardList<Instruments> {

            public get iterable(): IterableIterator<Instruments> {
                return Instruments[Symbol.iterator]();
            }

            //region -------------------- Card list interpreter --------------------

            public createCardListContent({soundPaths, name,}: Instruments,): ReactElement {
                return <div className="instrument-sounds">{soundPaths.map((soundPath, index,) =>
                    <SimpleSound source={soundPath} title={`${name} (instrument #${index})`}/>
                )}</div>;
            }

            //endregion -------------------- Card list interpreter --------------------

        }();
    }

    //endregion -------------------- Create methods --------------------

}
