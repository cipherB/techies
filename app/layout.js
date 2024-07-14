import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter', });
const bricolage_grotesque = Bricolage_Grotesque({ subsets: ["latin"], variable: '--font-bricolage-grotesque', });


export const metadata = {
  title: "Techies",
  description: "Techies Software Firm",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bricolage_grotesque.variable}`}>
        {children}
      </body>
    </html>
  );
}
