import { launchRepository } from "@/domain/repositories/launch.repository";
import { LaunchDetail } from "@/presentation/components/Launches";

export default async function LaunchDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const launch = await launchRepository.getLaunchDetail(params.id);

  if (!launch) {
    return <div>Launch not found</div>;
  }

  return <LaunchDetail launch={launch} />;
}
