import Loading from 'components/basics/Loading'
import { getDescendantProp } from 'utils/string'
import { TableProps } from './index.d'
import { TableBody, TableHead, TableStyle } from './Table.styles'

// TODO: add pagination
const Table = <T extends object>({ columns, data, showTableNumber = false, loading = false, extendBody }: TableProps<T>) => {
	return (
		<div>
			{loading && <Loading />}

			{!loading && data && (
				<>
					<TableStyle>
						<TableHead>
							<tr>
								{columns.map((column, index) => {

									if (typeof column.header !== 'string') {
										const Header = column.header
										return <th key={index}>{Header}</th>
									}

									return (
										<th key={index}>{column.header}</th>
									)
								})}
							</tr>
						</TableHead>
						<TableBody>
							{!loading && data?.length === 0 && (
								<tr>
									<td className='text-center' colSpan={columns.length + (showTableNumber ? 1 : 0)}>
										No Data
									</td>
								</tr>
							)}

							{data.map((row, index) => (
								<tr key={index}>
									{columns.map((column, i) => {
										const render = column.Cell ? column.Cell : () => getDescendantProp<string>(row, column.accessor)


										return <td key={i} width={column.width}>{!(row as any)?.[column.accessor] && column.defaultValue && !column.Cell ? column.defaultValue : render(row)}</td>
									})}
								</tr>
							))}
							{extendBody}
						</TableBody>
					</TableStyle>
				</>
			)}
		</div>
	)
}

export default Table
