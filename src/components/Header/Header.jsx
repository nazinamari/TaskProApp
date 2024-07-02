export default function Header({ onClick, isDesktop }) {
  return (
    <div>
      {!isDesktop && (
        <button type="button" onClick={onClick}>
          Burger
        </button>
      )}
      <p>I am header</p>
    </div>
  );
}
