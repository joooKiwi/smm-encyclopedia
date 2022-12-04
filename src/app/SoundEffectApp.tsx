import './SoundEffectApp.scss'

import type {AppProperties}                                        from 'app/AppProperties.types'
import type {SoundEffectAppStates}                                 from 'app/AppStates.types'
import type {AppInterpreterWithTable, SimplifiedTableProperties}   from 'app/interpreter/AppInterpreterWithTable'
import type {PossibleDimensionOnCardList, PossibleDimensionOnList} from 'app/interpreter/DimensionOnList'
import type {ReactElementOrString}                                 from 'util/react/ReactProperties'

import {SoundEffectAppOption}   from 'app/options/SoundEffectAppOption'
import {AbstractTableApp}       from 'app/withInterpreter/AbstractTableApp'
import {ViewDisplays}           from 'app/withInterpreter/ViewDisplays'
import {SoundEffects}           from 'core/soundEffect/SoundEffects'
import {gameContentTranslation} from 'lang/components/translationMethods'

/**
 * @reactComponent
 */
export default class SoundEffectApp
    extends AbstractTableApp<AppInterpreterWithTable<SoundEffects, SoundEffectAppOption>, AppProperties, SoundEffectAppStates> {

    public constructor(props: AppProperties,) {
        super(props,)
        this.state = {
            typeDisplayed: ViewDisplays.TABLE,
        }
    }

    //region -------------------- Create methods --------------------

    protected override _createKey() {
        return 'soundEffect'
    }

    protected override _createTitleContent(): ReactElementOrString {
        return gameContentTranslation('Every sound effects')
    }

    protected override _createAppOptionInterpreter(): AppInterpreterWithTable<SoundEffects, SoundEffectAppOption> {
        return new class implements AppInterpreterWithTable<SoundEffects, SoundEffectAppOption> {

            public get iterable() {
                return SoundEffects[Symbol.iterator]()
            }

            //region -------------------- List interpreter --------------------

            public createListDimension(): PossibleDimensionOnList {
                return null
            }

            //endregion -------------------- List interpreter --------------------
            //region -------------------- Card list interpreter --------------------

            public createCardListDimension(): PossibleDimensionOnCardList {
                return 'list'
            }

            public createCardListContent(enumerable: SoundEffects,) {
                return <div>
                    <div className="soundEffect-images-container">
                        {SoundEffectAppOption.renderSMM1And3DSImage(enumerable)}
                        {SoundEffectAppOption.renderSMM2Image(enumerable)}
                    </div>
                </div>
            }

            //endregion -------------------- Card list interpreter --------------------
            //region -------------------- Table interpreter --------------------

            public set callbackToGetEnumerable(value: () => SoundEffects,) {
                SoundEffectAppOption.CALLBACK_TO_GET_ENUMERATION = value
            }

            public get tableOptions(): readonly SoundEffectAppOption[] {
                return [
                    SoundEffectAppOption.GAME,
                    SoundEffectAppOption.NAME,
                    SoundEffectAppOption.CATEGORY,
                    SoundEffectAppOption.PLAYER_BEHAVIOUR,
                    SoundEffectAppOption.SOUNDS,
                ]
            }

            public get tableProperties(): SimplifiedTableProperties {
                return {
                    caption: gameContentTranslation('Every sound effects'),
                }
            }

            public createTableContent(option: SoundEffectAppOption,) {
                return option.renderContent
            }

            public createTableHeader(option: SoundEffectAppOption,) {
                return option.renderTableHeader
            }

            //endregion -------------------- Table interpreter --------------------

        }()
    }

    //endregion -------------------- Create methods --------------------

}
