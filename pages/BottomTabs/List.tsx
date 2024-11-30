import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Products} from '../../constants';
import ProductCard from '../../components/ProductCard';

const List = () => {
  return (
    <FlatList
      data={Products}
      renderItem={({item}) => (
        <ProductCard
          product_description={item.description}
          product_name={item.product_name}
        />
      )}
      keyExtractor={item => item.product_name}
    />
  );
};

export default List;
