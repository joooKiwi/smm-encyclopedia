import {TFuncKey, withTranslation} from 'react-i18next';

import {EveryTranslationElement}     from '../../../lang/components/elements/EveryTranslationElement';
import EveryTranslationsComponent    from '../../../lang/components/EveryTranslationsComponent';
import Table, {SimpleTableComponent} from './Table';

interface TableWithTranslationsComponent
    extends EveryTranslationElement {

    renderCallback: (translations: TableWithTranslations) => SimpleTableComponent

}

class TableWithTranslations
    extends EveryTranslationsComponent<TableWithTranslationsComponent> {


    public contentTranslation<TKeys extends TFuncKey<'content'>>(value: TKeys) {
        return super.contentTranslation(value);
    }

    public gameContentTranslation<TKeys extends TFuncKey<'gameContent'>>(value: TKeys) {
        return super.gameContentTranslation(value);
    }

    public languageTranslation<TKeys extends TFuncKey<'gameContent'>>(value: TKeys) {
        return super.languageTranslation(value);
    }

    public render(): JSX.Element {
        const {id, caption, headers, content,} = this.props.renderCallback(this);
        return <Table id={id} caption={caption} headers={headers} content={content}/>;
    }

}

export default withTranslation(['language', 'gameContent', 'content',])(TableWithTranslations);
