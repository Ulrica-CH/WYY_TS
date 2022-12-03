import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// 1、对于复杂类型便于更好的推导
interface IInitialState {
  count: number
  message: string
  des: 'left' | 'right'
}
const initialState: IInitialState = {
  count: 0,
  message: 'xx',
  des: 'left'
}
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // 更好的声明类型
    changeMessageAction(state, { payload }: PayloadAction<string>) {
      state.message = payload
    }
  }
})
export default counterSlice.reducer
