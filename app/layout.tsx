import "@/app/ui/global.css"
import { inter } from "./ui/fonts";
import SideNav from "./ui/dashboard/sidenav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (  
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
