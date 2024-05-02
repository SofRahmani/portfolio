import { getDictionary } from "@/lib/dictionary";
import { Locale } from "../../../../../../i18n.config";
import ContactForm from "./ContactForm";

export default async function ContactSection({ lang }: { lang: Locale }) {
  const { pages } = await getDictionary(lang);

  return (
    <section
      id="contact"
      className=" relative z-40 mb-10 flex size-full flex-col items-center justify-center gap-6 p-8 font-sans "
    >
      <ContactForm
        title={pages.contact.title}
        description={pages.contact.subtitle}
        email={pages.contact.email}
        emailDescription={pages.contact.emailDescription}
        object={pages.contact.object}
        objectDescription={pages.contact.objectDescription}
        objectJob={pages.contact.objectJob}
        objectMission={pages.contact.objectMission}
        objectProject={pages.contact.objectProject}
        objectOther={pages.contact.objectOther}
        message={pages.contact.message}
        messageDescription={pages.contact.messageDescription}
        messagePlaceholder={pages.contact.messagePlaceholder}
        send={pages.contact.send}
        toastMessage={pages.contact.toast}
      />
    </section>
  );
}
