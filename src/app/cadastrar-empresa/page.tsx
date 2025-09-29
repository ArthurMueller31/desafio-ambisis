import EnvironmentalLicensesList from "./_components/RegisterCompany/EnvironmentalLicensesList";
import Fields from "./_components/RegisterCompany/Fields";
import Header from "./_components/RegisterCompany/Header";

export default function page() {
  return (
    <>
      <Header />
      <Fields />
      <EnvironmentalLicensesList />
    </>
  );
}
