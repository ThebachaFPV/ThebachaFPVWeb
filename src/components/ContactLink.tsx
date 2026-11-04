import React from 'react';

// ONE definition of the league's contact address.
//
// It is here rather than typed into each page because it appears in six places
// (Home, Shop twice, Membership, the footer, and anywhere added later), and a
// value copied into six files is a value that will one day be changed in five.
// That is the same shape as the dates this site had just been carrying: nothing
// reports the copies you missed.
export const CONTACT_EMAIL = 'tfpv@spyd.com';

/**
 * A mailto link for the league.
 *
 * Note the address is on spyd.com, which has MX records and SPF, rather than
 * thebachafpv.org, which has NO MX at all and therefore cannot receive mail.
 */
const ContactLink: React.FC<{ children?: React.ReactNode; subject?: string }> = ({
  children,
  subject,
}) => {
  const href = subject
    ? `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`
    : `mailto:${CONTACT_EMAIL}`;
  return (
    <a href={href} style={{ color: 'inherit', textDecoration: 'underline' }}>
      {children ?? 'Contact us'}
    </a>
  );
};

export default ContactLink;
