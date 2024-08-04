const url = "http://localhost:8000";

export const uploadImage = async (request, response) => {
  console.log("File name from Controller : ", request.file.filename);
  if (!request.file) {
    console.log("Uploaded file:", request.file); // Add this line
    return response.status(404).json({ msg: "File not found" });
  }

  const  imageUrl =`${url}/file/${request.file.filename}`; // Corrected typo: 'imagrUrl' to 'imageUrl'
  console.log("Generated Image URL:", imageUrl); // Add this line
  return response.status(200).json(imageUrl ); // Adjusted response key
};
