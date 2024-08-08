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

// const ConfirmEmail = () => {
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
//           Confirm email
//         </Text>
//         <View className='confirmation-prompt mt-[40px]'>
//           <View className='flex gap-y-10 mb-[40px]'>
//             <Text
//               className='label'
//               style={{ color: text_variant_1, fontFamily: 'font_400' }}
//             >
//               Please confirm that the provided email address below is correct.
//             </Text>
//             <Text
//               className='provided-email underline'
//               style={{ color: text_variant_1, fontFamily: 'font_400' }}
//             >
//               okpainmoandrew@gmail.com
//             </Text>
//           </View>
//           <Pressable onPress={() => router.back()}>
//             <Text
//               className='provided-email'
//               style={{ color: text_variant_3, fontFamily: 'font_600' }}
//             >
//               No, I want to edit
//             </Text>
//           </Pressable>
//         </View>
//         <View className='button-wrapper mt-[30px]'>
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
//             onPress={() => router.push('/verify-email_sign-up')}
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
//             Already have an account yet?
//           </Text>
//           <Link
//             href='/log-in'
//             style={{
//               color: `${text_variant_3}`,
//               fontFamily: 'font_500',
//             }}
//           >
//             log-in
//           </Link>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// export default ConfirmEmail;

// const styles = StyleSheet.create({});
