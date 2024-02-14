export default function Spinner() {
  return (
    <div className="d-flex align-items-center justify-content-between">
        <strong>Loading...</strong>
        <div
          className="spinner-border ml-auto"
          role="status"
          aria-hidden="true"
        ></div>
      </div>
  )
}
