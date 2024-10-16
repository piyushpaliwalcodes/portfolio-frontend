
export type QueryData = {
  name: string;
  email: string;
  phoneNumber: string;
  description: string;
};


const sendQueryForm = async (data: QueryData) => {
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/query/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    console.log("ERROR AT API CLIENT");
    throw new Error("ERRROR AT API CLIENT");
  }

  return response.json();
};

export { sendQueryForm };
