import React, { useEffect } from 'react';
import { StyleSheet } from 'react-nativescript';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/useAuth';

const Redirect: React.FC = () => {
  const navigation = useNavigation();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate('Home');
    } else {
      navigation.navigate('Login');
    }
  }, [isAuthenticated, navigation]);

  return (
    <flexboxLayout style={styles.container}>
      <activityIndicator busy={true} />
    </flexboxLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Redirect;