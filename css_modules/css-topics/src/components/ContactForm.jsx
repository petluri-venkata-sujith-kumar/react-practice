import styled from "styled-components"

const Section=styled.section`
    width:100%;
    height:100vh;
`
const Article=styled.article`
    width:90%;
    height:inherit;
    margin:0 auto;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`
const H1=styled.h1`
    padding:10px;
    color:#009688;
    font-size:28px;
    text-transform:uppercase;
    font-weight:400;
    letter-spacing:1.6px;
    font-style:revert-layer;
`
const Main=styled.main`
    background:white;
    width:400px;
    height:auto;
    padding:10px;
    border:1px solid #0096882e;
`
const Div=styled.div`
    margin:10px 0;
`
const Input=styled.input`
    width:-webkit-fill-available;
    padding:10px;
    margin:10px 0;
    border:1px solid #ccc;
    border-radius:5px;
    font-weight:400;
`

const Label=styled.label`
    width:100%;
    display:block;
    padding:5px 0;
    font-size:14px;
    font-weight:600;
`
const Button=styled.button`
    border:1px solid #607d8b;
    width:100%;
    padding:10px;
    border-radius:5px;
    color:#fff;
    background:#009688;
    font-size:16px;
    margin:10px 0;
    cursor:pointer;
    &:hover{
        background:${({background}) => {
            return (background === "#111"?"red":"blue")}}
    }
`
const ContactForm = () => {
    // console.log(color);
  return (
    <div>
        <Section>
            <Article>
                <header>
                    <H1>Contact Form</H1>
                </header>
                <Main>
                    <Div className="form-group">
                        <Label htmlFor="email">email</Label>
                        <Input type="text" placeholder="enter email"></Input>
                    </Div>
                    <Div className="form-group">
                        <Label htmlFor="password">password</Label>
                        <Input type="password" placeholder="enter password"></Input>
                    </Div>
                    <Div className="form-group">
                        <Button background="#111">Submit</Button>
                    </Div>
                </Main>
            </Article>
        </Section>
    </div>
  )
}

export default ContactForm