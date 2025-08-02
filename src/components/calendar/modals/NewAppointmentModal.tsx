import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export default function NewAppointmentModal({ isOpen, onClose }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Novo agendamento</ModalHeader>
        <ModalCloseButton />
        <ModalBody>// form aqui</ModalBody>
      </ModalContent>
    </Modal>
  )
}
