import { fromEvent, Observable, Subscribable, Unsubscribable } from "rxjs";
import { RefObject, Dispatch } from 'react';


export  type Result = {
    ref: RefObject<HTMLButtonElement>;
    count: number;
    updateCount: Dispatch<React.SetStateAction<number>>;
  };

export type NullableObservarbel = Observable<any> | null;
export type NUllabe = HTMLButtonElement | null;
export type NullableSubscribable = Subscribable<any> | null;
export type NullableUnsubscribable = Unsubscribable | null;