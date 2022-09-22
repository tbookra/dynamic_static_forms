export const initial_state = {
  form: {},
  
};

export const formReducer = (state = initial_state, action) =>{
    switch (action.type){
        case "FORM_VALUES":
            return{
                ...state,
                form: {...state.form,
                    [action.payload.name]:action.payload.value
                },
                
                
            }
        default:
            return state
    }
}