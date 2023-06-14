import './EntityApp.scss'
import './options/EntityAppOption.scss'

import type {EntityProperties}                                     from 'app/AppProperties.types'
import type {AppInterpreterWithTable, SimplifiedTableProperties}   from 'app/interpreter/AppInterpreterWithTable'
import type {PossibleDimensionOnCardList, PossibleDimensionOnList} from 'app/interpreter/DimensionOnList'
import type {EveryPossibleRouteNames}                              from 'route/everyRoutes.types'
import type {ReactElementOrString}                                 from 'util/react/ReactProperties'

import {EntityAppOption}         from 'app/options/EntityAppOption'
import {AbstractTableApp}        from 'app/withInterpreter/AbstractTableApp'
import EditorVoiceSoundComponent from 'core/editorVoice/EditorVoiceSound.component'
import {Entities}                from 'core/entity/Entities'
import {OtherWordInTheGames}     from 'core/otherWordInTheGame/OtherWordInTheGames'
import {gameContentTranslation}  from 'lang/components/translationMethods'
import {unfinishedText}          from 'app/tools/text/UnfinishedText'
import {newIterableIterator}     from 'util/utilitiesMethods'

//region -------------------- Deconstruction imports --------------------

const {ENTITY,} = OtherWordInTheGames

//endregion -------------------- Deconstruction imports --------------------

export default class EntityApp
    extends AbstractTableApp<AppInterpreterWithTable<Entities, EntityAppOption>, EntityProperties> {

    //region -------------------- Create methods --------------------

    protected override _createKey() {
        return 'entity'
    }


    protected override _createSimpleListRouteName(): EveryPossibleRouteNames {
        return 'everyEntity (list)'
    }

    protected override _createCardListRouteName(): EveryPossibleRouteNames {
        return 'everyEntity (card)'
    }

    protected override _createTableRouteName(): EveryPossibleRouteNames {
        return 'everyEntity (table)'
    }


    protected override _createTitleContent(): ReactElementOrString {
        const singularEntityName = ENTITY.singularNameOnReferenceOrNull ?? unfinishedText(ENTITY.singularEnglishName), singularEntityLowerCaseName = ENTITY.singularLowerCaseNameOnReferenceOrNull ?? singularEntityName.toLowerCase()
        return gameContentTranslation('entity.all', {Entity: singularEntityName, entity: singularEntityLowerCaseName,},)
    }

    protected override _createAppOptionInterpreter(): AppInterpreterWithTable<Entities, EntityAppOption> {
        const $this = this

        return new class implements AppInterpreterWithTable<Entities, EntityAppOption> {

            public get iterable() {
                return newIterableIterator($this.props.games, Entities[Symbol.iterator](),)
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
                const games = $this.props.games,
                    hasSMM1Or3DSGames = games.hasSMM1Or3DS,
                    hasSMM2Games = games.hasSMM2

                return [
                    EntityAppOption.IMAGES,
                    EntityAppOption.NAME,
                    // EntityAppOption.GAME,
                    // EntityAppOption.GAME_STYLE,
                    // EntityAppOption.COURSE_THEME,
                    // EntityAppOption.TIME,
                    EntityAppOption.CATEGORY,
                    hasSMM1Or3DSGames && hasSMM2Games ? EntityAppOption.LIMIT
                        : hasSMM1Or3DSGames ? EntityAppOption.LIMIT_IN_SMM1_AND_3DS
                            : EntityAppOption.LIMIT_IN_SMM2,
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
