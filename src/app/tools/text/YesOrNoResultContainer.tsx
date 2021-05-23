import {withTranslation} from 'react-i18next';

import BooleanResultContainer      from './BooleanResultContainer';
import {ContentTranslationElement} from '../../../lang/components/elements/ContentTranslationElement';
import ContentTranslationComponent from '../../../lang/components/ContentTranslationComponent';

export interface YesOrNoTextContent
    extends ContentTranslationElement {
    boolean: boolean
}

/**
 * Return a new {@link BooleanResultContainer} with a value based on the translation "Yes" or "No".
 *
 * @param props {@link YesOrNoTextContent} a simple boolean value property
 * @return {@link BooleanResultContainer}
 */
class YesOrNoResultContainer
    extends ContentTranslationComponent<YesOrNoTextContent> {

    public render(): JSX.Element {
        return <BooleanResultContainer
            boolean={this.props.boolean}
            trueValue={this.translation('Yes')}
            falseValue={this.translation('No')}
        />;
    }

}

export default withTranslation('content')(YesOrNoResultContainer);