"use server";

import { validateString } from '@/utils/Resend'
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const subject = formData.get("subject");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalide email",
    }
  }
  
  if (!validateString(subject, 500)) {
    return {
      error: "Select a subject",
    }
  }
  
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    }
  }

  await resend.emails.send({
    from: "Contact Portfolio <portfolio@sofiane-rahmani.com>",
    to: ["contact@sofiane-rahmani.com"],
    subject: subject as string,
    reply_to: senderEmail as string,
    text: message as string,
  });
};
