import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  ScaleFade
} from '@chakra-ui/react';



import React, { useRef } from "react";
import { useInView } from "framer-motion";
  

import  { AlexImage } from '../../public/images/testimonial/Alex.jpeg'

const Testimonial = ({ children }) => {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <ScaleFade initialScale={0.6}
    in={isInView}>
    <Box ref={ref}>{children}</Box>
    </ScaleFade>
  );
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles(props) {
  const pageContent = props.content;

  return (
    <Box bg={useColorModeValue('green.100', 'green.700')}>
      <Container maxW={'6xl'} py={16} as={Stack} spacing={12} p={{base:12}}>
        <Stack spacing={0} align={'center'}>
          <Heading>Our Clients Speak</Heading>
          <Text>We have been working with clients around the world</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Great Service</TestimonialHeading>
              <TestimonialText>
              "The team was very professional and kind. I felt like I was in good hands as soon as I stepped in. Highly recommend!"
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src=
              'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1686134260/Alex_qkkwr3.jpg'             
              name={'Alexandre P'}
              title={'COO'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Family Favourite</TestimonialHeading>
              <TestimonialText>
              My children have grown up with Med-Optics. A caring, friendly and professional service. We wouldn't go anywhere else for our eye-care.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1686134428/pexels-emmy-e-2381069_he6ive.jpg'
                }
              name={'Mary Kamure'}
              title={'Teacher'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Reliablity</TestimonialHeading>
              <TestimonialText>
                I always receive prompt service with a smile! I will be coming back soon!
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
              }
              name={'Jane Cooper'}
              title={'CEO'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}