import React from 'react';
import faqsData from "../fixtures/faq.json"
import Accordion from '../component/accordion/accordion-index';


const FaqsContainer = () => {
    return ( 
<Accordion>
<Accordion.Title>Frequently Asked Questions</Accordion.Title>
 {
   faqsData.map(item => (
  <Accordion.Item key={item.id}>
  <Accordion.Header>{item.header}</Accordion.Header>  
  <Accordion.Body>{item.body}</Accordion.Body>
   </Accordion.Item>

   )) 
 } 
</Accordion>
 ); 
}
 
export default FaqsContainer;