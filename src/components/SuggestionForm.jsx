import { useState } from "react";
import { submitSuggestion } from "../services/proposalEngagementService.js";

export default function SuggestionForm({ labels, proposal, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", suggestion: "" });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const result = await submitSuggestion(proposal.id, form);
    setIsSubmitting(false);

    if (result.status === "success") {
      setStatus(labels.suggestionSuccess);
      setForm({ name: "", email: "", suggestion: "" });
      return;
    }

    setStatus(labels.suggestionError);
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
          <p className="text-sm leading-6 muted">{labels.privacyNote}</p>
          {status && <p className="rounded-md border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-semibold text-civic">{status}</p>}
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button type="button" onClick={onClose} className="focus-ring rounded-md border border-white/10 px-4 py-3 text-sm font-bold text-white/74">
            {labels.cancel}
          </button>
          <button type="submit" disabled={isSubmitting} className="focus-ring rounded-md bg-civic px-4 py-3 text-sm font-bold text-graphite disabled:opacity-60">
            {isSubmitting ? labels.submitting : labels.sendSuggestion}
          </button>
        </div>
      </form>
    </div>
  );
}
