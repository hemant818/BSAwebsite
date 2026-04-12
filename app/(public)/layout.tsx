import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}
