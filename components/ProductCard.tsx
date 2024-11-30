import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type productProps = {
  product_name: string;
  product_description: string;
};

const ProductCard = (product: productProps) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white',
        gap: 10,
        width: '100%',
      }}>
      <Image
        source={require('../assets/show.jpg')}
        style={{width: 70, height: 70, borderRadius: 10}}
      />
      <View style={{flex: 1}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          {product.product_name.slice(0, 25)}...
        </Text>
        <Text style={{color: 'gray'}}>
          {product.product_description.slice(0, 80)}...
        </Text>
      </View>
    </View>
  );
};

export default ProductCard;
