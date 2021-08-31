import type {EntityName1TranslationArguments, EntityName2TranslationArguments, EntityName3TranslationArguments, EntityNameTranslationArguments, GroupNameTranslationArguments, PossibleTranslations} from './EntityLimits.translations';
import type {PossibleGroupName, SingleEntityName}                                                                                                                                                    from '../entityTypes';
import {PossibleTranslationArgumentsReceived}                                                                                                                                                        from './EntityLimitTranslation.types';
import {EMPTY_OBJECT}                                                                                                                                                                                from '../../util/emptyVariables';

/**
 * @provider
 */
export class EntityLimitTranslation<GN extends PossibleGroupName, EN1 extends SingleEntityName = SingleEntityName, EN2 extends SingleEntityName = SingleEntityName, EN3 extends SingleEntityName = SingleEntityName, >
    implements GroupNameTranslationArguments<GN>, EntityNameTranslationArguments<EN1>, EntityName1TranslationArguments<EN1>, EntityName2TranslationArguments<EN2>, EntityName3TranslationArguments<EN3> {

    //region -------------------- Attributes --------------------

    readonly #groupName: GN | null;

    readonly #name1?: EN1;
    readonly #capitalizeName1?: Capitalize<EN1>;
    readonly #lowerCaseName1?: Lowercase<EN1>;

    readonly #name2?: EN2;
    readonly #capitalizeName2?: Capitalize<EN2>;
    readonly #lowerCaseName2?: Lowercase<EN2>;

    readonly #name3?: EN3;
    readonly #capitalizeName3?: Capitalize<EN3>;
    readonly #lowerCaseName3?: Lowercase<EN3>;

    //endregion -------------------- Attributes --------------------

    private constructor(groupName: | GN | null,)
    private constructor(groupName: | GN | null, name: EN1,)
    private constructor(groupName: | GN | null, name1: EN1, name2: EN2,)
    private constructor(groupName: | GN | null, name1: EN1, name2: EN2, name3: EN3,)
    private constructor(groupName: | GN | null, name1?: EN1, name2?: EN2, name3?: EN3,) {
        this.#groupName = groupName;
        if (name1 != null) {
            this.#name1 = name1;
            this.#capitalizeName1 = name1 as Capitalize<EN1>;
            this.#lowerCaseName1 = name1.toLowerCase() as Lowercase<EN1>;
            if (name2 != null) {
                this.#name2 = name2;
                this.#capitalizeName2 = name2 as Capitalize<EN2>;
                this.#lowerCaseName2 = name2.toLowerCase() as Lowercase<EN2>;
                if (name3 != null) {
                    this.#name3 = name3;
                    this.#capitalizeName3 = name3 as Capitalize<EN3>;
                    this.#lowerCaseName3 = name3.toLowerCase() as Lowercase<EN3>;
                }
            }
        }
    }

    //region -------------------- Getter methods --------------------

    public get groupName(): GN {
        return this.#groupName!;
    }


    public get Name(): Capitalize<EN1> {
        return this.#capitalizeName1!;
    }

    public get name(): Lowercase<EN1> {
        return this.#lowerCaseName1!;
    }


    public get Name1(): Capitalize<EN1> {
        return this.Name;
    }

    public get name1(): Lowercase<EN1> {
        return this.name;
    }


    public get Name2(): Capitalize<EN2> {
        return this.#capitalizeName2!;
    }

    public get name2(): Lowercase<EN2> {
        return this.#lowerCaseName2!;
    }


    public get Name3(): Capitalize<EN3> {
        return this.#capitalizeName3!;
    }

    public get name3(): Lowercase<EN3> {
        return this.#lowerCaseName3!;
    }

    //endregion -------------------- Getter methods --------------------

    public static get(translationArguments: | PossibleTranslationArgumentsReceived | null,): PossibleTranslations {
        if (translationArguments == null)
            return EMPTY_OBJECT;
        else {
            const [groupName, ...entityNames] = translationArguments;
            const groupNameOnTranslation = groupName == null ? null : groupName;
            switch (entityNames.length) {
                case 0:
                    return new EntityLimitTranslation(groupNameOnTranslation,);
                case 1:
                    return new EntityLimitTranslation(groupNameOnTranslation, ...entityNames,);
                case 2:
                    return new EntityLimitTranslation(groupNameOnTranslation, ...entityNames,);
                case 3:
                    return new EntityLimitTranslation(groupNameOnTranslation, ...entityNames,);
            }
        }
    }

}