export function getPage(searchParams: {
  [key: string]: string | string[] | undefined
}) {
  if (typeof searchParams.page !== 'string') return 1
  const page = Number.parseInt(searchParams.page)
  if (Number.isNaN(page)) return 1
  if (page < 1) return 1
  return page
}
