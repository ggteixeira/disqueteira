import { IArtists } from '@/types/records';
import { capitalizeFirstLetter } from '@/utils/capitalize';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

export default function ArtistsTable({ rows, hiddenColumns }: { rows: IArtists[]; hiddenColumns?: string[] }) {
  const pureColumns = Array.from(new Set(rows.flatMap((obj: IArtists) => Object.keys(obj))));
  const filteredColumns = pureColumns.filter((col) => !hiddenColumns?.includes(col));

  const columns = () => {
    if (!hiddenColumns) return pureColumns;
    if (hiddenColumns.length === 0) return pureColumns;

    return filteredColumns;
  };

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
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
