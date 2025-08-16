import { IRecords } from '@/types/records';
import { capitalizeFirstLetter } from '@/utils/capitalize';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { useEffect } from 'react';

export default function BasicTable({ records }: { records: IRecords[] }) {
  const columns = Array.from(new Set(records.flatMap((obj: IRecords) => Object.keys(obj)))).filter(
    (col) => !col.includes('artistId'),
  );

  useEffect(() => {
    console.log('records:');
    console.dir(records);
  }, [records]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns?.map((col, index) => (
              <TableCell key={index} align={index === 0 ? 'left' : 'right'}>
                {capitalizeFirstLetter(col)}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {records.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
