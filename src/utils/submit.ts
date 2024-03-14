import type { FormEvent } from 'react'

const submit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.target as HTMLFormElement);

  try {
    const response = await fetch("/api/form", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.status == 201) {
      return true
    }
  } catch (error) {
    console.error(error)
    return false
  }
}

export default submit