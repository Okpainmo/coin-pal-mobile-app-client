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
//   Modal,
// } from 'react-native';
// import React, { useState } from 'react';
// import { BlurView } from 'expo-blur';
// import {
//   background_variant_1,
//   background_variant_2,
//   background_variant_1_light,
//   background_variant_3,
//   background_variant_4,
//   background_variant_6,
//   background_variant_7,
//   text_variant_1,
//   text_variant_2,
//   text_variant_3,
// } from '@/constants/colors';
// import { Link, router } from 'expo-router';
// import { Ionicons } from '@expo/vector-icons';
// import AuthSectionReturnButton from '@/components/auth/AuthSectionReturnButton';
// const mockAvatar1 = require('../../assets/images/img-8.jpg');
// const mockAvatar2 = require('../../assets/images/img-10.png');
// const mockAvatar3 = require('../../assets/images/img-11.png');
// const mockAvatar4 = require('../../assets/images/img-12.png');
// const signUpSuccessImage = require('../../assets/images/img-14.svg');

// const VerifyPhoneNumber = () => {
//   const [isCountDownComplete, setIsCountDownComplete] = useState(false);
//   const [isVerificationSuccessfull, setIsVerificationSuccessfull] =
//     useState(false);
//   const [showModal, setShowModal] = useState(false);

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
//         <AuthSectionReturnButton />
//         <Text
//           className='bold-page-text text-[30px]'
//           style={{ color: text_variant_1, fontFamily: 'font_800' }}
//         >
//           Verify phone number
//         </Text>
//         <View className='confirmation-prompt mt-[40px]'>
//           <View className='flex gap-y-10 mb-[30px]'>
//             <Text
//               className='label'
//               style={{ color: text_variant_1, fontFamily: 'font_400' }}
//             >
//               Enter the code that was sent to:{' '}
//               <Text style={{ color: text_variant_3 }}>+2349053739194</Text>
//             </Text>
//           </View>
//           <View className='input-wrapper one-time-password-input-field flex gap-y-2 mb-[40px]'>
//             <TextInput
//               placeholder='Enter the code you received'
//               style={{
//                 width: '100%',
//                 paddingHorizontal: 15,
//                 paddingVertical: 15,
//                 backgroundColor: `${background_variant_3}`,
//                 borderRadius: 10,
//                 color: `${text_variant_1}`,
//                 fontSize: 14,
//                 fontFamily: 'font_400',
//                 textAlign: 'center',
//               }}
//               placeholderTextColor={text_variant_1} // Set the placeholder color here
//               // value={loginForm.email}
//               onChangeText={(text) => {
//                 // console.log('email input in progress...');
//                 // setLoginForm({
//                 //   ...loginForm,
//                 //   email: text,
//                 // });
//               }}
//             />
//           </View>
//           <View className='resend-count-down flex items-center'>
//             <Text
//               className={`${isCountDownComplete ? 'flex' : 'hidden'}`}
//               style={{ color: text_variant_3, fontFamily: 'font_500' }}
//             >
//               Resend code
//             </Text>
//             <View
//               className={`${
//                 isCountDownComplete
//                   ? 'hidden'
//                   : 'flex flex-row justify-center items-center gap-x-2'
//               }`}
//             >
//               <Text style={{ color: text_variant_3, fontFamily: 'font_500' }}>
//                 Resend code in:
//               </Text>
//               <Text style={{ color: text_variant_3, fontFamily: 'font_500' }}>
//                 00 : 60
//               </Text>
//             </View>
//           </View>
//         </View>
//         <View className='button-wrapper mt-[30px]'>
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
//             onPress={() => router.push('/create-password')}
//           >
//             <Text
//               style={{
//                 fontFamily: 'font_700',
//                 textAlign: 'center',
//                 fontSize: 14,
//               }}
//             >
//               Verify and continue
//             </Text>
//           </TouchableOpacity>
//         </View>
//         {/* <View
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
//             Don't have an account yet?
//           </Text>
//           <Link
//             href='/start-sign-up'
//             style={{
//               color: `${text_variant_3}`,
//               fontFamily: 'font_500',
//             }}
//           >
//             Sign-Up
//           </Link>
//         </View> */}
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// export default VerifyPhoneNumber;

// const styles = StyleSheet.create({});
