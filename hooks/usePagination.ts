import { useState } from 'react'

export function usePagination(initialPage = 1, initialSize = 10) {
  const [page, setPage] = useState(initialPage)
  const [size, setSize] = useState(initialSize)

  const onPageChange = (newPage: number) => {
    setPage(newPage)
  }

  const onSizeChange = (newSize: number) => {
    setSize(newSize)
    setPage(1)
  }

  return {
    page,
    size,
    setPage,
    setSize,
    onPageChange,
    onSizeChange
  }
}
