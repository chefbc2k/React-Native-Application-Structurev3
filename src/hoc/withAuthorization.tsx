import React from 'react';
import { ActivityIndicator } from 'react-nativescript';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';

const withAuthorization = (WrappedComponent: React.ComponentType<any>, allowedRoles: string[]) => {
  return (props: any) => {
    const { user, loading } = useAuth();
    const navigation = useNavigation();

    if (loading) {
      return <ActivityIndicator busy={true} />;
    }

    if (!user || !allowedRoles.includes(user.role)) {
      navigation.navigate('Unauthorized');
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuthorization;