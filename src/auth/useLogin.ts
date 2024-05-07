import { useState } from "react"

const useLogin = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    })

    const handleChange = (field: string, value: string) => {
        setCredentials((prev) => ({ ...prev, [field]: value }))
    }

    const handleAutoFill = (
        e: React.MouseEvent<HTMLIonButtonElement, MouseEvent>
    ) => {
        e.preventDefault()
        setCredentials({
            email: 'andrej.danko@kapitan.ru',
            password: 'n3vidimSema4?',
        })
    }

    const clearInputs = () => {
        setCredentials({ email: '', password: '' })
    }

    return {
        credentials,
        handleChange,
        handleAutoFill,
        clearInputs
    }
}


export default useLogin