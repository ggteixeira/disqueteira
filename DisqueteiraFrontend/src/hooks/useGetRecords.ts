import { getRecords } from '@/app/api/getRecords';
import { useQuery } from '@tanstack/react-query';

export function useGetRecords(enabled = true) {
  return useQuery({
    queryKey: ['records'],
    queryFn: () => getRecords(),
    enabled,
  });
}
