import type {PossibleGroupName, SingleEntityName} from '../entityTypes';

export interface GroupNameTranslationArguments<GN extends PossibleGroupName = PossibleGroupName, > {

    get groupName(): GN

}

export interface EntityNameTranslationArguments<EN extends SingleEntityName = SingleEntityName, > {

    get Name(): Capitalize<EN>

    get name(): Lowercase<EN>

}

export interface EntityName1TranslationArguments<EN extends SingleEntityName = SingleEntityName, > {

    get Name1(): Capitalize<EN>

    get name1(): Lowercase<EN>

}

export interface EntityName2TranslationArguments<EN extends SingleEntityName = SingleEntityName, > {

    get Name2(): Capitalize<EN>

    get name2(): Lowercase<EN>

}

export interface EntityName3TranslationArguments<EN extends SingleEntityName = SingleEntityName, > {

    get Name3(): Capitalize<EN>

    get name3(): Lowercase<EN>

}

export type PossibleGroupNameTranslations<GN extends PossibleGroupName = PossibleGroupName, > = | GroupNameTranslationArguments<GN> | {};
export type PossibleEntityNameTranslations<EN extends SingleEntityName = SingleEntityName, > = | EntityNameTranslationArguments<EN> | (EntityName1TranslationArguments<EN> & EntityName2TranslationArguments<EN> & ({} | EntityName3TranslationArguments<EN>)) | {};
export type PossibleTranslations<GN extends PossibleGroupName = PossibleGroupName, EN extends SingleEntityName = SingleEntityName, > = PossibleGroupNameTranslations<GN> & PossibleEntityNameTranslations<EN>;
