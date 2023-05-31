import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';
import {
  Form,
  json,
  redirect,
  useActionData,
  useNavigation,
} from 'react-router-dom';
import { FIREBASE_URL, PARAM_JSON } from '../../util/firebase-url';

const QuoteForm = props => {
  const data = useActionData();

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <Card>
      <Form method='POST' className={classes.form}>
        {isSubmitting && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' name='author' required />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows='5' name='text' required></textarea>
          {/* err */}
          {data && data.errors && (
            <ul>
              {Object.values(data.errors).map(err => (
                <li key={err}>{err}</li>
              ))}
            </ul>
          )}
          {/*  */}
        </div>
        <div className={classes.actions}>
          <button className={classes.btn} disabled={isSubmitting}>
            Add Quote
          </button>
        </div>
      </Form>
    </Card>
  );
};

export default QuoteForm;

export async function action({ request, params }) {
  const data = await request.formData();

  const quoteDataFromForm = {
    author: data.get('author'),
    text: data.get('text'),
  };

  const response = await fetch(`${FIREBASE_URL}/${PARAM_JSON}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(quoteDataFromForm),
  });
  if (response.status === 422) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: 'Could not save form' });
  }
  alert('Add new quote success.');
  return redirect('/');
}
