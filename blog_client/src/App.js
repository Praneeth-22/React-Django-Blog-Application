import React from "react";
import {
  Box,
  Container,
  Image,
  ButtonGroup,
  Button,
  IconButton,
  Divider,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import "./Styles/App.css";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [serverGetData, setServerGetData] = useState("");
  useEffect(() => {
    const server_data = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/");
        setServerGetData(response.data);
      } catch (err) {}
    };

    server_data();
  }, []);
   useEffect(() => {
     console.log(serverGetData);
   }, [serverGetData]);

  return (
    <>
      <Container maxW="100%" className="Container">
        <Box maxW="80%" alignItems="center" className="Box">
          <ButtonGroup
            size="sm"
            isAttached
            variant="outline"
            marginBottom="10px"
          >
            <Button>Add a Blog </Button>
            <IconButton aria-label="Add to friends" icon={<AddIcon />} />
          </ButtonGroup>
          <Divider orientation="horizontal" />
          <div>posts</div>
        </Box>
      </Container>
    </>
  );
};

export default App;
