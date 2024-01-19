import * as React from 'react';
import { styled } from '@mui/system';

const Footer = styled('footer')({
  position: 'relative',
  bottom: 0,
  width: '100%',
  color: '#fff',
  textAlign: 'left',
  padding: '20px',
  marginBottom: '150px'
});

const MyFooter = () => {
  return (
    <Footer>Created by JoseMalpe ©</Footer>
  );
};

export default MyFooter;
