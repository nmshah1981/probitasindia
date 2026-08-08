"use client";

import * as React from "react";
import { company, services, type ViewId } from "@/lib/site-content";
import { ArrowUpRight, MapPin, Mail, Phone } from "lucide-react";
import {
  Container,
  DisplayHeading,
  Eyebrow,
  Reveal,
  StaggerGroup,
  StaggerItem,
  PlaceholderPill,
  TechnicalTag,
} from "@/components/site/primitives";
import { PageHeader } from "@/components/site/page-blocks";
import { DrawingTag, CoordinateCross } from "@/components/engineering/technical-graphics";

export function ContactView({
  onNavigate,
}: {
  onNavigate: (id: ViewId) => void;
}) {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // No backend wiring — owner must connect to [CONTACT FORM RECIPIENT].
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader
        index="00"
        eyebrow="Contact"
        title={
          <>
            Start a
            <br />
            <span className="text-steel">conversation.</span>
          </>
        }
        description="[CONTACT INTRODUCTION — OWNER TO PROVIDE: A short note on what to include in an enquiry and how the firm responds.]"
        tags={["Enquiry", "Consultation", "Peer Review"]}
        meta={[
          { label: "Email", value: company.email },
          { label: "Phone", value: company.phone },
          { label: "Studio", value: company.address },
        ]}
      />

      <section className="border-b border-border bg-background">
        <Container className="py-20 md:py-28">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            {/* Form */}
            <div className="md:col-span-7">
              <Eyebrow index="01">Enquiry Form</Eyebrow>
              <Reveal>
                <DisplayHeading as="h2" className="mt-6">
                  Submit an enquiry.
                </DisplayHeading>
              </Reveal>

              {submitted ? (
                <Reveal delay={0.1}>
                  <div className="mt-10 border border-border bg-bone p-10">
                    <div className="flex items-center gap-3">
                      <CoordinateCross className="h-8 w-8 text-accent-brand" />
                      <span className="font-mono-tight text-[11px] uppercase tracking-[0.22em] text-steel">
                        Enquiry received
                      </span>
                    </div>
                    <p className="mt-4 text-pretty text-base leading-relaxed text-foreground">
                      [SUBMISSION CONFIRMATION — OWNER TO PROVIDE: A short
                      message confirming receipt and explaining next steps and
                      response time.]
                    </p>
                    <div className="mt-6">
                      <PlaceholderPill>
                        Form is not yet connected to a backend
                      </PlaceholderPill>
                    </div>
                  </div>
                </Reveal>
              ) : (
                <Reveal delay={0.1}>
                  <form
                    onSubmit={handleSubmit}
                    className="mt-10 grid grid-cols-1 gap-px bg-border md:grid-cols-2"
                  >
                    <FormField label="Name" name="name" required />
                    <FormField label="Company" name="company" />
                    <FormField label="Email" name="email" type="email" required />
                    <FormField label="Phone" name="phone" type="tel" />
                    <FormSelect
                      label="Project Type"
                      name="projectType"
                      options={[
                        "[PROJECT TYPE — OWNER TO PROVIDE]",
                        "Structural — Design",
                        "Structural — Peer Review",
                        "MEP — Design",
                        "MEP — Peer Review",
                        "Both Divisions",
                        "Other",
                      ]}
                    />
                    <FormSelect
                      label="Services Required"
                      name="services"
                      options={[
                        "[SERVICES — OWNER TO PROVIDE]",
                        "Structural Design",
                        "Structural Peer Review",
                        "MEP Design",
                        "MEP Peer Review",
                      ]}
                    />
                    <FormField
                      label="Project Location"
                      name="location"
                      className="md:col-span-2"
                    />
                    <FormTextarea
                      label="Message"
                      name="message"
                      className="md:col-span-2"
                    />
                    <div className="bg-background p-6 md:col-span-2">
                      <button
                        type="submit"
                        className="group inline-flex items-center gap-3 bg-foreground px-6 py-3.5 text-bone transition-colors hover:bg-accent-brand"
                      >
                        <span className="font-mono-tight text-[11px] uppercase tracking-[0.18em]">
                          Submit Enquiry
                        </span>
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                      <p className="mt-4 text-xs text-steel">
                        [UPLOAD DOCUMENTS — OWNER TO PROVIDE: Only enable document
                        upload once backend requirements are confirmed.]
                      </p>
                    </div>
                  </form>
                </Reveal>
              )}
            </div>

            {/* Contact details sidebar */}
            <div className="md:col-span-4 md:col-start-9">
              <Eyebrow index="02">Studio</Eyebrow>
              <Reveal>
                <div className="mt-6 space-y-8">
                  <ContactBlock
                    icon={<MapPin className="h-4 w-4" />}
                    label="Address"
                    value={company.address}
                  />
                  <ContactBlock
                    icon={<Mail className="h-4 w-4" />}
                    label="Email"
                    value={company.email}
                  />
                  <ContactBlock
                    icon={<Phone className="h-4 w-4" />}
                    label="Phone"
                    value={company.phone}
                  />

                  <div className="border-t border-border pt-8">
                    <DrawingTag code="CTC-01" title="Studio" />
                    <div className="mt-4 h-32 w-full text-steel/60">
                      <CoordinateCross />
                    </div>
                  </div>

                  <div className="border-t border-border pt-6">
                    <div className="font-mono-tight text-[10px] uppercase tracking-[0.22em] text-steel">
                      Office Hours
                    </div>
                    <div className="mt-2 text-sm text-foreground">
                      [OFFICE HOURS — OWNER TO PROVIDE]
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Disciplines quick links */}
      <section className="border-b border-border bg-bone">
        <Container className="py-16 md:py-20">
          <Eyebrow index="03">Disciplines</Eyebrow>
          <StaggerGroup className="mt-6 grid grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <StaggerItem key={s.slug} className="bg-bone">
                <button
                  onClick={() => onNavigate(s.slug)}
                  className="group flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-concrete/30"
                >
                  <div>
                    <div className="font-mono-tight text-[10px] uppercase tracking-[0.22em] text-steel number-tabular">
                      {s.index}
                    </div>
                    <div className="mt-2 font-display text-lg font-medium">
                      {s.title}
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-steel transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-brand" />
                </button>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>
    </>
  );
}

function FormField({
  label,
  name,
  type = "text",
  required,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={`bg-background p-6 ${className ?? ""}`}>
      <label
        htmlFor={name}
        className="font-mono-tight text-[10px] uppercase tracking-[0.18em] text-steel"
      >
        {label}
        {required && <span className="ml-1 text-accent-brand">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border-0 border-b border-border bg-transparent pb-2 text-sm text-foreground outline-none transition-colors placeholder:text-steel/60 focus:border-accent-brand focus:outline-none"
        placeholder={`[${label.toUpperCase()} — OWNER TO PROVIDE]`}
      />
    </div>
  );
}

function FormTextarea({
  label,
  name,
  className,
}: {
  label: string;
  name: string;
  className?: string;
}) {
  return (
    <div className={`bg-background p-6 ${className ?? ""}`}>
      <label
        htmlFor={name}
        className="font-mono-tight text-[10px] uppercase tracking-[0.18em] text-steel"
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={5}
        className="mt-2 w-full resize-none border-0 border-b border-border bg-transparent pb-2 text-sm text-foreground outline-none transition-colors placeholder:text-steel/60 focus:border-accent-brand focus:outline-none"
        placeholder={`[${label.toUpperCase()} — OWNER TO PROVIDE]`}
      />
    </div>
  );
}

function FormSelect({
  label,
  name,
  options,
  className,
}: {
  label: string;
  name: string;
  options: string[];
  className?: string;
}) {
  return (
    <div className={`bg-background p-6 ${className ?? ""}`}>
      <label
        htmlFor={name}
        className="font-mono-tight text-[10px] uppercase tracking-[0.18em] text-steel"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="mt-2 w-full border-0 border-b border-border bg-transparent pb-2 text-sm text-foreground outline-none transition-colors focus:border-accent-brand focus:outline-none"
      >
        <option value="" disabled>
          [SELECT — OWNER TO PROVIDE]
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function ContactBlock({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 font-mono-tight text-[10px] uppercase tracking-[0.22em] text-steel">
        {icon}
        {label}
      </div>
      <div className="mt-2 text-pretty text-base text-foreground">{value}</div>
    </div>
  );
}
