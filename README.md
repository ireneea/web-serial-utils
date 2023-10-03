# web-serial-utils

Utility to connect and use serial devices using the Web Serial API

## TODO

- [x] Feature detection
- [x] Connect a device
- [ ] Read from a serial port
- [ ] Write to a serial port
- [ ] Close a serial port
- [ ] Listen to connection and disconnection
- [ ] Handle signals
- [ ] Transforming streams
- [ ] Revoke access to a serial port


## Feature detection

```typescript
import { isWebSerialSupported } from "web-serial-utils"

if (isWebSerialSupported) {
    // Use other util functions (connect, read, write...)
} else {
    // Fallback logic
}
```

## Connect to a device

```typescript
import { connectToDevice } from "web-serial-utils";

const arduinoDevice = await connectToDevice({
  // Arduino Uno USB example
  targetDevice: {
    usbProductId: 0x1234,
    usbVendorId: 0x5678,
  },
  connectionOptions: {
    baudRate: 9600,
  },
});
```

## Resources

- [Read from and write to a serial port](https://developer.chrome.com/articles/serial)
- [W3C Community Group - Web Serial API](https://wicg.github.io/serial)
- [MDN Web Docs - Web Serial API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API)