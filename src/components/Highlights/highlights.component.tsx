import { Box, Flex, HStack, Image, Stack, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export interface HighlightsProps {
  name?: string
}

export const Highlights = () => {
  const arrowStyles = {
    cursor: 'pointer',
    pos: 'absolute',
    top: '50%',
    w: 'auto',
    mt: '-22px',
    p: '16px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '18px',
    transition: '0.6s ease',
    borderRadius: '14px',
    userSelect: 'none',
    _hover: {
      opacity: 0.8,
      bg: 'black'
    }
  }

  const slides = [
    {
      img: 'https://studiosol-a.akamaihd.net/uploadfile/letras/playlists/9/4/c/0/94c08136bc584b28b817de8216c5d6ee.jpg',
      label: 'Seleção Católicas',
      description: 'As melhores músicas',
      link: '#'
    },
    {
      img: 'https://studiosol-a.akamaihd.net/uploadfile/letras/playlists/f/d/3/d/fd3d374df85246e69ea6700aef40e674.jpg',
      label: 'Músicas para missa',
      description: 'As melhores.',
      link: '#'
    },
    {
      img: 'https://studiosol-a.akamaihd.net/uploadfile/letras/playlists/6/e/0/7/6e07d5609a744c04aa375f17bfbc4470.jpg',
      label: 'As melhores músicas',
      description: 'da Harpa Cristã',
      link: '#'
    },
    {
      img: 'https://studiosol-a.akamaihd.net/uploadfile/letras/playlists/9/c/a/5/9ca5e25ff0a74e3fac111dd27c294f17.jpg',
      label: 'As melhores',
      description: 'músicas católicas da década',
      link: '#'
    }
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  const slidesCount = slides.length

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1))
  }
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1))
  }
  const setSlide = (slide: number) => {
    setCurrentSlide(slide)
  }
  const carouselStyle = {
    transition: 'all .5s',
    ml: `-${currentSlide * 100}%`
  }

  const SLIDES_INTERVAL_TIME = 3000
  const ANIMATION_DIRECTION = 'right'

  useEffect(() => {
    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === 'left' ? prevSlide() : nextSlide()
    }, SLIDES_INTERVAL_TIME)
    return () => clearInterval(automatedSlide)
  }, [])

  return (
    <Flex
      maxW="980px"
      alignItems="center"
      justifyContent="center"
      data-testid="highlights"
      zIndex={0}
    >
      <Flex w="full" pos="relative" overflow="hidden">
        <Flex h="400px" w="full" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box
              as="a"
              key={`slide-${sid}`}
              boxSize="full"
              shadow="md"
              flex="none"
              href={`${slide.link}`}
            >
              <Text
                color="white"
                fontSize="xs"
                p="8px 12px"
                pos="absolute"
                top="0"
              >
                {sid + 1} / {slidesCount}
              </Text>
              <Image
                src={slide.img}
                boxSize="full"
                backgroundSize="auto"
                objectFit="cover"
              />
              <Stack
                p="8px 16px"
                pos="absolute"
                bottom="24px"
                textAlign="center"
                w="fit-content"
                mb="8"
                color="white"
              >
                {/* <Text fontSize="4xl" bg={'orange.500'} fontStyle="bold">
                  {slide.label}
                </Text>
                <Text fontSize="xl" color={'white'} fontStyle="bold">
                  {slide.description}
                </Text> */}
              </Stack>
            </Box>
          ))}
        </Flex>
        <Text {...arrowStyles} left="0" onClick={prevSlide}>
          &#10094;
        </Text>
        <Text {...arrowStyles} right="0" onClick={nextSlide}>
          &#10095;
        </Text>
        <HStack justify="center" pos="absolute" bottom="8px" w="full">
          {Array.from({ length: slidesCount }).map((_, slide) => (
            <Box
              key={`dots-${slide}`}
              cursor="pointer"
              boxSize={['7px', null, '15px']}
              m="0 2px"
              bg={currentSlide === slide ? 'blackAlpha.800' : 'blackAlpha.500'}
              rounded="50%"
              display="inline-block"
              transition="background-color 0.6s ease"
              _hover={{ bg: 'blackAlpha.800' }}
              onClick={() => setSlide(slide)}
            ></Box>
          ))}
        </HStack>
      </Flex>
    </Flex>
  )
}
