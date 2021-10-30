import {useTranslation} from 'react-i18next';

import type {ReactProperty} from '../../../util/react/ReactProperty';

import BooleanResultTextComponent from './BooleanResultTextComponent';

/**
 * A simple boolean value property
 */
export interface YesOrNoTextProperties
    extends ReactProperty {

    boolean: boolean

}

/**
 * Return a new {@link BooleanResultTextComponent} with a value based on the translation "Yes" or "No".
 *
 * @return {@link BooleanResultContainer}
 * @reactComponent
 */
export default function YesOrNoResultTextComponent({boolean,}: YesOrNoTextProperties,): JSX.Element {
    const {t: translation,} = useTranslation('content');
    return <BooleanResultTextComponent
        boolean={boolean}
        trueValue={translation('Yes')}
        falseValue={translation('No')}
    />;
}
