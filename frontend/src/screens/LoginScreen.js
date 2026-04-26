import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Colors } from '../constants/colors';

const { width, height } = Dimensions.get('window');

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      {/* Decorative Background Elements */}
      <View style={styles.backgroundDecorSection}>
        {/* Radial Gradients (simulated with large rounded opacity views) */}
        <View style={[styles.radialGradient, styles.radialTopLeft]} />
        <View style={[styles.radialGradient, styles.radialBottomRight]} />
        
        {/* Blur Blobs */}
        <View style={[styles.blurBlob, styles.blob1]} />
        <View style={[styles.blurBlob, styles.blob2]} />
      </View>

      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.keyboardView}
        >
          <ScrollView 
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            {/* Logo / Header Area */}
            <View style={styles.headerArea}>
              <View style={styles.logoContainer}>
                <View style={styles.logoInner}>
                  <MaterialCommunityIcons name="school" size={40} color={Colors.primary} />
                </View>
                <View style={styles.logoGlow} />
              </View>
              <Text style={styles.title}>Iniciar sesión Estudiante 🎓</Text>
              <Text style={styles.subtitle}>
                Ingresa tus credenciales para acceder a tu panel escolar
              </Text>
            </View>

            {/* Card Container */}
            <View style={styles.card}>
              {/* Top Gradient Border */}
              <LinearGradient
                colors={[Colors.primary + '33', Colors.primary, Colors.primary + '33']}
                style={styles.cardTopBorder}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              />

              <View style={styles.form}>
                {/* Email Field */}
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Correo electrónico</Text>
                  <View style={styles.inputWrapper}>
                    <MaterialCommunityIcons 
                      name="email-outline" 
                      size={20} 
                      color={Colors.onSurfaceVariant} 
                      style={styles.inputIcon} 
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="correo@ejemplo.com"
                      placeholderTextColor={Colors.onSurfaceVariant + '80'}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      value={email}
                      onChangeText={setEmail}
                    />
                  </View>
                </View>

                {/* Password Field */}
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Contraseña</Text>
                  <View style={styles.inputWrapper}>
                    <MaterialCommunityIcons 
                      name="lock-outline" 
                      size={20} 
                      color={Colors.onSurfaceVariant} 
                      style={styles.inputIcon} 
                    />
                    <TextInput
                      style={[styles.input, { paddingRight: 50 }]}
                      placeholder="••••••••"
                      placeholderTextColor={Colors.onSurfaceVariant + '80'}
                      secureTextEntry={!showPassword}
                      value={password}
                      onChangeText={setPassword}
                    />
                    <TouchableOpacity 
                      style={styles.visibilityIcon}
                      onPress={() => setShowPassword(!showPassword)}
                    >
                      <MaterialCommunityIcons 
                        name={showPassword ? "eye-off-outline" : "eye-outline"} 
                        size={20} 
                        color={Colors.onSurfaceVariant} 
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Forgot Password Link */}
                <TouchableOpacity style={styles.forgotPassword}>
                  <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
                </TouchableOpacity>

                {/* Submit Button */}
                <TouchableOpacity activeOpacity={0.8} style={styles.submitButtonWrapper}>
                  <LinearGradient
                    colors={[Colors.primary, Colors.primaryContainer]}
                    style={styles.submitButton}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                  >
                    <Text style={styles.submitButtonText}>Iniciar Sesión</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>

            {/* Sign Up Link */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>¿No tienes una cuenta? </Text>
              <TouchableOpacity>
                <Text style={styles.signUpLinkText}>Crear cuenta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  backgroundDecorSection: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.4,
  },
  radialGradient: {
    position: 'absolute',
    width: width,
    height: width,
    borderRadius: width / 2,
    opacity: 0.1,
  },
  radialTopLeft: {
    top: -width * 0.2,
    left: -width * 0.2,
    backgroundColor: Colors.primary,
  },
  radialBottomRight: {
    bottom: -width * 0.2,
    right: -width * 0.2,
    backgroundColor: Colors.secondary,
  },
  blurBlob: {
    position: 'absolute',
    borderRadius: 1000,
    backgroundColor: Colors.surfaceContainerHigh,
    opacity: 0.3,
  },
  blob1: {
    top: -50,
    left: -50,
    width: width * 0.6,
    height: width * 0.6,
  },
  blob2: {
    bottom: -50,
    right: -50,
    width: width * 0.5,
    height: width * 0.5,
  },
  safeArea: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    paddingTop: 80,
  },
  headerArea: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logoContainer: {
    width: 64,
    height: 64,
    marginBottom: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoInner: {
    width: '100%',
    height: '100%',
    borderRadius: 32,
    backgroundColor: Colors.surfaceContainerHighest,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
    elevation: 10,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 0 },
  },
  logoGlow: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.primary + '1A',
    zIndex: 1,
  },
  title: {
    fontFamily: 'PlusJakartaSans_700Bold',
    fontSize: 28,
    color: Colors.onBackground,
    textAlign: 'center',
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontFamily: 'Manrope_400Regular',
    fontSize: 14,
    color: Colors.onSurfaceVariant,
    textAlign: 'center',
    maxWidth: 280,
    lineHeight: 20,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: Colors.surfaceContainerLow,
    borderRadius: 24,
    padding: 32,
    borderWidth: 1,
    borderColor: Colors.outlineVariant + '26',
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
  },
  cardTopBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    opacity: 0.5,
  },
  form: {
    gap: 24,
  },
  inputGroup: {
    gap: 8,
  },
  label: {
    fontFamily: 'Manrope_500Medium',
    fontSize: 14,
    color: Colors.onBackground,
  },
  inputWrapper: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputIcon: {
    position: 'absolute',
    left: 16,
    zIndex: 10,
  },
  input: {
    flex: 1,
    height: 52,
    backgroundColor: Colors.surfaceContainerHighest,
    borderRadius: 12,
    paddingLeft: 48,
    paddingRight: 16,
    color: Colors.onBackground,
    fontFamily: 'Manrope_400Regular',
    fontSize: 15,
  },
  visibilityIcon: {
    position: 'absolute',
    right: 16,
    height: 52,
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: -8,
  },
  forgotPasswordText: {
    fontFamily: 'Manrope_600SemiBold',
    fontSize: 14,
    color: Colors.primary,
  },
  submitButtonWrapper: {
    marginTop: 8,
  },
  submitButton: {
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 8 },
  },
  submitButtonText: {
    fontFamily: 'Manrope_700Bold',
    fontSize: 16,
    color: Colors.surface,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontFamily: 'Manrope_400Regular',
    fontSize: 14,
    color: Colors.onSurfaceVariant,
  },
  signUpLinkText: {
    fontFamily: 'Manrope_700Bold',
    fontSize: 14,
    color: Colors.secondary,
  },
});
