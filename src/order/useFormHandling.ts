import { InputChangeEventDetail } from "@ionic/react"
import { useState } from "react"

type FormData = {
    name: string
    email: string
    subjects: string
    files: string
    service: string
}


const useFormHandling = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subjects: '',
        files: '',
        service: '',
    })

    const handleInputChange = (e: CustomEvent<InputChangeEventDetail>) => {
        const { name, value } = e.target as HTMLInputElement
        setFormData({ ...formData, [name]: value })
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
                throw new Error('Failed to submit form')
            }

            console.log(formData)
        } catch (error: any) {
            console.error('Error submitting form:', error.message)
        }
    }

    const fetchOrderSteps = async () => {
        try {
            const response = await fetch('/mock/order/steps.json')

            const data = await response.json()

            setFormData({
                name: data[0].input,
                email: data[1].input,
                subjects: data[2].input,
                files: data[3].input,
                service: data[4].input,
            })
        } catch (error) {
            console.error('Error fetching order inputs data:', error)
        }
    }

    return {
        formData,
        handleInputChange,
        saveInputs,
        fetchOrderSteps
    }
}

export default useFormHandling