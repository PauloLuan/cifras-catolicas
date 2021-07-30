import {
  Input,
  InputGroup,
  InputLeftElement,
  Box,
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
    <Box bg="blue" m={4} w="lg" h="full">
      <InputGroup
        h="full"
        w="full"
        onClick={onOpen}
        boxShadow="lg"
        bg="gray.100"
      >
        <InputLeftElement color="gray.600" children={<FiSearch />} />
        <Input
          _placeholder={{
            color: 'gray.600'
          }}
          placeholder="O que você quer tocar hoje?"
        />
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
    </Box>
  )
}
