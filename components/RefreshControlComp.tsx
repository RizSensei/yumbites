import React from 'react';
import { RefreshControl } from 'react-native';

const RefreshControlComp = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
  )
}

export default RefreshControlComp