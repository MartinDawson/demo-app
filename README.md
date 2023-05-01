## Notes for doing a real app
I only spent a couple hours on this so here's what I would do in a real app:

- Extract `useForm` to another repo and package it with `npm`. Then it can be imported into this app. I.e like formik and others do.
- Not using classnames, react-router, sentence-case or styled-components because the requirements said no libraries
- Add integration tests with react-testing-library in a real app to test that we get redirected to the success page on submit and validation if there are errors.
- Add custom validation function to `useForm` that has the validation passed in by the end developer.

Tested on node 16.10.0

- npm install
- npm run start

Run tests with:

- npm run test