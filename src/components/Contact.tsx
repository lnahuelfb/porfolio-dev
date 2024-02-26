import React, { type FormEvent, useState } from 'react';

const Contact = () => {

  const [responseMessage, setResponseMessage] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch("/api/form", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.message) {
      setResponseMessage(data.message);
    }
  }

  // const handleInputChange = (e) => {
  //   setInput({
  //     ...oninput,
  //     [e.target.name]: e.target.value
  //   })
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   setLoading(true)

  //   try {
  //     const response = await fetch('https://nahuelfb.vercel.app/api/send-email', {
  //       method: 'POST',
  //       body: JSON.stringify(oninput),
  //       headers: {
  //         'Acept': 'application/json',
  //         'Content-Type': 'application/json'
  //       }
  //     })

  //     setLoading(false)
  //     console.log(oninput)

  //     if (!response.ok) throw new Error('Algo salió mal :c')

  //     return window.alert('Email enviado!')

  //   } catch (error) {

  //     setLoading(false)
  //     console.log(error)
  //   }
  // }

  return (
    <article>
      <h2 className="text-3xl font-semibold mb-6 flex gap-x-3 items-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className='size-7'
        ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
          d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"
        ></path><path d="M3 7l9 6l9 -6"></path></svg
        >
        Contacto
      </h2>

      <form className="flex flex-col" onSubmit={submit}>
        <label htmlFor="name" className="flex flex-col">
          Nombre:
          <input
            type="text"
            name="name"
            // onChange={handleInputChange}
            // value={input.name}
            required
          />
        </label>

        <label htmlFor="company" className="flex flex-col">
          Empresa:
          <input
            type="text"
            name='company'
          // onChange={handleInputChange}
          // value={oninput.company}
          />
        </label>

        <label htmlFor="subject" className="flex flex-col">
          Motivo del mensaje:
          <input
            type="text"
            name="subject"
            // onChange={handleInputChange}
            // value={oninput.subject}
            required
          />
        </label>

        <label htmlFor="email" className="flex flex-col">
          Email de contacto:
          <input
            type="text"
            name='email'
            // onChange={handleInputChange}
            // value={input.email}
            required
          />
        </label>

        <label htmlFor="message" className="flex flex-col">
          Mensaje:
          <textarea
            className="min-h-12"
            name='message'
            // value={input.message}
            // onChange={handleInputChange}
            required
          />
        </label>

        <button
          className="flex justify-center items-center my-10 rounded-full border border-white/10 gap-x-4 py-1 px-2 text-xs md:text-base md:py-2 md:px-4 bg-white/5 hover:scale-110 hover:bg-white/10 transition cursor-pointer"
        >Enviar</button>
      </form>

      {responseMessage.length > 0 && <h1>{responseMessage}</h1>}
    </article>
  )
}

export default Contact

