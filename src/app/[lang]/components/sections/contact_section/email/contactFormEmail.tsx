import { Body, Container, Head, Hr, Html, Preview, Section, Text } from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

export interface contactFormEmailProps {
  message: string;
  senderEmail: string;
}

export default function ContactFormEmail({ message, senderEmail }: contactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Nouveau message envoyé depuis votre portfolio !</Preview>
      <Tailwind>
        <Body className="w-3/4 bg-slate-100 p-6">
          <Container>
            <Section className="my-10 rounded-md border-black px-10 py-4">
              <Text className=" text-center text-3xl font-bold leading-tight ">
                Vous avez reçu un nouveau message !
              </Text>
              <Text className="text-justify">{message}</Text>
              <Hr />
              <Text>L&apos;email de la personne vous ayant contacté est : {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
