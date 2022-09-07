import type {ReactElement, ReactProperties, ReactPropertiesWithChildren} from '../../../util/react/ReactProperties';
import type {HTMLDivProperties}                                          from '../../../util/react/html/HTMLDivProperties';

interface ModalBodyProperties
    extends ReactProperties, HTMLDivProperties {

}

export default function ModalBody({className, children, ...otherProperties}: ReactPropertiesWithChildren<ModalBodyProperties, | ReactElement | readonly ReactElement[]>,) {
    return <div {...otherProperties} className={`modal-body ${className ?? ''}`}>{children}</div>;
}
