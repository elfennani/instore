import supabase from "@/services/supabase";
import { useQuery } from "@tanstack/react-query";

const useUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        throw error;
      }

      return data.user;
    },
    retry: 0,
  });
};

export default useUser;
