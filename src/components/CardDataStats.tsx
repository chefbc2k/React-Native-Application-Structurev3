import React from 'react';
import { StyleSheet } from 'react-nativescript';

interface CardDataStatsProps {
  title: string;
  data: string;
  row?: number;
  col?: number;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({ title, data, row, col }) => {
  return (
    <flexboxLayout style={styles.container} row={row} col={col}>
      <label text={title} className="h3" />
      <label text={data} className="h2" />
    </flexboxLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default CardDataStats;