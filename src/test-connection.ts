import { AppDataSource } from './data-source';

AppDataSource.initialize()
    .then(() => {
        console.log('Data Source has been initialized!');
    })
    .catch((error) => {
        console.error('Error during Data Source initialization:', error);
    });
