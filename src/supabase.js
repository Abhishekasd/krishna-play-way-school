import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vdiciyckgciqofcqonpc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkaWNpeWNrZ2NpcW9mY3FvbnBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3NDE4MzAsImV4cCI6MjA5MTMxNzgzMH0.hoGwoiUalP7yZjLke4N6EUWLkyjfnckRdGm4A3NI6zg';

export const supabase = createClient(supabaseUrl, supabaseKey);
