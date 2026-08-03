import apiClient from "./client";
import { ApiResponse, Service } from "./types";


export const getServices = async (): Promise<Service[]> => {
  const { data } = await apiClient.get<ApiResponse<Service[]>>("/services");
  return data.data;
};