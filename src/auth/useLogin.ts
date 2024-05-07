import { useState } from "react"

const useLogin = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    })

    const onChange = (field: string, value: string) => {
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
        onChange,
        handleAutoFill,
        clearInputs
    }
}


export default useLogin