import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button"; // adjust path

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setSuccess(null);

    emailjs
      .sendForm(
        "service_kuqdzjm",   // from EmailJS dashboard
        "template_gi33rl4",  // from EmailJS dashboard
        formRef.current,
        "xxnsGg821lLieRcwN"    // from EmailJS account
      )
      .then(() => {
        setSuccess("Message sent successfully!");
        setLoading(false);
        formRef.current?.reset();
      })
      .catch(() => {
        setSuccess("Something went wrong. Please try again.");
        setLoading(false);
      });
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="grid md:grid-cols-2 gap-6"
    >
      <input
        type="text"
        name="from_name"
        placeholder="Name"
        required
        className="bg-gray-900/50 border border-cyan-500/20 rounded-lg p-4 focus:border-cyan-500 transition-colors"
      />

      <input
        type="email"
        name="from_email"
        placeholder="Email"
        required
        className="bg-gray-900/50 border border-cyan-500/20 rounded-lg p-4 focus:border-cyan-500 transition-colors"
      />

      <textarea
        name="message"
        placeholder="Message"
        required
        className="md:col-span-2 bg-gray-900/50 border border-cyan-500/20 rounded-lg p-4 h-40 focus:border-cyan-500 transition-colors"
      ></textarea>

      <div className="md:col-span-2">
        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
        >
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </div>

      {success && (
        <p className="md:col-span-2 text-center mt-2 text-cyan-400">
          {success}
        </p>
      )}
    </form>
  );
}
