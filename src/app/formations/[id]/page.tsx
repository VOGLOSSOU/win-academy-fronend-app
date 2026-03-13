import FormationDetailClient from '@/components/FormationDetailClient';

export default function FormationDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return <FormationDetailClient formationId={params.id} />;
}
