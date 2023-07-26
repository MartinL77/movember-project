import Image from 'next/image'
import { Inter } from 'next/font/google'
import { styled } from 'styled-components'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // default google page with no log in details
  return (
    <>
      <PageContainer>
        <Nav>

        </Nav>
        <GoogleContainer>
          <Image src={'/public/google-logo.png'} alt={''} />
          <input type="text" />
        </GoogleContainer>
        <Footer>

        </Footer>
      </PageContainer>
    </>
  )
}

const PageContainer = styled.div`

`;

const Nav = styled.div` // move to components 

`;

const Footer = styled.div` // Move to components
`;

const GoogleContainer = styled.div`

`;

