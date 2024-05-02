"use server";

import { validateString } from '@/utils/Resend'
import React from 'react'
import { Resend } from "resend"
import ContactFormEmail from './email/contactFormEmail'

const resend = new Resend(process.env.RESEND_API_KEY);
const email = process.env.RESEND_EMAIL;
const emailFrom = process.env.RESEND_FROM;

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

  try {
    await resend.emails.send({
      from: `Contact Portfolio <${emailFrom as string}>`,
      to: [email as string],
      subject: subject as string,
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      
      })
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    }
  }
};

function getErrorMessage(error: unknown) {
  throw new Error('something went wrong')
}

