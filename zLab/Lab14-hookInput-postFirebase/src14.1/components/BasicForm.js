import useInput from '../hooks/use-input';

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');

const BasicForm = props => {
  const {
    value: yourNameValue,
    isValid: yourNameIsValid,
    hasError: yourNameHasError,
    valueChangeHandler: yourNameChangeHandler,
    inputBlurHandler: yourNameBlurHandler,
    reset: resetYourName,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  let formIsValid = false;

  if (yourNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = event => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    props.onSubmit({
      name: yourNameValue,
      email: emailValue,
    });
    resetYourName();
    resetEmail();
  };

  const yourNameClasses = yourNameHasError
    ? 'form-control invalid'
    : 'form-control';
  const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={yourNameClasses}>
          <label htmlFor='name'>Your Name</label>
          <input
            type='text'
            id='name'
            value={yourNameValue}
            onChange={yourNameChangeHandler}
            onBlur={yourNameBlurHandler}
          />
          {yourNameHasError && (
            <p className='error-text'>Please enter a Your name.</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='email'>Your E-Mail</label>
        <input
          type='text'
          id='email'
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className='error-text'>Please enter a valid your email.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
