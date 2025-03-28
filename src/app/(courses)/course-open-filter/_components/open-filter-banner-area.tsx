'use client';
import Link from "next/link";
import FilterSearchTerm from "@/components/form/filter-search-term-form";
import { GridSvg, HomeSvg, ListSvg } from "@/components/svg";
import useCourseFilter from "@/hooks/use-course-filter";


export default function OpenFilterBannerArea() {
   const {state} = useCourseFilter();
   return (
      <section className="tp-course-filter-area tp-course-filter-bg p-relative tp-course-filter-space">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="tp-breadcrumb__content-filter mb-50">
                     <div className="tp-breadcrumb__list">
                        <span><Link href="/"><HomeSvg /></Link></span>
                        <span className="color">All Courses</span>
                     </div>
                     <h3 className="tp-breadcrumb__title">All Courses</h3>
                     <p>We have the largest collection of <span>{state.courses.length}</span> courses</p>
                  </div>
                  <div className="tp-course-grid-wrap p-relative">
                     <div className="row">
                        <div className="col-lg-6">
                           <div className="tp-course-filter-top-left d-flex align-items-center">
                              <div className="tp-course-filter-top-tab tp-tab mb-20">
                                 <ul className="nav nav-tabs" id="filterTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                       <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true" tabIndex={0}>
                                          <GridSvg clr="#031F42" />
                                          Grid
                                       </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                       <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false" tabIndex={-1}>
                                          <ListSvg clr="#031F42" />
                                          List
                                       </button>
                                    </li>
                                 </ul>
                              </div>
                              <div className="tp-course-filter-top-result mb-20">
                                 <p>Showing 1–{state.filteredCourses.length} of {state.courses.length} results</p>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="tp-course-filter-top-right d-flex align-items-center justify-content-start justify-content-lg-end">
                              <div className="tp-course-filter-top-right-search d-none d-lg-block">
                                 {/* filter search */}
                                 <FilterSearchTerm/>
                                 {/* filter search */}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
