// app/cadastrar-licenca/page.tsx
import prisma from "../../../lib/prisma";
import Header from "./_components/Header";
import RegisterLicense from "./_components/RegisterLicense";

type SearchParams = { empresaId: string } | Promise<{ empresaId: string }>;
type Props = {
  searchParams: SearchParams;
};

export default async function Page({ searchParams }: Props) {

  // first await params, avoiding unexpected errors
  const awaitSearchParams = await searchParams;

  // convert/define searched param to number
  const empresaIDNumber = Number(awaitSearchParams!.empresaId);
  // const empresaId = empresaIdStr ? parseInt(empresaIdStr, 10) : null;

  const empresa = await prisma.empresa.findUnique({
    where: { id: empresaIDNumber },
    select: { id: true, razaoSocial: true }
  });

  return (
    <>
      <Header />
      <RegisterLicense empresa={empresa} empresaId={empresa!.id} />
    </>
  );
}
