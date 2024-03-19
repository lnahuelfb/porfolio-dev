import React, { useState, type FormEvent } from "react";
import submit from "utils/submit";

export default function Form() {
  const [success, setSuccess] = useState<boolean>(false)

  const formSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setSuccess(Boolean(await submit(e)))
  }

  return (
    <form className="flex flex-col" onSubmit={(e) => formSubmit(e)}>
      <label htmlFor="name" className="flex flex-col">
        Nombre:
        <input className="rounded p-2" type="text" name="name" required />
      </label>

      <label htmlFor="company" className="flex flex-col">
        Empresa:
        <input className="rounded p-2" type="text" name="company" />
      </label>

      <label htmlFor="subject" className="flex flex-col">
        Motivo del mensaje:
        <input className="rounded p-2" type="text" name="subject" required />
      </label>

      <label htmlFor="email" className="flex flex-col">
        Email de contacto:
        <input className="rounded p-2" type="email" name="email" required />
      </label>

      <label htmlFor="message" className="flex flex-col">
        Mensaje:
        <textarea className="min-h-[130px] rounded p-2" name="message" required></textarea>
      </label>
      <button
        className="flex justify-center items-center my-10 rounded-full border border-white/10 gap-x-4 py-1 px-2 text-xs md:text-base md:py-2 md:px-4 bg-white/5 hover:scale-110 hover:bg-white/10 transition cursor-pointer"
        type="submit"
      >
        Enviar
      </button>

      {success === true ? (<h3>Mensaje envíado!</h3>) : null}

    </form>
  );
}