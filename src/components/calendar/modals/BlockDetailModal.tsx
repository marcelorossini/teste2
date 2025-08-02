import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
} from '@chakra-ui/react'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export default function BlockDetailModal({ isOpen, onClose }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Bloqueio</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Detalhes do bloqueio aqui</Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
