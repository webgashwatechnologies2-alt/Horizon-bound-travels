import { Metadata } from "next";
import TourDetailsClient from "./TourDetailsClient";
import destination_data from "@/data/DestinationData";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return destination_data.map((pkg) => ({
    id: pkg.id.toString(),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const packageId = parseInt(id);
  const pkg = destination_data.find(p => p.id === packageId);

  if (!pkg) {
    return {
      title: "Package Not Found - Horizon Bound Travels",
    };
  }

  return {
    title: `${pkg.title} - Horizon Bound Travels`,
  };
}

const page = async ({ params }: PageProps) => {
  const { id } = await params;

  return <TourDetailsClient id={id} />;
};

export default page;
