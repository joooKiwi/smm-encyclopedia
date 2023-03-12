import './EntityApp.scss'
import './options/EntityAppOption.scss'

import type {AppInterpreterWithTable, SimplifiedTableProperties}   from 'app/interpreter/AppInterpreterWithTable'
import type {PossibleDimensionOnCardList, PossibleDimensionOnList} from 'app/interpreter/DimensionOnList'
import type {EveryPossibleRouteNames}                              from 'routes/everyRoutes.types'
import type {ReactElementOrString}                                 from 'util/react/ReactProperties'

import {EntityAppOption}         from 'app/options/EntityAppOption'
import {AbstractTableApp}        from 'app/withInterpreter/AbstractTableApp'
import EditorVoiceSoundComponent from 'core/editorVoice/EditorVoiceSound.component'
import {Entities}                from 'core/entity/Entities'
import {gameContentTranslation}  from 'lang/components/translationMethods'

export default class EntityApp
    extends AbstractTableApp<AppInterpreterWithTable<Entities, EntityAppOption>> {

    //region -------------------- Create methods --------------------

    protected override _createKey() {
        return 'entity'
    }


    protected override _createSimpleListRouteName(): EveryPossibleRouteNames {
        return 'everyEntities (list)'
    }

    protected override _createCardListRouteName(): EveryPossibleRouteNames {
        return 'everyEntities (card)'
    }

    protected override _createTableRouteName(): EveryPossibleRouteNames {
        return 'everyEntities (table)'
    }


    protected override _createTitleContent(): ReactElementOrString {
        return gameContentTranslation('entity.all')
    }

    protected override _createAppOptionInterpreter(): AppInterpreterWithTable<Entities, EntityAppOption> {
        return new class implements AppInterpreterWithTable<Entities, EntityAppOption> {

            public get iterable() {
                return Entities[Symbol.iterator]()
            }

            //region -------------------- List interpreter --------------------

            public createListDimension(): PossibleDimensionOnList {
                return {
                    small: 6,
                    medium: 4,
                    large: 3,
                    extraLarge: 2,
                }
            }

            //endregion -------------------- List interpreter --------------------
            //region -------------------- Card list interpreter --------------------

            public createCardListDimension(): PossibleDimensionOnCardList {
                return 'list'
            }

            public createCardListContent({englishName: name, reference, editorVoiceSoundFileHolder,}: Entities,) {
                //TODO encapsulate the voiceSound into a sound interpreter.
                const category = reference.categoryEnglish === '' ? '' : `entityCategory-${reference.categoryEnglish}`//TODO move to the parent container className.
                return <div className={`${category}`}>
                    <EditorVoiceSoundComponent editorVoiceSound={editorVoiceSoundFileHolder} name={name}/>
                </div>
            }

            //endregion -------------------- Card list interpreter --------------------
            //region -------------------- Table interpreter --------------------

            public set callbackToGetEnumerable(value: () => Entities,) {
                EntityAppOption.CALLBACK_TO_GET_ENUMERATION = value
            }

            public get tableOptions(): readonly EntityAppOption[] {
                return [
                    EntityAppOption.IMAGES,
                    EntityAppOption.NAME,
                    // EntityAppOption.GAME,
                    // EntityAppOption.GAME_STYLE,
                    // EntityAppOption.COURSE_THEME,
                    // EntityAppOption.TIME,
                    EntityAppOption.CATEGORY,
                    EntityAppOption.LIMIT,
                ]
            }

            public get tableProperties(): SimplifiedTableProperties {
                return {
                    caption: gameContentTranslation('entity.all'),
                }
            }

            public createTableContent(option: EntityAppOption,) {
                return option.renderContent
            }

            public createTableHeader(option: EntityAppOption,) {
                return option.renderTableHeader
            }

            //endregion -------------------- Table interpreter --------------------

        }()
    }

    //endregion -------------------- Create methods --------------------

}
