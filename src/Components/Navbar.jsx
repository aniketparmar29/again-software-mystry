import React, { useState } from 'react';
import {
  Box,
  Flex,
  Spacer,
  Text,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiHome, FiSettings, FiUsers, FiPhone } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  const handleResize = () => {
    setIsDesktop(window.innerWidth > 768);
  };

  window.addEventListener('resize', handleResize);

  return (
    <Box bg="gray.800" py={4} px={8} color="white">
      <Flex justifyContent={"space-between"}>
        <Text fontSize="2xl" fontWeight="bold">
          Software Mystry
        </Text>
        <Spacer />
        {isDesktop ? (
          <ul className="menu flex flex-row justify-evenly gax-x-4  w-[60%]">
            <li>
              <Link className='flex flex-col justify-center items-center ' to="/">
                <FiHome className="menu-icon" size={20} />
                Home
              </Link>
            </li>
            <li>
              <Link  className='flex flex-col justify-center items-center ' to="/">
                <FiSettings className="menu-icon" size={20} />
                Services
              </Link>
            </li>
            <li>
              <Link  className='flex flex-col justify-center items-center ' to="/">
                <FiUsers className="menu-icon" size={20} />
                Solutions
              </Link>
            </li>
            <li>
              <Link className='flex flex-col justify-center items-center ' to="/">
                <FiUsers className="menu-icon" size={20} />
                About Us
              </Link>
            </li>
            <li>
              <Link className='flex flex-col justify-center items-center ' to="/">
                <FiPhone className="menu-icon" size={20} />
                Contact
              </Link>
            </li>
          </ul>
        ) : (
          <>
            <Spacer />
            <IconButton
              aria-label="Toggle Menu"
              icon={<AiOutlineMenu />}
              onClick={onOpen}
              size="md"
              variant="unstyled"
            />
          </>
        )}
      </Flex>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
  <DrawerOverlay>
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerHeader>Menu</DrawerHeader>
      <DrawerBody>
        <ul className="menu text-2xl flex flex-col  items-center">
          <li>
            <Link className="flex flex-row items-center gap-x-2 py-4" to="/">
              <FiHome className="menu-icon" size={20} />
              Home
            </Link>
          </li>
          <li>
            <Link className="flex flex-row items-center gap-x-2 py-4" to="/">
              <FiSettings className="menu-icon" size={20} />
              Services
            </Link>
          </li>
          <li>
            <Link className="flex flex-row items-center gap-x-2 py-4" to="/">
              <FiUsers className="menu-icon" size={20} />
              Solutions
            </Link>
          </li>
          <li>
            <Link className="flex flex-row items-center gap-x-2 py-4" to="/">
              <FiUsers className="menu-icon" size={20} />
              About Us
            </Link>
          </li>
          <li>
            <Link className="flex flex-row items-center gap-x-2 py-4" to="/">
              <FiPhone className="menu-icon" size={20} />
              Contact
            </Link>
          </li>
        </ul>
      </DrawerBody>
    </DrawerContent>
  </DrawerOverlay>
</Drawer>

                    </Box>
                    );
                    };

                    export default Navbar;
