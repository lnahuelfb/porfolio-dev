import type { FormEvent } from 'react'

const submit = async (e: FormEvent<HTMLFormElement>): Promise<boolean> => {
  e.preventDefault();

  const formData = new FormData(e.target as HTMLFormElement);

  try {
    const response = await fetch("/api/form", {
      method: "POST",
      body: formData,
    });

    const { status } = await response.json();

    if (status !== 200) {
      return false
    }

    return true

  } catch (error) {
    console.error(error)
    return false
  }
}

export default submit