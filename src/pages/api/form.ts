import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();

  console.log(data)

  const name = data.get("name");
  const company = data.get("company");
  const subject = data.get("subject");
  const email = data.get("email");
  const message = data.get("message");

  if (!name || !email || !message || !company || !subject) {
    return new Response(
      JSON.stringify({
        message: "Faltan campos requeridos",
      }),
      { status: 400 }
    );
  }

  console.log(data)

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

