import type {TableContentProperties} from './TableContent.types';

export default function TableContent({content,}: TableContentProperties,) {
    return <>{content.map(content => {
        const key = content[0];
        return <tr key={`${key} (header)`}>
            {content.map((innerContent, index) =>
                typeof innerContent != 'string'
                    ? <td key={`${key}-${index}`}>{innerContent}</td>
                    : null)
                .filter(content => content !== null)}
        </tr>;
    })}</>;
}
