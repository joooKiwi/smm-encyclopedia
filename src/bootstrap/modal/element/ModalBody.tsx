import type {ReactElement, ReactProperty, ReactPropertyWithChildren} from '../../../util/react/ReactProperty';
import type {HTMLDivProperties}                                      from '../../../util/react/html/HTMLDivProperties';

interface ModalBodyProperties
    extends ReactProperty, HTMLDivProperties {

}

export default function ModalBody({className, children, ...otherProperties}: ReactPropertyWithChildren<ModalBodyProperties, | ReactElement | readonly ReactElement[]>,) {
    return <div {...otherProperties} className={`modal-body ${className ?? ''}`}>{children}</div>;
}
