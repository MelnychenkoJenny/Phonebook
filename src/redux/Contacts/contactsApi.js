import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => ({ url: '/contacts' }),
      providesTags: ['Contacts'],
    }),
    addContacts: builder.mutation({
      query: contact => ({ url: '/contacts', method: 'POST', body: contact }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContacts: builder.mutation({
      query: contactId => ({ url: `/contacts/${contactId}`, method: 'DELETE' }),
      invalidatesTags: ['Contacts'],
    }),
    
  }),
});

export const {
  useFetchContactsQuery,
  useAddContactsMutation,
  useDeleteContactsMutation,

} = contactsApi;


// updateContacts: builder.mutation({
//   query: (contactId, update) => ({ url: `/contacts/${contactId}`, method: 'PATCH', body: update }),
//   invalidatesTags: ['Contacts'],
// }),