"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_t4czblh",
        "template_31dxgnf",
        form.current,
        "kNprb4QD_b-gXZuEX"
      )
      .then(
        () => {
          alert("Zpráva odeslána! ✉️");
          form.current?.reset();
        },
        (error) => {
          alert("Něco se pokazilo: " + error.text);
        }
      );
  };

  return (
    <div className="min-h-[calc(100vh-85px)] flex items-center justify-center bg-bg px-4 py-12">
      <form
        onSubmit={sendEmail}
        ref={form}
        className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8 space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Kontaktujte mě
        </h2>

        <div>
          <label
            htmlFor="user_name"
            className="block mb-1 text-sm font-semibold text-gray-700"
          >
            Vaše jméno
          </label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            required
            className="w-full px-4 py-3 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="Kristýna Nováková"
          />
        </div>

        <div>
          <label
            htmlFor="user_email"
            className="block mb-1 text-sm font-semibold text-gray-700"
          >
            E-mail
          </label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            required
            className="w-full px-4 py-3 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="kristyna@email.cz"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block mb-1 text-sm font-semibold text-gray-700"
          >
            Zpráva
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            required
            className="w-full px-4 py-3 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="Ráda bych se domluvila na focení rodiny..."
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all"
          >
            Odeslat
          </button>
        </div>
      </form>
    </div>
  );
}
