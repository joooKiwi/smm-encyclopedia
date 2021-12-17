import './EveryEntitiesApp.scss';

import type {DebugEntityReferences}                               from '../core/entity/Entity.loader';
import type {Entity}                                              from '../core/entity/Entity';
import type {EntityAppStates}                                     from './AppStates.types';
import type {PossibleEnglishName}                                 from '../core/entity/Entities.types';
import type {PossibleEnglishName as PossibleEnglishName_Category} from '../core/entityCategory/EntityCategories.types';
import type {SingleHeaderContent}                                 from './tools/table/SimpleHeader';
import type {SingleTableContent}                                  from './tools/table/Table.types';

import AbstractApp                       from './AbstractApp';
import {assert}                          from '../util/utilitiesMethods';
import ContentTranslationComponent       from '../lang/components/ContentTranslationComponent';
import CourseThemeComponent              from '../core/theme/CourseTheme.component';
import {EntityCategories}                from '../core/entityCategory/EntityCategories';
import {EntityLimitTypes}                from '../core/entityLimit/EntityLimitTypes';
import {EntityLoader}                    from '../core/entity/Entity.loader';
import {Entities}                        from '../core/entity/Entities';
import {EMPTY_REACT_ELEMENT}             from '../util/emptyReactVariables';
import {EmptyName}                       from '../lang/name/EmptyName';
import GameComponent                     from '../core/game/Game.component';
import {GameContentTranslationContainer} from '../lang/containers/GameContentTranslation.container';
import GameContentTranslationComponent   from '../lang/components/GameContentTranslationComponent';
import GameStyleComponent                from '../core/gameStyle/GameStyle.component';
import {GameStyles}                      from '../core/gameStyle/GameStyles';
import Image                             from './tools/images/Image';
import LimitComponent                    from '../core/entityLimit/Limit.component';
import NameComponent                     from '../lang/name/component/Name.component';
import {ProjectLanguages}                from '../lang/ProjectLanguages';
import Table                             from './tools/table/Table';
import {Themes}                          from '../core/theme/Themes';
import TimeComponent                     from '../core/time/Time.component';
import {Times}                           from '../core/time/Times';

/**
 * @reactComponent
 */
export default class EveryEntitiesApp
    extends AbstractApp<{}, EntityAppStates> {

    //region -------------------- Attributes & getter methods --------------------

    #map?: ReadonlyMap<PossibleEnglishName, DebugEntityReferences>;
    #gameStyles?: readonly GameStyles[];

    public constructor(props: {}, context: any,) {
        super(props, context);
        this.state = {
            display: {
                asText: {
                    category: false,
                    whenAll: {
                        game: false,
                        gameStyle: false,
                        courseTheme: false,
                        time: false,
                    },
                    ifApplicable: {
                        acronymOnLimits: true,
                    },
                },
            },
        };
    }


    protected get enum() {
        return Entities.values;
    }

    protected get map() {
        return this.#map ??= EntityLoader.get.load();
    }

    protected get _gameStyles() {
        return this.#gameStyles ??= GameStyles.values;
    }

    protected get _displayCategoryAsText(): boolean {
        return this.state.display.asText.category;
    }

    protected get _displayGameAsTextWhenAll(): boolean {
        return this.state.display.asText.whenAll.game;
    }

    protected get _displayGameStyleAsTextWhenAll(): boolean {
        return this.state.display.asText.whenAll.gameStyle;
    }

    protected get _displayCourseThemeAsTextWhenAll(): boolean {
        return this.state.display.asText.whenAll.courseTheme;
    }

    protected get _displayTimeAsTextWhenAll(): boolean {
        return this.state.display.asText.whenAll.time;
    }

    protected get _displayAcronymOnLimitsIfApplicable(): boolean {
        return this.state.display.asText.ifApplicable.acronymOnLimits;
    }

    //endregion -------------------- Attributes & getter methods --------------------
    //region -------------------- Methods --------------------

    private __createEditorImageComponent(index: number, gameStyle: GameStyles,) {
        const editorImage = this.enum[index - 1].editorImage;
        const times = Times.values;
        const themes = Themes.courseThemes;

        return <>{
            [...new Set(themes.map(theme =>
                times.map(time => editorImage.get(true, gameStyle, theme, time,)
                    .map((image, index,) => [theme, time, image, index,] as const))).flat(2))]
                .map(([theme, time, image, index,]) =>
                    <img src={image} alt={`${gameStyle.acronym}-${theme.englishName}-${time.englishName}-${index + 1}`}/>)
        }</>;
    }

    private __createClearConditionImageComponent(index: number, gameStyle: GameStyles,) {
        return <></>;
    }

    private __createCategoryComponent(index: number, entity: Entity,) {
        const categoryName = entity.categoryName;
        if (categoryName === EmptyName.get)
            return EMPTY_REACT_ELEMENT;

        if (this._displayCategoryAsText)
            return <NameComponent id={`category-name-${index}`} name={categoryName} popoverOrientation="left"/>;

        const categoryEnglishName = ProjectLanguages.getEnglish(categoryName) as PossibleEnglishName_Category;
        return <Image source={EntityCategories.getValue(categoryEnglishName).imagePath} fallbackName={`${categoryEnglishName} - image`}/>;
    }

    protected get content() {
        const content = [] as SingleTableContent[];
        let index = 1;
        for (const [englishName, {entity},] of this.map.entries()) {
            assert(entity != null, `The entity #${index} (${englishName}) was not initialised!`);
            content.push([englishName,
                <>{index}</>,
                ...this._gameStyles.map(gameStyle => this.__createEditorImageComponent(index, gameStyle,)),
                ...this._gameStyles.map(gameStyle => this.__createClearConditionImageComponent(index, gameStyle,)),
                <NameComponent id="name" name={entity} popoverOrientation="right"/>,
                <GameComponent reference={entity} name={entity} displayAllAsText={this._displayGameAsTextWhenAll}/>,
                <GameStyleComponent reference={entity} name={entity} displayAllAsText={this._displayGameStyleAsTextWhenAll}/>,
                <CourseThemeComponent reference={entity} name={entity} displayAllAsText={this._displayCourseThemeAsTextWhenAll}/>,
                <TimeComponent reference={entity} name={entity} displayAllAsText={this._displayTimeAsTextWhenAll}/>,
                this.__createCategoryComponent(index, entity,),
                <LimitComponent id={`editor-${index}`} limits={entity.toLimitInTheEditorMap()} displayAcronymIfApplicable={this._displayAcronymOnLimitsIfApplicable}/>,
                <LimitComponent id={`whilePlaying-${index}`} limits={entity.toLimitWhilePlayingMap()} displayAcronymIfApplicable={this._displayAcronymOnLimitsIfApplicable}/>,
            ]);
            index++;
        }
        return content;
    }

    //endregion -------------------- Methods --------------------

    protected _mainContent() {
        return <Table
            id="entity-table"
            caption={<GameContentTranslationComponent translationKey="Every entities"/>}
            headers={[
                {key: 'originalOrder', element: <>#</>,},
                {
                    key: 'image', element: <ContentTranslationComponent translationKey="Image"/>,
                    subHeaders: [
                        {
                            key: 'image-editor', element: <>--Image (editor)--</>,
                            subHeaders: this._gameStyles.map<SingleHeaderContent>(gameStyle => ({key: `image-editor-${gameStyle.acronym}`, element: gameStyle.renderSingleComponent,})),
                        },
                        {
                            key: 'image-clearCondition', element: <>--Image (clear condition)--</>,
                            subHeaders: this._gameStyles.map<SingleHeaderContent>(gameStyle => ({key: `image-clearCondition-${gameStyle.acronym}`, element: gameStyle.renderSingleComponent,})),
                        },
                    ],
                },
                {key: 'name', element: <ContentTranslationComponent translationKey="Name"/>,},
                {key: 'game', element: <GameContentTranslationComponent translationKey="Game"/>,},
                {key: 'gameStyle', element: <GameContentTranslationComponent translationKey="Game style"/>,},
                {key: 'courseTheme', element: <GameContentTranslationComponent translationKey="Course theme"/>,},
                {key: 'time', element: <GameContentTranslationComponent translationKey="Time"/>,},
                {key: 'category', element: <GameContentTranslationComponent translationKey="Category"/>,},
                {
                    key: 'limit', element: <GameContentTranslationComponent translationKey="Limit"/>,
                    subHeaders: [
                        {
                            key: 'limit-editor', element: <GameContentTranslationComponent translationKey={EntityLimitTypes.EDITOR.englishCommonText}/>,
                            tooltip: new GameContentTranslationContainer('Limit in the editor'),
                        },
                        {
                            key: 'limit-whilePlaying', element: <GameContentTranslationComponent translationKey={EntityLimitTypes.WHILE_PLAYING.englishCommonText}/>,
                            tooltip: new GameContentTranslationContainer('Limit while playing'),
                        },
                    ],
                },
            ]}
            content={this.content}
        />;
    }

}
