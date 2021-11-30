import {PureComponent} from 'react';

import type {Name}         from '../../../lang/name/Name';
import type {ReactElement} from '../../../util/react/ReactProperty';

import {SoundEffects}     from './SoundEffects';
import {StringContainer}  from '../../StringContainer';
import Image              from '../../../app/tools/images/Image';
import {Games}            from '../../game/Games';
import {ProjectLanguages} from '../../../lang/ProjectLanguages';

interface SoundEffectProperties {

    reference: SoundEffects

    game: Games

    name: Name

}

/**
 * @reactComponent
 */
export default class SoundEffectComponent
    extends PureComponent<SoundEffectProperties> {

    protected get reference() {
        return this.props.reference;
    }

    protected get game() {
        return this.props.game;
    }

    protected get name() {
        return this.props.name;
    }

    protected _render() {
        return SoundEffectComponent.render(this.reference, this.game, ProjectLanguages.getEnglish(this.name),);
    }

    public static render(soundEffect: SoundEffects,): ReactElement
    public static render(soundEffect: SoundEffects, game: Games, identifier: string,): ReactElement
    public static render(soundEffect: SoundEffects, game?: Games, identifier?: string,) {
        const isGameNull = game == null;
        const isIdentifierNull = identifier == null;

        const themeEnglishNameInHtml = soundEffect.englishNameInHtml;
        const key = isIdentifierNull ? soundEffect.englishName : `${identifier} - ${soundEffect.englishName}${isGameNull ? '' : ` (${game.acronym})`}`;
        const id = isIdentifierNull ? `${themeEnglishNameInHtml}-image` : `${StringContainer.getInHtml(identifier)}-${themeEnglishNameInHtml}-soundEffect${isGameNull ? '' : `-${game.acronym}`}-image`;

        return <Image key={key} id={id} source={(game === Games.SUPER_MARIO_MAKER_1 ? soundEffect.SMM1ImagePath : soundEffect.SMM2ImagePath)!}
                      fallbackName={soundEffect.englishName} className={`soundEffect-image ${themeEnglishNameInHtml}-image`}/>;
    }

    public render() {
        return this._render();
    }

}