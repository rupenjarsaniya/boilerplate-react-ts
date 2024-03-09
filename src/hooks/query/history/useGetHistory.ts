import { UseQueryOptions, useQuery } from 'react-query';
import { useMemo } from 'react';
import NetworkService from '../../../utils/fetch';
import { History } from '../../../types/history';

export function useGetHistory(
  id: string | null | undefined,
  options?: Pick<UseQueryOptions, 'enabled'>,
) {
  const client = useMemo(() => new NetworkService(), []);
  const query = useQuery<History | null>(
    ['useCustomerGetQuery', id],
    () => (!id ? null : client.get(`/app/customers/${id}`)),
    options,
  );

  return query;
}
