import { IRecords } from '@/types/records';
import { capitalizeFirstLetter } from '@/utils/capitalize';
import { splitPascalCase } from '@/utils/splitPascalCase';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useCallback } from 'react';

export default function RecordsTable({ rows, hiddenColumns }: { rows: IRecords[]; hiddenColumns?: string[] }) {
  const pureColumns = Array.from(new Set(rows.flatMap((obj: IRecords) => Object.keys(obj))));
  const filteredColumns = pureColumns.filter((col) => !hiddenColumns?.includes(col));

  const columns = useCallback(() => {
    if (!hiddenColumns) return pureColumns;
    if (hiddenColumns.length === 0) return pureColumns;

    return filteredColumns.map((columnName) => splitPascalCase(columnName));
  }, [filteredColumns, hiddenColumns, pureColumns]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns().map((col, index) => (
              <TableCell key={index} align={index === 0 ? 'left' : 'right'}>
                {capitalizeFirstLetter(col)}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.recordName}
              </TableCell>
              <TableCell align="right">{row.artistName}</TableCell>
              <TableCell align="right">{row.recordYear}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
