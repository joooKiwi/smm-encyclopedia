import resource from '../../resources/compiled/Game style.json';

import type {Loader}                                                             from '../../util/loader/Loader';
import type {GameStyle}                                                          from './GameStyle';
import type {GameStyleTemplate}                                                  from './GameStyle.template';
import type {PropertiesArrayFrom1And2 as GamesPropertyArray}                     from '../game/Loader.types';
import type {PossibleAcronym, PossibleEnglishName}                               from './GameStyles.types';
import type {PossibleIsAvailableFromTheStart}                                    from '../availableFromTheStart/loader.types';
import type {PossibleNightDesertWindDirection, PossibleNightDesertWindFrequency} from './Loader.types';

import {AbstractTemplateBuilder} from '../_template/AbstractTemplate.builder';
import {CSVLoader}               from '../../util/loader/CSVLoader';
import {GameStyleBuilder}        from './GameStyle.builder';
import {HeaderTypesForConvertor} from '../_util/loader/HeaderTypesForConvertor';

//region -------------------- CSV array related types --------------------

enum Headers {

    //region -------------------- Games --------------------

    isInSuperMarioMaker1And3DS,
    isInSuperMarioMaker2,

    //endregion -------------------- Games --------------------

    isAvailableFromTheStart_SMM1,

    reference,

    nightDesertWindDirection,
    nightDesertWindFrequency,

}

//region -------------------- Properties --------------------

export type ExclusivePropertiesArray = [
    isAvailableFromTheStart: PossibleIsAvailableFromTheStart,
    reference: PossibleAcronym,
    nightDesertWindDirection: PossibleNightDesertWindDirection,
    nightDesertWindFrequency: PossibleNightDesertWindFrequency,
];

type PropertiesArray = [
    ...GamesPropertyArray,
    ...ExclusivePropertiesArray,
];

//endregion -------------------- Properties --------------------

//endregion -------------------- CSV array related types --------------------

/**
 * @singleton
 * @recursiveReferenceVia<{@link GameStyleBuilder}, {@link GameStyles}>
 * @recursiveReference<{@link GameStyles}>
 */
export class GameStyleLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, GameStyle>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: GameStyleLoader;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleEnglishName, GameStyle>;

    public load(): ReadonlyMap<PossibleEnglishName, GameStyle> {
        if (this.#map == null) {
            const references = new Map<PossibleEnglishName, GameStyle>();

            //region -------------------- CSV Loader --------------------

            new CSVLoader<PropertiesArray, GameStyle, keyof typeof Headers>(resource, convertedContent => new GameStyleBuilder(new TemplateBuilder(convertedContent)).build())
                .setDefaultConversion('emptyable string')

                .convertToBoolean('isInSuperMarioMaker1And3DS', 'isInSuperMarioMaker2',)
                .convertToNullableBoolean('isAvailableFromTheStart_SMM1',)

                .convertTo(HeaderTypesForConvertor.everyPossibleGameReferenceAcronym, 'reference',)

                .convertToEmptyableStringAnd(['←', '↔', '→',], 'nightDesertWindDirection',)
                .convertToEmptyableStringAnd(['periodic', 'constant',], 'nightDesertWindFrequency',)

                .onAfterFinalObjectCreated(finalContent => references.set(finalContent.english as PossibleEnglishName, finalContent,))
                .load();

            //endregion -------------------- CSV Loader --------------------

            console.log('-------------------- "game style" has been loaded --------------------');// temporary console.log
            console.log(references);// temporary console.log
            console.log('-------------------- "game style" has been loaded --------------------');// temporary console.log

            this.#map = references;
        }
        return this.#map;
    }

}

class TemplateBuilder
    extends AbstractTemplateBuilder<GameStyleTemplate, PropertiesArray, typeof Headers> {

    public constructor(content: PropertiesArray,) {
        super(content);
    }

    protected override get _headersIndexMap() {
        return Headers;
    }

    public override build(): GameStyleTemplate {
        return {
            is: {
                in: {game: this._createGameTemplateFrom1And2(),},
                availableFromTheStart: this._getContent(this._headersIndexMap.isAvailableFromTheStart_SMM1),
            },
            reference: this._getContent(this._headersIndexMap.reference),
            nightDesertWind: {
                direction: this._getContent(this._headersIndexMap.nightDesertWindDirection),
                frequency: this._getContent(this._headersIndexMap.nightDesertWindFrequency),
            },
        };
    }

}
