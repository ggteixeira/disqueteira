import RecordsTable from '@/components/RecordsTable';
import { useGetRecords } from '@/hooks/useGetRecords';
import { Box, Container, Typography } from '@mui/material';
import { useMemo } from 'react';

const Records = () => {
  const {
    data: records,
    isLoading: isLoadingRecords,
    isError: isErrorRecords,
    isFetched: isFetchedRecords,
    error: errorRecords,
  } = useGetRecords();

  const hiddenColumns = useMemo(() => {
    return ['id'];
  }, []);

  if (isLoadingRecords) {
    <Typography>Loading...</Typography>;
  }

  if (isErrorRecords) {
    return <Typography>Error: {errorRecords.message}</Typography>;
  }

  return (
    <Container>
      <Box mb={1}>
        <Typography variant="h1">Records</Typography>
      </Box>
      {isFetchedRecords && (
        <Box>
          <RecordsTable hiddenColumns={hiddenColumns} rows={records} />
        </Box>
      )}
    </Container>
  );
};

export default Records;
