import { z } from "zod";

export const contactSchema = z.object({
  senderEmail: z.string().email({ message: "Veuillez renseigner un email valide." }),
  subject: z
    .string()
    .min(2, { message: "Veulliez sélectionner l'objet de votre demande avant d'envoyer le mail." })
    .max(500),
  message: z
    .string()
    .min(20, { message: "Votre message doit contenir au moins 20 caractères." })
    .max(2000, { message: "Votre message doit contenir au maximum 2000 caractères." })
});
