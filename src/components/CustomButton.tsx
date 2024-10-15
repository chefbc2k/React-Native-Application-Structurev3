import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-nativescript';
import { colors } from '../styles/colors';

interface CustomButtonProps {
  text: string;
  onTap: () => void;
  row?: number;
  col?: number;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ 
  text, 
  onTap, 
  row, 
  col, 
  variant = 'primary',
  disabled = false
}) => {
  return (
    <TouchableOpacity 
      style={[styles.button, styles[variant], disabled && styles.disabled]}
      onTap={onTap}
      row={row}
      col={col}
      disabled={disabled}
    >
      <Text style={[styles.text, disabled && styles.disabledText]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    padding: 8,
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.secondary,
  },
  danger: {
    backgroundColor: colors.error,
  },
  disabled: {
    backgroundColor: colors.disabled,
  },
  text: {
    fontSize: 14,
    color: colors.onPrimary,
    fontWeight: 'bold',
  },
  disabledText: {
    color: colors.onDisabled,
  },
});

export default CustomButton;