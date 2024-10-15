import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-nativescript';
import CustomButton from './CustomButton';
import { colors } from '../styles/colors';

interface NFTFormProps {
  onSubmit: (formData: NFTFormData) => void;
  onCancel: () => void;
  initialData?: NFT;
}

const NFTForm: React.FC<NFTFormProps> = ({ onSubmit, onCancel, initialData }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [prompt, setPrompt] = useState('');
  const [contractor, setContractor] = useState('');
  const [executionDate, setExecutionDate] = useState('');
  const [length, setLength] = useState('');
  const [servicesAllowed, setServicesAllowed] = useState('');

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setDescription(initialData.description);
      setCategory(initialData.category);
      setContractor(initialData.metadata.contractor);
      setExecutionDate(initialData.metadata.executionDate);
      setLength(initialData.metadata.length);
      setServicesAllowed(initialData.metadata.servicesAllowed.join(', '));
    }
  }, [initialData]);

  const handleSubmit = () => {
    const formData: NFTFormData = {
      name,
      description,
      category,
      prompt,
      metadata: {
        contractor,
        executionDate,
        length,
        servicesAllowed: servicesAllowed.split(',').map(s => s.trim()),
      },
    };
    onSubmit(formData);
  };

  return (
    <flexboxLayout style={styles.form}>
      <textField
        hint="NFT Name"
        text={name}
        onTextChange={(args) => setName(args.value)}
        style={styles.input}
      />
      <textView
        hint="NFT Description"
        text={description}
        onTextChange={(args) => setDescription(args.value)}
        style={styles.input}
      />
      <textField
        hint="NFT Category"
        text={category}
        onTextChange={(args) => setCategory(args.value)}
        style={styles.input}
      />
      <textField
        hint="Contractor"
        text={contractor}
        onTextChange={(args) => setContractor(args.value)}
        style={styles.input}
      />
      <textField
        hint="Execution Date"
        text={executionDate}
        onTextChange={(args) => setExecutionDate(args.value)}
        style={styles.input}
      />
      <textField
        hint="Length"
        text={length}
        onTextChange={(args) => setLength(args.value)}
        style={styles.input}
      />
      <textField
        hint="Services Allowed (comma-separated)"
        text={servicesAllowed}
        onTextChange={(args) => setServicesAllowed(args.value)}
        style={styles.input}
      />
      <textField
        hint="Image Generation Prompt"
        text={prompt}
        onTextChange={(args) => setPrompt(args.value)}
        style={styles.input}
      />
      <flexboxLayout style={styles.buttonContainer}>
        <CustomButton text="Save NFT" onTap={handleSubmit} variant="primary" />
        <CustomButton text="Cancel" onTap={onCancel} variant="secondary" />
      </flexboxLayout>
    </flexboxLayout>
  );
};

const styles = StyleSheet.create({
  form: {
    flexDirection: 'column',
    padding: 20,
  },
  input: {
    margin: 10,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default NFTForm;