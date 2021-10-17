import everyBehaviours from '../../resources/Entity behaviours.csv';

import type {EntityBehaviour}                                                         from './EntityBehaviour';
import type {EntityBehaviourTemplate}                                                 from './EntityBehaviour.template';
import type {Loader}                                                                  from '../../util/loader/Loader';
import type {PossibleAcronymEntityBehaviours, PossibleTranslationKeyEntityBehaviours} from './EntityBehaviours.types';
import type {PossibleGroupName, SingleEntityName}                                     from '../entityTypes';

import {AbstractTemplateCreator} from '../AbstractTemplateCreator';
import {EntityLoader}            from '../simple/Entity.loader';
import {CSVLoader}               from '../../util/loader/CSVLoader';
import {EntityBehaviourBuilder}  from './EntityBehaviour.builder';
import {HeaderTypesForConvertor} from '../../util/loader/utility/HeaderTypesForConvertor';

//region -------------------- CSV array related types --------------------

type Headers =
    | 'acronym'
    | 'translationKey'
    | `is${| 'Online' | 'Multiplayer'}Only`
    | `link_${| 'group' | 'entity'}`;
type PropertiesArray = [
    acronym: PossibleAcronymEntityBehaviours,
    translationKey: PossibleTranslationKeyEntityBehaviours,

    isOnlineOnly: boolean,
    isMultiplayerOnly: boolean,

    link_group: | PossibleGroupName | null,
    link_entity: | SingleEntityName | null,
];

//endregion -------------------- CSV array related types --------------------

/**
 * @singleton
 * @recursiveReference<{@link EntityBehaviours}>
 */
export class EntityBehaviourLoader
    implements Loader<ReadonlyMap<PossibleTranslationKeyEntityBehaviours, EntityBehaviour>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EntityBehaviourLoader;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleTranslationKeyEntityBehaviours, EntityBehaviour>;

    public load(): ReadonlyMap<PossibleTranslationKeyEntityBehaviours, EntityBehaviour> {
        if (this.#map == null) {
            const references = new Map<PossibleTranslationKeyEntityBehaviours, EntityBehaviour>();

            //region -------------------- Builder initialisation --------------------

            EntityBehaviourBuilder.entitiesMap = EntityLoader.get.load();
            //TODO add group map

            //endregion -------------------- Builder initialisation --------------------
            //region -------------------- CSV Loader --------------------

            new CSVLoader<PropertiesArray, EntityBehaviour, Headers>(everyBehaviours, convertedContent => new EntityBehaviourBuilder(TemplateCreator.get.createTemplate(convertedContent)).build())
                .setDefaultConversion('boolean')

                .convertTo(HeaderTypesForConvertor.everyPossibleBehavioursAcronyms, 'acronym',)
                .convertTo(HeaderTypesForConvertor.everyPossibleBehavioursTranslationKeys, 'translationKey',)

                .convertToEmptyableStringAnd(HeaderTypesForConvertor.everyPossibleGroupNames, 'link_group',)
                .convertToEmptyableStringAnd(HeaderTypesForConvertor.everyPossibleEntityNames, 'link_entity',)

                .onAfterFinalObjectCreated(finalContent => references.set(finalContent.translationKey, finalContent,))
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

//region -------------------- Template related methods & classes --------------------

/**
 * @singleton
 */
class TemplateCreator
    extends AbstractTemplateCreator<EntityBehaviourTemplate, PropertiesArray> {

    //region -------------------- Singleton usage --------------------

    static #instance?: TemplateCreator;

    private constructor() {
        super();
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    public createTemplate(content: PropertiesArray,): EntityBehaviourTemplate {
        return {
            acronym: content[0],
            translationKey: content[1],
            isOnly: {
                online: content[2],
                multiplayer: content[3],
            },
            links: {
                group: content[4],
                entity: content[5],
            },
        };
    }

}

//endregion -------------------- Template related methods & classes --------------------
