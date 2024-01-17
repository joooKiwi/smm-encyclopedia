import './EntityApp.scss'
import './options/EntityAppOption.scss'

import type {EntityProperties}        from 'app/AppProperties.types'
import type {AppInterpreterWithTable} from 'app/interpreter/AppInterpreterWithTable'
import type {DimensionOnList}         from 'app/interpreter/DimensionOnList'
import type {PossibleRouteName}       from 'route/EveryRoutes.types'

import {EntityAppOption}             from 'app/options/EntityAppOption'
import {AbstractTableApp}            from 'app/withInterpreter/AbstractTableApp'
import EditorVoiceSoundComponent     from 'core/editorVoice/EditorVoiceSound.component'
import {Entities}                    from 'core/entity/Entities'
import {OtherWordInTheGames}         from 'core/otherWordInTheGame/OtherWordInTheGames'
import {gameContentTranslation}      from 'lang/components/translationMethods'
import {unfinishedText}              from 'app/tools/text/UnfinishedText'
import {filterGame, filterGameStyle} from 'util/utilitiesMethods'

//region -------------------- Deconstruction imports --------------------

const {ENTITY,} = OtherWordInTheGames

//endregion -------------------- Deconstruction imports --------------------

export default class EntityApp
    extends AbstractTableApp<Entities, AppInterpreterWithTable<Entities, EntityAppOption>, EntityProperties> {

    //region -------------------- Create methods --------------------

    protected override _createKey() {
        return 'entity'
    }


    protected override _createSimpleListRouteName(): PossibleRouteName {
        return 'everyEntity (list)'
    }

    protected override _createCardListRouteName(): PossibleRouteName {
        return 'everyEntity (card)'
    }

    protected override _createTableRouteName(): PossibleRouteName {
        return 'everyEntity (table)'
    }


    protected override _createTitleContent(): ReactElementOrString {
        const singularEntityName = ENTITY.singularNameOnReferenceOrNull ?? unfinishedText(ENTITY.singularEnglishName), singularEntityLowerCaseName = ENTITY.singularLowerCaseNameOnReferenceOrNull ?? singularEntityName.toLowerCase()
        const pluralEntityName = ENTITY.pluralNameOnReferenceOrNull ?? unfinishedText(ENTITY.pluralEnglishName), pluralEntityLowerCaseName = ENTITY.pluralLowerCaseNameOnReferenceOrNull ?? pluralEntityName.toLowerCase()

        return gameContentTranslation('entity.all', {
            Entity: singularEntityName,
            Entities: pluralEntityName,
            entity: singularEntityLowerCaseName,
            entities: pluralEntityLowerCaseName,
        },)
    }

    protected override _createAppOptionInterpreter() {
        const $this = this

        return new class EntityAppInterpreter implements AppInterpreterWithTable<Entities, EntityAppOption> {

            public get content() {
                return filterGameStyle(filterGame(Entities.CompanionEnum.get.values, $this.props.games,), $this.props.gameStyles,)
            }

            //region -------------------- List interpreter --------------------

            public createListDimension(): DimensionOnList {
                return {
                    default: 1,
                    small: 2,
                    medium: 3,
                    large: 4,
                    extraLarge: 6,
                }
            }

            //endregion -------------------- List interpreter --------------------
            //region -------------------- Card list interpreter --------------------

            public createCardListDimension() {
                return this.createListDimension()
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

            public readonly tableHeadersColor = 'secondary' satisfies BootstrapThemeColor

            public get tableCaption() {
                const singularEntityName = ENTITY.singularNameOnReferenceOrNull ?? unfinishedText(ENTITY.singularEnglishName), singularEntityLowerCaseName = ENTITY.singularLowerCaseNameOnReferenceOrNull ?? singularEntityName.toLowerCase()
                return gameContentTranslation('entity.all', {
                    Entity: singularEntityName,
                    entity: singularEntityLowerCaseName,
                },) satisfies ReactElementOrString
            }

            public get tableOptions(): readonly EntityAppOption[] {
                const games = $this.props.games
                const gameStyles = $this.props.gameStyles
                const hasSMM1Or3DS = games.hasSMM1Or3DS
                const hasSMM2 = games.hasSMM2

                const options: EntityAppOption[] = []
                if (gameStyles.hasSMB)
                    options.push(EntityAppOption.IMAGE_IN_SMB,)
                if (gameStyles.hasSMB3)
                    options.push(EntityAppOption.IMAGE_IN_SMB3,)
                if (gameStyles.hasSMW)
                    options.push(EntityAppOption.IMAGE_IN_SMW,)
                if (gameStyles.hasNSMBU)
                    options.push(EntityAppOption.IMAGE_IN_NSMBU,)
                if (gameStyles.hasSM3DW && hasSMM2) // The SMM2 validation is a fail-safe
                    options.push(EntityAppOption.IMAGE_IN_SM3DW,)
                options.push(
                    EntityAppOption.NAME,
                    // EntityAppOption.GAME,
                    // EntityAppOption.GAME_STYLE,
                    // EntityAppOption.COURSE_THEME,
                    // EntityAppOption.TIME,
                    EntityAppOption.CATEGORY,
                )
                if (hasSMM1Or3DS && hasSMM2)
                    options.push(EntityAppOption.EDITOR_LIMIT_IN_SMM1_AND_3DS, EntityAppOption.EDITOR_LIMIT_IN_SMM2,)
                else {
                    if (hasSMM1Or3DS)
                        options.push(EntityAppOption.EDITOR_LIMIT_IN_SMM1_AND_3DS_ONLY,)
                    if (hasSMM2)
                        options.push(EntityAppOption.EDITOR_LIMIT_IN_SMM2_ONLY,)
                }
                options.push(EntityAppOption.PLAY_LIMIT,)
                return options
            }


            public getAdditionalClass(option: EntityAppOption,) {
                return option.additionalClasses
            }

            public createTableContent(content: Entities, option: EntityAppOption,) {
                return option.renderContent(content,)
            }

            public createTableHeader(option: EntityAppOption,) {
                return option.renderTableHeader()
            }

            //endregion -------------------- Table interpreter --------------------

        }()
    }

    //endregion -------------------- Create methods --------------------

}
