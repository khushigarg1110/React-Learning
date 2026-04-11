// React Query hook for fetching products with caching & retry
import { useQuery } from "@tanstack/react-query";
import api from "../../../api/axiosInstance";


function useProducts() {
  const fetchProducts = async () => {
    
    console.log("API CALLED");
    const res = await api.get("/products");
    return res.data.products; // return actual data
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],        // unique key for caching
    queryFn: fetchProducts,        // API function
    retry: 2,                      // retry 2 times if fails
    staleTime: 60000,              // 1 minute cache freshness
  });

  return {
    products: data || [],
    loading: isLoading,
    error,
  };
}

export default useProducts;