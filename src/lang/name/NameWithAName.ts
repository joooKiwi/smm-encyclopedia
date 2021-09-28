import type {Name} from './Name';

/**
 * A simple declaration of a name container with a name included in it.
 * It can be recursive or a deep reference.
 * It does not matter, as long as it has every methods of name and can return a {@link Name}
 */
export interface NameWithAName
    extends Name {

    get nameContainer(): Name

}