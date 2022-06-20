// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Place, Appointment, User, UserAppointment } = initSchema(schema);

export {
  Place,
  Appointment,
  User,
  UserAppointment
};