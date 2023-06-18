import React from 'react';
import styled from 'styled-components';
import productItem from '../../assets/images/logoImage.png';

const ProductListItem = styled.button`
  width: 100%;
  text-align: left;

  padding: 0;
  margin: 0;
  img {
    width: 100%;
    aspect-ratio: 140 / 90;
    object-fit: cover;
    border-radius: 8px;
  }
  h3 {
    padding: 4px 0;
    margin: 0;
    font-weight: 400;
    font-size: 14px;
  }
  p {
    padding: 0;
    margin: 0;
    color: #f26e22;
    font-weight: 800;
    font-size: 12px;
  }
`;

function ProductItem() {
  return (
    <ProductListItem>
      <img src={productItem} alt="" />
      <div>
        <h3>애월읍 노지 감귤</h3>
        <p>35,000원</p>
      </div>
    </ProductListItem>
  );
}

export default ProductItem;
