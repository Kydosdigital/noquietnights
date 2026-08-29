type LeadFormProps = {
  eyebrow?: string;
  heading?: string;
  intro?: string;
};

export const contactEmailDisplay = "hello@noquietnights.co.uk";
export const contactEmailHref = "mailto:hello@md.noquietnights.co.uk";

export default function LeadForm({
  eyebrow = "Start a conversation",
  heading = "Tell us what needs to get busier.",
  intro = "Tell us about your venue, what is not working and the kind of support you are looking for. We will come back with the most sensible starting point.",
}: LeadFormProps) {
  return (
    <section id="contact" className="section-pad" style={{ maxWidth: 1120, margin: "0 auto" }}>
      <div style={{ maxWidth: 760, marginBottom: 28 }}>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{heading}</h2>
        <p>{intro}</p>
        <p>
          Prefer email?{" "}
          <a href={contactEmailHref}>{contactEmailDisplay}</a>
        </p>
      </div>
      <div style={{ width: "100%", minHeight: 769 }}>
        <iframe
          src="https://links.luwados.com/widget/form/bxc4v6vLh2Dq9ENMXtTe"
          style={{ width: "100%", height: 769, border: "none", borderRadius: 8 }}
          id="inline-bxc4v6vLh2Dq9ENMXtTe"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="No Quiet Nights website enquiry"
          data-height="769"
          data-layout-iframe-id="inline-bxc4v6vLh2Dq9ENMXtTe"
          data-form-id="bxc4v6vLh2Dq9ENMXtTe"
          data-cookie-consent="true"
          data-cookie-consent-provider="auto"
          title="No Quiet Nights enquiry form"
          loading="lazy"
        />
      </div>
    </section>
  );
}
