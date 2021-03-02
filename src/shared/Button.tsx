//Button.tsx
import React, { FC} from 'react'
import { useClick } from '../hooks/useClick'

type Props = {
    interval?: number;
    label?:string;
}

const Button:FC<Props> = (props:Props) => {
    const {ref, count} = useClick(props.interval)
    return <button data-testid="btn" ref={ref}>Hello {count}</button>
}

export default Button