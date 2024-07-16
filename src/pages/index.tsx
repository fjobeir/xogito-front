import Head from "next/head";
import Card from "~/components/Card";

export default function Home() {
  return (
    <>
      <Head>
        <title>Devotion Frontend Take Home</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-2xl font-extrabold tracking-tight">
            Devotion Frontend Take Home
          </h1>
          <Card />
        </div>
      </main>
    </>
  );
}
