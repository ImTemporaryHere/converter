import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IInitialState {
  nickname: string,
  real_name: string,

}

const initialState: IInitialState = {
  nickname: '',
  real_name: '',
}

export const AddSuperHeroSlice = createSlice({
  name: 'addSuperHero',
  initialState,
  reducers: {
    nickNameHandleChange: (state, action: PayloadAction<string>) => {
      state.nickname = action.payload
    }

  }

})

export default AddSuperHeroSlice.reducer