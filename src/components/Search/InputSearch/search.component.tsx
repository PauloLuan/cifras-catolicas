import {
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'
import { FloatingSearch } from '../FloatingSearch'
export interface SearchProps {
  name?: string
}

export const Search = ({ name }: SearchProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <InputGroup m="20px" w="96" onClick={onOpen}>
        <InputLeftElement color="gray.500" children={<FiSearch />} />
        <Input placeholder="O que você quer tocar hoje?" />
      </InputGroup>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          overflow="hidden"
          top="4vh"
          bg="transparent"
          shadow="none"
          maxW="5xl"
        >
          <ModalBody>
            <FloatingSearch />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
