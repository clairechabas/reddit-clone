import React from 'react'
import { Flex, Image } from '@chakra-ui/react'
import SearchBar from '../SearchBar/SearchBar'

const Navbar: React.FC = () => {
  return (
    <Flex bg="white" height="44px" padding="6px 12px">
      <Flex align="center">
        <Image
          alt="Reddit Logo Face"
          src="/images/redditFace.svg"
          height="30px"
        />
        <Image
          alt="Reddit Logo Text"
          src="/images/redditText.svg"
          height="46px"
          display={{ base: 'none', md: 'unset' }}
        />
      </Flex>

      {/* <Directory /> */}
      <SearchBar />
      {/* <NavBarMenu /> */}
    </Flex>
  )
}

export default Navbar
