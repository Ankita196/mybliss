import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import Slideshow from 'react-native-image-slider-show';

export default Home = () => {
  const [position, setPosition] = useState(0);
  const [slidearray, setslidearray] = useState([]);

  useEffect(() => {
    const toggle = setInterval(() => {
      setPosition(position === slidearray.length - 1 ? 0 : position + 1);
    }, 3000);

    return () => clearInterval(toggle);
  });
  useEffect(() => {
    getBookData();
  }, []);

  const [books, setBooks] = useState([]);
  const getBookData = async () => {
    try {
      const res = await fetch(
        'https://www.googleapis.com/books/v1/volumes?q=search+terms',
      );
      const actualData = await res.json();
      setBooks(actualData.items);
      let dataSource = [];
      let slidearray = actualData?.items.map(u => {
        dataSource.push({
          url: u.volumeInfo?.imageLinks?.thumbnail,
        });
      });
      setslidearray(dataSource);
    } catch (err) {
      console.log(err);
    }
  };

  const renderview1 = ({item}) => {
    return (
      <View style={{alignItems: 'center',backgroundColor:"black",paddingTop :20}}>
        <Image
          style={{
            height: 150,
            width: 120,
            alignSelf: 'center',
            marginTop: 20,
            marginHorizontal: 10,
          }}
          source={{uri: item.volumeInfo?.imageLinks?.thumbnail}}
          resizeMode={'stretch'}
        />
        <Text
          style={{
            fontSize: 10,
            color: 'white',
            fontWeight: '500',
            marginTop: 10,
            textAlign: 'center',
            fontFamily: 'Avenir-Light',
            width: 120,
            marginBottom:10
          }}>
          {item.volumeInfo?.title}
        </Text>
      </View>
    );
  };

  const renderview2 = ({item}) => {
    return (
      <View style={{alignItems: 'center', backgroundColor:"black",paddingTop :20}}>
        <Image
          style={{
            height: 150,
            width: 150,
            alignSelf: 'center',
            marginHorizontal: 10,
          }}
          source={{uri: item.volumeInfo?.imageLinks?.thumbnail}}
          resizeMode={'stretch'}
        />
        <Text
          style={{
            fontSize: 10,
            color: 'white',
            fontWeight: '500',
            marginTop: 10,
            textAlign: 'center',
            fontFamily: 'Avenir-Light',
            width: 120,
            marginBottom: 20,
          }}>
          {item.volumeInfo?.title}
        </Text>
      </View>
    );
  };

  return (
    <View style={{marginHorizontal: 15, flex: 1}}>
      <Text
        style={{
          fontSize: 24,
          color: 'black',
          fontWeight: '900',
          marginTop: 20,
          marginBottom:20,
          textAlign: 'center',
          fontFamily: 'Avenir-Light',
        }}>
        Books App
      </Text>

      <View>
        <Slideshow position={position} dataSource={slidearray} />
      </View>

      <Text
        style={{
          fontSize: 16,
          color: 'black',
          fontWeight: '500',
          marginTop: 20,
          marginBottom:20,
          fontFamily: 'Avenir-Light',
        }}>
        Top Books
      </Text>
      <View>
        <FlatList
          data={books}
          renderItem={renderview1}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Text
        style={{
          fontSize: 16,
          color: 'black',
          fontWeight: '500',
          marginVertical: 20,
          fontFamily: 'Avenir-Light',
        }}>
        Featured Books
      </Text>

      <FlatList
        data={books}
        renderItem={renderview2}
        showsVerticalScrollIndicator={false}
      />
    </View>

  );
};
