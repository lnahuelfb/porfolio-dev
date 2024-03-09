import { type FormEvent } from 'react'

const formSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.target as HTMLFormElement);
  const response = await fetch("/api/form", {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  if (data.message) {
    console.log(data.message)
  }
}

export default formSubmit