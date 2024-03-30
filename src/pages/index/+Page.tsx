import { Experience } from "$/components/index/Experience";
import { WhatIveUsed } from "$/components/index/WhatIveUsed";
import { BlogCarousel } from "$/components/shared/BlogsCarousel";
import { HrTitle } from "$/components/shared/HrTtitle";
import { metadata } from "../metadata";

export { Page };

function Page() {
  const blogs = metadata;
  return (
    <>
      <header
        className="
        	w-full
        	grid
        	grid-cols-[1fr] md:grid-cols-[1fr,max-content]
        	gap-y-6
        	justify-items-start
        	items-end
      	"
      >
        <h2 className="text-yellow-300 text-3xl max-w-[600px] font-black underline">
          Hey I'm Nathan 👋
        </h2>
        <p className="max-w-[600px] leading-[1.5rem]">
          I've been a problem-solving enthusiast since I was a wee bambi. In my
          spare time, I convert concepts from frontend-mentor into fullstack
          applications. You can often find me chatting and helping with
          like-minded members of various online communities. Professionally by
          trade I'm a software engineering consultant currently with Visual
          Boston. However, I'm always open to new & enticing problems to solve
          so let’s connect at
          <a
            href="mailto:reach@yofou.dev"
            className="
            	py-1
            	px-3
            	inline-block
            	mt-2
            	bg-purple-300
            	text-yellow-300
            	rounded-full
      		  "
          >
            reach@yofou.dev
          </a>
          .
        </p>

        <div
          className="
				    hidden
				    md:block
				    relative
				    col-start-2 col-end-3
				    row-start-1 row-end-3
			    "
        >
          <img
            className="
					    w-[250px]
					    h-[250px]
					    object-cover
				    "
            src="/new-profile.png"
            alt=""
            width="250"
            height="250"
          />
        </div>
      </header>

      <HrTitle>Experience</HrTitle>
      <Experience />

      <HrTitle>What I've Worked with</HrTitle>
      <WhatIveUsed />

      <HrTitle>Blogs</HrTitle>
      <BlogCarousel blogs={blogs} />
    </>
  );
}
