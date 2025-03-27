import BackToTop from "@/components/back-to-top";
import FooterTwo from "@/components/footer/footer-two";
import HeaderOne from "@/components/header/header-one";
import MainProvider from "@/components/provider/main-provider";
// import localFont from "next/font/local";
import React from "react";

// const myFont = localFont({ src: '../../../../public/assets/fonts/Quantify.ttf' })


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <MainProvider>
      {/* header area start */}
      <HeaderOne />
      {/* header area end */}

      {/* main content */}
      {children}
      {/* main content */}

      {/* footer area start */}
      <FooterTwo/>
      {/* footer area end */}

      {/* back to top */}
      <BackToTop/>
      {/* back to top */}
    </MainProvider>
  );
}
