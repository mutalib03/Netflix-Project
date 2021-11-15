import React from 'react';
import { Container,Inner,Item, Pane, Title,Image,Subtitle } from './styles/jumbotron-styles';


const Jumbotron = ({ children ,direction, ...restProps}) => {
   return(
 <Item>
<Inner direction = {direction}>
     {children}
     </Inner>
 </Item>
 
   )
  
    
}
 
export default Jumbotron;

Jumbotron.Container = function JumbotronContainer({children,...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Jumbotron.Pane = function JumbotronPane({children,...restProps}){
    return <Pane {...restProps}>{children}</Pane>
}

Jumbotron.Title = function JumbotronTitle({children,...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Jumbotron.Subtitle = function JumbotronSubtitle({children,...restProps}){
    return <Subtitle {...restProps}>{children}</Subtitle>
}

Jumbotron.Image = function JumbotronImage({src ,alt,...restProps}){
    return <Image src={src} alt={alt} {...restProps}/>
}

