import {apiSlice} from '../../redux/apiService';
import Config from 'react-native-config';
import {IGetNewsRequest, IGetNewsResponse} from './homeScreen.types';

const homeApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getNews: builder.query<IGetNewsResponse, IGetNewsRequest>({
      query: body => ({
        url: `/top-headlines?category=general&q=${body.search}&apikey=${Config.API_KEY}`,
        method: 'GET',
      }),
      serializeQueryArgs: ({endpointName}) => endpointName,
    }),
  }),
});

export const {useGetNewsQuery} = homeApi;
