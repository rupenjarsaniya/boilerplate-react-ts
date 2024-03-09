import moment from 'moment';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  address: Yup.string()
    .required('Address is required')
    .matches(/^(?!Ahmedabad).*/, 'Address should not be ahmedabad'),
  uri: Yup.string()
    .required('URI is required')
    .matches(
      /^((http|https):\/\/)(www\.)?[a-zA-Z0-9@:%._\+~#?&//=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%._\+~#?&//=]*)$/,
      'Please enter a valid uri',
    ),
  timestamp: Yup.number()
    .required('Timestamp is required')
    .min(moment().unix(), 'Must be a future date'),
  minToken: Yup.number()
    .positive('Must be greater than 0')
    .required('Min token per wallet is required')
    .max(Yup.ref('maxToken'), 'Must be less than max tokens'),
  maxToken: Yup.number()
    .required('Max token per wallet is required')
    .positive('Must be greater than 0')
    .max(Yup.ref('totalTokens'), 'Must be less than total tokens'),
  tokenAddress: Yup.string()
    .required('Token address is required')
    .matches(/^0x[a-fA-F0-9]{40}$/g, 'Please enter a valid token address'),
  totalTokens: Yup.number()
    .required('Total tokens is required')
    .positive('Must be greater than 0'),
});

export default validationSchema;
