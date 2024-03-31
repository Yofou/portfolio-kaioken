import { useEffect } from 'kaioken';
import { TinyEmitter } from 'tiny-emitter'

export const emitter = new TinyEmitter();

export const useCursorEvent = (eventName: string, callback : Function) => {
  useEffect(() => {
    emitter.on(eventName, callback)
    return () => emitter.off(eventName, callback)
  }, [])
}
