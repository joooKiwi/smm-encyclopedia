import {Entity} from "./Entity";
import {EntityFilePropertiesTemplate} from "./EntityFilePropertiesTemplate";
import {GenericEntity} from "./GenericEntity";
import {SMM2NameContainer} from "../lang/SMM2NameContainer";
import {IsInPropertyContainer} from "../properties/IsInPropertyContainer";
import {CallbackCaller} from "../../util/CallbackCaller";
import {EntityReferencesContainer} from "../properties/EntityReferencesContainer";
import {DebugEntityReferences} from "./entityLoader";
import {EntityLink} from "../entityTypes";
import {EmptyEntity} from "./EmptyEntity";
import {SMM1ExclusiveGenericEntity} from "./SMM1ExclusiveGenericEntity";
import {SMM2ExclusiveGenericEntity} from "./SMM2ExclusiveGenericEntity";

/**
 * @builder
 * @singleInstanceCreator
 */
export class EntityBuilder {

    public static references: Map<string, DebugEntityReferences>;

    readonly #template;
    readonly #entityCaller: CallbackCaller<Entity>;
    readonly #selfCallback = () => this.build();
    public static readonly EMPTY_ENTITY_CALLBACK = () => EmptyEntity.get;

    public constructor(template: EntityFilePropertiesTemplate) {
        this.#template = template;
        this.#entityCaller = new CallbackCaller(() => {
            const isInProperty = this.__createIsInProperty();
            return isInProperty.isInSuperMarioMaker1 && !isInProperty.isInSuperMarioMaker2 ? new SMM1ExclusiveGenericEntity(this.__createName(), isInProperty, this.__createReferences(),)
                : !isInProperty.isInSuperMarioMaker1 && isInProperty.isInSuperMarioMaker2 ? new SMM2ExclusiveGenericEntity(this.__createName(), isInProperty, this.__createReferences(),)
                    : new GenericEntity(this.__createName(), isInProperty, this.__createReferences(),);
        });
    }

    private get __template() {
        return this.#template;
    }


    private __createName() {
        const temporaryVariableToAvoidError = 'temp';
        const name = this.__template.name;

        const japaneseReference = name.japanese ?? temporaryVariableToAvoidError as string;
        const englishReference = name.english.simple ?? [name.english.american ?? temporaryVariableToAvoidError, name.english.european ?? temporaryVariableToAvoidError] as string | [string, string];
        const spanishReference = name.spanish.simple ?? [name.spanish.american ?? temporaryVariableToAvoidError, name.spanish.european ?? temporaryVariableToAvoidError] as string | [string, string];
        const frenchReference = name.french.simple ?? [name.french.canadian ?? temporaryVariableToAvoidError, name.french.european ?? temporaryVariableToAvoidError] as string | [string, string];
        const dutchReference = name.dutch ?? temporaryVariableToAvoidError as string;
        const germanReference = name.german ?? temporaryVariableToAvoidError as string;
        const italianReference = name.italian ?? temporaryVariableToAvoidError as string;
        const russianReference = name.russian ?? temporaryVariableToAvoidError as string;
        const koreanReference = name.korean ?? temporaryVariableToAvoidError as string;
        const chineseReference = name.chinese.simple ?? [name.chinese.simplified ?? temporaryVariableToAvoidError, name.chinese.traditional ?? temporaryVariableToAvoidError] as string | [string, string];

        return new SMM2NameContainer(japaneseReference, englishReference, spanishReference, frenchReference, dutchReference, germanReference, italianReference, russianReference, koreanReference, chineseReference);
    }


    private __createIsInProperty() {
        const isIn = this.__template.properties.isIn;

        return new IsInPropertyContainer(
            isIn.game['1'], isIn.game['2'],
            isIn.style.superMarioBros, isIn.style.superMarioBros3, isIn.style.superMarioWorld, isIn.style.newSuperMarioBrosU, isIn.style.superMario3DWorld,
            isIn.theme.ground, isIn.theme.underground, isIn.theme.underwater, isIn.theme.desert, isIn.theme.snow, isIn.theme.sky, isIn.theme.forest, isIn.theme.ghostHouse, isIn.theme.airship, isIn.theme.castle,
            isIn.day, isIn.night,
        );
    }


    private __createReferences() {
        const reference = this.__template.properties.reference;

        const inSuperMarioBros = this.__createNullableEntityCallbackFor(reference.style.superMarioBros);
        const inSuperMarioBros3 = this.__createNullableEntityCallbackFor(reference.style.superMarioBros3);
        const inSuperMarioWorld = this.__createNullableEntityCallbackFor(reference.style.superMarioWorld);
        const inNewSuperMarioBros = this.__createNullableEntityCallbackFor(reference.style.newSuperMarioBrosU);
        const inSuperMario3DWorld = this.__createNullableEntityCallbackFor(reference.style.superMario3DWorld);

        const inGroundTheme = this.__createEntityCallbackFor(reference.theme.ground);
        const inUndergroundTheme = this.__createNullableEntityCallbackFor(reference.theme.underground);
        const inUnderwaterTheme = this.__createNullableEntityCallbackFor(reference.theme.underwater);
        const inDesertTheme = this.__createNullableEntityCallbackFor(reference.theme.desert);
        const inSnowTheme = this.__createNullableEntityCallbackFor(reference.theme.snow);
        const inSkyTheme = this.__createNullableEntityCallbackFor(reference.theme.sky);
        const inForestTheme = this.__createNullableEntityCallbackFor(reference.theme.forest);
        const inGhostHouseTheme = this.__createNullableEntityCallbackFor(reference.theme.ghostHouse);
        const inAirshipTheme = this.__createNullableEntityCallbackFor(reference.theme.airship);
        const inCastleTheme = this.__createNullableEntityCallbackFor(reference.theme.castle);

        const inDayTheme = this.__createEntityCallbackFor(reference.day);
        const inNightTheme = this.__createNullableEntityCallbackFor(reference.night);

        const allReferences = reference.all === null ? () => [] : () => reference.all!
            .map(reference => EntityBuilder.references.get(reference.name.english.simple || reference.name.english.american!)!.entity!);

        return new EntityReferencesContainer(
            inSuperMarioBros, inSuperMarioBros3, inSuperMarioWorld, inNewSuperMarioBros, inSuperMario3DWorld,
            inGroundTheme, inUndergroundTheme, inUnderwaterTheme, inDesertTheme, inSnowTheme, inSkyTheme, inForestTheme, inGhostHouseTheme, inAirshipTheme, inCastleTheme,
            inDayTheme, inNightTheme,
            allReferences,
        );
    }

    private __createEntityCallbackFor(link: EntityLink): () => Entity {
        return link === 'this' ? this.#selfCallback : () => EntityBuilder.references.get(link)!.entity!;
    }

    private __createNullableEntityCallbackFor(link: null | EntityLink): () => Entity {
        return link === null ? EntityBuilder.EMPTY_ENTITY_CALLBACK : this.__createEntityCallbackFor(link);
    }


    public build() {
        return this.#entityCaller.get;
    }
}