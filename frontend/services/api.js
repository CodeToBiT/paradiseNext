import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const globalApi = createApi({
  reducerPath: "globalApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://admin.pdes.com.np/api/",
  }),
  tagTypes: [
    "Whychooseus",
    "Inquiries",
    "Countries",
    "Blogs",
    "Partners",
    "Testimonials",
    "Ourteams",
    "Faqs",
    "Pages",
    "SocialMedias",
    "Settings",
    "Downloads",
    "Gallery",
    "Services",
  ],
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getWhychooseus: builder.query({
      query: () => ({
        url: "/whychooseus",
        method: "GET",
      }),
      providesTags: ["Whychooseus"],
    }),
    getServices: builder.query({
      query: () => ({
        url: "/services",
        method: "GET",
      }),
      providesTags: ["Services"],
    }),
    createInquiries: builder.mutation({
      query: (data) => {
        return {
          url: `/inquiries`,
          method: "POST",
          body: data,
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "multipart/form-data");
            return headers;
          },
        };
      },
      invalidatesTags: ["Inquiries"],
    }),
    getCountries: builder.query({
      query: () => ({
        url: "/countries",
        method: "GET",
      }),
      providesTags: ["Countries"],
    }),
    getCountryDetails: builder.query({
      query: (id) => {
        return {
          url: `country/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Countries"],
    }),
    getBlogs: builder.query({
      query: () => ({
        url: "/blogs",
        method: "GET",
      }),
      providesTags: ["Blogs"],
    }),
    getBlogDetails: builder.query({
      query: (id) => {
        return {
          url: `blog/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Blogs"],
    }),
    getPartners: builder.query({
      query: () => ({
        url: "/partners",
        method: "GET",
      }),
      providesTags: ["Partners"],
    }),
    getPartnerDetails: builder.query({
      query: (id) => {
        return {
          url: `partner/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Partners"],
    }),
    getTestimonials: builder.query({
      query: () => ({
        url: "/testimonials",
        method: "GET",
      }),
      providesTags: ["Testimonials"],
    }),
    getOurteams: builder.query({
      query: () => ({
        url: "/ourteams",
        method: "GET",
      }),
      providesTags: ["Ourteams"],
    }),
    getFaqs: builder.query({
      query: () => ({
        url: "/faqs",
        method: "GET",
      }),
      providesTags: ["Faqs"],
    }),
    getPages: builder.query({
      query: () => ({
        url: "/pages",
        method: "GET",
      }),
      providesTags: ["Pages"],
    }),
    getPageDetails: builder.query({
      query: (id) => {
        return {
          url: `page/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Pages"],
    }),
    getSocialmedia: builder.query({
      query: () => ({
        url: "/socialmedias",
        method: "GET",
      }),
      providesTags: ["SocialMedias"],
    }),
    getSettings: builder.query({
      query: () => ({
        url: "/settings",
        method: "GET",
      }),
      providesTags: ["Settings"],
    }),
    getDownloads: builder.query({
      query: () => ({
        url: "/downloads",
        method: "GET",
      }),
      providesTags: ["Downloads"],
    }),
    getGallery: builder.query({
      query: () => ({
        url: "/galleries",
        method: "GET",
      }),
      providesTags: ["Gallery"],
    }),
  }),
});

export const {
  useGetCountriesQuery,
  useGetCountryDetailsQuery,

  useGetServicesQuery,

  useGetBlogsQuery,
  useGetBlogDetailsQuery,

  useGetPartnersQuery,
  useGetPartnerDetailsQuery,

  useGetTestimonialsQuery,

  useGetOurteamsQuery,

  useGetFaqsQuery,

  useGetPagesQuery,
  useGetPageDetailsQuery,

  useGetSocialmediaQuery,

  useGetSettingsQuery,

  useGetDownloadsQuery,

  useGetGalleryQuery,

  useGetWhychooseusQuery,

  useCreateInquiriesMutation,
} = globalApi;
