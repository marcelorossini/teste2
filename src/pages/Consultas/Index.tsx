import { Box, Skeleton, Stack, Text } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'

export default function Consultas() {
  const [items, setItems] = useState<number[]>([])
  const [loading, setLoading] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const loadMore = () => {
    if (loading) return
    setLoading(true)
    setTimeout(() => {
      const start = items.length
      setItems((prev) => [...prev, ...Array.from({ length: 10 }, (_, i) => start + i + 1)])
      setLoading(false)
    }, 500)
  }

  useEffect(() => {
    loadMore()
  }, [])

  const handleScroll = () => {
    const el = containerRef.current
    if (!el) return
    if (el.scrollTop + el.clientHeight >= el.scrollHeight * 0.8) {
      loadMore()
    }
  }

  return (
    <Box ref={containerRef} h="calc(100vh - 120px)" overflowY="auto" onScroll={handleScroll} px={2}>
      <Stack spacing={3}>
        {items.map((n) => (
          <Box key={n} p={4} borderWidth="1px" borderRadius="md" minH="72px">
            <Text>Consulta {n}</Text>
          </Box>
        ))}
        {loading && [...Array(5)].map((_, i) => <Skeleton key={i} h="72px" borderRadius="md" />)}
      </Stack>
    </Box>
  )
}
