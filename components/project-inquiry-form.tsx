"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Check, FileText, Send, ShieldCheck } from "lucide-react";

type InquiryForm = {
  name: string;
  email: string;
  projectType: string;
  details: string;
};

const initialForm: InquiryForm = {
  name: "",
  email: "",
  projectType: "",
  details: "",
};

export function ProjectInquiryForm() {
  const [form, setForm] = useState<InquiryForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function updateField(field: keyof InquiryForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setSubmitted(false);
  }

  function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = `Project inquiry from ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Project type: ${form.projectType || "Not specified"}`,
      "",
      form.details,
    ].join("\n");

    window.location.href = `mailto:mrezaaeskandari@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <form className="space-y-6" onSubmit={submitInquiry}>
      <div className="flex items-start justify-between gap-4 border-b border-line pb-5">
        <div>
          <p className="eyebrow">Project brief</p>
          <h3 className="mt-2 text-2xl font-medium tracking-[-0.04em]">Let&apos;s shape the first version.</h3>
          <p className="mt-2 max-w-md text-sm leading-6 text-muted">A few details are enough to start. No polished spec required.</p>
        </div>
        <span className="hidden rounded-full border border-acid/30 bg-acid/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-acid sm:inline-flex">Step 01 / 01</span>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-muted">Your name <span className="text-acid">*</span></span>
          <input
            required
            name="name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="field"
            placeholder="Jane Smith"
          />
        </label>
        <label className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-muted">Email address <span className="text-acid">*</span></span>
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="field"
            placeholder="jane@company.com"
          />
        </label>
      </div>
      <label className="block space-y-2">
        <span className="font-mono text-xs uppercase tracking-[0.12em] text-muted">What are you building? <span className="text-acid">*</span></span>
        <select
          name="projectType"
          required
          value={form.projectType}
          onChange={(event) => updateField("projectType", event.target.value)}
          className="field"
        >
          <option value="">Select a starting point</option>
          <option value="New product / MVP">New product / MVP</option>
          <option value="Mobile application">Mobile application</option>
          <option value="Web application">Web application</option>
          <option value="Backend / API">Backend / API</option>
          <option value="Existing app modernization">Existing app modernization</option>
        </select>
      </label>
      <label className="block space-y-2">
        <span className="font-mono text-xs uppercase tracking-[0.12em] text-muted">A little context <span className="text-acid">*</span></span>
        <textarea
          required
          name="details"
          value={form.details}
          onChange={(event) => updateField("details", event.target.value)}
          className="field min-h-32 resize-y"
          placeholder="What would a successful first version do? What should AI help with, if anything?"
        />
      </label>
      <div className="flex items-start gap-3 rounded-xl border border-line bg-panel/60 p-4 text-sm leading-6 text-muted">
        <FileText size={17} className="mt-0.5 shrink-0 text-violet" aria-hidden="true" />
        <p><span className="text-ink">Helpful context:</span> mention your users, the platforms you need, and any AI experience you want the product to include.</p>
      </div>
      <div className="flex flex-col items-start justify-between gap-4 border-t border-line pt-5 sm:flex-row sm:items-center">
        <button type="submit" className="button-primary">
          <Send size={16} aria-hidden="true" />
          Open an inquiry
          <ArrowUpRight size={16} aria-hidden="true" />
        </button>
        {submitted && (
          <p className="flex items-center gap-2 text-sm text-acid" role="status">
            <Check size={16} aria-hidden="true" /> Your email client is ready.
          </p>
        )}
      </div>
      <p className="flex items-center gap-2 text-xs leading-5 text-muted"><ShieldCheck size={14} className="shrink-0 text-acid" aria-hidden="true" />Your complete codebase and project handoff remain yours.</p>
    </form>
  );
}
