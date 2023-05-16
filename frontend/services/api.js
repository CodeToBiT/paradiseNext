import Destination from "@/components/layout/Destination";
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
    "Destinations",
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
    "Destinations",
    "Packages",
    "Booking",
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
    getDestinations: builder.query({
      query: () => ({
        url: "/destinations",
        method: "GET",
      }),
      providesTags: ["Destinations"],
    }),
    getDestinationDetail: builder.query({
      query: (id) => {
        return {
          url: `destinations/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Destinations"],
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

    getGallery: builder.query({
      query: () => ({
        url: "/galleries",
        method: "GET",
      }),
      providesTags: ["Gallery"],
    }),

    getPackages: builder.query({
      query: () => ({
        url: "/packages",
        method: "GET",
      }),
      providesTags: ["Packages"],
    }),
    getPackageDetails: builder.query({
      query: (id) => {
        return {
          url: `package/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Packages"],
    }),

    createBookings: builder.mutation({
      query: (data) => {
        return {
          url: `/bookings`,
          method: "POST",
          body: data,
          prepareHeaders: (headers) => {
            headers.set("Content-Type", "multipart/form-data");
            return headers;
          },
        };
      },
      invalidatesTags: ["Booking"],
    }),
  }),
});

export const {
  useGetCountriesQuery,
  useGetCountryDetailsQuery,

  useGetServicesQuery,

  useGetBlogsQuery,
  useGetBlogDetailsQuery,

  useGetTestimonialsQuery,

  useGetOurteamsQuery,

  useGetFaqsQuery,

  useGetPagesQuery,
  useGetPageDetailsQuery,

  useGetSocialmediaQuery,

  useGetSettingsQuery,

  useGetGalleryQuery,

  useGetWhychooseusQuery,

  useCreateInquiriesMutation,

  useGetDestinationsQuery,
  useGetDestinationDetailQuery,

  useGetPackagesQuery,
  useGetPackageDetailsQuery,

  useCreateBookingsMutation,
} = globalApi;
