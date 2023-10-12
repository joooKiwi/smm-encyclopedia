import './ThemeApp.scss'

import type {ThemeAppProperties}                                   from 'app/AppProperties.types'
import type {AppInterpreterWithTable}                              from 'app/interpreter/AppInterpreterWithTable'
import type {PossibleDimensionOnCardList, PossibleDimensionOnList} from 'app/interpreter/DimensionOnList'
import type {ThemeTypes}                                           from 'app/property/ThemeTypes'
import type {Themes}                                               from 'core/theme/Themes'
import type {PossibleRouteName}                                    from 'route/EveryRoutes.types'

import {CommonOptions}                                   from 'app/options/CommonOptions'
import {ThemeAppOption}                                  from 'app/options/ThemeAppOption'
import {COURSE_THEME_IMAGE_FILE, WORLD_THEME_IMAGE_FILE} from 'app/options/file/themeImageFiles'
import LinkButton                                        from 'app/tools/button/LinkButton'
import Image                                             from 'app/tools/images/Image'
import {AbstractTableApp}                                from 'app/withInterpreter/AbstractTableApp'
import {contentTranslation, gameContentTranslation}      from 'lang/components/translationMethods'
import {filterGame}                                      from 'util/utilitiesMethods'

/** @reactComponent */
export default class ThemeApp
    extends AbstractTableApp<AppInterpreterWithTable<Themes, ThemeAppOption>, ThemeAppProperties> {

    //region -------------------- Getter methods --------------------

    public get type(): ThemeTypes {
        return this.props.type
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Create methods --------------------

    protected override _createKey() {
        return 'theme'
    }


    protected override _createSimpleListRouteName(): PossibleRouteName {
        return `${this.type.routeName} (list)`
    }

    protected override _createCardListRouteName(): PossibleRouteName {
        return `${this.type.routeName} (card)`
    }

    protected override _createTableRouteName(): PossibleRouteName {
        return `${this.type.routeName} (table)`
    }


    protected override _createTitleContent(): ReactElementOrString {
        return gameContentTranslation('theme.all.all')
    }

    protected override _createAsideContent(): ReactElementOrString {
        const {type, viewDisplay,} = this

        return <div id="theme-linkButton-container" className="btn-group btn-group-vertical btn-group-sm">
            <LinkButton partialId="allTheme" routeName={viewDisplay.getRoutePath(type.allRouteName)} color={type.allColor}>{contentTranslation('All')}</LinkButton>
            <div id="theme-linkButton-courseAndWorld-container" className="btn-group btn-group-sm">
                <LinkButton partialId="courseTheme" routeName={viewDisplay.getRoutePath(type.courseRouteName)} color={type.courseColor}>
                    <Image id="courseTheme-button-image" file={COURSE_THEME_IMAGE_FILE} className="theme-button-image"/>
                </LinkButton>
                <LinkButton partialId="worldTheme" routeName={viewDisplay.getRoutePath(type.worldRouteName)} color={type.worldColor}>
                    <Image id="worldTheme-button-image" file={WORLD_THEME_IMAGE_FILE} className="theme-button-image"/>
                </LinkButton>
            </div>
        </div>
    }

    protected override _createAppOptionInterpreter() {
        const $this = this

        return new class ThemeAppInterpreter implements AppInterpreterWithTable<Themes, ThemeAppOption> {

            public get content() {
                return filterGame($this.type.content, $this.props.games,)
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

            public createCardListContent(enumerable: Themes,) {
                const {englishNameInHtml, endlessMarioImageFile,} = enumerable

                return <div className="card-body" id={`theme-${englishNameInHtml}`}>
                    <div className="col-2">{CommonOptions.get.getGameContent(enumerable)}</div>
                    <div className="images-container col-7">
                        {enumerable.renderSingleComponent(true)}
                        <Image file={endlessMarioImageFile}/>
                    </div>
                    <div className="col-2">{CommonOptions.get.getThemeContent(enumerable)}</div>
                </div>
            }

            //endregion -------------------- Card list interpreter --------------------
            //region -------------------- Table interpreter --------------------

            public readonly tableHeadersColor = 'info' satisfies BootstrapThemeColor
            public readonly tableColor = 'primary' satisfies BootstrapThemeColor
            public readonly tableCaption = gameContentTranslation('theme.all.all') satisfies ReactElementOrString

            public get tableOptions(): readonly ThemeAppOption[] {
                return [
                    ThemeAppOption.ICON,
                    ThemeAppOption.ENDLESS_MARIO_ICON,
                    ThemeAppOption.NAME,
                    ThemeAppOption.NIGHT_EFFECT,
                ]
            }


            public createNewTableContent(content: Themes, option: ThemeAppOption,) {
                return option.renderContent(content,)
            }

            public createTableHeader(option: ThemeAppOption,) {
                return option.renderTableHeader()
            }

            //endregion -------------------- Table interpreter --------------------

        }()
    }

    //endregion -------------------- Create methods --------------------

}
