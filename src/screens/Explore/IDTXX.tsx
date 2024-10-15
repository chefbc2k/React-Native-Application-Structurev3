import React from 'react';
import { StyleSheet } from 'react-nativescript';
import { RouteProp } from '@react-navigation/native';
import Header from '../../components/Header';

type ExploreIDTXXProps = {
  route: RouteProp<{ params: { id: string } }, 'params'>;
};

const ExploreIDTXX: React.FC<ExploreIDTXXProps> = ({ route }) => {
  const { id } = route.params;

  return (
    <flexboxLayout style={styles.container}>
      <Header title={`Explore Item ${id}`} />
      <label className="text-xl mb-4">Details for item {id}</label>
      {/* Add more details here */}
    </flexboxLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
});

export default ExploreIDTXX;