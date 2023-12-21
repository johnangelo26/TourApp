/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alert';

export const bookTour = async (tourId) => {
  try {
    const stripe = Stripe(
      'pk_test_51OPfknFt5SX6X1fCsjAM6JbLkxbvVmochH9Not0kfffAFmSM9ZWJe0lWM0RdaqNAWenvYpf6Mh755iCSZZfBYOGd00cqnAzzH5',
    );
    // 1) Get checkout session from API
    const session = await axios(
      `http://localhost:3000/api/v1/booking/checkout-session/${tourId}`,
    );
    console.log(session);

    // 2) Create checkout form = chance credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
