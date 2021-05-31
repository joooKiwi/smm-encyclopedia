import everyThemes from '../../resources/Every Super Mario Maker 2 entities properties - Themes.csv';

import {CallbackCaller}                      from '../../util/CallbackCaller';
import {CSVLoader}                           from '../../util/loader/CSVLoader';
import {CourseTheme}                         from './CourseTheme';
import {DebugEntityReferences, EntityLoader} from '../simple/EntityLoader';
import {EmptyCourseTheme}                    from './EmptyCourseTheme';
import {EmptyWorldTheme}                     from './EmptyWorldTheme';
import {Entity}                from '../simple/Entity';
import {GamePropertyContainer} from '../properties/GamePropertyContainer';
import {Loader}                from '../../util/Loader';
import {GenericWorldTheme}                   from './GenericWorldTheme';
import {GenericCourseTheme}                  from './GenericCourseTheme';
import {Name}                                from '../../lang/name/Name';
import {NameBuilder}                         from '../lang/NameBuilder';
import {NameCreator}                         from '../lang/NameCreator';
import {Themes}                              from './Themes';
import {ThemeTemplate}                       from './ThemeTemplate';
import {WorldTheme}                          from './WorldTheme';


type ThemePropertiesArray = [
    isInCourseTheme: boolean,
    isInWorldTheme: boolean,

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
export class ThemeLoader
    implements Loader<Map<string, [CourseTheme, WorldTheme]>> {

    private static readonly instance = new ThemeLoader();

    //region ---------- external object references ----------

    readonly #entitiesMap: CallbackCaller<Map<string, DebugEntityReferences>>;
    readonly #everyThemeMap: CallbackCaller<Map<string, [CourseTheme, WorldTheme]>>;

    //endregion ---------- external object references ----------

    private constructor() {
        this.#entitiesMap = new CallbackCaller(() => EntityLoader.get.load());
        this.#everyThemeMap = new CallbackCaller(() => {
            const templateMap: Map<string, ThemeTemplate> = new Map();
            const finalReferences: Map<string, [CourseTheme, WorldTheme]> = new Map();

            new CSVLoader<ThemePropertiesArray, ThemeTemplate>(everyThemes, convertedContent => TemplateCreator.createTemplate(convertedContent))
                .convertToBoolean(
                    'isInCourseTheme', 'isInWorldTheme',
                    'isInSuperMarioMaker1', 'isInSuperMarioMaker2',
                )
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
                        finalReferences.set(englishName, this.__createReference(template, new NameBuilder(template.name).build(),))))
                .load();
            return finalReferences;
        });
    }

    private __createReference(template: ThemeTemplate, name: Name,): [CourseTheme, WorldTheme,] {
        const isInCourseTheme = template.isIn.theme.course;
        const isInWorldTheme = template.isIn.theme.world;

        return isInCourseTheme && isInWorldTheme
            ? [this.__createCourseTheme(template, name,), new GenericWorldTheme(name),]
            : isInCourseTheme
                ? [this.__createCourseTheme(template, name,), EmptyWorldTheme.get,]
                : [EmptyCourseTheme.get, new GenericWorldTheme(name),];
    }

    private __createCourseTheme(template: ThemeTemplate, name: Name,): CourseTheme {
        return new GenericCourseTheme(
            name,
            GamePropertyContainer.get(template.isIn.game['1'], template.isIn.game['2']),
            () => this.whereEntityIs(name.english),
        );
    }

    private get entities() {
        return this.#entitiesMap.get;
    }

    private whereEntityIs(englishName: string): Entity[] {
        const theme = Themes.getValue(englishName);
        if (theme === null)
            throw new ReferenceError(`The english name "${englishName}" has no reference on the Themes class.`);
        const everyEntities = [] as Entity[];
        for (const [, {entity}] of this.entities.entries())
            if (entity !== undefined && theme.get(entity))
                everyEntities.push(entity);
        return everyEntities;
    }


    public static get get() {
        return this.instance;
    }

    public load() {
        return this.#everyThemeMap.get;
    }

}


//region -------------------- Template related methods & classes --------------------

class TemplateCreator {

    public static createTemplate(content: ThemePropertiesArray): ThemeTemplate {
        return {
            isIn: {
                game: {
                    1: content[2],
                    2: content[3],
                },
                theme: {
                    course: content[0],
                    world: content[1],
                },
            },
            name: {
                english: {
                    simple: content[4],
                    american: content[5],
                    european: content[6],
                },
                french: {
                    simple: content[7],
                    canadian: content[8],
                    european: content[9],
                },
                german: content[10],
                spanish: {
                    simple: content[11],
                    american: content[12],
                    european: content[13],
                },
                italian: content[14],
                dutch: content[15],
                portuguese: {
                    simple: content[16],
                    american: content[17],
                    european: content[18],
                },
                russian: content[19],
                japanese: content[20],
                chinese: {
                    simple: content[21],
                    simplified: content[22],
                    traditional: content[23],
                },
                korean: content[24],
            }
        };
    }

}

//endregion -------------------- Template related methods & classes --------------------
