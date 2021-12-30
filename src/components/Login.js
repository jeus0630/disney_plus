import styled from "styled-components";

const Login = () => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" alt=""></CTALogoOne>
                    <SignUp><span>GET ALL THERE</span></SignUp>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci assumenda corporis, cum debitis doloribus eius, eum incidunt iste minima omnis porro quod quos recusandae, repellendus sapiente sunt suscipit veniam?</Description>
                    <CTALogoTwo src="/images/cta-logo-two.png" alt=""></CTALogoTwo>
                </CTA>
                <BgImage></BgImage>
            </Content>
        </Container>
    )
}

const Container = styled.section`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  margin-bottom: 10vw;
  padding: 80px 40px;
  box-sizing: border-box;
`

const BgImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  background: url("/images/login-background.jpeg") no-repeat center/cover;
  z-index: -1;
`

const CTA = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%
  max-width: 650px;
  height: 100%;
  margin-top: 0;
  margin-bottom: 2vw;
  transition: opacity .2s ease-out;
`

const CTALogoOne = styled.img`
  display: block;
  width: 100%;
  max-width: 600px;
  min-height: 1px;
  margin-bottom: 12px;
`

const SignUp = styled.a`
  font-size: 18px;
  font-weight: bold;
  color: #f9f9f9;
  background-color : #0063e5;
  margin-bottom: 12px;
  padding: 16.5px 0;
  width: 100%;
  letter-spacing: 1.5px;
  border: 1px solid transparent;
  border-radius: 4px;
  
  &:hover{
    background-color: #0483ee;
  }
`

const Description = styled.p`
  opacity: .85;
  line-height: 1.5;
  letter-spacing: 1.5px;
`

const CTALogoTwo = styled.img`
  max-width: 600px;
  width: 100%;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
`

export default Login;