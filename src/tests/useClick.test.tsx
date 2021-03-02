import React from 'react'
import { useClick } from '../hooks/useClick'
import {makeObservable} from "../observable"
import {isString} from "../helper"
import {Observable} from 'rxjs'
import { render} from '@testing-library/react'
import { renderHook, act as hookAct } from '@testing-library/react-hooks'
import Button from '../shared/Button'


describe('useState', () => {
    it('should update count using useState', () => {
        const {result} = renderHook(() => useClick(400))
        const {updateCount} = result.current
        hookAct(() => {
            updateCount(8) 
        })
        expect(result.current.count).toBe(8)
    })
})


describe('makeObservable', () => {
    it('should return false for non HTMLElement', () => {
        const observable = makeObservable(null, 'click')
        expect(observable instanceof Observable).toBe(false)
    })

    it('should return false for non non string event', () => {
        const {getByTestId} = render(<Button/>)
        const el = getByTestId('btn') as HTMLButtonElement
        const observable = makeObservable(el, 20)
        expect(observable instanceof Observable).toBe(false)
    })

    it('should return false for null', () => {
        const observable = makeObservable(null, 'click')
        expect(observable instanceof Observable).toBe(false)
    })

    it('should create observable', () => {
        const {getByTestId} = render(<Button/>)
        const el = getByTestId('btn') as HTMLButtonElement
        const observable = makeObservable(el, 'click')
        expect(observable instanceof Observable).toBe(true)
    })
})


describe('isString', () => {

    it('is a string "click"', () => {
        expect(isString('click')).toEqual(true)
    })

    it('is not a string: object', () => {
        expect(isString({})).toEqual(false)
    })

    it('is not a string: 9', () => {
        expect(isString(9)).toEqual(false)
    })

    it('is not a string: nothing', () => {
        expect(isString(null)).toEqual(false)
    })
})


