import Image from "next/image";

const GlobalLoading = () => {
  return (
    <div className="min-h-screen text-4xl font-bold tracking-wider gap-5 flex justify-center items-center opacity-50 ">
      L<Image
        width={40}
        height={40}
        src={"/home.png"} alt="" className="w-20 animate-spin" />O A D I N G
    </div>
  );
};

export default GlobalLoading;