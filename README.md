
# QuickQuote 📜

**QuickQuote** is a simple and elegant React Native mobile application that displays random quotes from a public API. It also features sharing and saving quotes to favorites.

---

## 🔗 Public API Used

- **API Name**: Quotable API  
- **API URL**: [https://api.quotable.io/random](https://api.quotable.io/random)  
- **API Documentation**: [https://docs.zenquotes.io/zenquotes-documentation/](https://docs.zenquotes.io/zenquotes-documentation/)

This API provides random inspirational quotes in JSON format.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn
- Expo CLI (Install via: `npm install -g expo-cli`)
- Expo Go App (for testing on a physical device)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/RonakSiddhpura/QuickQuote.git
   cd quickquote
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npx expo start
   ```

4. **Run the app:**

   - Install Expo Go:
     - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent&pcampaignid=web_share)
     -After that scan the Qr Codeshow in the ternimal. 

   - Options:
     - Use a physical device with the Expo Go app.
     - Or use an Android/iOS emulator from your IDE.

---

## 🎨 Design Choices & Challenges Faced

### ✅ Design

- Used the Quotable API to fetch quotes.
- Built a clean and minimal UI using core React Native components and custom stylesheets.

### 🌟 Favorites Feature

- Implemented persistent favorites using AsyncStorage.
- Users can save and view their favorite quotes locally.

### 🛠️ Challenges

- **Favorites Bug**: A bug where new favorites didn’t display after clearing the list was fixed using proper state management and empty-state checks.
- **API Rate Limits**: The Quotable API imposes a rate limit. If quotes are fetched too frequently, a user-friendly error alert is displayed when the API call fails.

---
