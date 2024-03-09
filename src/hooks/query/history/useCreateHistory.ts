import { useMemo } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { CreateHistoryPayload, History } from '../../../types/history';
import NetworkService from '../../../utils/fetch';

export function useHistoryCreateQuery() {
  const client = useMemo(() => new NetworkService(), []);
  const queryClient = useQueryClient();

  const mutation = useMutation<History, unknown, CreateHistoryPayload>(
    (data) => client.post('/app/history', data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['useGetHistory'],
        });
      },
    },
  );

  return mutation;
}
