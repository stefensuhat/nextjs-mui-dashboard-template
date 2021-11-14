import { Button } from '@mui/material';
import Content from 'app/components/Content';
import Header from 'app/components/Header';
import React from 'react';

const propTypes = {};
const defaultProps = {};

function Products() {
  return (
    <>
      <Header />

      <Content>
        <Button>Products</Button>
      </Content>
    </>
  );
}

Products.propTypes = propTypes;
Products.defaultProps = defaultProps;

export default Products;
