import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://edqxzmycshnvtkdttfbl.supabase.co/";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkcXh6bXljc2hudnRrZHR0ZmJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcwNDE4NTUsImV4cCI6MjA0MjYxNzg1NX0.GVqqp7tdK_qTfObvXRGbGJHJf-OUjPYz_LInp2SAq8g";

export const bdClient = createClient(supabaseUrl, supabaseKey);