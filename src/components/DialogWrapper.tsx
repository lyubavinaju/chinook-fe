import { Button, CloseButton, Dialog, Portal } from '@chakra-ui/react'
import { useState, type FC, type ReactNode } from 'react'

type Props = {
  triggerLabel: string
  title: string
  body: ReactNode
}

const DialogWrapper: FC<Props> = ({ triggerLabel, title, body }) => {
  const [open, setOpen] = useState(false)

  return (
    <Dialog.Root lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Dialog.Trigger asChild>
        <Button variant="outline">{triggerLabel}</Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content
            w={['95vw', '95vw', '90vw', '85vw']}
            maxW="95vw"
            minH={['70vh', '70vh', '60vh']}
            maxH="85vh"
          >
            <Dialog.Header>
              <Dialog.Title>{title}</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body overflow="auto">{body}</Dialog.Body>
            <Dialog.Footer />
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}

export default DialogWrapper
