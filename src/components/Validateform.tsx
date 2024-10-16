const Validateform = (id: string, value: any) => {
  switch (id) {
    case "name": {
      if (value.length == 0) return "Name is required";
      if (value.length < 4) return "The namee must have more than 4 characters";
      return "";
    }
    case "email": {
      if (
        !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value
        )
      )
        return "Invalid email address";
      return "";
    }
    case "phone": {
      if (value.length != 10) return "Number must have 10 digits";
      if (!/^[0-9]*$/.test(value)) return "Invalid Phone Number";
      return "";
    }
    case "message": {
      if (value.length == 0) return "Message is required!!";
      return "";
    }
    default: {
      return "";
    }
  }
};

export default Validateform;
