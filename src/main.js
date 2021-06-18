import * as Sentry from '@sentry/vue';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Sentry.init({
  dsn: 'https://d33ae9d253e64cacbf457a160a16684d@o228732.ingest.sentry.io/1385095',
});

createApp(App).use(store).use(router).mount('#app');