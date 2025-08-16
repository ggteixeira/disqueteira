import ArtistsTable from '@/components/ArtistsTable';
import { useGetArtists } from '@/hooks/useGetArtists';
import { Typography, Container, Box } from '@mui/material';
import { useMemo } from 'react';

const Artists = () => {
  const { data: artists, isLoading, isError, isFetched, error } = useGetArtists();

  const hiddenColumns = useMemo(() => {
    return ['id'];
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
        <Typography variant="h1">Artists</Typography>
      </Box>
      {isFetched && (
        <Box>
          <ArtistsTable hiddenColumns={hiddenColumns} rows={artists} />
        </Box>
      )}
    </Container>
  );
};

export default Artists;
