import './LimitApp.scss'

import type {LimitAppProperties}                                   from 'app/AppProperties.types'
import type {AppInterpreterWithTable, SimplifiedTableProperties}   from 'app/interpreter/AppInterpreterWithTable'
import type {PossibleDimensionOnCardList, PossibleDimensionOnList} from 'app/interpreter/DimensionOnList'
import type {ClassWithType}                                        from 'core/ClassWithType'
import type {EntityLimits}                                         from 'core/entityLimit/EntityLimits'
import type {EveryPossibleRouteNames}                              from 'routes/everyRoutes.types'
import type {ReactElementOrString}                                 from 'util/react/ReactProperties'

import {EntityLimitAppOption}                       from 'app/options/EntityLimitAppOption'
import {COURSE_THEME_IMAGE_FILE}                    from 'app/options/file/themeImageFiles'
import {EntityLimitTypes}                           from 'app/property/EntityLimitTypes'
import LinkButton                                   from 'app/tools/button/LinkButton'
import Image                                        from 'app/tools/images/Image'
import TextComponent                                from 'app/tools/text/TextComponent'
import {AbstractTableApp}                           from 'app/withInterpreter/AbstractTableApp'
import {contentTranslation, gameContentTranslation} from 'lang/components/translationMethods'

export default class LimitApp
    extends AbstractTableApp<AppInterpreterWithTable<EntityLimits, EntityLimitAppOption>, LimitAppProperties>
    implements ClassWithType<EntityLimitTypes> {

    //region -------------------- Fields --------------------

    #type?: EntityLimitTypes

    //endregion -------------------- Fields --------------------
    //region -------------------- Getter methods --------------------

    public get type(): EntityLimitTypes {
        return this.#type ??= EntityLimitTypes.getValueByType(this.props.type)
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
        return gameContentTranslation('limit.all')
    }

    protected override _createAsideContent(): ReactElementOrString {
        const {type, typeDisplayed,} = this

        return <div id="limit-linkButton-container" className="btn-group btn-group-vertical btn-group-sm">
            <LinkButton partialId="allLimit" routeName={typeDisplayed.getRoutePath(type.allRouteName)} color={type.allColor}>{contentTranslation('All')}</LinkButton>
            <div id="limit-linkButton-playAndEditor-container" className="btn-group btn-group-sm">
                <LinkButton partialId="playLimit" routeName={typeDisplayed.getRoutePath(type.playRouteName)} color={type.playColor}>{gameContentTranslation('limit.play.value')}</LinkButton>
                <LinkButton partialId="editorLimit" routeName={typeDisplayed.getRoutePath(type.editorRouteName)} color={type.editorColor}>{gameContentTranslation('limit.editor.value')}</LinkButton>
            </div>
        </div>
    }

    protected override _createAppOptionInterpreter(): AppInterpreterWithTable<EntityLimits, EntityLimitAppOption> {
        const $this = this

        return new class implements AppInterpreterWithTable<EntityLimits, EntityLimitAppOption> {

            public get iterable() {
                return $this.type.iterator
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
                EntityLimitAppOption.CALLBACK_TO_GET_ENUMERATION = () => enumeration

                return enumeration.isEditorLimit
                    ? <div className="card-bodyWithEditor-container">
                        <Image file={COURSE_THEME_IMAGE_FILE} className="course-theme-image position-absolute start-0 bottom-0"/>
                        {this.#createBody(enumeration)}
                    </div>
                    : this.#createBody(enumeration)
            }

            #createBody({reference: {limitAmountInSMM1AndSMM3DS, limitAmountInSMM2, isUnknownLimitInSMM2,}, englishName, englishNameInHtml,}: EntityLimits,) {
                return <div className="card-body" id={`limit-${englishNameInHtml}`}>
                    {limitAmountInSMM1AndSMM3DS === limitAmountInSMM2
                        ? <TextComponent key={`${englishName} - card list text component`} content={limitAmountInSMM2} isUnknown={isUnknownLimitInSMM2}/>
                        : EntityLimitAppOption.AMOUNT.renderContent}
                </div>
            }

            //endregion -------------------- Card list interpreter --------------------
            //region -------------------- Table interpreter --------------------

            public set callbackToGetEnumerable(value: () => EntityLimits,) {
                EntityLimitAppOption.CALLBACK_TO_GET_ENUMERATION = value
            }

            public get tableOptions(): readonly EntityLimitAppOption[] {
                return [
                    EntityLimitAppOption.ACRONYM,
                    EntityLimitAppOption.NAME,
                    EntityLimitAppOption.AMOUNT,
                ]
            }

            public get tableProperties(): SimplifiedTableProperties {
                return {
                    caption: gameContentTranslation('limit.all'),
                }
            }


            public createTableContent(option: EntityLimitAppOption,) {
                return option.renderContent
            }

            public createTableHeader(option: EntityLimitAppOption,) {
                return option.renderTableHeader
            }

            //endregion -------------------- Table interpreter --------------------

        }()
    }

    //endregion -------------------- Create methods --------------------
}