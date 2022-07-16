const {createSlice}=require('@reduxjs/toolkit')

const cartSlice=createSlice({
    name:"navbar",
    initialState:{
        navview:false
    },
    reducers:{
        handlenav(state,action)
        {
            state.navview=!state.navview
        }
    }

})

export const {handlenav}=cartSlice.actions;
export default cartSlice.reducer;
