import BasicTable from '@/components/BasicTable';
import { useGetRecords } from '@/hooks/useGetRecords';
import { Box, Container, Typography } from '@mui/material';
import { useMemo } from 'react';

const Records = () => {
  const { data: records, isLoading, isError, isFetched, error } = useGetRecords();

  const hiddenColumns = useMemo(() => {
    return ['artistId'];
  }, []);

  if (isLoading) {
    <Typography>Loading...</Typography>;
  }

  if (isError) {
    return <Typography>Error: {error.message}</Typography>;
  }

  return (
    <Container>
      <Box mb={1}>
        <Typography variant="h1">Records</Typography>
      </Box>
      {isFetched && (
        <Box>
          <BasicTable hiddenColumns={hiddenColumns} rows={records} />
        </Box>
      )}
    </Container>
  );
};

export default Records;
