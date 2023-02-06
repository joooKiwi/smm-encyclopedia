import type {TemplateWithNameTemplate}                             from 'core/_template/TemplateWithName.template'
import type {PossibleGameReceived as OriginalPossibleGameReceived} from 'lang/name/Name.builder.types'

export type PossibleGameReceived<T extends TemplateWithNameTemplate, > = | OriginalPossibleGameReceived | ((template: T,) => OriginalPossibleGameReceived)
