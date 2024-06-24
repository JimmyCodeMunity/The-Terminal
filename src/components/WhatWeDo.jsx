import React from "react";

const WhatWeDo = () => {
  return (
    <section class="">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <div className="bg-gray-800 h-12 w-12 rounded-full flex justify-center items-center z-[10]">
                <img
                  src="../../images/science.png"
                  className="h-8 w-8"
                  alt=""
                />
              </div>
            </div>
            <div className="timeline-start md:text-end mb-10 items-end justify-end">
              <time className="font-mono italic text-gradient">
                Mobile Development
              </time>
              <div className="text-lg text-white font-poppins">React Native</div>
              <p className="text-slate-400 font-poppins">
              The Apple Macintosh—later rebranded as the Macintosh 128K—is the
              original Apple Macintosh personal computer.
              </p>
              <div className="flex justify-center items-center py-4">
                <img
                  src="../../images/reactnative.png"
                  className="h-80 object-contain items-end justify-end"
                  alt=""
                />
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <div className="bg-gray-800 h-12 w-12 rounded-full flex justify-center items-center z-[10]">
                <img
                  src="../../images/phpicon.png"
                  className="h-8 w-8"
                  alt=""
                />
              </div>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic text-gradient">Web App Development</time>
              <div className="text-lg text-white font-poppins">Php</div>
             <p className="text-slate-400 font-poppins">
             iMac is a family of all-in-one Mac desktop computers designed and
              built by Apple Inc. It has been the primary part of Apple's
              consumer desktop offerings since its debut in August 1998, and has
              evolved through seven distinct forms
             </p>

              <div className="flex justify-center items-center py-4">
                <img
                  src="../../images/php.png"
                  className="h-80 object-contain rounded-2xl items-end justify-end"
                  alt=""
                />
              </div>
            </div>
            
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
            <div className="bg-gray-800 h-12 w-12 rounded-full flex justify-center items-center z-[10]">
                <img
                  src="../../images/phpicon.png"
                  className="h-8 w-8"
                  alt=""
                />
              </div>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic text-gradient">Web development</time>
              <div className="text-lg font-poppins text-white">iPod</div>
              <p className="text-slate-400 font-poppins">The iPod is a discontinued series of portable media players and
              multi-purpose mobile devices designed and marketed by Apple Inc.
              The first version was released on October 23, 2001, about 8+1⁄2
              months after the Macintosh version of iTunes was released.</p>

              <div className="flex justify-center items-center py-4">
                <img
                  src="../../images/mmac.png"
                  className="h-80 object-contain rounded-2xl items-end justify-end"
                  alt=""
                />
              </div>
            </div>
            <hr />
          </li>
          
        </ul>
      </div>
    </section>
  );
};

export default WhatWeDo;
