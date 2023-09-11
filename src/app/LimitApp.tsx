import './LimitApp.scss'

import type {LimitAppProperties}                                   from 'app/AppProperties.types'
import type {AppInterpreterWithTable}                              from 'app/interpreter/AppInterpreterWithTable'
import type {PossibleDimensionOnCardList, PossibleDimensionOnList} from 'app/interpreter/DimensionOnList'
import type {LimitTypes}                                           from 'app/property/LimitTypes'
import type {ClassWithType}                                        from 'core/ClassWithType'
import type {EntityLimits}                                         from 'core/entityLimit/EntityLimits'
import type {EveryPossibleRouteNames}                              from 'route/everyRoutes.types'

import {EntityLimitAppOption}                       from 'app/options/EntityLimitAppOption'
import {COURSE_THEME_IMAGE_FILE}                    from 'app/options/file/themeImageFiles'
import LinkButton                                   from 'app/tools/button/LinkButton'
import Image                                        from 'app/tools/images/Image'
import {AbstractTableApp}                           from 'app/withInterpreter/AbstractTableApp'
import {contentTranslation, gameContentTranslation} from 'lang/components/translationMethods'
import {newIterableIterator}                        from 'util/utilitiesMethods'

export default class LimitApp
    extends AbstractTableApp<AppInterpreterWithTable<EntityLimits, EntityLimitAppOption>, LimitAppProperties>
    implements ClassWithType<LimitTypes> {

    //region -------------------- Getter methods --------------------

    public get type(): LimitTypes {
        return this.props.type
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Create methods --------------------

    protected override _createKey(): string {
        return 'limit'
    }


    protected override _createSimpleListRouteName(): EveryPossibleRouteNames {
        return `${this.type.routeName} (list)`
    }

    protected override _createCardListRouteName(): EveryPossibleRouteNames {
        return `${this.type.routeName} (card)`
    }

    protected override _createTableRouteName(): EveryPossibleRouteNames {
        return `${this.type.routeName} (table)`
    }


    protected override _createTitleContent(): ReactElementOrString {
        return gameContentTranslation(`limit.${this.type.type}.all`)
    }

    protected override _createAsideContent(): ReactElementOrString {
        const {type, viewDisplay,} = this

        return <div id="limit-linkButton-container" className="btn-group btn-group-vertical btn-group-sm">
            <LinkButton partialId="allLimit" routeName={viewDisplay.getRoutePath(type.allRouteName)} color={type.allColor}>{contentTranslation('All')}</LinkButton>
            <div id="limit-linkButton-playAndEditor-container" className="btn-group btn-group-sm">
                <LinkButton partialId="playLimit" routeName={viewDisplay.getRoutePath(type.playRouteName)} color={type.playColor}>{gameContentTranslation('limit.play.simple')}</LinkButton>
                <LinkButton partialId="editorLimit" routeName={viewDisplay.getRoutePath(type.editorRouteName)} color={type.editorColor}>{gameContentTranslation('limit.editor.simple')}</LinkButton>
            </div>
        </div>
    }

    protected override _createAppOptionInterpreter() {
        const $this = this

        return new class LimitAppInterpreter implements AppInterpreterWithTable<EntityLimits, EntityLimitAppOption> {

            public get iterable() {
                return newIterableIterator($this.props.games, $this.type.iterator,)
            }

            //region -------------------- List interpreter --------------------

            public createListDimension(): PossibleDimensionOnList {
                return {
                    small: 6,
                    large: null,
                    extraLarge: 2,
                }
            }

            //endregion -------------------- List interpreter --------------------
            //region -------------------- Card list interpreter --------------------

            public createCardListDimension(): PossibleDimensionOnCardList {
                return 'list'
            }

            public createCardListContent(enumeration: EntityLimits,) {
                return enumeration.isEditorLimit
                    ? <div className="card-bodyWithEditor-container">
                        <Image file={COURSE_THEME_IMAGE_FILE} className="course-theme-image position-absolute start-0 bottom-0"/>
                        {this.#createBody(enumeration)}
                    </div>
                    : this.#createBody(enumeration)
            }

            #createBody(enumeration: EntityLimits,) {
                return <div className="card-body" id={`limit-${enumeration.englishNameInHtml}`}>
                    {EntityLimitAppOption.AMOUNT_IN_ALL_GAMES.renderContent(enumeration,)}
                </div>
            }

            //endregion -------------------- Card list interpreter --------------------
            //region -------------------- Table interpreter --------------------

            public readonly tableHeadersColor = 'info' satisfies BootstrapThemeColor
            public readonly tableColor = 'primary' satisfies BootstrapThemeColor
            public readonly tableCaption = gameContentTranslation(`limit.${$this.type.type}.all`) satisfies ReactElementOrString

            public get tableOptions(): readonly EntityLimitAppOption[] {
                const games = $this.props.games,
                    hasSMM1Or3DSGames = games.hasSMM1Or3DS,
                    hasSMM2Games = games.hasSMM2

                const options: EntityLimitAppOption[] = [
                    EntityLimitAppOption.ACRONYM,
                    EntityLimitAppOption.NAME,
                ]
                if (hasSMM1Or3DSGames && hasSMM2Games)
                   options.push(EntityLimitAppOption.AMOUNT_IN_ALL_GAMES,)
                else {
                    if (hasSMM1Or3DSGames)
                        options.push(EntityLimitAppOption.AMOUNT_IN_SMM1_AND_SMM3DS,)
                    if (hasSMM2Games)
                        options.push(EntityLimitAppOption.AMOUNT_IN_SMM2,)
                }
                return options
            }


            public createNewTableContent(content: EntityLimits, option: EntityLimitAppOption,) {
                return option.renderContent(content,)
            }

            public createTableHeader(option: EntityLimitAppOption,) {
                return option.renderTableHeader()
            }

            //endregion -------------------- Table interpreter --------------------

        }()
    }

    //endregion -------------------- Create methods --------------------
}
