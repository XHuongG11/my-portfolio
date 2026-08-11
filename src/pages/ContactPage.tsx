import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MessageSquare, Send, Tag, User } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Reveal } from "../components/common/Reveal";

/* Zod schema */
const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  subject: z
    .string()
    .min(1, "Subject is required")
    .min(3, "Subject must be at least 3 characters"),
  message: z
    .string()
    .min(1, "Message is required")
    .min(20, "Message must be at least 20 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

/* Shared style constants */
const inputBase = `w-full px-3.5 py-2.5 rounded-xl border border-[var(--border)]
  bg-[var(--bg-secondary)] text-[var(--text)] text-sm font-[inherit]
  outline-none transition-all duration-250
  placeholder:text-[var(--text-disabled)]
  focus:border-[var(--accent)] focus:bg-[var(--card-bg)]
  focus:shadow-[0_0_0_3px_var(--accent-bg)]`;

const inputError =
  "!border-red-500 focus:!shadow-[0_0_0_3px_rgba(239,68,68,0.12)]";

/* Component */
function ContactPage() {
  const [sending, setSending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSending(true);

    // API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", data);
    setSending(false);
    reset();

    toast.success("Message sent successfully!");
  };

  return (
    <section className="relative min-h-[calc(100vh-69px)] bg-[var(--bg)] overflow-hidden flex justify-center py-6 lg:py-10">
      <div className="w-full max-w-[600px]">
        <Reveal direction="up">
          <div className="space-y-1 mb-6 text-center lg:text-left">
            <h2 className="text-2xl lg:text-3xl font-bold text-[var(--text)] tracking-tight">
              Get in Touch
            </h2>
            <p className="text-sm text-[var(--text-muted)]">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </div>
        </Reveal>

        <Reveal direction="up" delay={100}>
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="name"
                className="text-xs font-semibold text-[var(--text)] flex items-center gap-1.5"
              >
                <User size={14} className="text-[var(--accent)] shrink-0" />
                Name <span className="text-red-500 font-bold">*</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your full name"
                className={`${inputBase} ${errors.name ? inputError : ""}`}
                {...register("name")}
              />
              {errors.name && (
                <span className="text-xs text-red-500 flex items-center gap-1">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-xs font-semibold text-[var(--text)] flex items-center gap-1.5"
              >
                <Mail size={14} className="text-[var(--accent)] shrink-0" />
                Email <span className="text-red-500 font-bold">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                className={`${inputBase} ${errors.email ? inputError : ""}`}
                {...register("email")}
              />
              {errors.email && (
                <span className="text-xs text-red-500 flex items-center gap-1">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="subject"
                className="text-xs font-semibold text-[var(--text)] flex items-center gap-1.5"
              >
                <Tag size={14} className="text-[var(--accent)] shrink-0" />
                Subject <span className="text-red-500 font-bold">*</span>
              </label>
              <input
                id="subject"
                type="text"
                placeholder="What is this about?"
                className={`${inputBase} ${errors.subject ? inputError : ""}`}
                {...register("subject")}
              />
              {errors.subject && (
                <span className="text-xs text-red-500 flex items-center gap-1">
                  {errors.subject.message}
                </span>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-xs font-semibold text-[var(--text)] flex items-center gap-1.5"
              >
                <MessageSquare
                  size={14}
                  className="text-[var(--accent)] shrink-0"
                />
                Message <span className="text-red-500 font-bold">*</span>
              </label>
              <textarea
                id="message"
                placeholder="Write your message here..."
                className={`${inputBase} min-h-[120px] resize-y leading-relaxed ${errors.message ? inputError : ""}`}
                {...register("message")}
              />
              {errors.message && (
                <span className="text-xs text-red-500 flex items-center gap-1">
                  {errors.message.message}
                </span>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={sending}
              className="flex self-end items-center gap-2 px-6 py-3 rounded-xl 
                  bg-[var(--accent)] text-white font-semibold text-sm 
                  cursor-pointer border-none outline-none
                  transition-all duration-300 
                  hover:bg-[var(--accent-hover)] 
                  hover:shadow-[0_0_25px_rgba(250,110,0,0.4)]
                  disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {sending ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export default ContactPage;
