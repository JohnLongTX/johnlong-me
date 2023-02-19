type EmojiMap = {
  [key: string]: string;
};

const emojiMap: EmojiMap = {
  ":smile:": "😊",
  ":laugh:": "😆",
  ":heart:": "❤️",
  ":taco:": "🌮",
  ":pizza:": "🍕",
};

export function convertEmoji(shortCode: string): string {
  return emojiMap[shortCode] || shortCode;
}