import { apiRequest } from "@/utils/apiHelpers";

interface ApiResponse<T> {
  data: T;
}

type Response = {
  _id?: string;
};

const fetchUserData = async () => {
  const response = await apiRequest<ApiResponse<Response>>({
    url: `/user`,
    method: "GET",
  });
  return response?.data;
};

export { fetchUserData };
