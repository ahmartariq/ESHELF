import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Theme from '../Theme'
import { Field, Password } from '../components/Inputs';
import { Button, BorderedButton } from '../components/Button';
import {SettingLink} from '../components/SettingLink';
import {SvgXml} from 'react-native-svg';
import UsersField from '../components/UsersField';
const colors = Theme.colors
const size = Theme.size
const title1 = Theme.title1
const text = Theme.text

const shapeSVG = `<svg width="430" height="212" viewBox="0 0 430 212" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0H430L440.154 56.4948C456.848 149.376 368.567 226.566 278.745 197.628L218.873 178.339C184.104 167.138 146.069 173.335 116.655 194.995C80.7824 221.41 30.7409 216.401 0.816042 183.4L0 182.5V0Z" fill="${colors.primary}"/>
</svg>
`;

export default function AdminProfile() {
  return (
    <View style={{backgroundColor: colors.background, height: '100%', flex: 1}}>
      <SvgXml xml={shapeSVG} />
      <Text
          style={{
            fontFamily: 'Bilagike',
            fontSize: 87,
            color: 'white',
            position: 'absolute',
            top: 70,
            left: 25,
            zIndex: 1000,
          }}>
          ESHELF
        </Text>
    <View style={{ backgroundColor: colors.background , paddingTop: '10%', paddingHorizontal: 35 , flex: 1}}>
    <Text style = {{alignSelf: 'center', fontSize: size.headline}}>ADMIN PROFILE</Text>
    <Text
        style={{
          fontSize: size.headline,
          color: colors.gray,
          fontWeight: 'bold',
          marginTop: 20,
        }}>
        AHMAR TARIQ
      </Text>
      <Text style={{color:colors.gray, marginBottom:36 }}>AHMARPRESIDENT@HOTMAIL.COM </Text>
        <SettingLink textHeading={'ACCOUNT'} />
      <BorderedButton text={"LOGOUT"} height={50} marginTop={"25%"} />

    </View>
        <UsersField/>
    </View>
  )
}

export const Users = ()=> {
    return (
        <View style={{backgroundColor: colors.background, height: '100%', flex: 1}}>
            <Text
          style={{
            fontFamily: 'Bilagike',
            fontSize: 87,
            color: 'white',
            position: 'absolute',
            top: 70,
            left: 25,
            zIndex: 1000,
          }}>
          ESHELF
        </Text>
        <UsersField Name = 'AHMAR TARIQ' Email = 'AHMARPRESIDENT@HOTMAIL.COM' PhoneNumber = '03125077808' />
        </View>
    )
}

const styles = StyleSheet.create({

})