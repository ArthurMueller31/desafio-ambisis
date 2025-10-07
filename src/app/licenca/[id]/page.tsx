// app/licenca/[id]/page.tsx
import Header from "../_components/Header";
import LicenseDetails from "./LicenseDetails";

// params can be an object or promise (needs to be awaited)
type Params = { id: string } | Promise<{ id: string }>;
type Props = { params: Params };

// get dynamic route params for each company
export default async function page({ params }: Props) {
  const awaitParams = await params;
  const licenseIDString = awaitParams.id;

  return (
    <>
      <Header />
      <LicenseDetails licenseIDString={licenseIDString} />
    </>
  );
}
