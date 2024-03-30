import { children } from "kaioken"

export const HrTitle = () => {
  return <div className="relative my-12">
    <h2 className="absolute text-center top-1/2 left-1/2 -translate-x-1/2 bg-[#16131d] px-3 text-yellow-300 font-semibold -translate-y-1/2">{ children() }</h2>
    <div className="w-full h-[2px] bg-yellow-300" />
  </div>
}
