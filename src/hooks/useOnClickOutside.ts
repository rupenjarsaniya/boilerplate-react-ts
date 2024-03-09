import { RefObject } from 'react';
import { useEventListener } from 'usehooks-ts';

type EventType = 'mousedown' | 'mouseup' | 'touchstart' | 'touchend';

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T> | RefObject<T>[],
  handler: (event: MouseEvent | TouchEvent) => void,
  eventType: EventType = 'mousedown',
) {
  useEventListener(eventType, (event) => {
    const target = event.target as Node;

    if (!target || !target.isConnected) {
      return;
    }

    const isOutside = Array.isArray(ref)
      ? ref.every((r) => r.current && !r.current.contains(target))
      : ref.current && !ref.current.contains(target);

    if (isOutside) {
      handler(event);
    }
  });
}

export default useOnClickOutside;
