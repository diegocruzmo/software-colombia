import { Button } from '../ui/button'

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
  const pages = Array.from({ length: lastPage }, (_, i) => i + 1)

  return (
    <div className='mt-6 flex flex-col sm:flex-row justify-between items-center gap-4'>
      <div className='flex items-center gap-2 flex-wrap'>
        <Button
          className='px-4 py-2 bg-gray-300 text-black rounded disabled:opacity-50 cursor-pointer disabledButton:cursor-not-allowed hover:bg-gray-400'
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
        >
          Previous
        </Button>

        {pages.map((p) => (
          <Button
            key={p}
            onClick={() => onPageChange(p)}
            className={`px-3 py-1 rounded border cursor-pointer ${
              p === page
                ? 'bg-sky-600 text-white'
                : 'bg-gray-300 text-black hover:bg-gray-400'
            }`}
          >
            {p}
          </Button>
        ))}

        <Button
          className='px-4 py-2 bg-gray-300 text-black rounded disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed hover:bg-gray-400'
          onClick={() => onPageChange(page + 1)}
          disabled={page >= lastPage}
        >
          Next
        </Button>
      </div>

      <div>
        <label htmlFor='page-size' className='mr-2 text-gray-200'>
          Results per page:
        </label>
        <select
          id='page-size'
          value={size}
          onChange={(e) => onSizeChange(Number(e.target.value))}
          className='border px-2 py-1 rounded text-gray-200 bg-sky-600'
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
      </div>
    </div>
  )
}
