// import {
//   SafeAreaView,
//   StatusBar,
//   View,
//   ScrollView,
//   Text,
//   StyleSheet,
//   Platform,
//   Image,
//   Pressable,
//   TextInput,
//   KeyboardAvoidingView,
//   TouchableOpacity,
// } from 'react-native';
// import React, { useState } from 'react';
// import {
//   background_variant_1,
//   background_variant_2,
//   background_variant_1_light,
//   background_variant_3,
//   background_variant_4,
//   text_variant_1,
//   text_variant_2,
//   text_variant_3,
// } from '@/constants/colors';
// import { Link, router } from 'expo-router';
// import { Ionicons } from '@expo/vector-icons';
// const mockAvatar1 = require('../../assets/images/img-8.jpg');
// const mockAvatar2 = require('../../assets/images/img-10.png');
// const mockAvatar3 = require('../../assets/images/img-11.png');
// const mockAvatar4 = require('../../assets/images/img-12.png');

// const StartSignUp = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <KeyboardAvoidingView
//       behavior='padding'
//       keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
//       style={{
//         flex: 1,
//         backgroundColor: background_variant_1,
//       }}
//     >
//       <ScrollView
//         className='px-3 mt-[30px]'
//         style={{
//           backgroundColor: background_variant_1,
//           paddingTop: Platform.OS === 'android' ? 65 : 0,
//         }}
//       >
//         <View className='bold page text'>
//           <Text
//             className='text-[30px]'
//             style={{ color: text_variant_1, fontFamily: 'font_800' }}
//           >
//             Get started on
//           </Text>
//           <Text
//             className='text-[30px] translate-y-[-10px]'
//             style={{ color: text_variant_3, fontFamily: 'font_800' }}
//           >
//             u-go!
//           </Text>
//         </View>
//         <View className='sign-up-form-wrapper mt-[40px]'>
//           <View className='input-group password flex gap-y-2 mb-[40px] relative'>
//             <Text
//               className='label'
//               style={{ color: text_variant_1, fontFamily: 'font_400' }}
//             >
//               Name
//             </Text>
//             <TextInput
//               placeholder='Tell us your name'
//               style={{
//                 width: '100%',
//                 paddingHorizontal: 15,
//                 paddingVertical: 15,
//                 backgroundColor: `${background_variant_3}`,
//                 borderRadius: 10,
//                 color: `${text_variant_1}`,
//                 fontSize: 14,
//                 fontFamily: 'font_400',
//               }}
//               placeholderTextColor={text_variant_1} // Set the placeholder color here
//               // value={StartSignUpForm.email}
//               onChangeText={(text) => {
//                 // console.log('email input in progress...');
//                 // setStartSignUpForm({
//                 //   ...StartSignUpForm,
//                 //   email: text,
//                 // });
//               }}
//             />
//           </View>
//           <View className='input-group email flex gap-y-2 mb-[20px]'>
//             <Text
//               className='label'
//               style={{ color: text_variant_1, fontFamily: 'font_400' }}
//             >
//               Email
//             </Text>
//             <TextInput
//               placeholder='Enter your email'
//               style={{
//                 width: '100%',
//                 paddingHorizontal: 15,
//                 paddingVertical: 15,
//                 backgroundColor: `${background_variant_3}`,
//                 borderRadius: 10,
//                 color: `${text_variant_1}`,
//                 fontSize: 14,
//                 fontFamily: 'font_400',
//               }}
//               placeholderTextColor={text_variant_1} // Set the placeholder color here
//               // value={StartSignUpForm.email}
//               onChangeText={(text) => {
//                 // console.log('email input in progress...');
//                 // setStartSignUpForm({
//                 //   ...StartSignUpForm,
//                 //   email: text,
//                 // });
//               }}
//             />
//           </View>
//         </View>
//         <View className='button-wrapper mt-[40px]'>
//           <TouchableOpacity
//             style={{
//               backgroundColor: background_variant_2,
//               paddingVertical: 15,
//               display: 'flex',
//               alignItems: 'center',
//               borderRadius: 10,
//               width: '100%',
//               cursor: 'pointer',
//             }}
//             onPress={() => router.push('/confirm-email_sign-up')}
//           >
//             <Text
//               style={{
//                 fontFamily: 'font_700',
//                 textAlign: 'center',
//                 fontSize: 14,
//               }}
//             >
//               Continue
//             </Text>
//           </TouchableOpacity>
//         </View>
//         <View
//           className='sign-up-instead-wrapper flex flex-wrap gap-x-2 flex-row
//         items-center justify-center mt-[20px]'
//         >
//           <Text
//             style={{
//               color: `${text_variant_1}`,
//               textAlign: 'center',
//               fontFamily: 'font_500',
//             }}
//           >
//             Already have an account yet?
//           </Text>
//           <Link
//             href='/log-in'
//             style={{
//               color: `${text_variant_3}`,
//               fontFamily: 'font_500',
//             }}
//           >
//             Log-in
//           </Link>
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// export default StartSignUp;

// const styles = StyleSheet.create({});
