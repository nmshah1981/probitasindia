"use client";

import * as React from "react";
import { type ViewId } from "@/lib/site-content";
import { useContent } from "@/lib/content-provider";
import { ArrowUpRight, MapPin, Mail, Phone, Clock } from "lucide-react";
import {
  Container,
  DisplayHeading,
  Eyebrow,
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/site/primitives";
import { PageHeader } from "@/components/site/page-blocks";
import { CoordinateCross } from "@/components/engineering/technical-graphics";

export function ContactView({
  onNavigate,
}: {
  onNavigate: (id: ViewId) => void;
}) {
  const { data } = useContent();
  const { company, services } = data;
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Start a
            <br />
            <span className="text-steel">conversation.</span>
          </>
        }
        description="Tell us about your project — include the location, scope, services required and any key milestones. We respond to every enquiry and will route your brief to the right team."
      />

      <section className="border-b border-border bg-background">
        <Container className="py-20 sm:py-24 md:py-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Form */}
            <div className="lg:col-span-7">
              <Eyebrow>Enquiry Form</Eyebrow>
              <Reveal>
                <DisplayHeading as="h2" className="mt-4">
                  Submit a project brief.
                </DisplayHeading>
              </Reveal>

              {submitted ? (
                <Reveal delay={0.1}>
                  <div className="mt-10 border border-border bg-bone-light p-10">
                    <div className="flex items-center gap-3">
                      <CoordinateCross className="h-8 w-8 text-accent-brand" />
                      <span className="font-mono-tight text-[11px] uppercase tracking-[0.24em] text-foreground font-medium">
                        Enquiry Received
                      </span>
                    </div>
                    <p className="mt-4 text-pretty text-base leading-relaxed text-foreground/90">
                      Thank you for contacting Probitas. We will review your project requirements and respond within one business day.
                    </p>
                    <div className="mt-6 pt-6 border-t border-border flex items-center justify-between text-xs text-steel">
                      <span>Direct email: {company.email}</span>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="underline text-foreground hover:text-accent-brand"
                      >
                        Submit another enquiry
                      </button>
                    </div>
                  </div>
                </Reveal>
              ) : (
                <Reveal delay={0.1}>
                  <form
                    onSubmit={handleSubmit}
                    className="mt-10 border border-border bg-bone-light p-6 sm:p-8 md:p-10"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField label="Full Name" name="name" required />
                      <FormField label="Organization / Company" name="company" />
                      <FormField label="Email Address" name="email" type="email" required />
                      <FormField label="Contact Number" name="phone" type="tel" />
                      <FormSelect
                        label="Project Typology"
                        name="projectType"
                        options={[
                          "Structural Design (RCC & Steel)",
                          "Structural Peer Review & Value Engineering",
                          "MEP Engineering Design",
                          "MEP Peer Review",
                          "Integrated Structural & MEP Package",
                          "Aviation / Airport / Hangar Facility",
                          "High-Rise Residential / Commercial Tower",
                          "Transit-Oriented Development (TOD)",
                          "Other",
                        ]}
                      />
                      <FormSelect
                        label="Engagement Scope"
                        name="services"
                        options={[
                          "Concept-to-Construction Design",
                          "Independent Technical Peer Review",
                          "Structural Value Engineering",
                          "Design Basis Verification",
                          "General Consultation",
                        ]}
                      />
                      <div className="sm:col-span-2">
                        <FormField
                          label="Project Location (City, State / Region)"
                          name="location"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <FormTextarea
                          label="Brief Project Scope / Notes"
                          name="message"
                        />
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <span className="font-mono-tight text-[10px] uppercase tracking-[0.18em] text-steel">
                        Fields marked * are required
                      </span>
                      <button
                        type="submit"
                        className="group inline-flex items-center gap-3 bg-foreground px-7 py-4 text-bone transition-colors hover:bg-accent-brand"
                      >
                        <span className="font-mono-tight text-[11px] uppercase tracking-[0.2em] font-medium">
                          Submit Enquiry
                        </span>
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    </div>
                  </form>
                </Reveal>
              )}
            </div>

            {/* Contact details sidebar */}
            <div className="lg:col-span-5 lg:pl-6">
              <Eyebrow>Registered Studio</Eyebrow>
              <Reveal>
                <div className="mt-6 space-y-6">
                  <div className="border border-border bg-bone-light p-6 sm:p-8">
                    <ContactBlock
                      icon={<MapPin className="h-4 w-4 text-accent-brand" />}
                      label="Studio Address"
                      value={company.address}
                    />

                    <div className="mt-6 pt-6 border-t border-border space-y-4">
                      <ContactBlock
                        icon={<Mail className="h-4 w-4 text-accent-brand" />}
                        label="General Enquiries"
                        value={company.email}
                        isLink={`mailto:${company.email}`}
                      />
                      {company.phone && (
                        <ContactBlock
                          icon={<Phone className="h-4 w-4 text-accent-brand" />}
                          label="Telephone"
                          value={company.phone}
                          isLink={`tel:${company.phone.replace(/[^0-9+]/g, "")}`}
                        />
                      )}
                      <ContactBlock
                        icon={<Clock className="h-4 w-4 text-accent-brand" />}
                        label="Studio Working Hours"
                        value="Monday – Saturday: 9:00 AM – 6:00 PM IST"
                      />
                    </div>
                  </div>

                  <div className="border border-border bg-bone-light p-6">
                    <div className="h-24 w-full text-steel/50">
                      <CoordinateCross />
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
          <Eyebrow>Direct Disciplines</Eyebrow>
          <StaggerGroup className="mt-6 grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
            {services.map((s) => (
              <StaggerItem key={s.slug} className="bg-background">
                <button
                  onClick={() => onNavigate(s.slug)}
                  className="group flex w-full items-center justify-between p-6 sm:p-8 text-left transition-colors hover:bg-concrete-subtle"
                >
                  <div>
                    <div className="font-mono-tight text-[10px] uppercase tracking-[0.22em] text-steel number-tabular">
                      Division {s.index}
                    </div>
                    <div className="mt-2 font-display text-xl font-medium text-foreground group-hover:text-accent-brand">
                      {s.title}
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-steel group-hover:text-accent-brand" />
                </button>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>
    </>
  );
}

function ContactBlock({
  icon,
  label,
  value,
  isLink,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  isLink?: string;
}) {
  const content = (
    <div className="flex items-start gap-3.5">
      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center border border-border bg-bone">
        {icon}
      </div>
      <div>
        <div className="font-mono-tight text-[10px] uppercase tracking-[0.2em] text-steel">
          {label}
        </div>
        <div className="mt-1 text-sm font-medium text-foreground leading-relaxed">
          {value}
        </div>
      </div>
    </div>
  );

  if (isLink) {
    return (
      <a href={isLink} className="block transition-colors hover:text-accent-brand">
        {content}
      </a>
    );
  }
  return content;
}

function FormField({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-mono-tight text-[10px] uppercase tracking-[0.2em] text-steel"
      >
        {label} {required && <span className="text-accent-brand">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        required={required}
        className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-accent-brand focus:outline-none"
      />
    </div>
  );
}

function FormSelect({
  label,
  name,
  options,
  required = false,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-mono-tight text-[10px] uppercase tracking-[0.2em] text-steel"
      >
        {label} {required && <span className="text-accent-brand">*</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-accent-brand focus:outline-none"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

function FormTextarea({
  label,
  name,
  rows = 4,
  required = false,
}: {
  label: string;
  name: string;
  rows?: number;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-mono-tight text-[10px] uppercase tracking-[0.2em] text-steel"
      >
        {label} {required && <span className="text-accent-brand">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        required={required}
        className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-accent-brand focus:outline-none"
      />
    </div>
  );
}
