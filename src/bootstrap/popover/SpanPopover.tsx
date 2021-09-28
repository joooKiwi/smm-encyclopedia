import Popover from './Popover';

import type {PopoverConfiguration} from './Popover.types';
import type {ReactProperty}        from '../../util/ReactProperty';

interface Properties
    extends ReactProperty, PopoverConfiguration {

    children: string | JSX.Element

}

export default function SpanPopover({children, elementId, option,}: Properties,): JSX.Element {
    return <Popover elementId={elementId} option={option}>
        <span key={elementId} id={elementId} data-bs-toggle="popover">{children}</span>
    </Popover>;
}
