import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '@reduxjs/toolkit/query/react';

const eventsApi = createApi({
    reducerPath: 'eventsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'api/v1/events',
        prepareHeaders: ( headers, getState) => {
            const { token } = getState().auth;
            if (token) {
                headers.set('Authorisation', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ['Events'],
    endpoints: (builder) => ({
        getEvents: builder.query({
            query: () => '',
            providesTags: ['Events'],
          }),
        addEvent: builder.mutation({
            query: (newEvent) => ({
                method: 'POST',
                body: newEvent,
            }),
            invalidatesTags: ['Events'],
        }),
        editEvent: builder.mutation({
            query: (event) => ({
              url: event.id,
              method: 'PATCH',
              body: event,
            }),
            invalidatesTags: ['Events'],
    }),
    deleteChannel: builder.mutation({
        query: (id) => ({
          url: id,
          method: 'DELETE',
        }),
        invalidatesTags: ['Events'],
      }),
    }),
});

export const { useGetEventsQuery,
    useAddEventMutation,
    useEditEventMutation,
    useRemoveEventMutation, } = eventsApi;
