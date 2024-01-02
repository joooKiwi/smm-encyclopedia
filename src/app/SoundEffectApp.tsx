import './SoundEffectApp.scss'

import type {SoundEffectProperties}   from 'app/AppProperties.types'
import type {AppInterpreterWithTable} from 'app/interpreter/AppInterpreterWithTable'
import type {DimensionOnList}         from 'app/interpreter/DimensionOnList'
import type {PossibleRouteName}       from 'route/EveryRoutes.types'

import {SoundEffectAppOption}   from 'app/options/SoundEffectAppOption'
import {AbstractTableApp}       from 'app/withInterpreter/AbstractTableApp'
import {SoundEffects}           from 'core/soundEffect/SoundEffects'
import {gameContentTranslation} from 'lang/components/translationMethods'
import {filterGame}             from 'util/utilitiesMethods'

export default class SoundEffectApp
    extends AbstractTableApp<SoundEffects, AppInterpreterWithTable<SoundEffects, SoundEffectAppOption>, SoundEffectProperties> {

    //region -------------------- Create methods --------------------

    protected override _createKey() {
        return 'soundEffect'
    }


    protected override _createSimpleListRouteName(): PossibleRouteName {
        return 'everySoundEffect (list)'
    }

    protected override _createCardListRouteName(): PossibleRouteName {
        return 'everySoundEffect (card)'
    }

    protected override _createTableRouteName(): PossibleRouteName {
        return 'everySoundEffect (table)'
    }


    protected override _createTitleContent(): ReactElementOrString {
        return gameContentTranslation('sound effect.all')
    }

    protected override _createAppOptionInterpreter() {
        const $this = this

        return new class SoundEffectAppInterpreter implements AppInterpreterWithTable<SoundEffects, SoundEffectAppOption> {

            public get content() {
                return filterGame(SoundEffects.CompanionEnum.get.values, $this.props.games,)
            }

            //region -------------------- List interpreter --------------------

            public createListDimension(): DimensionOnList {
                return {
                    default: 1,
                    small: 3,
                    medium: 4,
                    large: 5,
                    extraLarge: 6,
                }
            }

            //endregion -------------------- List interpreter --------------------
            //region -------------------- Card list interpreter --------------------

            public createCardListDimension() {
                return this.createListDimension()
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

            public readonly tableHeadersColor = 'info' satisfies BootstrapThemeColor
            public readonly tableColor = 'primary' satisfies BootstrapThemeColor
            public readonly tableCaption = gameContentTranslation('sound effect.all') satisfies ReactElementOrString

            public get tableOptions(): readonly SoundEffectAppOption[] {
                const games = $this.props.games

                const options = [] as SoundEffectAppOption[]
                if (games.hasSMM1Or3DS)
                    options.push(SoundEffectAppOption.SMM1_AND_SMM3DS_ICON,)
                if (games.hasSMM2)
                    options.push(SoundEffectAppOption.SMM2_ICON,)
                options.push(
                    SoundEffectAppOption.NAME,
                    SoundEffectAppOption.CATEGORY,
                    SoundEffectAppOption.PLAYER_BEHAVIOUR,
                    SoundEffectAppOption.SOUNDS,
                )
                return options
            }


            public createNewTableContent(content: SoundEffects, option: SoundEffectAppOption,) {
                return option.renderContent(content,)
            }

            public createTableHeader(option: SoundEffectAppOption,) {
                return option.renderTableHeader()
            }

            //endregion -------------------- Table interpreter --------------------

        }()
    }

    //endregion -------------------- Create methods --------------------

}
