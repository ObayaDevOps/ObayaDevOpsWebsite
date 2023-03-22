import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useColorMode,
    useDisclosure,
    Show
  } from '@chakra-ui/react';

  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    MoonIcon,
    SunIcon
  } from '@chakra-ui/icons';

  import theme from '../utils/theme'

  import NextImage from 'next/image'
  import africaIcon from '../../public/images/icon/africa.png'
  import africaIconWhite from '../../public/images/icon/africa-white-icon.png'
  import MedOpticsBoxLogo from '../../public/images/icon/medoptics-logo-mini-square.jpeg'
  import MedOptics20Years from '../../public/images/icon/Med-Optics.svg'

  

  import NextLink from 'next/link'
  import { MdNightlight } from 'react-icons/md';
  import Script from 'next/script'


  
  function DarkToggleButton() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <header>
      <Script src="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" />
        {/* <Button onClick={toggleColorMode} size='xs' fontFamily={'Arial'} py={-1}  rounded={'md'} colorScheme={'green'}
 > */}
          {/* {colorMode === 'light' ? 'Dark' : 'Light'} Mode */}
          <IconButton
              onClick={toggleColorMode}
              icon={
                colorMode == 'light' ? <MoonIcon color={'green.400'} w={3} h={3} bg={'none'} /> : <SunIcon color={'green.100'} w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
        {/* </Button> */}
      </header>
    )
  }

  import { FaBeer } from 'react-icons/fa';


  export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode()
  
    return (
      <Box >
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          // minH={'60px'}
          maxHeight={'10vh'}
          py={{ base: 6, md:0 }}
          px={{ base: 8 }}
          // borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'unset'}
          zIndex={9999}
          >
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 3 }} justify={{ base: 'center', md: 'space-evenly' }} p={2}>
          <NextLink href='/#' passHref>
            <Link>
            {/* <Show above='md'> */}
              <NextImage src={colorMode === 'light' ? MedOptics20Years:  MedOptics20Years} width={(300)} height={(80)}/>
            {/* </Show>
            <Show below='md'>
              <NextImage src={colorMode === 'light' ? MedOptics20Years:  MedOptics20Years} width={(350)} height={(90)}/>
            </Show> */}

                
            </Link>
          </NextLink>

            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <DarkToggleButton />
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('green.800', 'green.200');
    const linkHoverColor = useColorModeValue('green.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'green.800');
    const { colorMode, toggleColorMode } = useColorMode()

  
    return (
      <Stack direction={'row'}   spacing={8} paddingTop={{md: 8}} >
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label} zIndex={9999}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <NextLink href={navItem.href ?? '#'} passHref>
                <PopoverTrigger>
                  <Link
                  p={2}
                  rounded={'md'}

                  fontSize={'md'}
                  href={navItem.href ?? '#'}
                  fontWeight={700}
                  color={linkColor}
                  _hover={{ bg: colorMode === 'light' ? 'green.50': 'green.700', textColor: 'green.400'}}
                  fontFamily={'Helvetica'}
                  >
                    {navItem.label}
                  </Link>
                </PopoverTrigger>
              </NextLink>

  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'md'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  

  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <NextLink href={href} passHref>
      <Link
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('green.50', 'gray.900') }}
        >
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              rounded={'md'}

              _groupHover={{ color: 'green.400' }}
              fontWeight={700}
              fontFamily={'Helvetica'}
              _hover={{ color: 'green.400' }}
              >
              {label}
            </Text>

            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transform={'translateX(-10px)'}
            opacity={0}
            rounded={'md'}

            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'green.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
      </NextLink>

    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          fontFamily={"Helvetica"}

          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <NextLink href={child.href} key={child.label} passHref>
                  <Link  py={2}  fontFamily={"Helvetica"}>
                    {child.label}
                  </Link>
                </NextLink>

              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  
  const NAV_ITEMS = [
    {
      label: 'About',
      children: [
        {
          label: 'Who We Are',
          subLabel: 'Our Journey',
          href: '/about/about-us',
        },
        {
          label: 'FAQs',
          subLabel: 'Frequently Asked Questions',
          href: '/about/faqs',
        },
        // {
        //   label: 'Careers',
        //   subLabel: 'Interested in working for us ?',
        //   href: '/about/careers',
        // },
        // {
        //   label: "How it's Made",
        //   subLabel: 'The Tech Behind this Website',
        //   href: '/about/how-this-was-built',
        // },
      ],
    },
    // {
    //   label: 'Services',
    //   children: [
    //     // {
    //     //   label: 'Products',
    //     //   subLabel: 'Frames, Lenses, Contact Lens and more ...',
    //     //   href: '/products-and-services/products',
    //     // },
    //     {
    //       label: 'Services',
    //       subLabel: 'Book Appointments, Consultations ...',
    //       href: '/products-and-services/services',
    //     },
    //     {
    //       label: 'Frame Size Guide',
    //       subLabel: 'Guidance for the perfect glasses fit !',
    //       href: '/products-and-services/frame-size-guide',
    //     },
    //   ],
    // }, 
    ,{
      label: 'Book Appointment',
      href: '/appointments/eyeTest'
      // children: [
      //   {
      //     label: 'Eye Test',
      //     subLabel: 'Modern Specialist Machinery, Great Service',
      //     href: '/appointments/eyeTest',
      //   },
      //   {
      //     label: 'Glasses Fitting',
      //     subLabel: "For Maximal Comfort",
      //     href: '/appointments/eyeTest',
      //   },
      //   {
      //     label: 'Schedule Collection',
      //     subLabel: 'Collect previously ordered items',
      //     href: '/appointments/eyeTest',
      //   }
      // ],
    },   
    {
      label: 'Find Us',
      children: [
        {
          label: 'Service Centres',
          subLabel: '',
          href: '/info/service-centres',
        },
        {
          label: 'Contact Us',
          subLabel: " ",
          href: '/info/contact-enquiry',
        },
        // {
        //   label: '4FR0P0C3N3 43VR',
        //   subLabel: 'Conceptual Blockchain Art',
        //   href: '/tech/asciiTorus',
        // }
      ],
    },
    {
      label: 'Blog',
      href: 'https://medoptics-blog.vercel.app/',
      // children: [
      //   // {
      //   //   label: 'Upcoming/Current',
      //   //   subLabel: '',
      //   //   href: '/exhibitions/current-exhibition',
      //   // },
      //   // {
      //   //   label: 'Exhibition Archive',
      //   //   subLabel: '',
      //   //   href: '/exhibitions/exhibitions-archive',
      //   // },
      //   // {
      //   //   label: 'Museum Of Selves',
      //   //   subLabel: 'Collaborative Exhibition and Youth Workshop',
      //   //   href: '/exhibitions/museum-of-selves-exhibition',
      //   // }
      // ],
    },

    {
      label: 'Shop',
      // children: [
      //   // {
      //   //   label: 'Upcoming/Current',
      //   //   subLabel: '',
      //   //   href: '/workshops/current-workshop',
      //   // },
      //   {
      //     label: 'Workshop Archive',
      //     subLabel: '',
      //     href: '/workshops/workshops-archive',
      //   }
      // ],
    }
  ];