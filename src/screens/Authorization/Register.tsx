import React, { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet } from 'react-nativescript';
import CustomButton from '../../components/CustomButton';
import Header from '../../components/Header';
import { useAuth } from '../../hooks/useAuth';

type RegisterScreenProps = {
  navigation: StackNavigationProp<any, 'Register'>;
};

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { register } = useAuth();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }
    try {
      await register(email, password);
      navigation.navigate('Home');
    } catch (error) {
      console.error('Registration failed:', error);
      // Show error message to user
    }
  };

  return (
    <flexboxLayout style={styles.container}>
      <Header title="Register" />
      <textField
        hint="Email"
        keyboardType="email"
        autocorrect={false}
        autocapitalizationType="none"
        style={styles.input}
        onTextChange={(args) => setEmail(args.value)}
      />
      <textField
        hint="Password"
        secure={true}
        style={styles.input}
        onTextChange={(args) => setPassword(args.value)}
      />
      <textField
        hint="Confirm Password"
        secure={true}
        style={styles.input}
        onTextChange={(args) => setConfirmPassword(args.value)}
      />
      <CustomButton text="Register" onTap={handleRegister} />
      <CustomButton
        text="Already have an account? Login"
        onTap={() => navigation.navigate('Login')}
      />
    </flexboxLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    margin: 10,
  },
});

export default RegisterScreen;