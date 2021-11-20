import React from 'react';
import useEmailValidation from './useEmailValidation';

function EmailValidatingForm() {
  const { setEmail, email, count, setCount, emailValid } =
    useEmailValidation(30);

  return (
    <div className="container">
      <br />
      <div className="content">
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          disabled={count <= 0}
          value={email}
          placeholder="Enter Email"
          required
        />
        &nbsp; &nbsp; &nbsp;
        <button
          type="submit"
          className="btn-lg"
          disabled={!emailValid || count <= 0}
          onClick={() => {
            setCount(0);
            alert(`Button clicked with email ${email}`);
          }}
        >
          PRESS ME!
        </button>
        <div>
          {count > 0
            ? `You Have ${count} Secons To Enter Your Email`
            : `Email Entered or Time Expired`}
        </div>
      </div>
    </div>
  );
}

export default EmailValidatingForm;
