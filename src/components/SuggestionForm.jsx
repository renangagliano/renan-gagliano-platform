import { useState } from "react";

const emailAddress = "renan.gagliano@gmail.com";
const emailSubject = "Sugestão sobre proposta pública";

export default function SuggestionForm({ labels, proposal, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", suggestion: "" });

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = [
      `Proposta: ${proposal.title}`,
      `Nome: ${form.name}`,
      `E-mail: ${form.email}`,
      "",
      "Sugestão:",
      form.suggestion,
    ].join("\n");

    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(body)}`;
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[70] grid place-items-center bg-graphite/80 px-4 py-8 backdrop-blur-xl">
      <form onSubmit={handleSubmit} className="w-full max-w-xl rounded-lg border border-white/10 bg-graphite p-6 shadow-executive">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-civic">{proposal.title}</p>
            <h3 className="mt-2 font-display text-2xl font-extrabold text-white">{labels.suggestionTitle}</h3>
          </div>
          <button type="button" onClick={onClose} className="focus-ring rounded-md border border-white/10 px-3 py-2 text-sm font-bold text-white/74">
            {labels.close}
          </button>
        </div>

        <div className="mt-6 grid gap-4">
          <label className="grid gap-2 text-sm font-bold text-white/80">
            {labels.name}
            <input
              required
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              className="focus-ring rounded-md border border-white/10 bg-white/[0.06] px-4 py-3 text-white"
            />
          </label>
          <label className="grid gap-2 text-sm font-bold text-white/80">
            {labels.email}
            <input
              required
              type="email"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              className="focus-ring rounded-md border border-white/10 bg-white/[0.06] px-4 py-3 text-white"
            />
          </label>
          <label className="grid gap-2 text-sm font-bold text-white/80">
            {labels.suggestion}
            <textarea
              required
              rows={6}
              value={form.suggestion}
              onChange={(event) => updateField("suggestion", event.target.value)}
              className="focus-ring resize-none rounded-md border border-white/10 bg-white/[0.06] px-4 py-3 text-white"
            />
          </label>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button type="button" onClick={onClose} className="focus-ring rounded-md border border-white/10 px-4 py-3 text-sm font-bold text-white/74">
            {labels.cancel}
          </button>
          <button type="submit" className="focus-ring rounded-md bg-civic px-4 py-3 text-sm font-bold text-graphite">
            {labels.sendByEmail}
          </button>
        </div>
      </form>
    </div>
  );
}
