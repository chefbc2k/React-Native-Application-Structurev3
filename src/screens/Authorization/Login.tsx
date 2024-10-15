import React, { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet } from 'react-nativescript';
import CustomButton from '../../components/CustomButton';
import Header from '../../components/Header';
import { useAuth } from '../../context/AuthContext';

type LoginScreenProps = {
  navigation: StackNavigationProp<any, 'Login'>;
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigation.navigate('Home');
    } catch (error) {
      console.error('Login failed:', error);
      // Show error message to user
    }
  };

  return (
    <flexboxLayout style={styles.container}>
      <Header title="Login" />
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
      <CustomButton text="Login" onTap={handleLogin} />
      <CustomButton
        text="Don't have an account? Register"
        onTap={() => navigation.navigate('Register')}
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

export default LoginScreen;