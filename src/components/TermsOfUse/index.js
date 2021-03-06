import React from 'react';
import { Link } from 'react-router-dom';
import Checkbox from '../Checkbox';
import './TermsOfUse.scss';

export default function TermsOfUse({ agreedToTerms, handleToggle }) {
  return (
    <div className="terms-of-use">
      <Checkbox
        className="terms-of-use__checkbox"
        onChange={handleToggle}
        checked={agreedToTerms}
        name="termsOfUse"
      >
        I agree to the{' '}
        <Link to="/terms" className="link">
          Terms of Use
        </Link>
      </Checkbox>
    </div>
  );
}
