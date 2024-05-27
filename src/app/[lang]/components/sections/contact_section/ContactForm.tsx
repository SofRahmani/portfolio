"use client";
import { contactSchema } from "@/types/contact.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SendHorizontal } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "../../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "../../ui/form";
import { Input } from "../../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select";
import { Textarea } from "../../ui/textarea";
import LengthMessage from "./LengthMessage";
import { sendEmail } from "./sendEmail.action";

export interface ContactFormProps {
  title: string;
  description: string;
  email: string;
  emailDescription: string;
  object: string;
  objectDescription: string;
  objectJob: string;
  objectMission: string;
  objectProject: string;
  objectOther: string;
  message: string;
  messageDescription: string;
  messagePlaceholder: string;
  send: string;
  toastMessage: string;
}
type Input = z.infer<typeof contactSchema>;

export default function ContactForm({
  title,
  description,
  email,
  emailDescription,
  object,
  objectDescription,
  objectJob,
  objectMission,
  objectProject,
  objectOther,
  message,
  messageDescription,
  messagePlaceholder,
  send,
  toastMessage
}: ContactFormProps) {
  const form = useForm<Input>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      senderEmail: "",
      subject: "",
      message: ""
    }
  });

  function onSubmit(data: Input) {
    const formData = new FormData();

    for (const key in data) {
      formData.append(key, data[key as keyof Input]);
    }

    sendEmail(formData);
    toast.success(toastMessage);
    form.reset();
  }

  return (
    <Card className=" w-full md:w-3/4">
      <CardHeader>
        <CardTitle className="bg-gradient-to-b from-[#FF1CF7] to-[#b249f8] bg-clip-text text-transparent">
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6 ">
            <FormField
              control={form.control}
              name="senderEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {email} <span className="text-primary dark:text-violet-400">*</span>{" "}
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="elon.musk@gmail.com" type="email" {...field} />
                  </FormControl>
                  <FormDescription>{emailDescription}</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {object} <span className="text-primary dark:text-violet-400">*</span>{" "}
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className=" font-sans ">
                      <SelectItem value="Proposition d'entretien d'embauche">
                        {objectJob}
                      </SelectItem>
                      <SelectItem value="Proposition de mission">{objectMission}</SelectItem>
                      <SelectItem value="Recherche un developper pour réaliser mon projet">
                        {objectProject}
                      </SelectItem>
                      <SelectItem value="Autre demande">{objectOther}</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>{objectDescription}</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {message} <span className="text-primary dark:text-violet-400">*</span>{" "}
                  </FormLabel>
                  <FormControl>
                    <Textarea placeholder={messagePlaceholder} {...field} />
                  </FormControl>
                  <div className='flex justify-between'>
                    <FormDescription>{messageDescription}</FormDescription>
                    <LengthMessage limite={5000} message={field.value.length} />
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button type="submit" className="max-sm:w-full">
                {send}
                <SendHorizontal size={18} className=" ml-2 " />
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
