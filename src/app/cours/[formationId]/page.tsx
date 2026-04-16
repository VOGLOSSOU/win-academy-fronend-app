import CoursPlayerClient from './CoursPlayerClient';

export async function generateStaticParams() {
  try {
    const res = await fetch('https://win-academy-backend.onrender.com/formations?limit=100');
    const data = await res.json();
    return (data.data ?? []).map((f: { id: string }) => ({ formationId: f.id }));
  } catch {
    return [];
  }
}

export default function CoursPlayerPage() {
  return <CoursPlayerClient />;
}
