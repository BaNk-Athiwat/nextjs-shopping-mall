import Header from "@/components/root/header";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="block">
        <Header/>
        <div className="mx-28">
          {children}
        </div>
      </div>
    </div>
  );
}
