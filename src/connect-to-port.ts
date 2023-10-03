/**
 * Get a list of available ports.
 * Use this when you want to check if the user has already granted access to a port.
 * @returns {Promise<SerialPort[]>} A promise that resolves with the list of available ports.
 */
export const getPorts = async () => {
  return await navigator.serial?.getPorts();
};
