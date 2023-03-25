import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

export default Search = () => {
  const [books, setBooks] = useState([]);
  const [searchtext, setsearchtext] = useState('');
  const [result, setresult] = useState([]);
  useEffect(() => {
    getBookData();
   
     
  }, []);

  const search = () => {
   let filterresult = books.filter(o => o.volumeInfo.title.includes(searchtext))
   
    setresult(filterresult)
  };

  const renderview = ({item}) => {
    return (
      <View style={{alignItems: 'center'}}>
        <Image
          style={{
            height: 250,
            width: 220,
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
            color: 'black',
            fontWeight: '500',
            marginTop: 10,
            textAlign: 'center',
            fontFamily: 'Avenir-Light',
            width: 120,
          }}>
          {item.volumeInfo?.title}
        </Text>
      </View>
    );
  };
  const getBookData = async () => {
    try {
      const res = await fetch(
        'https://www.googleapis.com/books/v1/volumes?q=search+terms',
      );
      const actualData = await res.json();
      setBooks(actualData.items);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View style={{flex: 1, marginHorizontal: 15}}>
      <Text
        style={{
          fontSize: 16,
          color: 'black',
          fontWeight: '900',
          fontFamily: 'Avenir-Light',
          marginTop: 40,
          marginBottom: 20,
        }}>
        {' '}
        Search Books
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TextInput
          style={{
            borderColor: 'black',
            borderRadius: 10,
            backgroundColor: 'black',
            color: 'white',
            paddingLeft: 20,
            width: 250,
            height: 48,
          }}
          value={searchtext}
          onChangeText={(val) => setsearchtext(val)}
          maxLength={30}
        />
        <TouchableOpacity
          style={{
            width: 100,
            height: 48,
            backgroundColor: '#00aaff',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => search()}>
          <Text
            style={{
              fontSize: 16,
              color: 'white',
              fontWeight: '500',
              fontFamily: 'Avenir-Light',
            }}>
            {' '}
            Search
          </Text>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          fontSize: 16,
          color: 'black',
          fontWeight: '500',
          marginVertical: 20,
          fontFamily: 'Avenir-Light',
        }}>
        {' '}
        Results
      </Text>
      {result.length > 0 ? (
        <FlatList
          data={books}
          renderItem={renderview}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 50}}
        />
      ) : (
        <Text
          style={{
            fontSize: 16,
            color: 'black',
            fontWeight: '500',
            marginVertical: 20,
            fontFamily: 'Avenir-Light',
            textAlign: 'center',
            marginTop: 100,
          }}>
          {' '}
          No record found
        </Text>
      )}
    </View>
  );
};
