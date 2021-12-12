import type {EditorImage} from './EditorImage';
import type {GameStyles}  from '../../gameStyle/GameStyles';
import type {Themes}      from '../../theme/Themes';
import type {Times}       from '../../time/Times';

export class EditorImageContainer
    implements EditorImage {

    readonly #defaultImages: ReadonlyMap<GameStyles, readonly string[]>;
    readonly #map: ReadonlyMap<Times, ReadonlyMap<GameStyles, ReadonlyMap<Themes, readonly string[]>>>;

    public constructor(defaultImages: ReadonlyMap<GameStyles, readonly string[]>, map: ReadonlyMap<Times, ReadonlyMap<GameStyles, ReadonlyMap<Themes, readonly string[]>>>,) {
        this.#defaultImages = defaultImages;
        this.#map = map;
    }

    public get(time: Times, gameStyle: GameStyles, theme: Themes,): readonly string[] {
        return this.#map.get(time)?.get(gameStyle)?.get(theme) ?? this.#defaultImages.get(gameStyle)!;
    }

}
