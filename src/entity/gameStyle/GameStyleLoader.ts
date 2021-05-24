import everyThemes                           from '../../resources/Every Super Mario Maker 2 entities properties - Game styles.csv';

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
import {GenericGameStyle}                    from './GenericGameStyle';

type GameStylePropertiesArray = [
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

            new CSVLoader<GameStylePropertiesArray, GameStyleTemplate>(everyThemes, convertedContent => TemplateCreator.createTemplate(convertedContent))
                .convertToEmptyableString(
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
                        finalReferences.set(englishName, this.__createReference(new NameBuilder(template.name).build()))))
                .load();
            return finalReferences;
        });
    }

    private __createReference(name: Name,): GameStyle {
        return new GenericGameStyle(name, () => this.whereEntityIs(name.english));
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
            if (entity !== undefined && gameStyle.isEntityOn(entity))
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
            name: {
                english: {
                    simple: content[0],
                    american: content[1],
                    european: content[2],
                },
                french: {
                    simple: content[3],
                    canadian: content[4],
                    european: content[5],
                },
                german: content[6],
                spanish: {
                    simple: content[7],
                    american: content[8],
                    european: content[9],
                },
                italian: content[10],
                dutch: content[11],
                portuguese: {
                    simple: content[12],
                    american: content[13],
                    european: content[14],
                },
                russian: content[15],
                japanese: content[16],
                chinese: {
                    simple: content[17],
                    simplified: content[18],
                    traditional: content[19],
                },
                korean: content[20],
            }
        };
    }

}

//endregion -------------------- Template related methods & classes --------------------
