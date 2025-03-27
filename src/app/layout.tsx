import type { Metadata } from "next";
import { Crimson_Pro, Jost, Outfit } from 'next/font/google';
import "./globals.scss";



const outfit_bold = Outfit({
  subsets: ['latin'],
  weight: ["300","400","500","600","700","800"],
  variable: '--tp-ff-body'
});
const outfit_heading = Outfit({
  subsets: ['latin'],
  weight: ["300","400","500","600","700","800"],
  variable: '--tp-ff-heading'
});
const outfit_p = Outfit({
  subsets: ['latin'],
  weight: ["300","400","500","600","700","800"],
  variable: '--tp-ff-p'
});
const jost_primary = Jost({
  subsets: ['latin'],
  weight: ["300","400","500","600","700","800"],
  variable: '--tp-ff-primary'
});
const crismon_secondary = Crimson_Pro({
  subsets: ['latin'],
  weight: ["300","400","500","600","700","800"],
  variable: '--tp-ff-secondary'
});


export const metadata: Metadata = {
  title: "Smartkriya",
  description: "Transforming today's students into tomorrow's professionals. SmartKriya is committed to bridging the gap between academic education and industry needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit_bold.variable} ${outfit_heading.variable} ${outfit_p.variable} ${jost_primary.variable} ${crismon_secondary.variable}`}>
        {children}
      </body>
    </html>
  );
}
