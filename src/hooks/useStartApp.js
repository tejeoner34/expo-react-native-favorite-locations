import { useEffect, useState } from 'react';

export function useStartApp({ dataSource }) {
  const [isDbLoaded, setisDbLoaded] = useState(false);
  useEffect(() => {
    async function initializeDb() {
      try {
        console.log('test');
        await dataSource.init();
        console.log('testasa');

        setisDbLoaded(true);
      } catch (error) {
        console.log('errr', error);
      }
    }
    initializeDb();
  }, []);

  return { isDbLoaded };
}
