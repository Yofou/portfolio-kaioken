import { children } from "kaioken"

type UsedBadgeProps = Kaioken.FCProps<{
  dataColor?: string
}>
export const UsedBadge = (props: UsedBadgeProps) => { 
  return  <li
  	data-color={props.dataColor}
	  className="bg-purple-300 used-item rounded-[5px] group grid text-white/80 grid-cols-[20px,max-content] items-center font-bold gap-2 tracking-wider uppercase cursor-pointer px-4 py-2"
  >
    {children()}
  </li>
}
