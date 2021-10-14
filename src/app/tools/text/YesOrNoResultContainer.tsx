import {useTranslation} from 'react-i18next';

import type {ReactProperty} from '../../../util/react/ReactProperty';

import BooleanResultContainer from './BooleanResultContainer';

/**
 * A simple boolean value property
 */
export interface YesOrNoTextProperties
    extends ReactProperty {

    boolean: boolean

}

/**
 * Return a new {@link BooleanResultContainer} with a value based on the translation "Yes" or "No".
 *
 * @return {@link BooleanResultContainer}
 * @reactComponent
 * @todo change to YesOrNoResultTextComponent
 */
export default function YesOrNoResultContainer({boolean,}: YesOrNoTextProperties,): JSX.Element {
    const {t: translation,} = useTranslation('content');
    return <BooleanResultContainer
        boolean={boolean}
        trueValue={translation('Yes')}
        falseValue={translation('No')}
    />;
}
