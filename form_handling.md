### How does Formik simplify form management compared to handling state manually?

Formik simplifies form management by handling common form tasks such as storing input values, handling changes, tracking touched fields, displaying errors, and handling form submission.

Without Formik, I would need to create and manage more React state and event handlers for each input. Formik puts these tasks together and makes the form code easier to manage.

### What are the benefits of using Formik's validation instead of writing validation logic manually?

Formik's validation can be combined with Yup to define the validation rules in a clear schema. This makes the validation easier to organise and reuse instead of writing separate validation logic for each input.

In this task, I used Yup to check that the name is required and that the email is both required and in a valid email format.