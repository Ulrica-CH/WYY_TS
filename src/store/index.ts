import { configureStore } from '@reduxjs/toolkit'
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import counterReducer from './modules/counter'
const store = configureStore({ reducer: { counter: counterReducer } })

// 为了给予导出的state类型
type IState = typeof store.getState
type IRootState = ReturnType<IState>
// type returnTy<T extends (...args: unknown[]) => unknown> = T extends (
//   ...args: unknown[]
// ) => infer U
//   ? U
//   : null
// type IRootState1 = returnTy<IState>

/* 函数调用签名
export interface TypedUseSelectorHook<TState> {
    <TSelected>(selector: (state: TState) => TSelected, equalityFn?: EqualityFn<NoInfer<TSelected>>): TSelected;
}
*/
export const useXySelector: TypedUseSelectorHook<IRootState> = useSelector

export default store
