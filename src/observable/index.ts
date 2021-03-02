import { fromEvent } from 'rxjs';
import { isString } from '../helper';
import { NUllabe, NullableObservarbel } from './../types/index';
export const makeObservable = (
    el: NUllabe,
    eventType: any
  ): NullableObservarbel =>
    el instanceof HTMLElement && isString(eventType)
      ? fromEvent(el, eventType)
      : null;