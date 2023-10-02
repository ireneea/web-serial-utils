# web-serial-utils

Utility to conncet and use serial devices using the Web Serial API


## Feaature detection

```typescript
import { isWebSerialSupported } from "web-serial-utils"

if (isWebSerialSupported) {
    // Use other util functions (connect, read, write...)
} else {
    // Fallback logic
}

```
