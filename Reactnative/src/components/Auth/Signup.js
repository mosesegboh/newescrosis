import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import theme, {Box, Text} from '../theme';
import {Input, Form, Item, Button} from 'native-base';
import {register} from '../../store/actions/authActions';
import {useDispatch} from 'react-redux';

const styles = StyleSheet.create({
  itemStyle:{
    marginTop: 20
  },
  btnStyle:{
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.barter,
    borderRadius: 5,
  }
})

function Signup({navigation}) {
  const {navigate} = navigation;
  const dispatch = useDispatch();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [userRef, setUserRef] = useState("")

  const onSubmit = () => {
    if(!email || !phone) return alert('please enter all fields')

    const newUser = {
      name,
      email,
      phone,
      userRef,
    };

    dispatch(register(newUser));



  }

  return (
  <Box flex={1} backgroundColor="white">
    <Box paddingHorizontal="m" paddingVertical="m">
      <Box marginTop="m" >
        <Form>
          <Item style={{...styles.itemStyle}} >
            <Input 
              placeholder="Name & Surname" 
              defaultValue={name}
              onChangeText={(text) => setName(text)}
            />
          </Item>

          <Item style={{...styles.itemStyle}} >
            <Input 
              placeholder="Email Address" 
              keyboardType="email-address"
              defaultValue={email}
              onChangeText={(text) => setEmail(text)}
            />
          </Item>

          <Item style={{...styles.itemStyle}} >
            <Input 
              placeholder="Phone Number" 
              keyboardType="phone-pad"
              defaultValue={phone}
              onChangeText={(text) => setPhone(text)}
            />
          </Item>

          <Item style={{...styles.itemStyle}} >
            <Input 
              placeholder="Refferal Code (Optional)" 
              defaultValue={userRef}
              onChangeText={(text) => setUserRef(text)}
            />
          </Item>

          <Item style={{...styles.itemStyle}} >
            <Button style={{...styles.btnStyle}} onPress={onSubmit}>
              <Text variant="title1" fontSize={18} fontWeight="700">
                Continue
              </Text>
            </Button>
          </Item>

        </Form>
      </Box>
    </Box>
  </Box>
  );
}

export default Signup;
