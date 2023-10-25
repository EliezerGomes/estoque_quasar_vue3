import { createClient } from '@supabase/supabase-js'
import { useAuthUser } from 'src/composables/UseAuthUser'

const supabaseUrl = 'https://gzupijlcnkwbpkglnwsf.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6dXBpamxjbmt3YnBrZ2xud3NmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgwODk2OTIsImV4cCI6MjAxMzY2NTY5Mn0.h1uxOicgtFN_mxXWmRu2RxkUTEDthNMujFjAuDrvz1c'
const supabase = createClient(supabaseUrl, supabaseKey)

supabase.auth.onAuthStateChange((event, session) => {
  const { user } = useAuthUser()
  user.value = session?.user || null
})

export function useSupabase () {
  return supabase
}
