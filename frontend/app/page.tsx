import { redirect } from 'next/navigation';

export default function RootPage() {
  // Bypasses the default template and loads your original login page
  redirect('/login');
}