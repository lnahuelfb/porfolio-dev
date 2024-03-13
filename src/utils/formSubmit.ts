import { type FormEvent } from 'react'

const formSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.target as HTMLFormElement);

  try {
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
  } catch (error) {
    console.error(error)
  }
}

export default formSubmit