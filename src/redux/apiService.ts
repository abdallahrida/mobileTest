import {
  BaseQueryFn,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
  FetchArgs,
} from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';

export const baseQuery = fetchBaseQuery({
  baseUrl: Config.API_URL,
  timeout: 10000,
  prepareHeaders: async headers => {
    // let token = null;

    // token = endpoint === 'refresh' ? refreshToken : accessToken;
    // if (token) {
    //   headers.set('Authorization', `Bearer ${token}`);
    // }

    return headers;
  },
});

const tagTypes = [] as const;

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes,
  endpoints: () => ({}),
  refetchOnReconnect: true,
});
