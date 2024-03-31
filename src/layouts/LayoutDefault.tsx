import { Cursor } from "$/components/shared/Cursor";
import { Nav } from "$/components/shared/Nav";
import { children } from "kaioken";

type LayoutProps = Kaioken.FCProps<{
  title: string
}>
export const LayoutDefault = (props: LayoutProps) => {
  return <>
    <main className="
      w-full
      min-h-screen
      grid-flow-row
      auto-rows-max
      grid grid-cols-container
      py-20
      px-4
      text-white
      selection:bg-purple-500
    ">
      <h1 className="sr-only">{props.title}</h1>
			<Nav />

      {children()}
    </main>
      <Cursor />
  </>
}
