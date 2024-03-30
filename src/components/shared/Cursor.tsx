import { useElementBounding, useEventListener, useMouse } from "@kaioken-core/hooks"
import { useRef, useState } from "kaioken"

export const Cursor = () => {
  const { client } = useMouse()

  const cursorRef = useRef<HTMLElement>(null)
  const bounding = useElementBounding(cursorRef)
  const width = bounding.width === 0 ? 48 : bounding.width
  const height = bounding.height === 0 ? 48 : bounding.height
  const x = bounding.x === 0 ? client.x : bounding.x
  const y = bounding.y === 0 ? client.y : bounding.y
  const [rounded, setRounded] = useState(9999);

  useEventListener('mouseover', (event) => {
    if (event.target instanceof HTMLElement) {
      const styles = window.getComputedStyle(event.target)
      if (styles.cursor === 'pointer') {
        cursorRef.current = event.target
        setRounded(
          parseInt(styles.borderRadius)
        )
      } else {
        cursorRef.current = null
        setRounded(9999)
      }
      bounding.update()
    }
  })

  return <div 
    className={`
      w-12 
      h-12 
      bg-red-500 
      fixed 
      top-0 
      left-0 
      pointer-events-none 
      cursor
      ${bounding?.width === 0 ? '' : 'cursor-morph'}
    `}
    style={`
      --x: ${x}px;
      --y: ${y}px;
      --width: ${width}px;
      --height: ${height}px;
      --rounded: ${rounded}px;
    `}
  >
  </div>
}
