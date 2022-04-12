import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

const apiUrl = process.env.REACT_APP_BASE_API_URL;


export const superHeroAPI = createApi({
  reducerPath: 'superHeroAPI',
  baseQuery: fetchBaseQuery({baseUrl: apiUrl}),
  tagTypes: ['superHero'],
  endpoints: (build)=> ({
    fetchAllSuperHeroes: build.query({
      query: ({limit=5, page=1}) => ({
        url: '/api/superheroes',
        params: {
          limit,
          page
        }
      }),
      providesTags: result => ['superHero']

    })
  })

})