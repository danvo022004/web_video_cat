export default function AlbumFilter({ albums, active, onChange }) {
  const options = [{ value: '', label: 'Tất cả' }, ...albums.map((album) => ({ value: album, label: album }))]

  return (
    <div className="chips" role="group" aria-label="Lọc theo album">
      {options.map(({ value, label }) => (
        <button
          key={label}
          type="button"
          className={`chip${active === value ? ' chip--active' : ''}`}
          aria-pressed={active === value}
          onClick={() => onChange(value)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
