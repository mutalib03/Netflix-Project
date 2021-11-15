 import React from 'react';
 
 const Footer = ({children, ...restProps}) => {
     return ( 
   <Container{...restProps}>
  {children}
   </Container>
      );
 }
  
Footer.Row = function FooterRow({children, ...otherProps}) {
    return <Row {...otherProps}>{children}</Row>
}

Footer.Column = function FooterColumn({children, ...otherProps}) {
    return <Column {...otherProps}>{children}</Column>
}

Footer.Link = function FooterLink({children, ...otherProps}) {
    return <Link {...otherProps}>{children}</Link>
}

Footer.Title = function FooterTitle({children, ...otherProps}) {
    return <Title {...otherProps}>{children}</Title>
}

Footer.Text = function FooterText({children, ...otherProps}) {
    return <Text {...otherProps}>{children}</Text>
}
 export default Footer;