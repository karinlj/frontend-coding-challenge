export const getData = async (url) => {
  try {
    const result = await fetch(url);
    //result object
    if (!result.ok) {
      throw Error("Endpoint error: Could not fetch the data");
    }
    //passing data into a js-object
    const data = await result.json();
    return data;
  } catch (err) {
    console.log("Network error: ", err.message);
  }
};

export const postData = async (url, postedItem) => {
  try {
    const result = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postedItem),
    });
    if (!result.ok) {
      throw Error("Endpoint error: Could not fetch the data");
    }
    const data = await result.json();
    return data;
  } catch (err) {
    console.log("Network error: ", err.message);
  }
};
