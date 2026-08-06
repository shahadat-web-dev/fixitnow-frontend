import { getServiceById } from "@/components/services/getServiceById";
import BookingForm from "./_components/BookingForm";


type Props = {
  params: Promise<{
    serviceId: string;
  }>;
};

export default async function BookingPage({
  params,
}: Props) {
  const { serviceId } = await params;

  const result = await getServiceById(serviceId);

  if (!result.success) {
    return (
      <div className="py-20 text-center">
        Service not found
      </div>
    );
  }

  return (
    <BookingForm service={result.data} />
  );
}