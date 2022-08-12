import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import BalmUI from 'balm-ui';
import 'balm-ui/dist/balm-ui.css';

createApp(App).use(BalmUI).use(router).mount('#app');

