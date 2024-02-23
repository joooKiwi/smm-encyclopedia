import 'app/_GameAsideContent.scss'
import './EntityApp.scss'
import 'app/options/EntityAppOption.scss'

import type {EntityProperties}        from 'app/AppProperties.types'
import type {AppInterpreterWithTable} from 'app/interpreter/AppInterpreterWithTable'
import type {DimensionOnList}         from 'app/interpreter/DimensionOnList'
import type {ViewAndRouteName}        from 'app/withInterpreter/DisplayButtonGroup.properties'
import type {GameCollection}          from 'util/collection/GameCollection'
import type {GameStyleCollection}     from 'util/collection/GameStyleCollection'
import type {ReactProperties}         from 'util/react/ReactProperties'

import SubMainContainer                             from 'app/_SubMainContainer'
import {EntityAppOption}                            from 'app/options/EntityAppOption'
import {EntityGames}                                from 'app/property/EntityGames'
import LinkButton                                   from 'app/tools/button/LinkButton'
import Table                                        from 'app/tools/table/Table'
import {unfinishedText}                             from 'app/tools/text/UnfinishedText'
import CardList                                     from 'app/withInterpreter/CardList'
import SimpleList                                   from 'app/withInterpreter/SimpleList'
import {ViewDisplays}                               from 'app/withInterpreter/ViewDisplays'
import EditorVoiceSoundComponent                    from 'core/editorVoice/EditorVoiceSound.component'
import {Entities}                                   from 'core/entity/Entities'
import {Games}                                      from 'core/game/Games'
import {OtherWordInTheGames}                        from 'core/otherWordInTheGame/OtherWordInTheGames'
import {contentTranslation, gameContentTranslation} from 'lang/components/translationMethods'
import {filterGame, filterGameStyle}                from 'util/utilitiesMethods'

class EntityAppInterpreter
    implements AppInterpreterWithTable<Entities, EntityAppOption> {

    //region -------------------- Fields --------------------

    readonly #games
    readonly #gameStyles

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(games: GameCollection, gameStyles: GameStyleCollection,) {
        this.#games = games
        this.#gameStyles = gameStyles
    }

    //endregion -------------------- Constructor --------------------

    public get content() {
        return filterGameStyle(filterGame(Entities.CompanionEnum.get.values, this.#games,), this.#gameStyles,)
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
        const singularEntityName = OtherWordInTheGames.ENTITY.singularNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.ENTITY.singularEnglishName,)
        const singularEntityLowerCaseName = OtherWordInTheGames.ENTITY.singularLowerCaseNameOnReferenceOrNull ?? singularEntityName.toLowerCase()
        return gameContentTranslation('entity.all', {
            Entity: singularEntityName,
            entity: singularEntityLowerCaseName,
        },) satisfies ReactElementOrString
    }

    public get tableOptions(): readonly EntityAppOption[] {
        const games = this.#games
        const gameStyles = this.#gameStyles
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

}

const viewDisplayAndRouteName = [
    [ViewDisplays.SIMPLE_LIST, 'everyEntity (list)',],
    [ViewDisplays.CARD_LIST, 'everyEntity (card)',],
    [ViewDisplays.TABLE, 'everyEntity (table)',],
] as const satisfies readonly ViewAndRouteName[]
const titleContent = (() => {
    const singularEntityName = OtherWordInTheGames.ENTITY.singularNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.ENTITY.singularEnglishName,)
    const singularEntityLowerCaseName = OtherWordInTheGames.ENTITY.singularLowerCaseNameOnReferenceOrNull ?? singularEntityName.toLowerCase()
    const pluralEntityName = OtherWordInTheGames.ENTITY.pluralNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.ENTITY.pluralEnglishName,)
    const pluralEntityLowerCaseName = OtherWordInTheGames.ENTITY.pluralLowerCaseNameOnReferenceOrNull ?? pluralEntityName.toLowerCase()

    return gameContentTranslation('entity.all', {
        Entity: singularEntityName,
        Entities: pluralEntityName,
        entity: singularEntityLowerCaseName,
        entities: pluralEntityLowerCaseName,
    },)
})()

/** @reactComponent */
export default function EntityApp({viewDisplay, games, gameStyles,}: EntityProperties,) {
    const appInterpreter = new EntityAppInterpreter(games, gameStyles,)

    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <SubMainContainer reactKey="entity" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay} titleContent={titleContent}
                                 asideContent={<EntityAsideContent viewDisplay={viewDisplay}/>}>
            <SimpleList reactKey="entity" interpreter={appInterpreter}/>
        </SubMainContainer>
    if (viewDisplay === ViewDisplays.CARD_LIST)
        return <SubMainContainer reactKey="entity" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay} titleContent={titleContent}
                                 asideContent={<EntityAsideContent viewDisplay={viewDisplay}/>}>
            <CardList reactKey="entity" interpreter={appInterpreter}/>
        </SubMainContainer>
    return <SubMainContainer reactKey="entity" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay} titleContent={titleContent}
                             asideContent={<EntityAsideContent viewDisplay={viewDisplay}/>}>
        <Table id="entity-table" interpreter={appInterpreter}/>
    </SubMainContainer>
}

//region -------------------- Aside content --------------------

interface EntityAsideContentProperties
    extends ReactProperties {

    readonly viewDisplay: ViewDisplays

}

const GamePossibilities = Games.Possibilities.get
const allGames = GamePossibilities.ALL_GAMES
const smm1 = Games.SUPER_MARIO_MAKER_1
const smm3ds = Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS
const smm2 = Games.SUPER_MARIO_MAKER_2

function EntityAsideContent({viewDisplay,}: EntityAsideContentProperties,) {
    const editorVoiceGame = allGames.reduce((isSelected, it) => isSelected && it.isSelected, true,)
        ? EntityGames.ALL_GAMES
        : smm2.isSelected
            ? EntityGames.SUPER_MARIO_MAKER_2
            : smm1.isSelected
                ? EntityGames.SUPER_MARIO_MAKER
                : EntityGames.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS

    return <div id="entity-gamesButton-container" className="gameAsideContent-container btn-group-vertical btn-group-sm">
        <LinkButton partialId="allGameLimit" routeName={editorVoiceGame.getAllRouteName(viewDisplay,)} color={editorVoiceGame.allColor}>{contentTranslation('All',)}</LinkButton>
        <div id="entity-gamesButton-singularGame-container" className="btn-group btn-group-sm">
            <LinkButton partialId="smm1Game" routeName={editorVoiceGame.getSmm1RouteName(viewDisplay,)} color={editorVoiceGame.smm1Color}>{smm1.renderSingleComponent}</LinkButton>
            <LinkButton partialId="smm3dsGame" routeName={editorVoiceGame.getSmm3dsRouteName(viewDisplay,)} color={editorVoiceGame.smm3dsColor}>{smm3ds.renderSingleComponent}</LinkButton>
            <LinkButton partialId="smm2Game" routeName={editorVoiceGame.getSmm2RouteName(viewDisplay,)} color={editorVoiceGame.smm2Color}>{smm2.renderSingleComponent}</LinkButton>
        </div>
    </div>
}

//endregion -------------------- Aside content --------------------
