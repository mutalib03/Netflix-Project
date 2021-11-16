import React from 'react';
import Footer from '../component/Footer/footer-index';

const FooterContainer = () => {

 return (
   <Footer>
    <Footer.Title>Questions? Contact us. </Footer.Title>
    <Footer.Break />
    <Footer.Row>

  <Footer.Column>
    <Footer.Link href= "#">FAQ</Footer.Link>
      <Footer.Link href= "#">Investor Relations</Footer.Link>
       <Footer.Link href= "#">Ways to Watch</Footer.Link>
        <Footer.Link href= "#">Coporate Information</Footer.Link>
        <Footer.Link href= "#">Netflix Originals</Footer.Link>
    </Footer.Column>

     <Footer.Column>
     <Footer.Link href= "#">help centre</Footer.Link>
      <Footer.Link href= "#">jobs</Footer.Link>
       <Footer.Link href= "#">Terms of use</Footer.Link>
        <Footer.Link href= "#">Contact Us</Footer.Link>
    </Footer.Column>

 <Footer.Column>
     <Footer.Link href= "#">Account</Footer.Link>
      <Footer.Link href= "#">Redeem Gift Cards</Footer.Link>
       <Footer.Link href= "#">Privacy</Footer.Link>
        <Footer.Link href= "#">Speed Test</Footer.Link>
    </Footer.Column>

<Footer.Column>
     <Footer.Link href= "#">Media Centre</Footer.Link>
      <Footer.Link href= "#">Buy Gift Cards</Footer.Link>
       <Footer.Link href= "#">Cookie Preferences</Footer.Link>
        <Footer.Link href= "#">Legal Notices</Footer.Link>
    </Footer.Column>

  </Footer.Row>
  <Footer.Break/>
  <Footer.Text>Netflix United Kingdom</Footer.Text>
   </Footer>



 )

}

export default FooterContainer