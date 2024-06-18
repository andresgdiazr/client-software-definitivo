const initialState = {
    step: 1,
    correo: '',
    contraseña: '',
    nombre: '',
    apellido:'',
    cedula:'',
    numero:'',
    direccion:'',
  };
  
  const formReducer = (state, action) => {
    
    switch (action.type) {
      case 'NEXT_STEP':
        return { ...state, step: state.step + 1 };
      case 'PREVIOUS_STEP':
        return { ...state, step: state.step - 1 };
      case 'UPDATE_FORM':
        return { ...state, [action.field]: action.value };
      default:
        return state;
    }
  };
  
  export { initialState, formReducer };