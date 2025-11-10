I recently learnt how to check a user’s online/offline status in React Native using the **@react-native-community/netinfo** package, and I thought to share a quick summary for anyone who might need it.

When building mobile apps, it’s important to know if the user has an active internet connection — especially when showing an **“offline” banner**, disabling certain actions, or syncing data. On the web, this is handled easily with `window.addEventListener("online/offline")`, but React Native works differently.

### How it works in React Native

React Native doesn't have the `window` object, so we use NetInfo instead.

**Installation (Expo):**

```bash
npx expo install @react-native-community/netinfo
```

**Usage example:**

```jsx
import NetInfo from "@react-native-community/netinfo";
import { useEffect, useState } from "react";

export default function IsUserOnline() {
  const [isUserOnline, setIsUserOnline] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsUserOnline(state.isConnected);
      console.log("Online?", state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  return <>{isUserOnline ? "User is Online" : "User is Offline"}</>;
}
```

`state` includes details such as connection type and `isConnected`, which lets you know whether the user is online.

### ✅ Why this matters

This is useful for:

- Showing offline UI/notifications
- Preventing failed network requests
- Improving user experience
- Handling data sync gracefully

You can explore more features and what other properties in the aforementioned state in the official GitHub repo:
[https://github.com/react-native-netinfo/react-native-netinfo](https://github.com/react-native-netinfo/react-native-netinfo)

Thanks for reading!
I’m Khaleel — sharing my daily React Native learning journey.
Follow for more quick, practical breakdowns.

**X (Twitter): @khaltech99**
