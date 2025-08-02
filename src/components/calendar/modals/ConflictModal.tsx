import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Text,
} from '@chakra-ui/react'

interface Props {
  isOpen: boolean
  onConfirm: () => void
  onCancel: () => void
}

export default function ConflictModal({ isOpen, onConfirm, onCancel }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onCancel} size="md">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Conflito detectado</ModalHeader>
        <ModalBody>
          <Text>Este horário está em conflito. Deseja continuar?</Text>
        </ModalBody>
        <ModalFooter>
          <Button mr={3} onClick={onCancel} variant="ghost">
            Cancelar
          </Button>
          <Button colorScheme="red" onClick={onConfirm}>
            Forçar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
