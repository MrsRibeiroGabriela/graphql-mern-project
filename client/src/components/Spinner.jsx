export default function Spinner() {
  return (
    <div class="d-flex align-items-center justify-content-between">
        <strong>Loading...</strong>
        <div
          class="spinner-border ml-auto"
          role="status"
          aria-hidden="true"
        ></div>
      </div>
  )
}
