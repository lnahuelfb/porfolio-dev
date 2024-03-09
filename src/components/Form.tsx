import React from "react";
import formSubmit from "utils/formSubmit";

export default function Form() {
  return (
    <form className="flex flex-col" onSubmit={formSubmit}>
      <label htmlFor="name" className="flex flex-col">
        Nombre:
        <input className="rounded" type="text" name="name" required />
      </label>

      <label htmlFor="company" className="flex flex-col">
        Empresa:
        <input className="rounded" type="text" name="company" />
      </label>

      <label htmlFor="subject" className="flex flex-col">
        Motivo del mensaje:
        <input className="rounded" type="text" name="subject" required />
      </label>

      <label htmlFor="email" className="flex flex-col">
        Email de contacto:
        <input className="rounded" type="email" name="email" required />
      </label>

      <label htmlFor="message" className="flex flex-col">
        Mensaje:
        <textarea className="min-h-[130px] rounded" name="message" required></textarea>
      </label>
      <button
        className="flex justify-center items-center my-10 rounded-full border border-white/10 gap-x-4 py-1 px-2 text-xs md:text-base md:py-2 md:px-4 bg-white/5 hover:scale-110 hover:bg-white/10 transition cursor-pointer"
        type="submit"
      >
        Enviar
      </button>
    </form>
  );
}