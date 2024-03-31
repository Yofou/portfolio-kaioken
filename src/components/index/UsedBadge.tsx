import { emitter } from "$/hook/useCursorEvent"
import { children } from "kaioken"

type UsedBadgeProps = Kaioken.FCProps<{
  color?: string
}>
export const UsedBadge = (props: UsedBadgeProps) => { 
  const onMouseOver = () => {
    emitter.emit('color', props.color)
  }

  const onMouseOut = () => {
    emitter.emit('color', null)
  }

  return  <li
	  className="bg-purple-300 used-item rounded-[5px] group grid text-white/80 grid-cols-[20px,max-content] items-center font-bold gap-2 tracking-wider uppercase cursor-pointer px-4 py-2"
    onmouseover={onMouseOver}
    onmouseout={onMouseOut}
  >
    {children()}
  </li>
}
