import Floatinginput from "./Floatinginput";
import { Button } from "@mantine/core";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import * as apiClient from "../apiClient";
import toast from "react-hot-toast";

type QueryData = {
  name: string;
  email: string;
  phoneNumber: string;
  description: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<QueryData>({
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      description: "",
    },
  });

  // Mutation to send the form data
  const mutation = useMutation({
    mutationFn: apiClient.sendQueryForm,
    onMutate: () => {
      console.log("Mutation is starting...");
      
    },
    onSuccess: () => {
      console.log("Mutation successful");
      toast.success("Info Submitted Successfully");
      reset();

      // Optionally reset the form or show a success message
    },
    onError: (error) => {
      console.log("Mutation failed", error);
      toast.error("Server Error");
      reset();
      // Optionally show an error message
    },
  });

  // Handle form submission
  const onSubmit: SubmitHandler<QueryData> = async (data) => {
    try {
      console.log("DATA",data);
      await mutation.mutateAsync(data); // Use mutateAsync to call the mutation
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };


  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission

    // Log the form data before validation
    const formData = {
      name: watch("name"),
      email: watch("email"),
      phoneNumber: watch("phoneNumber"),
      description: watch("description"),
    };

    console.log("Form Data Before Validation:", formData); // Log the data

    // Now proceed with validation and submission
    handleSubmit(onSubmit)(); // Call handleSubmit with the original onSubmit
  };
  
  return (
    <div className="px-16 mx-20 my-5 font-mono" id="CONTACTUS">
      <h1 className="text-4xl font-bold text-white text-center mt-8 mb-3">
        <span className="text-primaryColor ">05.&nbsp;</span>Contact
      </h1>
      <form
        className="flex flex-col w-[70%] !border-[2px] !border-primaryColor p-8 pt-10 rounded-3xl m-auto hover:shadow-primaryColor hover:shadow-md"
        data-aos="flip-right"
        data-aos-duration="400"
        onSubmit={(event) => handleFormSubmit(event)}
      >
        <div className="text-3xl text-white font-semibold">Let's Connect</div>

        {/* Each input now registers directly with react-hook-form and handles error display */}
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
          // Use handleChange for input
          className={`block px-2.5 pb-2.5 pt-4 w-full text-xl text-white bg-transparent rounded-xl border ${
            errors.name ? "border-red-500" : "border-textColor"
          } appearance-none focus:outline-none focus:ring-0 focus:border-primaryColor peer placeholder=" "`}
        />
        <input
          type="text"
          {...register("email", { required: "Email is required" })}
          // Use handleChange for input
          className={`block px-2.5 pb-2.5 pt-4 w-full text-xl text-white bg-transparent rounded-xl border ${
            errors.email ? "border-red-500" : "border-textColor"
          } appearance-none focus:outline-none focus:ring-0 focus:border-primaryColor peer placeholder=" "`}
        />
        <input
          type="text"
          {...register("phoneNumber", { required: "Phone Number is required" })}
          // Use handleChange for input
          className={`block px-2.5 pb-2.5 pt-4 w-full text-xl text-white bg-transparent rounded-xl border ${
            errors.phoneNumber ? "border-red-500" : "border-textColor"
          } appearance-none focus:outline-none focus:ring-0 focus:border-primaryColor peer placeholder=" "`}
        />

        <textarea
          id="message"
          rows={4}
          {...register("description",{required:"Message description isrequired"})}
          // Use handleChange for textarea
          className={`block px-2.5 pb-2.5 pt-4 w-full text-xl text-white bg-transparent rounded-xl border ${
            errors.description ? "border-red-500" : "border-textColor"
          } appearance-none focus:outline-none focus:ring-0 focus:border-primaryColor peer`}
        />

        <Button
          type="submit" // Use handleSubmit to validate and submit
          fullWidth
          variant="filled"
          size="lg"
          color="#64FFDA"
          className="!text-bgcolor text-2xl"
        >
          SUBMIT
        </Button>
      </form>
    </div>
  );
};

export default Contact;
