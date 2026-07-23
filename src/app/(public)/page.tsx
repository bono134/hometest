import { HOME } from "@/lib/constants/messages";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {HOME.heroTitle}
      </h1>
      <p className="text-lg text-gray-600">{HOME.heroSubtitle}</p>
      <p className="mt-4 rounded-lg bg-gray-100 px-4 py-3 text-sm text-gray-500">
        {HOME.scaffoldNotice}
      </p>
    </main>
  );
}
