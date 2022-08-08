// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Place, Appointment, PendingAppointment } = initSchema(schema);

export {
  Place,
  Appointment,
  PendingAppointment
};