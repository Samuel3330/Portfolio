import React from "react";
import Titles from "./Titles";
import Plantilla from "./Plantilla";

const Plantillas = () => {
  return (
    <>
      <section
        className="bg-slate-100 w-full transition-all duration-900 ease-linear"
        id="plantillas"
      >
        <Titles title={"Plantillas"} />
        <div className="w-full">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            <Plantilla
              image={"./Plantillas/medilab.png"}
              url={"https://samuel3330.github.io/PlantillaMedilab/"}
            />
            <Plantilla
              image={"./Plantillas/agency.png"}
              url={"https://agency-r08w.onrender.com"}
            />
            <Plantilla
              image={"./Plantillas/append.png"}
              url={"https://plantillaappend.onrender.com/"}
            />
            <Plantilla
              image={"./Plantillas/creative.png"}
              url={"https://creative-j0gi.onrender.com"}
            />
            <Plantilla
              image={"./Plantillas/grayscale.png"}
              url={"https://grayscale-m8ly.onrender.com"}
            />
            <Plantilla
              image={"./Plantillas/landing-page.png"}
              url={"https://landing-page-8akn.onrender.com"}
            />
            <Plantilla
              image={"./Plantillas/new-age.png"}
              url={"https://new-age.onrender.com"}
            />
            <Plantilla
              image={"./Plantillas/stylish-portfolio.jpg"}
              url={"https://stylish-portfolio.onrender.com"}
            />
            <Plantilla
              image={"./Plantillas/adminLTE.png"}
              url={"https://adminlte3-2-0.onrender.com"}
            />
            <Plantilla
              image={"./Plantillas/adminLTE2.png"}
              url={"https://adminlte3-2-0.onrender.com/index2.html"}
            />
            <Plantilla
              image={"./Plantillas/adminLTE3.png"}
              url={"https://adminlte3-2-0.onrender.com/index3.html"}
            />
            <Plantilla
              image={"./Plantillas/blog-home.png"}
              url={"https://blog-home.onrender.com"}
            />
            <Plantilla
              image={"./Plantillas/business-casual.png"}
              url={"https://businness-casual.onrender.com"}
            />
            <Plantilla
              image={"./Plantillas/clean-blog.png"}
              url={"https://clean-blog-n6pi.onrender.com"}
            />
            <Plantilla
              image={"./Plantillas/coming-soon.png"}
              url={"https://coming-soon-fzlm.onrender.com"}
            />

            <Plantilla
              image={"./Plantillas/heroic-features.png"}
              url={"https://heroic-features-gh-pages.onrender.com"}
            />

            <Plantilla
              image={"./Plantillas/modern-business.png"}
              url={"https://modern-businnes.onrender.com"}
            />

            <Plantilla
              image={"./Plantillas/one-page-wonder.png"}
              url={"https://one-page-wonder.onrender.com"}
            />
            <Plantilla
              image={"./Plantillas/personal.png"}
              url={"https://personal-hpba.onrender.com"}
            />
            <Plantilla
              image={"./Plantillas/resume.jpg"}
              url={"https://resume-9v4g.onrender.com"}
            />
            <Plantilla
              image={"./Plantillas/scrolling-nav.png"}
              url={"https://scrolling-nav-gh-pages.onrender.com"}
            />
            <Plantilla
              image={"./Plantillas/shop-homepage.png"}
              url={"https://shop-homepage.onrender.com"}
            />
            <Plantilla
              image={"./Plantillas/shop-item.png"}
              url={"https://shop-item.onrender.com"}
            />

            <Plantilla
              image={"./Plantillas/the-big-picture.png"}
              url={"https://the-big-picture.onrender.com"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Plantillas;
