import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/Billboard";
import Container from "@/components/ui/Container";

export const revalidate = 0;

export default async function Home() {
  const billboard = await getBillboard("5f5cde71-d85e-49e7-8343-44b66208ff83");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
}
