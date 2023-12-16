
interface IPropsInputs {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required: boolean;
}
const FormField: React.FC<IPropsInputs> = ({ label, type, name, value, onChange, required }) => (
  <div className="">
    <label htmlFor={name} className="block text-sm font-medium text-black border-slate-700  w-fit 	">
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-[2px] p-1 block w-full border-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
    ) : (
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-[2px] p-1 block w-full border-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
    )}
  </div>
);
export default FormField;
