import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();

  const name = data.get("name");
  const company = data.get("company");
  const subject = data.get("subject");
  const email = data.get("email");
  const message = data.get("message");

  console.log(data)

  if (!name || !email || !message || !company || !subject) {
    return new Response(
      JSON.stringify({
        message: "Faltan campos requeridos",
      }),
      { status: 400 }
    );
  }

  try {
    const response = await fetch('http://localhost:3000/send-email', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Acept': 'application/json',
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      return new Response(
        JSON.stringify({
          message: "Algo salío mal :C"
        }),
        { status: 400 }
      );
    }

    return new Response(JSON.stringify({
      message: 'Todo ok bro'
    }), {
      status: 200
    })

  } catch (error) {
    console.log(error)
  }

  return new Response(
    JSON.stringify({
      message: "¡Éxito!"
    }),
    { status: 200 }
  );
};

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      message: 'Hola mundo',
    })
  )
}