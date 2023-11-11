import React, { useRef } from "react";
import "./form.css";
import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const fname = useRef(null);
  const lname = useRef(null);
  const email = useRef(null);
  const passw = useRef(null);

  return (
    <div>
      <button className="freeTrial center">
        <p>
          <span>Try it free 7 days</span> then $20/mo. thereafter
        </p>
      </button>
      <form
        onSubmit={handleSubmit((data) => {
          alert("your data is submitted," + " " + data.firstName + "!");
          reset();
        })}
      >
        <input
          className={errors.firstName ? "red" : ""}
          {...register("firstName", { required: "First Name cannot be empty" })}
          placeholder={errors.firstName ? "" : "First Name"}
          //   ref={fname}
        />
        <p className="error">{errors.firstName?.message}</p>
        <input
          className={errors.lastName ? "red" : ""}
          {...register("lastName", { required: "Last Name cannot be empty" })}
          placeholder={errors.lastName ? "" : "Last Name"}
        />
        <p className="error">{errors.lastName?.message}</p>
        <input
          className={errors.email ? "red" : ""}
          {...register("email", {
            required: "email cannot be empty",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Looks like this is not an email",
            },
          })}
          type="email"
          placeholder={errors.email ? "email@example/com" : "Email Address"}
        />
        <p className="error">{errors.email?.message}</p>
        <input
          className={errors.password ? "red" : ""}
          {...register("password", {
            required: "Password cannot be empty",
            minLength: { value: 4, message: "Min length is 4" },
          })}
          placeholder={errors.password ? "" : "Password"}
        />
        <p className="error">{errors.password?.message}</p>
        <button type="submit" className="formb">
          CLAIM YOUR FREE TRIAL
        </button>
        <p className="bottomp">
          By clicking the button, you are agreeing to our{" "}
          <span>Terms and Services</span>
        </p>
      </form>
    </div>
  );
}

export default Form;
