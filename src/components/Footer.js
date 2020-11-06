import React from 'react';
import { Button } from './Button';

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the adventure newsletter to receive our best vacation deals!
        </p>
        <p className="footer-subscription-text">
          You can subscribe at any time.
          <div className="input-areas">
            <form>
              <input
                type="email"
                name="email"
                className="footer-input"
                placeholder="Your email"
              />
              <Button buttonStyle="btn--outline">Subscribe</Button>
            </form>
          </div>
        </p>
      </section>
    </div>
  );
}

export default Footer;
