import { usePageContext } from "$/context/pageContext";

export const Nav = () => {
  const pageContext = usePageContext()
  return (
    <>
      <nav
        className="
        grid grid-cols-[repeat(2,max-content),1fr,max-content]
        gap-4
        mb-10
        -translate-x-2
      "
      >
        <a
          className={`
        	  font-semibold
            rounded-full
        	  hover:text-yellow-300 hover:underline
        	  px-2
        	  py-1
            ${pageContext._pageId === '/src/pages/index' ? 'underline' : ''}
      	  `}
          href="/"
        >
          Home
        </a>
        <a
          className={`
            font-semibold
            rounded-full
            hover:text-yellow-300 hover:underline
            px-2
            py-1
            ${pageContext._pageId?.includes?.('/src/pages/blogs') ? 'underline' : ''}
          `}
          href="/blogs"
        >
          Blogs
        </a>

        <a className="justify-self-end rounded-full" href="https://github.com/Yofou">
          <img
            className="w-[30px] h-[30px] rounded-full"
            src="/icons/github.svg"
            alt="Github Profiled"
            width="150"
            height="150"
          />
        </a>

        <a href="https://www.linkedin.com/in/nathan-ewen-b86315182/">
          <img
            className="w-[30px] h-[30px] rounded-[5px]"
            src="/icons/linkedin.svg"
            alt="Linked in Profile"
            width="150"
            height="150"
          />
        </a>
      </nav>
    </>
  );
};
