import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { BaseQueryFn } from '@reduxjs/toolkit/query'

export interface QueryProps {
  url: string
  method: AxiosRequestConfig['method']
  data?: AxiosRequestConfig['data']
}

export interface AxiosBaseQueryError {
  isSuccessful?: boolean;
  message?: string;
  status?: number;
}

export const axiosBaseQuery = ({ baseUrl }: { baseUrl?: string } = { baseUrl: '' }):
  BaseQueryFn<QueryProps, unknown, AxiosBaseQueryError> =>
  async ({ url, method, data }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data })

      return {
        data: result.data,
      }

    } catch (axiosError) {
      const err = axiosError as AxiosError<any>
      return {
        error: {
          status: err.response?.status,
          ...err.response?.data,
        }
      }
    }
  }