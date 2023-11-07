import "react-native-url-polyfill/auto";
import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default createClient(
  "https://xnslyjopoynzqnfkhyel.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhuc2x5am9wb3luenFuZmtoeWVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg3NjkzMTIsImV4cCI6MjAxNDM0NTMxMn0.bQ3SZS5w64IW4peNfbipO8lMBm-zBxGJ0iiMtB_vkL8",
  {
    auth: {
      storage: AsyncStorage,
      detectSessionInUrl: false,
    },
  }
);
