# web-serial-utils

Utility to conncet and use serial devices using the Web Serial API

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


## Feaature detection

```typescript
import { isWebSerialSupported } from "web-serial-utils"

if (isWebSerialSupported) {
    // Use other util functions (connect, read, write...)
} else {
    // Fallback logic
}
```
