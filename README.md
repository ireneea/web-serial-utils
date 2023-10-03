# web-serial-utils

Utility to connect and use serial devices using the Web Serial API

## TODO

- [x] Feature detection
- [ ] Open a serial port
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

## Resources

- [Read from and write to a serial port](https://developer.chrome.com/articles/serial)
- [W3C Community Group - Web Serial API](https://wicg.github.io/serial)
- [MDN Web Docs - Web Serial API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API)