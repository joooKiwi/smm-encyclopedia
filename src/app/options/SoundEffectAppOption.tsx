import {lazy} from 'react';

import type {AppOptionWithContent, PossibleRenderReactElement}                                                                                                                      from './component/AppOptionWithContent';
import type {AppOptionWithTable}                                                                                                                                                    from './component/AppOptionWithTable';
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './SoundEffectAppOption.types';
import type {ReactElement}                                                                                                                                                          from '../../util/react/ReactProperties';
import type {SingleHeaderContent}                                                                                                                                                   from '../tools/table/SimpleHeader';
import type {StaticReference}                                                                                                                                                       from '../../util/enum/Enum.types';

import {AppOptionWithContentComponent} from './component/AppOptionWithContent.component';
import {AppOptionWithTableComponent}   from './component/AppOptionWithTable.component';
import {CommonOptions}                 from './CommonOptions';
import {EMPTY_REACT_ELEMENT}           from '../../util/emptyReactVariables';
import {Enum}                          from '../../util/enum/Enum';
import {Games}                         from '../../core/game/Games';
import {SoundEffects}                  from '../../core/soundEffect/SoundEffects';
import {SoundEffectCategories}         from '../../core/soundEffectCategory/SoundEffectCategories';

//region -------------------- dynamic imports --------------------

const SimpleSoundComponent = lazy(() => import( '../../util/sound/component/SimpleSound.component'));
const SoundEffectComponent = lazy(() => import( '../../core/soundEffect/SoundEffect.component'));

//endregion -------------------- dynamic imports --------------------

export abstract class SoundEffectAppOption
    extends Enum<Ordinals, Names>
    implements AppOptionWithContent, AppOptionWithTable {

    //region -------------------- Enum instances --------------------

    public static readonly GAME =             new class GameStyleAppOption_Game extends SoundEffectAppOption {

        protected override _createContentOption(enumeration: SoundEffects,): PossibleRenderReactElement {
            return [
                    SoundEffectAppOption.renderSMM1And3DSImage(enumeration),
                    SoundEffectAppOption.renderSMM2Image(enumeration),
                ];
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return CommonOptions.get.gameHeaderWithMainGames;
        }

    }();
    public static readonly NAME =             new class GameStyleAppOption_Name extends SoundEffectAppOption {

        protected override _createContentOption(enumeration: SoundEffects,): PossibleRenderReactElement {
            return CommonOptions.get.getNameContent(enumeration);
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return CommonOptions.get.nameHeader;
        }

    }();
    public static readonly CATEGORY =         new class GameStyleAppOption_Category extends SoundEffectAppOption {

        protected override _createContentOption(enumeration: SoundEffects,): PossibleRenderReactElement {
            const {reference,} = enumeration;

            return CommonOptions.get.getCategoryContent(enumeration, () => SoundEffectCategories.getValue(reference.categoryEnglish)!.imagePath,);
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return CommonOptions.get.categoryHeader;
        }

    }();
    public static readonly PLAYER_BEHAVIOUR = new class GameStyleAppOption_PlayerBehaviour extends SoundEffectAppOption {

        protected override _createContentOption(enumeration: SoundEffects,): PossibleRenderReactElement {
            return enumeration.reference.playerSoundEffectTriggerContainer.createNewComponent(enumeration.englishName,);
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'player behaviour', element: <>--Player behaviour--</>/*<GameContentTranslationComponent translationKey="Player behaviour"/>*/,};
        }

    }();
    public static readonly SOUNDS = new class GameStyleAppOption_PlayerBehaviour extends SoundEffectAppOption {

        protected override _createContentOption({englishName, sounds_exclusiveSmm1, sounds_standaloneSmm1, sounds_smm2,}: SoundEffects,): PossibleRenderReactElement {
            const isSMM1Empty = sounds_exclusiveSmm1.length === 0;
            const isSMM2Empty = sounds_smm2.length === 0;

            return isSMM1Empty && isSMM2Empty
                ? EMPTY_REACT_ELEMENT
                : <div key={`${englishName} (sound effect sounds)`} className={`soundEffect-sounds-container ${isSMM1Empty || isSMM2Empty ? ` soundEffect-sounds-smm${isSMM1Empty ? 2 : 1}-only-container` : ''}`}>
                    {isSMM1Empty
                        ? EMPTY_REACT_ELEMENT
                        : <div key={`${englishName} (sound effect sounds - SMM1&3DS)`} className="soundEffect-sounds-smm1-container">
                            {sounds_standaloneSmm1.map(sound => <div key={`${englishName} (sound effect sound - SMM1&3DS - ${sound})`} className="soundEffect-sound-container soundEffect-sound-smm1-container col-12 col-lg-6 col-xl-4 col-xxl-3">
                                <SimpleSoundComponent source={sound} title={`${englishName} (${sound})`}/>
                            </div>)}
                        </div>}
                    {isSMM2Empty
                        ? EMPTY_REACT_ELEMENT
                        : <div key={`${englishName} (sound effect sounds (SMM2))`} className="soundEffect-sounds-smm2-container">
                            {sounds_smm2.map(sound => <div key={`${englishName} (sound effect sound - SMM2 - ${sound})`} className="soundEffect-sound-container soundEffect-sound-smm2-container col-12 col-lg-6 col-xl-4 col-xxl-3">
                                <SimpleSoundComponent source={sound} title={`${englishName} (${sound})`}/>
                            </div>)}
                        </div>}
                </div>;
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'sounds', element: <>--Sounds--</>,};
        }

    }();

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: SoundEffectAppOption;

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    /**
     * The callback to get the enumeration based for each option.
     *
     * @note It should only be set by {@link SoundEffectApp} and get by {@link SoundEffectAppOption}.
     */
    public static CALLBACK_TO_GET_ENUMERATION: () => SoundEffects;

    #appOptionWithContent?: AppOptionWithContent;
    #appOptionWithTable?: AppOptionWithTable;

    //endregion -------------------- Fields --------------------

    private constructor() {
        super();
    }

    //region -------------------- Getter methods --------------------
    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    //region -------------------- App option - content --------------------

    public static renderSMM1And3DSImage(enumerable: SoundEffects,): ReactElement {
        const reference = enumerable.reference;

        return reference.isInSuperMarioMaker1 ? <SoundEffectComponent reference={enumerable} name={reference} game={Games.SUPER_MARIO_MAKER_1}/> : EMPTY_REACT_ELEMENT;
    }

    public static renderSMM2Image(enumerable: SoundEffects,): ReactElement {
        const reference = enumerable.reference;

        return reference.isInSuperMarioMaker2 ? <SoundEffectComponent reference={enumerable} name={reference} game={Games.SUPER_MARIO_MAKER_2}/> : EMPTY_REACT_ELEMENT;
    }

    protected abstract _createContentOption(enumeration: SoundEffects,): PossibleRenderReactElement;

    private get __appOptionWithContent(): AppOptionWithContent {
        return this.#appOptionWithContent ??= new AppOptionWithContentComponent(() => this._createContentOption(SoundEffectAppOption.CALLBACK_TO_GET_ENUMERATION()),);
    }

    public get renderContent(): readonly ReactElement[] {
        return this.__appOptionWithContent.renderContent;
    }

    //endregion -------------------- App option - content --------------------
    //region -------------------- App option - table --------------------

    protected abstract _createTableHeaderOption(): SingleHeaderContent;

    private get __appOptionWithTable(): AppOptionWithTable {
        return this.#appOptionWithTable ??= new AppOptionWithTableComponent(() => this._createTableHeaderOption(),);
    }

    public get renderTableHeader(): | SingleHeaderContent | null {
        return this.__appOptionWithTable.renderTableHeader;
    }

    //endregion -------------------- App option - table --------------------

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): StaticReference<SoundEffectAppOption> {
        return SoundEffectAppOption;
    }

    //region -------------------- Enum value methods --------------------

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(name: S,): EnumByPossibleString<S>
    public static getValue<S extends string = string, >(name: S,): EnumByString<S>
    public static getValue<I extends SoundEffectAppOption = SoundEffectAppOption, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): SoundEffectAppOption
    public static getValue(value: PossibleValue,): | SoundEffectAppOption | null
    public static getValue(value: PossibleValue,) {
        return Enum.getValueOn(this, value,);
    }

    public static get values(): EnumArray {
        return Enum.getValuesOn(this);
    }

    //endregion -------------------- Enum value methods --------------------

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}
