interface Props {
  page: number
  size: number
  lastPage: number
  onPageChange: (newPage: number) => void
  onSizeChange: (newSize: number) => void
}

export default function Pagination({
  page,
  size,
  lastPage,
  onPageChange,
  onSizeChange
}: Props) {
  return (
    <div className='mt-6 flex flex-col sm:flex-row justify-between items-center gap-4'>
      <div className='flex gap-2'>
        <button
          className='px-4 py-2 bg-gray-300 text-black rounded disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed'
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          className='px-4 py-2 bg-gray-300 text-black rounded disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed'
          onClick={() => onPageChange(page + 1)}
          disabled={page >= lastPage}
        >
          Next
        </button>
      </div>

      <div>
        <label htmlFor='page-size' className='mr-2'>
          Results per page:
        </label>
        <select
          id='page-size'
          value={size}
          onChange={(e) => onSizeChange(Number(e.target.value))}
          className='border px-2 py-1 rounded'
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>
    </div>
  )
}
