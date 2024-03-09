import { FormikProps, useFormik } from 'formik';
import { FC, useMemo } from 'react';
import validationSchema from './schema';
import moment from 'moment';

interface FormData {
  name: string;
  address: string;
  uri: string;
  timestamp: number;
  email: string;
  tokenAddress: string;
  totalTokens: number;
  minToken: number;
  maxToken: number;
}

export const MainPage: FC = () => {
  // Initial values for the form
  // This can be fetched from the server or from the local storage
  // This can be used to reset the form to the initial state
  const initialValues: FormData = useMemo(
    () => ({
      name: 'Rupen' ?? '',
      address: 'Ahmedabad' ?? '',
      uri: 'https://www.google.com' ?? '',
      timestamp: moment().unix() ?? 0,
      email: 'rupen@gmail.com' ?? '',
      tokenAddress: '0x1234567890' ?? '',
      totalTokens: 10 ?? 0,
      minToken: 5 ?? 0,
      maxToken: 5 ?? 0,
    }),
    [],
  );

  const formik: FormikProps<FormData> = useFormik<FormData>({
    initialValues,
    validationSchema,
    onSubmit: (values, { setFieldValue, resetForm }) => {
      if (values.name === 'Rupen') {
        setFieldValue('name', 'Rupen J.');
      }

      console.log(values);
      alert('Formik completed!');
      resetForm();
    },
  });

  return (
    <>
      <h1>Main Page</h1>
      <form onSubmit={formik.handleSubmit}>
        <div style={{ display: 'flex' }}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
        </div>
        <div style={{ display: 'flex' }}>
          <label htmlFor="address">Address</label>
          <input
            id="address"
            name="address"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
          />
          {formik.touched.address && formik.errors.address ? (
            <div>{formik.errors.address}</div>
          ) : null}
        </div>
        <div style={{ display: 'flex' }}>
          <label htmlFor="uri">URI</label>
          <input
            id="uri"
            name="uri"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.uri}
          />
          {formik.touched.uri && formik.errors.uri ? (
            <div>{formik.errors.uri}</div>
          ) : null}
        </div>
        <div style={{ display: 'flex' }}>
          <label htmlFor="timestamp">Timestamp</label>
          <input
            id="timestamp"
            name="timestamp"
            type="date"
            onChange={(e) => {
              formik.setFieldValue('timestamp', moment(e.target.value).unix());
            }}
            onBlur={formik.handleBlur}
            value={moment(formik.values.timestamp * 1000).format('YYYY-MM-DD')}
          />
          {formik.touched.timestamp && formik.errors.timestamp ? (
            <div>{formik.errors.timestamp}</div>
          ) : null}
        </div>
        <div style={{ display: 'flex' }}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>
        <div style={{ display: 'flex' }}>
          <label htmlFor="tokenAddress">Token Address</label>
          <input
            id="tokenAddress"
            name="tokenAddress"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.tokenAddress}
          />
          {formik.touched.tokenAddress && formik.errors.tokenAddress ? (
            <div>{formik.errors.tokenAddress}</div>
          ) : null}
        </div>
        <div style={{ display: 'flex' }}>
          <label htmlFor="totalTokens">Total Tokens</label>
          <input
            id="totalTokens"
            name="totalTokens"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.totalTokens}
          />
          {formik.touched.totalTokens && formik.errors.totalTokens ? (
            <div>{formik.errors.totalTokens}</div>
          ) : null}
        </div>
        <div style={{ display: 'flex' }}>
          <label htmlFor="minToken">Min Token</label>
          <input
            id="minToken"
            name="minToken"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.minToken}
          />
          {formik.touched.minToken && formik.errors.minToken ? (
            <div>{formik.errors.minToken}</div>
          ) : null}
        </div>
        <div style={{ display: 'flex' }}>
          <label htmlFor="maxToken">Max Token</label>
          <input
            id="maxToken"
            name="maxToken"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.maxToken}
          />
          {formik.touched.maxToken && formik.errors.maxToken ? (
            <div>{formik.errors.maxToken}</div>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>

      <div>
        <h2>Formik Values</h2>
        <pre>{JSON.stringify(formik.values, null, 2)}</pre>
      </div>

      <div>
        <h2>Formik Errors</h2>
        <pre>{JSON.stringify(formik.errors, null, 2)}</pre>
      </div>
    </>
  );
};
