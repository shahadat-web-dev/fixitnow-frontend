import BookingForm from "../_components/BookingForm";


type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function BookingPage({ params }: Props) {
  const { id } = await params;

  return (
    <div className="">
      <BookingForm technicianServiceId={id} />
    </div>
  );
}