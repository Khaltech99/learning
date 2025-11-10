Ever built an app that crashes when users lose internet? 📱💥

I just learned how to detect online/offline status in React Native, and honestly, I wish I'd known this sooner. Here's the simple solution.

When building mobile apps, it's critical to know if the user has an active internet connection — especially when showing an **"offline" banner**, disabling certain actions, or syncing data. On the web, this is handled easily with `window.addEventListener("online/offline")`, but React Native works differently.

### The Challenge 🤔

React Native doesn't have the `window` object, so we use **@react-native-community/netinfo** instead.

**Installation (Expo):**

```bash
npx expo install @react-native-community/netinfo
```

**The Solution (Just 15 lines!):**

```jsx
import { addEventListener } from "@react-native-community/netinfo";
import { useEffect, useState } from "react";

export default function IsUserOnline() {
  const [isUserOnline, setIsUserOnline] = useState(false);

  useEffect(() => {
    const unsubscribe = addEventListener((state) => {
      setIsUserOnline(state.isConnected);
      console.log("Online?", state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  return <>{isUserOnline ? "User is Online" : "User is Offline"}</>;
}
```

The `state` object gives you real-time connection type and `isConnected` status — game changer! 🚀

### ✅ Why this matters (and why you need it)

This simple hook lets you:

- Show offline UI/notifications instantly
- Prevent failed network requests (and angry users!)
- Improve user experience dramatically
- Handle data sync gracefully

**Pro tip:** You can also check connection type (WiFi, cellular, etc.) to optimize data usage!

📚 Full docs here: [https://github.com/react-native-netinfo/react-native-netinfo](https://github.com/react-native-netinfo/react-native-netinfo)

---

**Question for you:** How do you handle offline states in your apps? Do you use NetInfo or something else? I'd love to hear your approach! 👇

I'm azeez — sharing my daily React Native wins and lessons learned.

🔔 Hit follow for more practical tips like this
💬 Drop your thoughts in the comments
♻️ Repost if you found this helpful

🔗 Connect with me on X: @khaltech99 i follow back

#ReactNative #MobileDevelopment #JavaScript #WebDev #CodingTips #Programming #TechCommunity
