import {File, PossibleFileExtension} from 'util/file/File'

export interface ExternalFile<out PATH extends string = string,
    out NAME extends string = string,
    out EXTENSION extends PossibleFileExtension = PossibleFileExtension, >
    extends File<PATH, NAME, EXTENSION> {

    get fullName(): FullFileName<PATH, NAME, EXTENSION>

}

export type FullFileName<PATH extends string = string, NAME extends string = string, EXTENSION extends PossibleFileExtension = PossibleFileExtension, > = `${PATH}/${NAME}.${EXTENSION}`
