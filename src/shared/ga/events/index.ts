declare const window: Window & { dataLayer: unknown[] };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function gEvent(data: any) {
  if (!window.dataLayer || Array.isArray(window.dataLayer))
    window.dataLayer = [];

  window.dataLayer.push(data);
}
