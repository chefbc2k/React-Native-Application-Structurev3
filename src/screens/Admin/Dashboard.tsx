import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-nativescript';
import analytics from '@react-native-firebase/analytics';
import ChartComponent from '../../components/ChartComponent';
import MapComponent from '../../components/MapComponent';
import TableComponent from '../../components/TableComponent';
import CardDataStats from '../../components/CardDataStats';
import Header from '../../components/Header';
import withAuthorization from '../../hoc/withAuthorization';
import { fetchTokenData, fetchTransactions } from '../../services/mintscanService';

const AdminDashboard: React.FC = () => {
  const [tokenData, setTokenData] = useState<any>(null);
  const [transactions, setTransactions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlockchainData = async () => {
      try {
        const tokenInfo = await fetchTokenData('ATOM');
        setTokenData(tokenInfo);

        const transactionData = await fetchTransactions('your-wallet-address');
        setTransactions(transactionData);
      } catch (error) {
        console.error('Failed to load blockchain data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadBlockchainData();

    // Log an event when the Admin Dashboard is viewed
    analytics().logEvent('AdminDashboardView', {
      screen: 'AdminDashboard',
      purpose: 'User is viewing the admin dashboard',
    });
  }, []);

  return (
    <flexboxLayout style={styles.container}>
      <Header title="Admin Dashboard" />
      <scrollView>
        <gridLayout columns="*, *" rows="auto, auto">
          <CardDataStats title="Total Views" data="$3.456K" row={0} col={0} />
          <CardDataStats title="Total Sales" data="$1.234M" row={0} col={1} />
        </gridLayout>
        
        <ChartComponent />
        <MapComponent />
        <TableComponent />

        {loading ? (
          <label text="Loading blockchain data..." />
        ) : (
          <>
            <label text="Token Data" className="h2" />
            <label text={tokenData ? JSON.stringify(tokenData) : 'No data available'} />

            <label text="Transactions" className="h2" />
            {transactions.length > 0 ? (
              transactions.map((tx, index) => (
                <label key={index} text={`Transaction Hash: ${tx.hash}`} />
              ))
            ) : (
              <label text="No transactions found" />
            )}
          </>
        )}
      </scrollView>
    </flexboxLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
  },
});

export default withAuthorization(AdminDashboard, ['admin', 'employee']);