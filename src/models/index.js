// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Place, Appointment } = initSchema(schema);

export {
  Place,
  Appointment
};