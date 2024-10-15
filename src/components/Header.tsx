import React from 'react';
import { StyleSheet } from 'react-nativescript';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <flexboxLayout style={styles.header}>
      <label style={styles.title}>{title}</label>
    </flexboxLayout>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 56,
    backgroundColor: '#65adf1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;