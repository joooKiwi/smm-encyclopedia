import everyThemes from "../../resources/Every Super Mario Maker 2 entities properties - Themes.csv";

import {CallbackCaller} from "../../util/CallbackCaller";
import CSVLoader from "../../loader/CSVLoader";
import {CourseTheme} from "./CourseTheme";
import {DebugEntityReferences, EntityLoader} from "../simple/EntityLoader";
import {EmptyCourseTheme} from "./EmptyCourseTheme";
import {EmptyWorldTheme} from "./EmptyWorldTheme";
import {Entity} from "../simple/Entity";
import {Loader} from "../../util/Loader";
import {NameCreator} from "../lang/NameCreator";
import {GenericWorldTheme} from "./GenericWorldTheme";
import {GenericCourseTheme} from "./GenericCourseTheme";
import {SMM2Name} from "../lang/SMM2Name";
import {SMM2NameBuilder} from "../lang/SMM2NameBuilder";
import {Themes} from "./Themes";
import {ThemeTemplate} from "./ThemeTemplate";
import {WorldTheme} from "./WorldTheme";


type ThemePropertiesArray = [
    isInCourseTheme: boolean,
    isInWorldTheme: boolean,

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

    readonly #entitiesMap: CallbackCaller<Map<string, DebugEntityReferences>>;
    readonly #everyThemeMap: CallbackCaller<Map<string, [CourseTheme, WorldTheme]>>

    private constructor() {
        this.#entitiesMap = new CallbackCaller(() => EntityLoader.get.load());
        this.#everyThemeMap = new CallbackCaller(() => {
            const templateMap: Map<string, ThemeTemplate> = new Map();
            const finalReferences: Map<string, [CourseTheme, WorldTheme]> = new Map();

            new CSVLoader<ThemePropertiesArray, ThemeTemplate>(everyThemes, convertedContent => TemplateCreator.createTemplate(convertedContent))
                .convertToBoolean('isInCourseTheme', 'isInWorldTheme',)
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
                        finalReferences.set(englishName, this.__createReference(template, new SMM2NameBuilder(template.name).build(),))))
                .load();
            return finalReferences;
        });
    }

    private __createReference(template: ThemeTemplate, name: SMM2Name,): [CourseTheme, WorldTheme] {
        const isInCourseTheme = template.isIn.courseTheme;
        const isInWorldTheme = template.isIn.worldTheme;

        return isInCourseTheme && isInWorldTheme
            ? [this.__createCourseTheme(name,), new GenericWorldTheme(name),]
            : isInCourseTheme
                ? [this.__createCourseTheme(name,), EmptyWorldTheme.get,]
                : [EmptyCourseTheme.get, new GenericWorldTheme(name)];
    }

    private __createCourseTheme(name: SMM2Name,): CourseTheme {
        return new GenericCourseTheme(name, () => this.whereEntityIs(name.english),);
    }

    private get entities() {
        return this.#entitiesMap.get;
    }

    private whereEntityIs(englishName: string): Entity[] {
        const theme = Themes.getValue(englishName);
        if (theme === null)
            throw new ReferenceError(`The english name "${englishName}" has no reference on the Themes class.`);
        const everyEntities = [] as Entity[];
        for (const [, reference] of this.entities.entries())
            if (reference.entity !== undefined && theme.isEntityOnTheme(reference.entity))
                everyEntities.push(reference.entity);
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
                courseTheme: content[0],
                worldTheme: content[1],
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