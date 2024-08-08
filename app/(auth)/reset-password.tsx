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
// import SignUpSuccessImage from '../../assets/images/img-14.svg';

// interface SuccessModalProps {
//   showModal: boolean;
//   setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
// }
// function SuccessModal({ showModal, setShowModal }: SuccessModalProps) {
//   return (
//     <Modal
//       animationType='slide'
//       transparent={true}
//       visible={showModal}
//       style={{ height: 300 }}
//     >
//       <View
//         className='modal-content h-[100%] overflow-y-auto w-full absolute bottom-0'
//         style={{ backgroundColor: background_variant_7 }}
//       >
//         <BlurView
//           intensity={100}
//           tint='dark'
//           style={{ flex: 1 }}
//           className='px-3 py-6'
//         >
//           <Pressable
//             className='w-[50px] h-[50px] rounded-full flex items-center justify-center mb-[25px]'
//             style={{ backgroundColor: background_variant_6 }}
//             onPress={() => router.push('/')}
//           >
//             <Ionicons name='close-outline' size={30} color={text_variant_3} />
//           </Pressable>
//           <View className='flex-1 w-full items-center mt-[75px]'>
//             <View
//               className='px-2 mt-[10px] flex w-[175px] h-[175px] rounded-full 
//             items-center justify-center'
//               style={{ backgroundColor: background_variant_2 }}
//             >
//               <SignUpSuccessImage width={110} height={110} />
//             </View>
//             <View className='mt-[50px] flex items-center'>
//               <Text
//                 className='text-[20px]'
//                 style={{ color: text_variant_1, fontFamily: 'font_600' }}
//               >
//                 Sign-up completed
//               </Text>
//               <Text
//                 className='text-[20px] text-center'
//                 style={{ color: text_variant_1, fontFamily: 'font_600' }}
//               >
//                 successfully!!!
//               </Text>
//             </View>
//             <View className='button-wrapper mt-[40px] w-full'>
//               <TouchableOpacity
//                 style={{
//                   backgroundColor: background_variant_2,
//                   paddingVertical: 15,
//                   display: 'flex',
//                   alignItems: 'center',
//                   borderRadius: 10,
//                   width: '100%',
//                 }}
//                 onPress={() => router.push('/')}
//               >
//                 <Text
//                   style={{
//                     fontFamily: 'font_600',
//                     textAlign: 'center',
//                     fontSize: 14,
//                   }}
//                 >
//                   Proceed to chat
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </BlurView>
//       </View>
//     </Modal>
//   );
// }

// const ResetPassword = () => {
//   const [showPassword, setShowPassword] = useState(false);
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
//       <SuccessModal showModal={showModal} setShowModal={setShowModal} />
//       <ScrollView
//         className='px-3 mt-[30px]'
//         style={{
//           backgroundColor: background_variant_1,
//           paddingTop: Platform.OS === 'android' ? 65 : 0,
//         }}
//       >
//         <AuthSectionReturnButton />
//         <Text
//           className='text-[30px]'
//           style={{ color: text_variant_1, fontFamily: 'font_800' }}
//         >
//           Reset password
//         </Text>

//         <View className='sign-up-form-wrapper mt-[40px]'>
//           <View className='input-group password flex gap-y-2 mb-[40px] relative'>
//             <Text
//               className='label'
//               style={{ color: text_variant_1, fontFamily: 'font_400' }}
//             >
//               Password
//             </Text>
//             <TextInput
//               placeholder='Enter password'
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
//               secureTextEntry={!showPassword}
//               // value={ResetPasswordForm.email}
//               onChangeText={(text) => {
//                 // console.log('email input in progress...');
//                 // setResetPasswordForm({
//                 //   ...ResetPasswordForm,
//                 //   email: text,
//                 // });
//               }}
//             />
//             <View
//               className='password-visibility-controller-wrapper absolute top-[50px] 
//             right-[15px]'
//             >
//               <Pressable
//                 onPress={() => setShowPassword(true)}
//                 className={`flex ${showPassword ? 'hidden' : 'flex'}`}
//               >
//                 <Ionicons name='eye-outline' size={22} color={text_variant_1} />
//               </Pressable>
//               <Pressable
//                 onPress={() => setShowPassword(false)}
//                 className={`flex ${showPassword ? 'flex' : 'hidden'}`}
//               >
//                 <Ionicons
//                   name='eye-off-outline'
//                   size={22}
//                   color={text_variant_1}
//                 />
//               </Pressable>
//             </View>
//           </View>
//           <View className='input-group password flex gap-y-2 mb-[20px] relative'>
//             <Text
//               className='label'
//               style={{ color: text_variant_1, fontFamily: 'font_400' }}
//             >
//               Repeat password
//             </Text>
//             <TextInput
//               placeholder='Enter password again'
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
//               secureTextEntry={!showPassword}
//               // value={ResetPasswordForm.email}
//               onChangeText={(text) => {
//                 // console.log('email input in progress...');
//                 // setResetPasswordForm({
//                 //   ...ResetPasswordForm,
//                 //   email: text,
//                 // });
//               }}
//             />
//             <View
//               className='password-visibility-controller-wrapper absolute top-[50px] 
//             right-[15px]'
//             >
//               <Pressable
//                 onPress={() => setShowPassword(true)}
//                 className={`flex ${showPassword ? 'hidden' : 'flex'}`}
//               >
//                 <Ionicons name='eye-outline' size={22} color={text_variant_1} />
//               </Pressable>
//               <Pressable
//                 onPress={() => setShowPassword(false)}
//                 className={`flex ${showPassword ? 'flex' : 'hidden'}`}
//               >
//                 <Ionicons
//                   name='eye-off-outline'
//                   size={22}
//                   color={text_variant_1}
//                 />
//               </Pressable>
//             </View>
//           </View>
//           {/* <Link
//             className='mt-[10px] text-right w-full'
//             // href='/start-password-recovery'
//             href='/country-selection-modal'
//             style={{
//               color: text_variant_3,
//               fontFamily: 'font_500',
//             }}
//           >
//             Forgot password?
//           </Link> */}
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
//             onPress={() => router.push('log-in')}
//           >
//             <Text
//               style={{
//                 fontFamily: 'font_700',
//                 textAlign: 'center',
//                 fontSize: 14,
//               }}
//             >
//               Reset Password
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// export default ResetPassword;

// const styles = StyleSheet.create({});
