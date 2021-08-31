import type {PossibleGroupName, SingleEntityName} from '../entityTypes';

export type PossibleTranslationArgumentsReceived = [PossibleGroupName] | [| PossibleGroupName | null, ...(| [SingleEntityName] | [SingleEntityName, SingleEntityName,] | [SingleEntityName, SingleEntityName, SingleEntityName,])];
