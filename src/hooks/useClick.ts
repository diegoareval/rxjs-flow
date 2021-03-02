import { makeObservable } from "../observable";
import { Result, NullableSubscribable, NullableUnsubscribable } from "../types";
// useClick.ts
import { useRef, useEffect, useCallback, useState, RefObject } from "react";
import { map, debounceTime } from "rxjs/operators";

export const useClick = (time: number = 500): Result => {
  const button: RefObject<HTMLButtonElement> = useRef(null);
  const [count, updateCount] = useState<number>(0);
  const fireAfterSubscribe = useCallback((c) => {
    updateCount(c);
  }, []);
  useEffect((): (() => void) => {
    const el = button.current;
    const observerble = makeObservable(el, "click");
    let _count = count;
    let subscribable: NullableSubscribable = null;
    let subscribe: NullableUnsubscribable = null;
    if (observerble) {
      subscribable = observerble.pipe(
        map((e) => _count++),
        debounceTime(time)
      );
      subscribe = subscribable.subscribe(fireAfterSubscribe);
    }
    return () => subscribe && subscribe.unsubscribe(); // cleanup subscription
    // eslint-disable-next-line
  }, []);
  return { ref: button, count, updateCount: fireAfterSubscribe };
};
