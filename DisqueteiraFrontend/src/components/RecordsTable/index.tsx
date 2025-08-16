import { IRecords } from '@/types/records';
import { capitalizeFirstLetter } from '@/utils/capitalize';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { useCallback } from 'react';

export default function RecordsTable({ rows, hiddenColumns }: { rows: IRecords[]; hiddenColumns?: string[] }) {
  const pureColumns = Array.from(new Set(rows.flatMap((obj: IRecords) => Object.keys(obj))));
  const filteredColumns = pureColumns.filter((col) => !hiddenColumns?.includes(col));

  const columns = useCallback(() => {
    if (!hiddenColumns) return pureColumns;
    if (hiddenColumns.length === 0) return pureColumns;

    return filteredColumns;
  }, [filteredColumns, hiddenColumns, pureColumns]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {['Record', 'Year', 'Artist Name'].map((col, index) => (
              <TableCell key={index} align={index === 0 ? 'left' : 'right'}>
                {capitalizeFirstLetter(col)}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(
            ({
              record: {
                name,
                year,
                artist: { name: artistName },
              },
            }) => (
              <TableRow key={name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {name}
                </TableCell>
                <TableCell align="right">{year}</TableCell>
                <TableCell align="right">{artistName}</TableCell>
              </TableRow>
            ),
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
