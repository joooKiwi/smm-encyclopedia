import everyGameStyles from '../../resources/Every Super Mario Maker 2 entities properties - Game styles.csv';

import {Loader}                              from '../../util/Loader';
import {CallbackCaller}                      from '../../util/CallbackCaller';
import {DebugEntityReferences, EntityLoader} from '../simple/EntityLoader';
import {CSVLoader}                           from '../../util/loader/CSVLoader';
import {Entity}                              from '../simple/Entity';
import {GameStyle}                           from './GameStyle';
import {GameStyles}                          from './GameStyles';
import {GameStyleTemplate}                   from './GameStyleTemplate';
import {NameCreator}                         from '../lang/NameCreator';
import {NameBuilder}                         from '../lang/NameBuilder';
import {Name}                                from '../../lang/name/Name';
import {GenericGameStyle}      from './GenericGameStyle';
import {GamePropertyContainer} from '../properties/GamePropertyContainer';

type GameStylePropertiesArray = [

    isInSuperMarioMaker1: boolean,
    isInSuperMarioMaker2: boolean,

    //region ---------- Language properties ----------

    english: null | string,
    americanEnglish: null | string,
    europeanEnglish: null | string,

    french: null | string,
    canadianFrench: null | string,
    europeanFrench: null | string,

    german: null | string,

    spanish: null | string,
    americanSpanish: null | string,
    europeanSpanish: null | string,

    italian: null | string,

    dutch: null | string,

    portuguese: null | string,
    americanPortuguese: null | string,
    europeanPortuguese: null | string,

    russian: null | string,

    japanese: null | string,

    chinese: null | string,
    simplifiedChinese: null | string,
    tradionalChinese: null | string,

    korean: null | string,
    //endregion ---------- Language properties ----------
];


/**
 * @singleton
 */
export class GameStyleLoader
    implements Loader<Map<string, GameStyle>> {

    private static readonly instance = new GameStyleLoader();

    readonly #entitiesMap: CallbackCaller<Map<string, DebugEntityReferences>>;
    readonly #everyGameStyleMap: CallbackCaller<Map<string, GameStyle>>;

    private constructor() {
        this.#entitiesMap = new CallbackCaller(() => EntityLoader.get.load());
        this.#everyGameStyleMap = new CallbackCaller(() => {
            const templateMap: Map<string, GameStyleTemplate> = new Map();
            const finalReferences: Map<string, GameStyle> = new Map();

            new CSVLoader<GameStylePropertiesArray, GameStyleTemplate>(everyGameStyles, convertedContent => TemplateCreator.createTemplate(convertedContent))
                .convertToBoolean(
                    'isInSuperMarioMaker1', 'isInSuperMarioMaker2',
                ).convertToEmptyableString(
                'english', 'americanEnglish', 'europeanEnglish',
                'french', 'canadianFrench', 'europeanFrench',
                'german',
                'spanish', 'americanSpanish', 'europeanSpanish',
                'dutch', 'italian',
                'portuguese', 'americanPortuguese', 'europeanPortuguese',
                'russian', 'japanese',
                'chinese', 'simplifiedChinese', 'traditionalChinese',
                'korean',
            )
                .onFinalObjectCreated(finalContent => NameCreator.addEnglishReference(finalContent.name, templateMap, finalContent))
                .onInitialisationEnd(() =>
                    templateMap.forEach((template, englishName) =>
                        finalReferences.set(englishName, this.__createReference(template, new NameBuilder(template.name).build(),))))
                .load();
            return finalReferences;
        });
    }

    private __createReference(template: GameStyleTemplate, name: Name,): GameStyle {
        return new GenericGameStyle(name, GamePropertyContainer.get(template.isIn.game['1'], template.isIn.game['2']), () => this.whereEntityIs(name.english));
    }

    private get entities() {
        return this.#entitiesMap.get;
    }

    private whereEntityIs(englishName: string): Entity[] {
        const gameStyle = GameStyles.getValue(englishName);
        if (gameStyle === null)
            throw new ReferenceError(`The english name "${englishName}" has no reference on the Game Style class.`);
        const everyEntities = [] as Entity[];
        for (const [, {entity}] of this.entities.entries())
            if (entity !== undefined && gameStyle.get(entity))
                everyEntities.push(entity);
        return everyEntities;
    }


    public static get get() {
        return this.instance;
    }

    public load() {
        return this.#everyGameStyleMap.get;
    }

}

//region -------------------- Template related methods & classes --------------------

class TemplateCreator {

    public static createTemplate(content: GameStylePropertiesArray): GameStyleTemplate {
        return {
            isIn: {
                game: {
                    '1': content[0],
                    '2': content[1],
                },
            },
            name: {
                english: {
                    simple: content[2],
                    american: content[3],
                    european: content[4],
                },
                french: {
                    simple: content[5],
                    canadian: content[6],
                    european: content[7],
                },
                german: content[8],
                spanish: {
                    simple: content[9],
                    american: content[10],
                    european: content[11],
                },
                italian: content[12],
                dutch: content[13],
                portuguese: {
                    simple: content[14],
                    american: content[15],
                    european: content[16],
                },
                russian: content[17],
                japanese: content[18],
                chinese: {
                    simple: content[19],
                    simplified: content[20],
                    traditional: content[21],
                },
                korean: content[22],
            }
        };
    }

}

//endregion -------------------- Template related methods & classes --------------------
