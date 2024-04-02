import { shouldExecHook, useHook } from "kaioken";
import { tweened, spring, type Tweened, TweenedOptions, SpringOpts, SpringUpdateOpts, Spring } from 'svelte/motion'
import { get } from 'svelte/store'

export const useTweenState = (
  baseValue: number | (() => number),
  baseOption?: TweenedOptions<number>
): [number, (value: number, opts?: TweenedOptions<number> | undefined) => Promise<void> ] => {

  if (!shouldExecHook()) {
    return [baseValue instanceof Function ? baseValue() : baseValue, async () => {}]
  }

  return useHook(
    'useTweenState', 
    { 
      state: undefined as any as Tweened<number>,
    }, 
    ({ hook, oldHook, update }) => {
      if (!oldHook) {
        hook.state = tweened(
          baseValue instanceof Function ? baseValue() : baseValue,
          baseOption
        )

        hook.cleanup =  hook.state.subscribe(_ => {
          update()
        })
      }

      return [get(hook.state), hook.state.set]
    }
  )
};

export const useSpringState = (
  baseValue: number | (() => number),
  baseOption?: SpringOpts
): [number, (value: number, opts?: SpringUpdateOpts | undefined) => Promise<void> ] => {

  if (!shouldExecHook()) {
    return [baseValue instanceof Function ? baseValue() : baseValue, async () => {}]
  }

  return useHook(
    'useSpringState', 
    { 
      state: undefined as any as Spring<number>,
    }, 
    ({ hook, oldHook, update }) => {
      if (!oldHook) {
        hook.state = spring(
          baseValue instanceof Function ? baseValue() : baseValue,
          baseOption
        )

        hook.cleanup =  hook.state.subscribe(_ => {
          update()
        })
      }

      return [get(hook.state), hook.state.set]
    }
  )
};
