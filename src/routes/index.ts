import { Router } from 'express';
import livereport from './livereport';
import pastorblog from './pastorblog';
import prayerrequest from './prayerrequest';
import prayerwall from './prayerwall';
import section from './section';
import test from './test';

const routes = Router();

routes.use('/tests', test);
routes.use('/livereport', livereport);
routes.use('/pastorblog', pastorblog);
routes.use('/prayerrequest', prayerrequest);
routes.use('/prayerwall', prayerwall);
routes.use('/sections', section);

export default routes;
