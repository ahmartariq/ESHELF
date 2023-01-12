import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Cart from '../screens/Cart';
import ProductList from '../screens/ProductList';
import Profile from '../screens/Profile';
import Menu from '../screens/Menu';
import {SvgXml} from 'react-native-svg';
import Theme from '../Theme';
import ProfileNavigation from './ProfileNavigation';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const colors = Theme.colors;

const Tabs = () => {
  const [color, setColor] = useState(colors.text);

  const menuIcon = ({focused, color, size}) => (
    <SvgXml
      xml={
        focused
          ? `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 4C13 3.20446 12.6839 2.44131 12.1212 1.8788C11.5587 1.3163 10.7955 1 10 1H4C3.20446 1 2.44131 1.31607 1.8788 1.8788C1.3163 2.4413 1 3.20446 1 4V10C1 10.7955 1.31607 11.5587 1.8788 12.1212C2.4413 12.6837 3.20446 13 4 13H12C12.5522 13 13 12.5522 13 12V4ZM11 4V11H4C3.73482 11 3.48035 10.8946 3.29286 10.7071C3.10536 10.5196 3 10.2652 3 10V4C3 3.73482 3.10536 3.48035 3.29286 3.29286C3.48035 3.10536 3.73482 3 4 3H10C10.2652 3 10.5196 3.10536 10.7071 3.29286C10.8946 3.48035 11 3.73482 11 4Z" 
fill="white" stroke="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 16C13 15.4478 12.5522 15 12 15H4C3.20446 15 2.44131 15.3161 1.8788 15.8788C1.3163 16.4413 1 17.2045 1 18V24C1 24.7955 1.31607 25.5587 1.8788 26.1212C2.4413 26.6837 3.20446 27 4 27H10C10.7955 27 11.5587 26.6839 12.1212 26.1212C12.6837 25.5587 13 24.7955 13 24V16ZM11 17V24C11 24.2652 10.8946 24.5196 10.7071 24.7071C10.5196 24.8946 10.2652 25 10 25H4C3.73482 25 3.48035 24.8946 3.29286 24.7071C3.10536 24.5196 3 24.2652 3 24V18C3 17.7348 3.10536 17.4804 3.29286 17.2929C3.48035 17.1054 3.73482 17 4 17H11Z"
fill="white" stroke="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.0068 4C27.0068 3.20446 26.6908 2.44131 26.128 1.8788C25.5655 1.3163 24.8024 1 24.0068 1H18.0068C17.2113 1 16.4482 1.31607 15.8856 1.8788C15.3231 2.4413 15.0068 3.20446 15.0068 4V12C15.0068 12.5522 15.4546 13 16.0068 13H24.0068C24.8024 13 25.5655 12.6839 26.128 12.1212C26.6905 11.5587 27.0068 10.7955 27.0068 10V4ZM25.0068 4V10C25.0068 10.2652 24.9015 10.5196 24.714 10.7071C24.5265 10.8946 24.272 11 24.0068 11H17.0068V4C17.0068 3.73482 17.1122 3.48035 17.2997 3.29286C17.4872 3.10536 17.7417 3 18.0068 3H24.0068C24.272 3 24.5265 3.10536 24.714 3.29286C24.9015 3.48035 25.0068 3.73482 25.0068 4Z" 
fill="white" stroke="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.0068 15C17.6955 15 15.0068 17.6886 15.0068 21C15.0068 24.3114 17.6955 27 21.0068 27C24.3182 27 27.0068 24.3114 27.0068 21C27.0068 17.6886 24.3182 15 21.0068 15ZM21.0068 17C23.2144 17 25.0068 18.7924 25.0068 21C25.0068 23.2076 23.2144 25 21.0068 25C18.7992 25 17.0068 23.2076 17.0068 21C17.0068 18.7924 18.7992 17 21.0068 17Z"
fill="white" stroke="white"/>
</svg>`
          : `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 4C13 3.20446 12.6839 2.44131 12.1212 1.8788C11.5587 1.3163 10.7955 1 10 1H4C3.20446 1 2.44131 1.31607 1.8788 1.8788C1.3163 2.4413 1 3.20446 1 4V10C1 10.7955 1.31607 11.5587 1.8788 12.1212C2.4413 12.6837 3.20446 13 4 13H12C12.5522 13 13 12.5522 13 12V4ZM11 4V11H4C3.73482 11 3.48035 10.8946 3.29286 10.7071C3.10536 10.5196 3 10.2652 3 10V4C3 3.73482 3.10536 3.48035 3.29286 3.29286C3.48035 3.10536 3.73482 3 4 3H10C10.2652 3 10.5196 3.10536 10.7071 3.29286C10.8946 3.48035 11 3.73482 11 4Z" 
fill="${colors.text}" stroke="${colors.text}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 16C13 15.4478 12.5522 15 12 15H4C3.20446 15 2.44131 15.3161 1.8788 15.8788C1.3163 16.4413 1 17.2045 1 18V24C1 24.7955 1.31607 25.5587 1.8788 26.1212C2.4413 26.6837 3.20446 27 4 27H10C10.7955 27 11.5587 26.6839 12.1212 26.1212C12.6837 25.5587 13 24.7955 13 24V16ZM11 17V24C11 24.2652 10.8946 24.5196 10.7071 24.7071C10.5196 24.8946 10.2652 25 10 25H4C3.73482 25 3.48035 24.8946 3.29286 24.7071C3.10536 24.5196 3 24.2652 3 24V18C3 17.7348 3.10536 17.4804 3.29286 17.2929C3.48035 17.1054 3.73482 17 4 17H11Z"
fill="${colors.text}" stroke="${colors.text}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.0068 4C27.0068 3.20446 26.6908 2.44131 26.128 1.8788C25.5655 1.3163 24.8024 1 24.0068 1H18.0068C17.2113 1 16.4482 1.31607 15.8856 1.8788C15.3231 2.4413 15.0068 3.20446 15.0068 4V12C15.0068 12.5522 15.4546 13 16.0068 13H24.0068C24.8024 13 25.5655 12.6839 26.128 12.1212C26.6905 11.5587 27.0068 10.7955 27.0068 10V4ZM25.0068 4V10C25.0068 10.2652 24.9015 10.5196 24.714 10.7071C24.5265 10.8946 24.272 11 24.0068 11H17.0068V4C17.0068 3.73482 17.1122 3.48035 17.2997 3.29286C17.4872 3.10536 17.7417 3 18.0068 3H24.0068C24.272 3 24.5265 3.10536 24.714 3.29286C24.9015 3.48035 25.0068 3.73482 25.0068 4Z" 
fill="${colors.text}" stroke="${colors.text}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.0068 15C17.6955 15 15.0068 17.6886 15.0068 21C15.0068 24.3114 17.6955 27 21.0068 27C24.3182 27 27.0068 24.3114 27.0068 21C27.0068 17.6886 24.3182 15 21.0068 15ZM21.0068 17C23.2144 17 25.0068 18.7924 25.0068 21C25.0068 23.2076 23.2144 25 21.0068 25C18.7992 25 17.0068 23.2076 17.0068 21C17.0068 18.7924 18.7992 17 21.0068 17Z"
fill="${colors.text}" stroke="${colors.text}"/>
</svg>`
      }
      width="45%"
      height="45%"
    />
  );

  const searchIcon = ({focused, color, size}) => (
    <SvgXml
      xml={
        focused
          ? `<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5556 25.1111C19.9375 25.1111 25.1111 19.9375 25.1111 13.5556C25.1111 7.1736 19.9375 2 13.5556 2C7.1736 2 2 7.1736 2 13.5556C2 19.9375 7.1736 25.1111 13.5556 25.1111Z" 
stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29 29L22 22" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
          : `<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5556 25.1111C19.9375 25.1111 25.1111 19.9375 25.1111 13.5556C25.1111 7.1736 19.9375 2 13.5556 2C7.1736 2 2 7.1736 2 13.5556C2 19.9375 7.1736 25.1111 13.5556 25.1111Z" 
stroke=${colors.text} stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29 29L22 22" stroke=${colors.text} stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
      }
    />
  );

  const homeIcon = ({focused, color, size}) => (
    <SvgXml
      xml={
        focused
          ? `<svg width="34" height="31" viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.9425 0.289114C17.3716 -0.0963715 16.6276 -0.0963715 16.0567 0.289114L0.756978 10.6225C-0.0239648 11.1501 -0.235101 12.2195 0.285688 13.0109C0.806491 13.802 1.86178 14.0159 2.64294 13.4886V13.4886C2.96527 13.2709 3.39999 13.5018 3.39999 13.8908V25.8333C3.39999 28.6868 5.68329 31 8.4999 31H25.5001C28.3164 31 30.6 28.6868 30.6 25.8333V13.8908C30.6 13.5018 31.0347 13.2709 31.3571 13.4886V13.4886C32.138 14.016 33.1935 13.802 33.7143 13.0109C34.2351 12.2194 34.024 11.1501 33.2427 10.6225L17.9425 0.289114ZM27.1995 16.1001C27.1995 12.7115 25.5167 9.54417 22.7086 7.64757V7.64757C19.2592 5.31779 14.7402 5.31779 11.2908 7.64757V7.64757C8.48271 9.54417 6.79987 12.7115 6.79987 16.1001V25.8332C6.79987 26.7844 7.56085 27.5553 8.49974 27.5553V27.5553C10.3775 27.5553 11.8998 26.0331 11.8998 24.1553V22.3886C11.8998 19.5351 14.1831 17.2219 16.9997 17.2219C19.8163 17.2219 22.0996 19.5351 22.0996 22.3886V24.1553C22.0996 26.0331 23.6219 27.5553 25.4997 27.5553V27.5553C26.4385 27.5553 27.1995 26.7844 27.1995 25.8332V16.1001ZM18.6994 22.3885V25.8553C18.6994 26.7941 17.9384 27.5552 16.9996 27.5552V27.5552C16.0607 27.5552 15.2997 26.7941 15.2997 25.8553V22.3885C15.2997 21.4373 16.0607 20.6663 16.9996 20.6663C17.9384 20.6663 18.6994 21.4373 18.6994 22.3885Z"
 fill="white"/>
</svg>`
          : `<svg width="34" height="31" viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.9425 0.289114C17.3716 -0.0963715 16.6276 -0.0963715 16.0567 0.289114L0.756978 10.6225C-0.0239648 11.1501 -0.235101 12.2195 0.285688 13.0109C0.806491 13.802 1.86178 14.0159 2.64294 13.4886V13.4886C2.96527 13.2709 3.39999 13.5018 3.39999 13.8908V25.8333C3.39999 28.6868 5.68329 31 8.4999 31H25.5001C28.3164 31 30.6 28.6868 30.6 25.8333V13.8908C30.6 13.5018 31.0347 13.2709 31.3571 13.4886V13.4886C32.138 14.016 33.1935 13.802 33.7143 13.0109C34.2351 12.2194 34.024 11.1501 33.2427 10.6225L17.9425 0.289114ZM27.1995 16.1001C27.1995 12.7115 25.5167 9.54417 22.7086 7.64757V7.64757C19.2592 5.31779 14.7402 5.31779 11.2908 7.64757V7.64757C8.48271 9.54417 6.79987 12.7115 6.79987 16.1001V25.8332C6.79987 26.7844 7.56085 27.5553 8.49974 27.5553V27.5553C10.3775 27.5553 11.8998 26.0331 11.8998 24.1553V22.3886C11.8998 19.5351 14.1831 17.2219 16.9997 17.2219C19.8163 17.2219 22.0996 19.5351 22.0996 22.3886V24.1553C22.0996 26.0331 23.6219 27.5553 25.4997 27.5553V27.5553C26.4385 27.5553 27.1995 26.7844 27.1995 25.8332V16.1001ZM18.6994 22.3885V25.8553C18.6994 26.7941 17.9384 27.5552 16.9996 27.5552V27.5552C16.0607 27.5552 15.2997 26.7941 15.2997 25.8553V22.3885C15.2997 21.4373 16.0607 20.6663 16.9996 20.6663C17.9384 20.6663 18.6994 21.4373 18.6994 22.3885Z"
fill= ${colors.text}/>
</svg>`
      }
    />
  );

  const profileIcon = ({focused, color, size}) => (
    <SvgXml
      xml={
        focused
          ? `<svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.1179 27.9999V25.111C25.1179 23.5787 24.5092 22.1091 23.4257 21.0255C22.3421 19.942 20.8725 19.3333 19.3402 19.3333H7.78461C6.25225 19.3333 4.78265 19.942 3.69911 21.0255C2.61556 22.1091 2.00684 23.5787 2.00684 25.111V27.9999" 
stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.5624 13.5556C16.7534 13.5556 19.3402 10.9688 19.3402 7.77778C19.3402 4.5868 16.7534 2 13.5624 2C10.3715 2 7.78467 4.5868 7.78467 7.77778C7.78467 10.9688 10.3715 13.5556 13.5624 13.5556Z" 
stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
          : `<svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.1179 27.9999V25.111C25.1179 23.5787 24.5092 22.1091 23.4257 21.0255C22.3421 19.942 20.8725 19.3333 19.3402 19.3333H7.78461C6.25225 19.3333 4.78265 19.942 3.69911 21.0255C2.61556 22.1091 2.00684 23.5787 2.00684 25.111V27.9999" 
stroke= ${colors.text} stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.5624 13.5556C16.7534 13.5556 19.3402 10.9688 19.3402 7.77778C19.3402 4.5868 16.7534 2 13.5624 2C10.3715 2 7.78467 4.5868 7.78467 7.77778C7.78467 10.9688 10.3715 13.5556 13.5624 13.5556Z" 
stroke= ${colors.text} stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
      }
    />
  );

  const cartIcon = ({focused, color, size}) => (
    <SvgXml
      xml={
        focused
          ? `<svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.01792 2L2.11792 7.2V25.4C2.11792 26.0896 2.39185 26.7509 2.87944 27.2385C3.36704 27.7261 4.02836 28 4.71792 28H22.9179C23.6075 28 24.2688 27.7261 24.7564 27.2385C25.244 26.7509 25.5179 26.0896 25.5179 25.4V7.2L21.6179 2H6.01792Z" 
stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.11792 7.19995H25.5179"
 stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.0179 12.3999C19.0179 13.779 18.4701 15.1017 17.4949 16.0769C16.5197 17.052 15.197 17.5999 13.8179 17.5999C12.4388 17.5999 11.1162 17.052 10.141 16.0769C9.16578 15.1017 8.61792 13.779 8.61792 12.3999" 
stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/> </svg>`
          : `<svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.01792 2L2.11792 7.2V25.4C2.11792 26.0896 2.39185 26.7509 2.87944 27.2385C3.36704 27.7261 4.02836 28 4.71792 28H22.9179C23.6075 28 24.2688 27.7261 24.7564 27.2385C25.244 26.7509 25.5179 26.0896 25.5179 25.4V7.2L21.6179 2H6.01792Z" 
stroke= ${colors.text} stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.11792 7.19995H25.5179"
 stroke= ${colors.text} stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.0179 12.3999C19.0179 13.779 18.4701 15.1017 17.4949 16.0769C16.5197 17.052 15.197 17.5999 13.8179 17.5999C12.4388 17.5999 11.1162 17.052 10.141 16.0769C9.16578 15.1017 8.61792 13.779 8.61792 12.3999" 
stroke= ${colors.text} stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
      }
    />
  );

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: colors.primary,
            position: 'absolute',
            marginBottom: 30,
            marginHorizontal: 22,
            borderRadius: 30,
            height: 63,
          },
          tabBarShowLabel: false,
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: homeIcon,
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: searchIcon,
            tabBarHideOnKeyboard: true
          }}
        />
        <Tab.Screen
          name="Menu"
          component={ProductList}
          options={{
            tabBarIcon: menuIcon,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileNavigation}
          options={{
            tabBarIcon: profileIcon,
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarIcon: cartIcon,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;
