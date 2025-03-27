import logo from "@/assets/img/logo/logo-big.png";
import Image from "next/image";
import Link from "next/link";
import OffcanvasButton from "./button/offcanvas-btn";
import HeaderStickyWrapper from "./header-sticky-provider/header-sticky-wrapper";
import NavMenus from "./navbar/nav-menus";

export default function HeaderOne() {
  return (
    <>
      <header className="header-area tp-header-transparent p-relative">
         
        {/* header top start*/}
         {/* <HeaderTopArea /> */}
        {/* header top end */}

        <HeaderStickyWrapper>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-2 col-xl-2 col-lg-8 col-md-8 col-8">
                <div className="tp-header-logo-1 tp-header-logo">
                  <Link href="/">
                    <Image className="logo-1" src={logo} alt="logo" priority />
                    <Image
                      className="logo-2"
                      src={logo}
                      alt="logo"
                      priority
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xxl-10 col-xl-10 d-none d-xl-block ">
                <div className="main-menu text-end">
                  {/* nav menus start */}
                  <NavMenus />
                  {/* nav menus end */}
                </div>
              </div>
              <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-4">
                <div className="tp-header-contact d-flex align-items-center justify-content-end">
                  {/* <div className="tp-header-serach">
                    <SearchButton icon={<SearchSvg />} />
                  </div> */}
                  {/* <div className="tp-header-btn d-none d-md-block ml-30">
                    <Link href="/university-application-form">Apply Now</Link>
                  </div> */}
                  <div className="tp-header-bar d-xl-none ml-30">
                    <OffcanvasButton/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </HeaderStickyWrapper>
      </header>

      {/* mobile offcanvas */}
      <div id="offcanvas-sidebar"/>
      {/* mobile offcanvas */}
    </>
  );
}
