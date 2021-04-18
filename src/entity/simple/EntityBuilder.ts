import {Entity} from "./Entity";
import {EntityFilePropertiesTemplate} from "./EntityFilePropertiesTemplate";
import {GenericEntity} from "./GenericEntity";
import {SMM2NameContainer} from "../lang/SMM2NameContainer";
import {IsInPropertyContainer} from "../properties/IsInPropertyContainer";
import {CallbackCaller} from "../../util/CallbackCaller";

export class EntityBuilder {

    readonly #entityCaller: CallbackCaller<Entity>;

    public constructor(template: EntityFilePropertiesTemplate) {
        const temporaryVariableToAvoidError = 'temp';
        const japaneseReference = template.name.japanese ?? temporaryVariableToAvoidError as string;
        const englishReference = template.name.english.simple ?? [template.name.english.american ?? temporaryVariableToAvoidError, template.name.english.european ?? temporaryVariableToAvoidError] as string | [string, string];
        const spanishReference = template.name.spanish.simple ?? [template.name.spanish.american ?? temporaryVariableToAvoidError, template.name.spanish.european ?? temporaryVariableToAvoidError] as string | [string, string];
        const frenchReference = template.name.french.simple ?? [template.name.french.canadian ?? temporaryVariableToAvoidError, template.name.french.european ?? temporaryVariableToAvoidError] as string | [string, string];
        const dutchReference = template.name.dutch ?? temporaryVariableToAvoidError as string;
        const germanReference = template.name.german ?? temporaryVariableToAvoidError as string;
        const italianReference = template.name.italian ?? temporaryVariableToAvoidError as string;
        const russianReference = template.name.russian ?? temporaryVariableToAvoidError as string;
        const koreanReference = template.name.korean ?? temporaryVariableToAvoidError as string;
        const chineseReference = template.name.chinese.simple ?? [template.name.chinese.simplified ?? temporaryVariableToAvoidError, template.name.chinese.traditional ?? temporaryVariableToAvoidError] as string | [string, string];
        this.#entityCaller = new CallbackCaller(() => new GenericEntity(
            new SMM2NameContainer(japaneseReference, englishReference, spanishReference, frenchReference, dutchReference, germanReference, italianReference, russianReference, koreanReference, chineseReference),
            new IsInPropertyContainer(
                template.properties.isIn.game['1'], template.properties.isIn.game['2'],
                template.properties.isIn.style.superMarioBros, template.properties.isIn.style.superMarioBros3, template.properties.isIn.style.superMarioWorld, template.properties.isIn.style.newSuperMarioBrosU, template.properties.isIn.style.superMario3DWorld,
                template.properties.isIn.theme.ground, template.properties.isIn.theme.underground, template.properties.isIn.theme.underwater, template.properties.isIn.theme.desert, template.properties.isIn.theme.snow, template.properties.isIn.theme.sky, template.properties.isIn.theme.forest, template.properties.isIn.theme.ghostHouse, template.properties.isIn.theme.airship, template.properties.isIn.theme.castle,
                template.properties.isIn.day, template.properties.isIn.night,
            )));
    }

    public build() {
        return this.#entityCaller.get;
    }
}