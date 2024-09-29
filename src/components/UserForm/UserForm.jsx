import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'react-datepicker/dist/react-datepicker.css';

import { Toaster, toast } from 'react-hot-toast';
import {
  FormContainer,
  HeadInfo,
  MainText,
  SecondaryText,
  Input,
  DatePickerWrapper,
  SubmitButton,
  ErrorText,
  StyledDatePicker,
  Textarea,
} from './UserForm.styled.js';

const initialValues = {
  name: '',
  email: '',
  date: null,
  comment: '',
};

const Schema = Yup.object({
  name: Yup.string().min(3, 'Name must be at least 3 characters').required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  date: Yup.date().required('Date is required'),
  comment: Yup.string().max(256, 'Comment cannot exceed 256 characters'),
});

export default function UserForm() {
  const handleSubmit = (values, { resetForm }) => {
    console.log('Form values:', values);
    toast.success('Form submitted successfully!');
    resetForm();
  };

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          className: '',
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
      <Formik initialValues={initialValues} validationSchema={Schema} onSubmit={handleSubmit}>
        {({ setFieldValue, values }) => (
          <FormContainer as={Form}>
            <HeadInfo>
              <MainText>Book your campervan now</MainText>
              <SecondaryText>Stay connected! We are always ready to help you.</SecondaryText>
            </HeadInfo>

            <Field
              as={Input}
              placeholder="Name*"
              type="text"
              name="name"
            />
            <ErrorMessage name="name" component={ErrorText} />

            <Field
              as={Input}
              placeholder="Email*"
              type="email"
              name="email"
            />
            <ErrorMessage name="email" component={ErrorText} />

            <DatePickerWrapper>
              <StyledDatePicker
                placeholderText="Booking date*"
                dateFormat="dd/MM/yyyy"
                selected={values.date}
                onChange={(date) => setFieldValue('date', date)}
              />
              <ErrorMessage name="date" component={ErrorText} />
            </DatePickerWrapper>

            <Field
              as={Textarea}
              placeholder="Comment"
              name="comment"
              rows="5"
            />
            <ErrorMessage name="comment" component={ErrorText} />

            <SubmitButton type="submit">Send</SubmitButton>
          </FormContainer>
        )}
      </Formik>
    </>
  );
}
