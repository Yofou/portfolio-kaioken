type ExperienceCardProps = Kaioken.FCProps<{
  name: string;
	description: string;
  src: string;
  position: 'Frontend' | 'Backend' | 'Fullstack',
  classNameImg?: string,
  href?: string,
  width?: string,
  height?: string,
}>
export const ExperienceCard = (props: ExperienceCardProps) => {
  return <div
	  className="
      grid
      grid-cols-1 md:grid-cols-[150px,1fr]
      grid-rows-[max-content,1fr]
      relative
      gap-2 gap-x-8
      w-full
      min-h-[200px]
      px-6
      py-4
      rounded-[10px]
      bg-purple-300
    "
  >
	  <img
		  className={`
        w-full
        hidden md:block
        md:col-start-1
        md:col-end-2
        row-start-1
        row-end-[-1]
        ${props.classNameImg ?? 'place-self-center'}
      `}
		  src={props.src}
		  alt=""
		  width={props.width}
      height={props.height}
	  />
	  <div
		  className="
        col-start-1 col-end-2
        md:col-start-2 md:col-end-3
        row-span-2
        gap-y-2
        grid grid-cols-1
        h-full
        grid-rows-[max-content,1fr]
      "
	  >
		<a
			href={props.href}
			className="
          text-[1.3rem]
          justify-self-start
          rounded-full
          px-4
          py-2
          -ml-4
          text-yellow-300
          before:absolute
          before:inset-0
     "
    >
      { props.name } - { props.position } Developer
    </a>
		<p className="row-start-2 row-end-3 leading-[1.5rem] text-white/80">{props.description}</p>
	</div>
</div>
}
