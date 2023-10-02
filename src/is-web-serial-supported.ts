/**
 * Web Serial API is an experimental technology that is not supported by all browsers.
 * Use this function to check if the user's browser supports the Web Serial API
 * @returns {boolean} true if the browser supports the Web Serial API
 * @example
 * import { isWebSerialSupported } from "web-serial-utils"
 * 
 * if (isWebSerialSupported) {
 *   // Use other util functions (connect and io operations)
 * } else {
 *   // Fallback logic
 * }
 */
export const isWebSerialSupported = () => {
    const isBrowser = typeof window !== 'undefined';
    return isBrowser && 'serial' in navigator;
};