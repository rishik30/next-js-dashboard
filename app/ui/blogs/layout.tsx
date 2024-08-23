import Footer from "./footer";
import Meta from "./meta";

export default function Layout({ children }: {children: React.ReactNode}) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
