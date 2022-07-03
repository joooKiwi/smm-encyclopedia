import './SoundEffect.scss';

import {PureComponent} from 'react';

import type {Name}         from '../../lang/name/Name';
import type {ReactElement} from '../../util/react/ReactProperty';
import type {SoundEffects} from './SoundEffects';

import {Games}            from '../game/Games';
import Image              from '../../app/tools/images/Image';
import {StringContainer}  from '../../util/StringContainer';

interface SoundEffectProperties {

    reference: SoundEffects

    game: Games

    name: Name<string>

}

/**
 * @reactComponent
 */
export default class SoundEffectComponent
    extends PureComponent<SoundEffectProperties> {

    public get reference() {
        return this.props.reference;
    }

    public get game() {
        return this.props.game;
    }

    public get name() {
        return this.props.name;
    }

    protected _render() {
        return SoundEffectComponent.render(this.reference, this.game, this.name.english,);
    }

    public static render(soundEffect: SoundEffects,): ReactElement
    public static render(soundEffect: SoundEffects, game: Games, identifier: string,): ReactElement
    public static render(soundEffect: SoundEffects, game?: Games, identifier?: string,) {
        const isGameNull = game == null;
        const isIdentifierNull = identifier == null;

        const themeEnglishNameInHtml = soundEffect.englishNameInHtml;
        const key = isIdentifierNull ? soundEffect.englishName : `${identifier} - ${soundEffect.englishName}${isGameNull ? '' : ` (${game.acronym})`}`;
        const id = isIdentifierNull ? `${themeEnglishNameInHtml}-image` : `${StringContainer.getInHtml(identifier)}-${themeEnglishNameInHtml}-soundEffect${isGameNull ? '' : `-${game.acronym}`}-image`;

        if (game === Games.SUPER_MARIO_MAKER_1) {
            const [imagePath1, imagePath2,] = soundEffect.SMM1ImagePath!;
            if (imagePath2 == null)
                return <Image key={key} id={id} source={imagePath1}
                              fallbackName={soundEffect.englishName} className={`soundEffect-image ${themeEnglishNameInHtml}-image`}/>;
            return <Image partialId={id} images={([
                {source: imagePath1, fallbackName: `${soundEffect.englishName} #1`, className: `soundEffect-image ${themeEnglishNameInHtml}-image`,},
                {source: imagePath2, fallbackName: `${soundEffect.englishName} #2`, className: `soundEffect-image ${themeEnglishNameInHtml}-image`,},
            ])} className={`soundEffect-animated-image ${themeEnglishNameInHtml}-image`}/>;
        }
        return <Image key={key} id={id} source={soundEffect.SMM2ImagePath!}
                      fallbackName={soundEffect.englishName} className={`soundEffect-image ${themeEnglishNameInHtml}-image`}/>;
    }

    public override render(): ReactElement {
        return this._render();
    }

}