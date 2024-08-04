import { AddCircle as Add } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  InputBase,
  styled,
  TextareaAutosize,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { DataContext } from "../../Context/Dataprovider";
import { API } from "../../Service/Api";

const Container = styled(Box)`
  margin: 50px 100px;
`;
const Image = styled("img")({
  height: "50vh",
  width: "100%",
  objectFit: "cover",
});

const StyledFormControl = styled(FormControl)`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
`;

const StyledInputBase = styled(InputBase)`
  flex: 1;
  margin: 0 30px;
  font-size: 25px;
`;

const StyledTextareaAutosize = styled(TextareaAutosize)`
  width: 100%;
  margin-top: 10px;
  font-size: 18px;
  outline: 1px solid black;
  resize: none;
`;

const initialdata = {
  title: "",
  description: "",
  picture: "",
  username: "",
  categories: "",
  createdDate: new Date(),
};

const CreatePost = () => {
  const [post, setPost] = useState(initialdata);
  const [file, setFile] = useState("");
  const location = useLocation();
  const { account } = useContext(DataContext);

  // Image URL
  const url = post.picture ? post.picture : "/project_picture/altumcode-dMUt0X3f59Q-unsplash.jpg";

  // Getting Image
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("filename", file.name);
        data.append("file", file);

        try {
          // Api Call
          const response = await API.UploadFile(data);
          console.log("Upload response:", response.data);
          post.picture = response.data;
          
          setPost((prevPost) => ({
            ...prevPost,
            picture: response.data.imageUrl,
          }));
        } catch (error) {
          console.error("Error while uploading picture:", error);
        }
      }
    };
    getImage();

    setPost((prevPost) => ({
      ...prevPost,
      categories: location.search?.split("=")[1] || "All",
      username: account.username,
    }));
  }, [file, location.search, account]);

  const handleInputChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      {/* Image */}
      <Image src={url} alt="Banner" />

      <StyledFormControl>
        {/* Picture Input */}
        <label htmlFor="fileInput">
          <Add />
        </label>
        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />

        {/* Title input field */}
        <StyledInputBase
          name="title"
          placeholder="Title"
          value={post.title}
          onChange={handleInputChange}
        />

        {/* Publish Button */}
        <Button variant="contained">Published</Button>
      </StyledFormControl>

      {/* Text Area */}
      <StyledTextareaAutosize
        minRows={7}
        placeholder="About Blog"
        name="description"
        value={post.description || ""}
        onChange={handleInputChange}
      />
    </Container>
  );
};

export default CreatePost;
