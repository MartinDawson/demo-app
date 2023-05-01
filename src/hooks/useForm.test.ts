import { act, renderHook } from '@testing-library/react-hooks';
import useForm from './useForm';

describe('useForm', () => {
  it('should initialize with empty form data', () => {
    const { result } = renderHook(() => useForm({}));
    expect(result.current.formData).toEqual({});
    expect(result.current.formDataAsArray).toEqual([]);
  });

  it('should initialize with initial form data', () => {
    const initialValues = { name: 'John', email: 'john@example.com' };
    const { result } = renderHook(() => useForm({ initialValues }));
    expect(result.current.formData).toEqual(initialValues);
    expect(result.current.formDataAsArray).toEqual(Object.entries(initialValues));
  });

  it('should update form data when input values change', () => {
    const { result } = renderHook(() => useForm({}));
    const inputEvent = { target: { name: 'name', value: 'John' } };
    act(() => {
      result.current.onChange(inputEvent as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.formData).toEqual({ name: 'John' });
    expect(result.current.formDataAsArray).toEqual([['name', 'John']]);
  });

  it('should add new inputs when addInput is called', () => {
    const { result } = renderHook(() => useForm({}));
    act(() => {
      result.current.addInput();
    });
    expect(result.current.formData).toEqual({ 'input-1': '' });
    expect(result.current.formDataAsArray).toEqual([['input-1', '']]);
  });
});