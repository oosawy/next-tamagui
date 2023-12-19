'use client'

import { Button, Spinner, Stack } from 'tamagui'

export default function Home() {
  return (
    <Stack space="$4" m="$4">
      <Spinner />
      <Button variant="outlined">Hello world</Button>
    </Stack>
  )
}
