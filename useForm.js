import React, { useState } from 'react'

export const useForm = ( initialForm = {}) => {
    
    const [ formState, setFormState ] = useState( initialForm )
    


    const onInputChange = ({target}) => {
        const { name, value } = target;
        console.log(name)
        console.log(value)
        setFormState({...formState,
            [name] : value,
        })
    }

    const onResetForm = () => {
        setFormState( initialForm )
    }


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}


// {
//     username: '',
//     email: '',
//     password: '' ,
// }