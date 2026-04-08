// React Query hook for fetching products with caching & retry
import { useQuery } from "@tanstack/react-query";


function useProducts() {
  const fetchProducts = async () => {
    
    console.log("API CALLED");
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: "iPhone", price: 80000 },
          { id: 2, name: "Laptop", price: 60000 },
          { id: 3, name: "Headphones", price: 3000 },
          { id: 4, name: "Tablet", price: 20000 },
        ]);
      }, 1000);
    });

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