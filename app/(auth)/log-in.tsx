import {
  SafeAreaView,
  StatusBar,
  View,
  ScrollView,
  Text,
  StyleSheet,
  Platform,
  Image,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, { useState } from 'react';
import { default_light_backgrounds } from '@/constants/colors';
import { default_light_texts } from '@/constants/colors';
import { Link, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
const mockAvatar1 = require('../../assets/images/img-1.jpg');
const mockAvatar2 = require('../../assets/images/img-2.png');
const mockAvatar3 = require('../../assets/images/img-3.png');
const mockAvatar4 = require('../../assets/images/img-4.png');

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [backgrounds, setBackgrounds] = useState(default_light_backgrounds);
  const [texts, setTexts] = useState(default_light_texts);
  const {
    background_variant_1,
    background_variant_2,
    background_variant_3,
    background_variant_4,
  } = backgrounds;
  const { text_variant_1, text_variant_2, text_variant_3, text_variant_4 } =
    texts;

  return (
    <KeyboardAvoidingView
      behavior='padding'
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
      style={{
        flex: 1,
        backgroundColor: background_variant_1,
      }}
    >
      <ScrollView
        className='px-3 mt-[30px]'
        style={{
          backgroundColor: background_variant_1,
          paddingTop: Platform.OS === 'android' ? 65 : 0,
        }}
      >
        <View className='bold page text'>
          <Text
            className='text-[30px] translate-y-[-10px]'
            style={{ color: text_variant_1, fontFamily: 'font_800' }}
          >
            Log in
          </Text>
        </View>
        <View className='sign-up-form-wrapper mt-[40px]'>
          <View className='input-group email flex gap-y-2 mb-[40px]'>
            <Text
              className='label'
              style={{ color: text_variant_1, fontFamily: 'font_400' }}
            >
              Email
            </Text>
            <TextInput
              placeholder='Enter your email'
              style={{
                width: '100%',
                paddingHorizontal: 15,
                paddingVertical: 15,
                backgroundColor: `${background_variant_3}`,
                borderRadius: 10,
                color: `${text_variant_1}`,
                fontSize: 14,
                fontFamily: 'font_400',
              }}
              placeholderTextColor={text_variant_1} // Set the placeholder color here
              // value={loginForm.email}
              onChangeText={(text) => {
                // console.log('email input in progress...');
                // setLoginForm({
                //   ...loginForm,
                //   email: text,
                // });
              }}
            />
          </View>
          <View className='input-group password flex gap-y-2 mb-[20px] relative'>
            <Text
              className='label'
              style={{ color: text_variant_1, fontFamily: 'font_400' }}
            >
              Password
            </Text>
            <TextInput
              placeholder='Enter password'
              style={{
                width: '100%',
                paddingHorizontal: 15,
                paddingVertical: 15,
                backgroundColor: `${background_variant_3}`,
                borderRadius: 10,
                color: `${text_variant_1}`,
                fontSize: 14,
                fontFamily: 'font_400',
              }}
              placeholderTextColor={text_variant_1} // Set the placeholder color here
              secureTextEntry={!showPassword}
              // value={loginForm.email}
              onChangeText={(text) => {
                // console.log('email input in progress...');
                // setLoginForm({
                //   ...loginForm,
                //   email: text,
                // });
              }}
            />
            <View
              className='password-visibility-controller-wrapper absolute top-[50px] 
            right-[15px]'
            >
              <Pressable
                onPress={() => setShowPassword(true)}
                className={`flex ${showPassword ? 'hidden' : 'flex'}`}
              >
                <Ionicons name='eye-outline' size={22} color={text_variant_1} />
              </Pressable>
              <Pressable
                onPress={() => setShowPassword(false)}
                className={`flex ${showPassword ? 'flex' : 'hidden'}`}
              >
                <Ionicons
                  name='eye-off-outline'
                  size={22}
                  color={text_variant_1}
                />
              </Pressable>
            </View>
          </View>
          <Link
            className='mt-[10px] text-right w-full'
            // href='/start-password-recovery'
            href='/index'
            style={{
              color: text_variant_3,
              fontFamily: 'font_500',
            }}
          >
            Forgot password?
          </Link>
        </View>
        <View className='button-wrapper mt-[40px]'>
          <TouchableOpacity
            style={{
              backgroundColor: background_variant_2,
              paddingVertical: 15,
              display: 'flex',
              alignItems: 'center',
              borderRadius: 10,
              width: '100%',
              cursor: 'pointer',
            }}
            onPress={() => router.push('/confirm-email_log-in')}
          >
            <Text
              style={{
                fontFamily: 'font_700',
                textAlign: 'center',
                fontSize: 14,
              }}
            >
              Continue
            </Text>
          </TouchableOpacity>
        </View>
        <View
          className='sign-up-instead-wrapper flex flex-wrap gap-x-2 flex-row 
        items-center justify-center mt-[20px]'
        >
          <Text
            style={{
              color: `${text_variant_1}`,
              textAlign: 'center',
              fontFamily: 'font_500',
            }}
          >
            Don't have an account yet?
          </Text>
          <Link
            href='/start-sign-up'
            style={{
              color: `${text_variant_3}`,
              fontFamily: 'font_500',
            }}
          >
            Sign-Up
          </Link>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LogIn;

const styles = StyleSheet.create({});
