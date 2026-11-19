/**
 * Contact channels.
 *
 * `isDemo: true` keeps the page honest: the café is fictional, so the channels render as
 * buttons that open a notice explaining they are examples. No link points at a real
 * WhatsApp number, Instagram account or mailbox. The e-mail uses the reserved `.example`
 * domain (RFC 2606), which can never receive mail.
 *
 * To use this site for a real café, set `isDemo` to false and fill in `href` and `handle`
 * for each channel; they will then render as ordinary links.
 */
export type Channel = {
  id: 'whatsapp' | 'instagram' | 'email';
  label: string;
  /** What the visitor would do there. */
  action: string;
  /** Shown under the label. In demo mode this is clearly example data. */
  handle: string;
  /** Real destination; unused while `isDemo` is true. */
  href: string | null;
};

export const contact = {
  isDemo: true,
  channels: [
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      action: 'Escribir por WhatsApp',
      handle: 'Número de ejemplo',
      href: null,
    },
    {
      id: 'instagram',
      label: 'Instagram',
      action: 'Enviar un mensaje en Instagram',
      handle: '@monikascoffee.demo',
      href: null,
    },
    {
      id: 'email',
      label: 'Correo',
      action: 'Escribir un correo',
      handle: 'hola@monikascoffee.example',
      href: null,
    },
  ] satisfies Channel[],
} as const;
