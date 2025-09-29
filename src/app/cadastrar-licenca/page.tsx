import Fields from "./RegisterLicense/Fields";
import Header from "./RegisterLicense/Header";
import SaveAndCancelButtons from "./RegisterLicense/SaveAndCancelButtons";

export default function page() {
  return (
    <>
      <Header />
      <Fields />
      <SaveAndCancelButtons />
    </>
  );
}
