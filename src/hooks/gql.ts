import {
  ValueTypes,
  GraphQLTypes,
  InputType,
  OperationOptions,
  chainOptions,
} from 'lib/gql/zeusUser';
import { useTypedQuery as _useTypedQuery } from 'lib/gql/zeusUser/reactQuery';
import type { UseQueryOptions } from 'react-query';

import { getAuthToken } from '../services/api';
import { REACT_APP_HASURA_URL } from 'config/env';
import { useSelectedCircle } from 'recoilState';

function useTypedQuery<
  O extends 'query_root',
  TData extends ValueTypes[O],
  TResult = InputType<GraphQLTypes[O], TData>
>(
  queryKey: string,
  query: TData | ValueTypes[O],
  options?: Omit<UseQueryOptions<TResult>, 'queryKey' | 'queryFn'>,
  zeusOptions?: OperationOptions,
  hostOptions: chainOptions[1] = {}
) {
  return _useTypedQuery(
    queryKey,
    query,
    { ...options, suspense: true },
    zeusOptions,
    REACT_APP_HASURA_URL,
    {
      ...hostOptions,
      method: 'POST',
      headers: { Authorization: 'Bearer ' + getAuthToken() },
    }
  );
}

export function useCurrentOrg() {
  const id = useSelectedCircle().circle.protocol_id;

  return useTypedQuery(`org-${id}`, {
    organizations_by_pk: [{ id }, { id: true, name: true }],
  }).data?.organizations_by_pk;
}

export function useCircleIdForEpoch(epochId: number) {
  return useTypedQuery(`circle-for-epoch-${epochId}`, {
    epochs_by_pk: [{ id: epochId }, { circle_id: true }],
  }).data?.epochs_by_pk?.circle_id;
}

export function useCurrentCircleIntegrations() {
  // const id = useSelectedCircle().circle.protocol_id;
  // return useTypedQuery(`circle-integrations-${id}`, {
  //   circles_by_pk: [{id}, {id: true, integrations: {id: true, type: true, name: true}}],
  // }).data?.circles_by_pk;
  return [
    {
      id: 1,
      name: 'Dework Project Name',
      type: 'dework',
      data: { organizationId: 'dde641cb-b50e-403f-955a-f83c154e441f' },
    },
    {
      id: 2,
      name: 'Dework Project Name 2',
      type: 'dework',
      data: { organizationId: 'dde641cb-b50e-403f-955a-f83c154e441f' },
    },
  ];
}
