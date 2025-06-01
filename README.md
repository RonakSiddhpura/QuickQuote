
# QuickQuote 📜

**QuickQuote** is a simple and elegant React Native mobile application that displays random quotes from a public API. It also features sharing and saving quotes to favorites.

---

## 🔗 Public API Used

- **API Name**: Zenquotes API  
- **API URL**: [https://zenquotes.io/api/quotes](https://zenquotes.io/api/quotes)  
- **API Documentation**: [https://docs.zenquotes.io/zenquotes-documentation/](https://docs.zenquotes.io/zenquotes-documentation/)
  
---

### Steps to Install and Run the App

1. **Clone the repository:**

   ```bash
   git clone https://github.com/RonakSiddhpura/QuickQuote.git
   cd quickquote
   ```

2. **Install Expo-cli:**

   ```bash
   npm install -g expo-cli
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npx expo start
   ```

5. **Run the app:**

   - Install Expo Go:
     - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent&pcampaignid=web_share)
     -After that, scan the QR code shown in the terminal.

   - Options:
     - Use a physical device with the Expo Go app.
     - Or use an Android/iOS emulator from your IDE.

---

## 🎨 Design Choices & Challenges Faced

### ✅ Design

- Used the Zenquotes API to fetch quotes.
- Built a clean and minimal UI using core React Native components and custom stylesheets.

### 🌟 Favorites Feature

- Implemented persistent favorites using AsyncStorage.
- Users can save and view their favorite quotes locally.

### 🛠️ Challenges

- **Favorites Bug**: A bug where new favorites didn’t display after clearing the list was fixed using proper state management and empty-state checks.
- **API Rate Limits**: The Zenquotes API imposes a rate limit. If quotes are fetched too frequently, a user-friendly error alert is displayed when the API call fails.

---
