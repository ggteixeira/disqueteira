import BasicTable from '@/components/BasicTable';
import { useGetRecords } from '@/hooks/useGetRecords';
import { Box, Container, Typography } from '@mui/material';

const Records = () => {
  const { data: records, isLoading, isError, isFetched, error } = useGetRecords();

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
          <BasicTable records={records} />
        </Box>
      )}
    </Container>
  );
};

export default Records;
