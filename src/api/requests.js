export async function submitRequest(requestData, serverUrl = "") {
  try {
    const response = await fetch(`${serverUrl}/api/requests`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error("Failed to submit request");
    }

    return await response.json();
  } catch (err) {
    console.error("Error submitting request:", err);
    throw err;
  }
}