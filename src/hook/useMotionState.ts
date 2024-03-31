import { shouldExecHook, useHook } from "kaioken";
import { AnimationOptions, animate, type AnimationControls } from "motion";

type Setter<T> = ((setter: T) => AnimationControls)
export const useMotionState = (
  baseValue: number | (() => number),
  baseOption: AnimationOptions
) => {

  if (!shouldExecHook()) {
    return [baseValue instanceof Function ? baseValue() : baseValue, ((_) => {}) as Setter<number>] as const
  }

  return useHook(
    'useMotionState', 
    { 
      state: undefined as number | undefined, 
      setState: undefined as any as Setter<number> 
    }, 
    ({ hook, oldHook, update }) => {
      if (!oldHook) {
        hook.state = baseValue instanceof Function ? baseValue() : baseValue
        hook.setState = (
          setter: number | ((prev: number) => number)
        ) => {
          const initialValue = hook.state ?? 0;
          const setValue = setter instanceof Function ? setter(hook.state ?? 0) : setter
          const targetDistance = setValue - initialValue;


          return animate((progress) => {
            console.log(progress)
            hook.state = initialValue + targetDistance * progress
            update()
          }, baseOption)
        }
      }

      return [hook.state, hook.setState] as const
    }
  )
};
