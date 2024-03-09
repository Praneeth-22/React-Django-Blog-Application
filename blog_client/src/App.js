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
import { Card } from "antd";
import { AddIcon } from "@chakra-ui/icons";
import "./Styles/App.css";
import { useState, useEffect } from "react";
import axios from "axios";


const { Meta } = Card;

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
          <Box className="cards">
            {serverGetData.map((item, index) => (
              <Card
                key={index}
                hoverable
                className="card"
                cover={
                  <img alt="example" src={item.image} className="card_image" />
                }
              >
                <Meta title={item.title} description={item.content} />{" "}
              </Card>
            ))}
            <Card
              hoverable
              className="card"
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  className="card_image"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
            <Card
              hoverable
              className="card"
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  className="card_image"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
            <Card
              hoverable
              className="card"
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  className="card_image"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default App;
