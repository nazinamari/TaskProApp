export default function Sidebar({ close }) {
  return (
    <div>
      {close && (
        <button type="button" onClick={close}>
          Close
        </button>
      )}
      <p>I am Sidebar</p>
    </div>
  );
}
