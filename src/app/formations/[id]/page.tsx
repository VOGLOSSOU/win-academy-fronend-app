import FormationDetailClient from '@/components/FormationDetailClient';

export async function generateStaticParams() {
  try {
    const res = await fetch('https://win-academy-backend.onrender.com/formations?limit=100');
    const data = await res.json();
    return (data.data ?? []).map((f: { id: string }) => ({ id: f.id }));
  } catch {
    return [];
  }
}

export default function FormationDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return <FormationDetailClient formationId={params.id} />;
}
