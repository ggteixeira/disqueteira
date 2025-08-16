import { getArtists } from '@/app/api/getArtists';
import { useQuery } from '@tanstack/react-query';

export function useGetArtists(enabled = true) {
  return useQuery({
    queryKey: ['artists'],
    queryFn: () => getArtists(),
    enabled,
  });
}
