import Header from "../_components/Header";
import CompanyDetails from "./CompanyDetails";

// params can be an object or promise (needs to be awaited)
type Params = { id: string } | Promise<{ id: string }>;
type Props = { params: Params };

// get dynamic route params for each company
export default async function Page({ params }: Props) {
  const awaitParams = await params;
  const companyID = awaitParams.id;

  return (
    <>
      <Header />
      {/* pass id to component */}
      <CompanyDetails companyID={companyID} />
    </>
  );
}
