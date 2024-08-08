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
// import AuthSectionReturnButton from '@/components/auth/AuthSectionReturnButton';
// const mockAvatar1 = require('../../assets/images/img-8.jpg');
// const mockAvatar2 = require('../../assets/images/img-10.png');
// const mockAvatar3 = require('../../assets/images/img-11.png');
// const mockAvatar4 = require('../../assets/images/img-12.png');

// const StartPasswordReset = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <ScrollView
//       style={{
//         flex: 1,
//         backgroundColor: background_variant_1,
//       }}
//     >
//       <View
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
//           Confirm password reset
//         </Text>
//         <View className='confirmation-prompt mt-[40px]'>
//           <View className='flex gap-y-4 mb-[20px]'>
//             <Text style={{ color: text_variant_1, fontFamily: 'font_400' }}>
//               Let's help you reset your password, but we'll first need to verify
//               that it's you.
//             </Text>
//             <Text style={{ color: text_variant_1, fontFamily: 'font_400' }}>
//               We'll send a one-time-password to your registered u-go email
//               address(shown below).
//             </Text>
//             <Text
//               className='provided-email underline'
//               style={{ color: text_variant_1, fontFamily: 'font_400' }}
//             >
//               okpainmoandrew@gmail.com
//             </Text>
//           </View>
//         </View>
//         <View className='button-wrapper mt-[20px]'>
//           <TouchableOpacity
//             style={{
//               backgroundColor: background_variant_2,
//               paddingVertical: 18,
//               display: 'flex',
//               alignItems: 'center',
//               borderRadius: 10,
//               width: '100%',
//               cursor: 'pointer',
//             }}
//             onPress={() => router.push('/verify-password-reset')}
//           >
//             <Text
//               style={{
//                 fontFamily: 'font_700',
//                 textAlign: 'center',
//                 fontSize: 14,
//               }}
//             >
//               Yes, Please proceed
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
//             Opps!!! I just remembered.
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
//       </View>
//     </ScrollView>
//   );
// };

// export default StartPasswordReset;

// const styles = StyleSheet.create({});
