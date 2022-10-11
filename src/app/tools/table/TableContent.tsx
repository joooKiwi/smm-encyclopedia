import type {TableContentProperties} from './TableContent.types'

export default function TableContent({content,}: TableContentProperties,) {
    return <>{content.map((content, i,) => {
        const firstContent = content[0]
        return <tr key={`${firstContent} (header #${i + 1})`}>
            {content.map((innerContent, j,) =>
                typeof innerContent != 'string'
                    ? <td key={`${firstContent} (${i + 1}-${j + 1})`}>{innerContent}</td>
                    : null)
                .filter(content => content !== null)}
        </tr>
    })}</>
}
