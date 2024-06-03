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
        {children}
      </div>
    </div>
  );
}
