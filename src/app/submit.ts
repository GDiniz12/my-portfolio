"use server"


import { Resend } from "resend";


const resendApiKey = "re_Ej4foM1D_LnCP6mDsJJ6k3TioLXU2V1wz";
if (!resendApiKey) {
    throw new Error("RESEND_API_KEY não definida. Verifique suas variáveis de ambiente.");
}
const resend = new Resend(resendApiKey);

export async function handleSubmit(form: FormData) {
    console.log("API KEY definida:", !!resendApiKey);
    const name = form.get("name") as string;
    const email = form.get("email") as string;
    const message = form.get("message") as string;

    try {

        const data = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: 'gabrielvmdiniz.dev@gmail.com',
            subject: `Message from Portfolio: ${name}`,
            html: `
                <p>From ${email}</p>
                <p>${message}</p>
            `
        });

        return {
            message: "Thank you for you message!"
        }
    } catch(err: any) {
        console.error("Erro ao enviar e-mail:", err);
        return {
            message: `Ops... algo aconteceu... (${err?.message || 'Erro desconhecido'})`
        };
    }
}