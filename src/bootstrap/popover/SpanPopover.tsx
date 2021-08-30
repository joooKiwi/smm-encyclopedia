import {PopoverConfiguration} from './Popover.types';
import Popover                from './Popover';

interface Properties
    extends PopoverConfiguration {

    children: string | JSX.Element

}

export default function SpanPopover({children, elementId, option,}: Properties,): JSX.Element {
    return <Popover elementId={elementId} option={option}>
        <span key={elementId} id={elementId} data-bs-toggle="popover">{children}</span>
    </Popover>;
}
