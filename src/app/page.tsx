import prisma from "@/lib/database";

export default async function Home() {
  const users= await prisma.user.findMany();
  return (   
    <code>
      {
        JSON.stringify(users)
      }
    </code>
  );
}

