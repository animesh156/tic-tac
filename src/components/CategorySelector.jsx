const categories = {
  Animals: ["🐶", "🐱", "🐰", "🦁", "🐼", "🦊"],
  Food: ["🍎", "🍔", "🍕", "🍩", "🍉", "🍟"],
  Sports: ["⚽", "🏀", "🏈", "⚾", "🎾", "🏐"],
};

export { categories };

export default function CategorySelector({ playerIndex, selected, onSelect }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <p>Player {playerIndex + 1}, choose a category:</p>
      {Object.keys(categories).map((cat) => (
        <button
          key={cat}
          style={{
            margin: "0 5px",
            padding: "5px 10px",
            backgroundColor: selected === cat ? "#4F46E5" : "#e2e8f0",
            color: selected === cat ? "#fff" : "#000",
            border: "none",
            borderRadius: "5px",
          }}
          onClick={() => onSelect(playerIndex, cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
