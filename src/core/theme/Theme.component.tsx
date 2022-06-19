import {AbstractEntityPropertyComponent} from '../_component/AbstractEntityPropertyComponent';
import {Themes}                          from './Themes';
import Image                             from '../../app/tools/images/Image';
import {StringContainer}                 from '../../util/StringContainer';

export abstract class ThemeComponent<R>
    extends AbstractEntityPropertyComponent<R, Themes> {


    public static renderSingleComponent(theme: Themes, isSmallPath: boolean, identifier?: string,) {
        const themeEnglishNameInHtml = theme.englishNameInHtml;
        const key = identifier == null ? theme.englishName : `${identifier} - ${theme.englishName}`;
        const id = identifier == null ? `${themeEnglishNameInHtml}-image` : `${StringContainer.getInHtml(identifier)}-${themeEnglishNameInHtml}-theme-image`;

        return <Image key={key} id={id} source={isSmallPath ? theme.smallImagePath : theme.longImagePath} fallbackName={theme.englishName} className={`theme-image ${themeEnglishNameInHtml}-image`}/>;
    }

}
