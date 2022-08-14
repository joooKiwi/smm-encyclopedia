import './EveryEntitiesApp.scss';
import './options/EntityAppOption.scss';

import {lazy} from 'react';

import type {AppInterpreterWithTable, SimplifiedTableProperties} from './interpreter/AppInterpreterWithTable';
import type {EntityAppStates}                                    from './AppStates.types';
import type {SingleHeaderContent}                                from './tools/table/SimpleHeader';
import type {ReactElement, ReactElementOrString}                 from '../util/react/ReactProperty';

import {AbstractTableApp}              from './withInterpreter/AbstractTableApp';
import {EMPTY_REACT_ELEMENT}           from '../util/emptyReactVariables';
import {Entities}                      from '../core/entity/Entities';
import {EntityAppOption}               from './options/EntityAppOption';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';

const SimpleSound = lazy(() => import('./tools/sounds/SimpleSound'));

/**
 * @reactComponent
 */
export default class EveryEntitiesApp
    extends AbstractTableApp<AppInterpreterWithTable<Entities, EntityAppOption>, {}, EntityAppStates> {

    public constructor(props: {},) {
        super(props,);
        this.state = EntityAppOption.createDefaultState;
    }

    //region -------------------- Create methods --------------------

    protected override _createKey(): string {
        return 'entity';
    }

    protected override _createTitleContent(): ReactElementOrString {
        return <GameContentTranslationComponent translationKey="Every entities"/>;
    }

    protected override _createAppOptionInterpreter(): AppInterpreterWithTable<Entities, EntityAppOption> {
        return new class implements AppInterpreterWithTable<Entities, EntityAppOption> {

            public get iterable(): IterableIterator<Entities> {
                return Entities[Symbol.iterator]();
            }

            //region -------------------- Card list interpreter --------------------

            public createCardListContent({englishNameInHtml: htmlName, reference, editorVoiceSound: {fileName: editorVoice1, europeanFileName: editorVoice2,},}: Entities,): ReactElement {
                //TODO encapsulate the voiceSound into a sound interpreter.
                const category = reference.categoryEnglish === '' ? '' : `entityCategory-${reference.categoryEnglish}`;//TODO move to the parent container className.
                return <div className={`${category}`}>
                    {editorVoice1 == null ? EMPTY_REACT_ELEMENT : <SimpleSound source={editorVoice1} title={`${htmlName} - editor voice`}/>}
                    {editorVoice2 == null ? EMPTY_REACT_ELEMENT : <SimpleSound source={editorVoice2} title={`${htmlName} - editor voice (european)`}/>}
                </div>;
            }

            //endregion -------------------- Card list interpreter --------------------
            //region -------------------- Table interpreter --------------------

            public set callbackToGetEnumerable(value: () => Entities,) {
                EntityAppOption.CALLBACK_TO_GET_ENUMERATION = value;
            }

            public get tableOptions(): readonly EntityAppOption[] {
                return [EntityAppOption.IMAGES,
                    EntityAppOption.NAME,
                    EntityAppOption.GAME,
                    EntityAppOption.GAME_STYLE,
                    EntityAppOption.COURSE_THEME,
                    EntityAppOption.TIME,
                    EntityAppOption.CATEGORY,
                    EntityAppOption.LIMIT,
                ];
            }

            public get tableProperties(): SimplifiedTableProperties {
                return {
                    caption: <GameContentTranslationComponent translationKey="Every entities"/>,
                };
            }

            public createTableContent(option: EntityAppOption,): readonly ReactElement[] {
                return option.renderContent;
            }

            public createTableHeader(option: EntityAppOption,): | SingleHeaderContent | null {
                return option.renderTableHeader;
            }

            //endregion -------------------- Table interpreter --------------------

        }();
    }

    //endregion -------------------- Create methods --------------------

}
