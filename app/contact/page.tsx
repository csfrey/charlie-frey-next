"use client";

import { useFormik } from "formik";
import { schema } from "../schemas/schema";
import Link from "next/link";
import LoadFirst from "../components/LoadFirst";

const StyledInput = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  errors,
}: {
  label: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: any;
  errors: any;
}) => (
  <div className="flex flex-col">
    <label>{label}</label>
    <input
      className="bg-slate-900 border-2 border-green-500 rounded"
      name={name}
      type="text"
      placeholder={placeholder ?? label}
      value={value}
      onChange={onChange}
    />
    <div className="h-6 text-red-500">{(errors as string) ?? ""}</div>
  </div>
);

const Contact = () => {
  const { errors, touched, values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: schema,
    onSubmit: async (values: any) => {
      // Handle form submission (e.g., API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));
    },
  });

  return (
    <LoadFirst>
      <main className="w-full h-full flex flex-col justify-evenly">
        <div className="mx-auto">
          Email me at{" "}
          <Link className="underline" href="mailto:contact@charliefrey.io">
            contact@charliefrey.io
          </Link>
        </div>
        <div className="mx-auto">or</div>
        <div className="mx-auto">send me a message:</div>
        <form
          className="w-1/3 mx-auto"
          id="contact-form"
          onSubmit={handleSubmit}
        >
          <StyledInput
            label="Name"
            name="name"
            placeholder="required"
            value={values.name}
            errors={errors.name}
            onChange={handleChange}
          />

          <StyledInput
            label="Email"
            name="email"
            placeholder="required"
            value={values.email}
            errors={errors.email}
            onChange={handleChange}
          />

          <StyledInput
            label="Phone"
            name="phone"
            placeholder="if you want"
            value={values.phone}
            errors={errors.phone}
            onChange={handleChange}
          />

          <div className="flex flex-col">
            <label>Message</label>
            <textarea
              className="bg-slate-900 border-2 border-green-500 rounded"
              form="contact-form"
              name="message"
              placeholder="required"
              rows={4}
              value={values.message}
              onChange={handleChange}
            />
            <div className="h-8 text-red-500">
              {(errors.message as string) ?? ""}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn bg-green-500 hover:bg-green-400 py-2 px-4 text-slate-900 rounded"
          >
            Submit
          </button>
        </form>
      </main>
    </LoadFirst>
  );
};

export default Contact;
