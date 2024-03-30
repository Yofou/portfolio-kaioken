import { useMouse } from "@kaioken-core/hooks"

export const Cursor = () => {
  const { client } = useMouse()

  return <div 
    className="w-12 h-12 rounded-full bg-red-500 fixed top-0 left-0 pointer-events-none cursor"
    style={`--x: ${client.x}px;--y: ${client.y}px`}
  >
  </div>
}
