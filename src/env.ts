export const ENV = {
  IS_DEV: (import.meta.env.VITE_NODE_ENV || '') !== 'production',
  IS_PRODUCTION: import.meta.env.VITE_IS_PRODUCTION || false,
};
