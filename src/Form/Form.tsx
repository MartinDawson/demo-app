import React from 'react';
import type { DetailedHTMLProps, FormHTMLAttributes, FormEventHandler, FC, ReactNode } from 'react';
import styles from './Form.module.css';
import useForm from '../hooks/useForm';
import Button from '../Button/Button';
import { successRoute } from '../App';
import { toSentenceCase } from '../utils';

type FormProps = DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> & {
  addInputNode: ReactNode;
  submitNode: ReactNode;
}

const Form: FC<FormProps> = ({ submitNode, addInputNode, ...props }) => {
  const { addInput, onChange, useHandleSubmit, formDataAsArray } = useForm({
    initialValues: {
      input: ''
    }
  });

  const onSubmit: FormEventHandler<HTMLFormElement> = () => {
    window.location.href = successRoute;
  }

  const handleSubmit = useHandleSubmit(onSubmit);

  return (
    <form {...props} onSubmit={handleSubmit}>
      <Button className={styles.addInput} type="button" onClick={addInput}>{addInputNode}</Button>
      <div className={styles.formFields}>
        {formDataAsArray.map(([name, value]) => (
          <div key={name}>
            <label className={styles.label}>
              {toSentenceCase(name)}
              <input
                type="number"
                name={name}
                value={value as any}
                required
                min={0}
                max={1000000}
                onChange={onChange}
              />
            </label>
          </div>
        ))}
      </div>
      <Button className={styles.submit} type="submit">{submitNode}</Button>
    </form>
  );
}

export default Form;
