import './EveryEntitiesApp.scss';

import {Fragment} from 'react';

import type {Entity}                                              from '../core/entity/Entity';
import type {EntityAppStates, PossibleImageAnimation}             from './AppStates.types';
import type {ImageProperties}                                     from './tools/images/properties/ImageProperties';
import type {PossibleEnglishName}                                 from '../core/entity/Entities.types';
import type {PossibleEnglishName as PossibleEnglishName_Category} from '../core/entityCategory/EntityCategories.types';
import type {SingleHeaderContent}                                 from './tools/table/SimpleHeader';
import type {SingleTableContent}                                  from './tools/table/Table.types';

import AbstractApp                       from './AbstractApp';
import AnimatedImages                    from './tools/images/AnimatedImages';
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

    //region -------------------- Attributes --------------------

    #map?: ReadonlyMap<PossibleEnglishName, Entity>;
    #gameStyles?: readonly GameStyles[];
    #gameStyles_unusedImages?: readonly [GameStyles, GameStyles];

    //endregion -------------------- Attributes --------------------

    public constructor(props: {},) {
        super(props,);
        this.state = {
            display: {
                imageAnimations: true,
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
                images: {
                    editor: true,
                    clearCondition: true,
                    whilePlaying: true,
                    unused: false,
                },
            },
        };
    }

    //region -------------------- Getter methods --------------------

    protected get enum() {
        return Entities.values;
    }

    protected get map() {
        return this.#map ??= EntityLoader.get.load();
    }

    protected get _gameStyles() {
        return this.#gameStyles ??= GameStyles.values;
    }

    protected get _gameStyles_unusedImages() {
        return this.#gameStyles_unusedImages ??= [GameStyles.SUPER_MARIO_BROS, GameStyles.NEW_SUPER_MARIO_BROS_U,];
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

    protected get _displayImageAnimations(): PossibleImageAnimation {
        return this.state.display.imageAnimations;
    }

    protected get _displayEditorImages(): boolean {
        return this.state.display.images.editor;
    }

    protected get _displayClearConditionImages(): boolean {
        return this.state.display.images.clearCondition;
    }

    protected get _displayWhilePlayingImages(): boolean {
        return this.state.display.images.whilePlaying;
    }

    protected get _displayUnusedImages(): boolean {
        return this.state.display.images.unused;
    }

    //endregion -------------------- Getter methods --------------------

    //endregion -------------------- Attributes & getter methods --------------------
    //region -------------------- Methods --------------------

    private __createEditorImageComponent(index: number, gameStyle: GameStyles,) {
        const enumeration = this.enum[index - 1];
        const image = enumeration.editorImage;
        const times = Times.values;
        const themes = Themes.courseThemes;

        return <Fragment key={`editor image (${enumeration.englishName})`}>{
            [...new Set(themes.map(theme =>
                times.map(time => image.get(true, gameStyle, theme, time,)
                    .map((image, index,) => [theme, time, image, index,] as const))).flat(2))]
                .map(([theme, time, image, index,]) =>
                    <img src={image} alt={`${gameStyle.acronym}-${theme.englishName}-${time.englishName}-${index + 1}`}/>)
        }</Fragment>;
    }

    private __createClearConditionImageComponent(index: number, gameStyle: GameStyles,) {
        const enumeration = this.enum[index - 1];
        const image = enumeration.clearConditionImage;

        return <Fragment key={`clear condition image (${enumeration.englishName})`}>{
            image.get(gameStyle).map((image, index,) => <img src={image} alt={`${gameStyle.acronym}-${index + 1}`}/>)
        }</Fragment>;
    }

    private __createWhilePlayingImageComponent(index: number, gameStyle: GameStyles,) {
        const enumeration = this.enum[index - 1];
        const image = enumeration.inGameImage;

        return <Fragment key={`Image (in game - ${enumeration.englishName})`}>{
            image.get(true, gameStyle,).map((image, index,) => <img src={image} alt={`${gameStyle.acronym}-${index + 1}`}/>)
        }</Fragment>;
    }

    private __createUnusedImageComponent(index: number, gameStyle: GameStyles,) {
        if (gameStyle !== GameStyles.SUPER_MARIO_BROS)
            return EMPTY_REACT_ELEMENT;
        const enumeration = this.enum[index - 1];
        const [image1, image2,] = enumeration.unusedImages;

        const everyImages1 = image1.all;
        if (everyImages1.length === 0)
            return <Fragment key={`Image (unused - ${enumeration.englishName})`}/>;


        return <Fragment key={`Image (unused - ${enumeration.englishName})`}>{
            everyImages1.map((groupOfImages1, index,) =>
                groupOfImages1.length === 1
                    ? <Image source={groupOfImages1[0]} fallbackName={`Image (unused - ${enumeration.englishName} - ${index})`}/>
                    : <AnimatedImages partialId={`image-unused-${enumeration.englishNameInHtml}-${index}`} images={groupOfImages1.map<ImageProperties>((image1, subIndex,) =>
                        ({source: image1, fallbackName: `Image (unused - ${enumeration.englishName} - ${index}-${subIndex})`}))}/>)
        }</Fragment>;
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
        for (const [englishName, entity,] of this.map.entries()) {
            content.push([englishName,
                <>{index}</>,
                // eslint-disable-next-line no-loop-func
                ...this._gameStyles.map(gameStyle => this.__createEditorImageComponent(index, gameStyle,)),
                // eslint-disable-next-line no-loop-func
                ...this._gameStyles.map(gameStyle => this.__createClearConditionImageComponent(index, gameStyle,)),
                // eslint-disable-next-line no-loop-func
                ...this._gameStyles.map(gameStyle => this.__createWhilePlayingImageComponent(index, gameStyle,)),
                // eslint-disable-next-line no-loop-func
                ...this._gameStyles_unusedImages.map(gameStyle => this.__createUnusedImageComponent(index, gameStyle,)),
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
                        {
                            key: 'image-whilePlaying', element: <>--Image (while playing)--</>,
                            subHeaders: this._gameStyles.map<SingleHeaderContent>(gameStyle => ({key: `image-whilePlaying-${gameStyle.acronym}`, element: gameStyle.renderSingleComponent,})),
                        },
                        {
                            key: 'image-unused', element: <>--Image (unused)--</>,
                            subHeaders: this._gameStyles_unusedImages.map<SingleHeaderContent>(gameStyle => ({key: `image-unused-${gameStyle.acronym}`, element: gameStyle.renderSingleComponent,})),
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
