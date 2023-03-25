import React, {useLayoutEffect} from 'react';
import {View, Text, BackHandler, Image, Button} from 'react-native';

export default User = ({navigation, route}) => {
  useLayoutEffect(() => {
    const backListener = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackButtonClick,
    );
    return () => backListener.remove();
  }, []);
  const handleBackButtonClick = () => {
    navigation.goBack();
    return true;
  };

  return (
    <View style={{flex: 1, marginHorizontal: 15,marginTop:60}}>
      <View
        style={{
          borderColor: '#00aaff',

          height: 130,
          width: 130,
          borderRadius: 130 / 2,
          borderWidth: 5,
          alignSelf: 'center',
          marginVertical: 20,
        }}>
        <Image
          style={{
            height: 120,
            width: 120,
            alignSelf: 'center',

            borderRadius: 120 / 2,
          }}
          source={require('../images/profile.jpg')}
          resizeMode={'stretch'}
        />
      </View>
      <View
        style={{
          borderWidth: 2,
          borderColor: 'black',
          borderRadius: 10,
          marginTop: 30,
        }}>
        <View
          style={{
            position: 'absolute',
            left: 20,
            top: -12,
            height: 24,
            paddingLeft: 15,
            paddingRight: 17,
            backgroundColor: 'grey',
            borderRadius: 6,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 18, color: 'black', fontWeight: '500'}}>
            {'Details'}
          </Text>
        </View>
        <View
          style={{paddingHorizontal: 15, paddingTop: 30, paddingBottom: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 16, color: 'black', fontWeight: '500'}}>
              {'Name'}
            </Text>
            <Text style={{fontSize: 16, color: 'black', fontWeight: '500'}}>
              {'Ankita'}
            </Text>
          </View>
          <View
            style={{height: 1, backgroundColor: 'grey', marginVertical: 15}}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 16, color: 'black', fontWeight: '500'}}>
              {'Phone Number'}
            </Text>
            <Text style={{fontSize: 16, color: 'black', fontWeight: '500'}}>
              {'788137146'}
            </Text>
          </View>
          <View
            style={{height: 1, backgroundColor: 'grey', marginVertical: 15}}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 16, color: 'black', fontWeight: '500'}}>
              {'Date of Birth'}
            </Text>
            <Text style={{fontSize: 16, color: 'black', fontWeight: '500'}}>
              {'17/05/1999'}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
