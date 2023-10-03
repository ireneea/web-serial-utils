export const DEFAULT_BAUD_RATE = 115200;

/**
 * A description of the serial device to connect to.
 */
export interface DeviceInfo {
  /**
   * The USB vendor ID of the device. also known as VID.
   */
  usbVendorId: number;
  /*
   * The USB product ID of the device. also known as PID.
   */
  usbProductId: number;
}

/**
 * Connects to a serial device.
 * If the user has already granted access to a port, they won't be prompted again.
 * @param targetDevice {DeviceInfo} the device to connect to
 * @param connectionOptions {SerialOptions} the connection options. If empty, the default baud rate will be used
 * @returns {SerialPort} the connected serial port
 *
 * @example
 * import { connectToDevice } from "web-serial-utils";
 * 
 * const device = await connectToDevice({
 *   // Arduino Uno USB example
 *   targetDevice: {
 *     usbProductId: 0x1234,
 *     usbVendorId: 0x5678,
 *   },
 *   connectionOptions: {
 *     baudRate: 9600,
 *   },
 * });
 */
export const connectToDevice = async ({
  targetDevice,
  connectionOptions,
}: {
  targetDevice: DeviceInfo;
  connectionOptions?: SerialOptions;
}) => {
  const devicePort = await requestDevicePort(targetDevice);

  if (!devicePort) {
    return null;
  }

  await openDevicePort({ devicePort, connectionOptions });
  return devicePort;
};

const requestDevicePort = async (acceptedDevice: DeviceInfo) => {
  // Check if the user has already granted access to a port.
  const availablePorts = await navigator.serial.getPorts();

  let port = availablePorts?.find((port) => {
    const { usbVendorId, usbProductId } = port.getInfo();
    return (
      usbProductId === acceptedDevice.usbProductId &&
      usbVendorId === acceptedDevice.usbVendorId
    );
  });

  if (!port) {
    port = await navigator.serial.requestPort({
      filters: [acceptedDevice],
    });
  }

  return port;
};

const openDevicePort = async ({
  devicePort,
  connectionOptions,
}: {
  devicePort: SerialPort;
  connectionOptions?: SerialOptions;
}) => {
  await devicePort.open(connectionOptions ?? { baudRate: DEFAULT_BAUD_RATE });
};
