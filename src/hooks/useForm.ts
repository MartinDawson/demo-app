import { useCallback, useMemo, useState } from "react"
import type { ChangeEventHandler, FormEventHandler } from "react"

type Name = string;
type Value = string;
type FormData = Record<Name, Value>;
type ChangeEventElementType = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

type FormParams = {
  initialValues?: FormData
}

const useForm = ({ initialValues = {} }: FormParams) => {
  const [formData, setFormData] = useState<FormData>(initialValues);
  const formDataAsArray: [Name, Value][] = useMemo(() => Object.entries(formData), [formData]);

  // UseCallback hooks only in this file because it could be used
  // in a component that shouldn't be re-rendered
  // Normal components we shouldn't use these because they are micro-optimizations that
  // can cause bugs if deps aren't handled properly
  const onChange = useCallback<ChangeEventHandler<ChangeEventElementType>>((event) => {
    const { name, value } = event.target;

    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }, [setFormData]);

  const addInput = useCallback(() => {
    const inputCount = formDataAsArray.length;
    const newInputName = `input-${inputCount + 1}`;

    setFormData(prevState => ({
      ...prevState,
      [newInputName]: ''
    }));
  }, [formDataAsArray.length]);

  // In a real app we would need custom validation that can be done here
  // In this example app we do not because we use in built HTML5 validation
  const useHandleSubmit = (onSubmit: FormEventHandler): FormEventHandler =>
    useCallback((event) => {
      event.preventDefault();

      onSubmit(event);

      // Add custom validations here
    }, [onSubmit]);

  return {
    setFormData,
    formData,
    formDataAsArray,
    onChange,
    addInput,
    useHandleSubmit
  }
}

export default useForm