import { useState, type FormEvent } from 'react'

const formSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const [loading, setLoading] = useState(false)
  const formData = new FormData(e.target as HTMLFormElement);

  try {
    setLoading(true)
    const response = await fetch("/api/form", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    if (data.message) {
      console.log(data.message)
      return data.message
    }

    if (data.status == 201) return data.message

  } catch (e) {
    console.error(e)
    return e
  } finally {
    setLoading(false)
  }
}

export default formSubmit