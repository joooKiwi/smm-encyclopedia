import type {PossibleGameReceived as OriginalPossibleGameReceived} from '../../lang/name/Name.builder.types'
import type {TemplateWithNameTemplate}                             from './TemplateWithName.template'

export type PossibleGameReceived<T extends TemplateWithNameTemplate, > = | OriginalPossibleGameReceived | ((template: T,) => OriginalPossibleGameReceived)
