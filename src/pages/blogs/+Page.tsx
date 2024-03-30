import { BlogCarousel } from "$/components/shared/BlogsCarousel"
import { HrTitle } from "$/components/shared/HrTtitle"
import { metadata } from "../metadata";

export const Page = () => {
  const blogs = metadata;
  return <>
    	<HrTitle>Blogs</HrTitle>
	    <BlogCarousel blogs={blogs} />
  </>
}
