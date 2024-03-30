import { useEmbla } from "$/hook/embla";
import { useWindowSize } from "@kaioken-core/hooks";
import { useRef } from "kaioken";
import "../../styles/BlogCarousel.css";

const NoBlogs = () => {
  return (
    <section className="flex flex-col justify-center text-center gap-2">
      <h2 className="text-[1.5rem] text-yellow-300 font-semibold">No Blogs</h2>
      <p className="text-white/80 font-[1.3rem]">
        but stay tuned, I got some coming on the way.
      </p>
    </section>
  );
};

type BlogCarousel = Kaioken.FCProps<{
  blogs: {
    title: string;
    description: string;
    category: string;
    thumbnail: string;
    createdAt: string;
    href: string;
  }[];
}>;
export const BlogCarousel = (props: BlogCarousel) => {
  const { width: innerWidth } = useWindowSize();
  const isMd = innerWidth > 768;
  const ref = useRef<HTMLElement>(null);

  useEmbla(ref, {
    align: "center",
    active: isMd,
    plugins: [],
  });

  if (props.blogs.length === 0) {
    return <NoBlogs />;
  }

  return (
    <div data-mode={isMd ? "carousel" : ""} className="embla" ref={ref}>
      <div className="embla__carousel grid gap-4 grid-flow-row items-center md:grid-flow-col md:auto-cols-[540px]">
        {props.blogs.map((blog) => {
          return (
            <div className="embla__slide relative min-h-[450px] md:min-h-[700px] group overflow-hidden rounded-[10px] bg-purple-300">
              <img
                className="absolute w-full h-full object-cover object-bottom pointer-events-none rounded-b-[100px]"
                src={blog.thumbnail}
                alt=""
              />
              <div className="bg-purple-300 px-8 py-5 absolute z-10 bottom-0 w-full items-start min-h-[250px] translate-y-[100px] group-hocus-within:translate-y-[0px] flex flex-col transition-transform left-0">
                <div className="flex justify-between w-full md:items-center">
                  <h2 className="uppercase text-[1.1rem] md:text-[1.5rem] text-yellow-300">
                    {blog.title}
                  </h2>
                  <p className="text-yellow-300">{blog.createdAt}</p>
                </div>
                <h2 className="uppercase px-2 py-1 mt-1 text-[0.8rem] bg-purple-600 w-full max-w-min rounded-full text-yellow-300">
                  {blog.category}
                </h2>

                <p className="mt-4 opacity-0 group-hocus-within:opacity-100 transition-opacity">
                  {blog.description}
                </p>
                <a
                  className="mt-2 text-yellow-300 -translate-x-2 px-2 py-1 rounded-full underline lowercase opacity-0 group-hocus-within:opacity-100"
                  href={blog.href}
                >
                  Visit here
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
