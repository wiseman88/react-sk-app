import { InputChangeEventDetail } from "@ionic/react"
import { useState } from "react"

type FormData = {
    name: { value: string, status: string }
    email: { value: string, status: string }
    subjects: { value: string, status: string }
    files: { value: string, status: string }
    service: { value: string, status: string }
}


const useOrder = () => {
    const [formData, setFormData] = useState<FormData>({
        name: { value: '', status: 'vyplnte' },
        email: { value: '', status: 'spracovanie' },
        subjects: { value: '', status: 'v poriadku' },
        files: { value: '', status: 'chyba' },
        service: { value: '', status: 'none' },
    })

    const [error, setError] = useState<string | null>(null)

    const onChange = (e: CustomEvent<InputChangeEventDetail>) => {
        const { name, value } = e.target as HTMLInputElement
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: { ...prevFormData[name as keyof FormData], value: value }
        }))
    }

    const saveInputs = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const response = await fetch('/mock/order/submit.POST.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (!response.ok) {
                setError(`Failed to submit form: ${response.statusText}`);
            }
        } catch (error: any) {
            setError('Error submitting form: ' + error.message)
        }
    }

    const fetchOrderSteps = async () => {
        try {
            const response = await fetch('/mock/order/steps.json')

            const data = await response.json()

            setFormData({
                name: { value: data[0].input, status: 'v poriadku' },
                email: { value: data[1].input, status: 'v poriadku' },
                subjects: { value: data[2].input, status: 'v poriadku' },
                files: { value: data[3].input, status: 'v poriadku' },
                service: { value: data[4].input, status: 'v poriadku' },
            })
        } catch (error) {
            setError('Error fetching order inputs data')
        }
    }

    return {
        formData,
        onChange,
        saveInputs,
        fetchOrderSteps,
        error,
    }
}

export default useOrder