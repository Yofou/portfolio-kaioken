import { useEffect, useRef } from "kaioken"
import EmblaCarousel from 'embla-carousel';
import type { EmblaOptionsType, EmblaPluginType, EmblaCarouselType } from 'embla-carousel';

export type EmblaHookOptions = EmblaOptionsType &
	Partial<{
		plugins: EmblaPluginType[];
	}>;

export const useEmbla = (ref: Kaioken.Ref<HTMLElement>, options: EmblaHookOptions) => {
  const embla = useRef<EmblaCarouselType>(null)

  useEffect(() => {
    if (ref.current) {
      const plugins = options?.plugins ?? [];
      embla.current =  EmblaCarousel(ref.current, options, plugins);
    }

    return () => {
      embla.current?.destroy()
    }
  }, [ref.current, options])

  return [embla]
}
