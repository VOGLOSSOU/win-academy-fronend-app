import FormationDetailClient from '@/components/FormationDetailClient';
import { formationsApi } from '@/lib/api';

export async function generateStaticParams() {
  const API_URL = 'https://win-academy-backend.onrender.com/formations?page=1&limit=100';
  try {
    const res = await fetch(API_URL);
    const result = await res.json();
    const paths = result.data.map((f: any) => ({
      id: f.id,
    }));
    
    // Ensure the main ID we're testing is always included
    if (!paths.some((p: any) => p.id === 'b9b74424-d3c7-4cbb-85b0-ba52f12267de')) {
      paths.push({ id: 'b9b74424-d3c7-4cbb-85b0-ba52f12267de' });
    }
    return paths;
  } catch (error) {
    console.error('Error generating static params:', error);
    return [{ id: 'b9b74424-d3c7-4cbb-85b0-ba52f12267de' }];
  }
}

export const dynamicParams = false;

export default function FormationDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return <FormationDetailClient formationId={params.id} />;
}
