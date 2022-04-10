import "./cartoon.css";
import { useState, useEffect } from "react";
import { Box, Center, Image, Flex, Badge, Text, Button } from "@chakra-ui/react";

export const CartoonData = () => {

  const [data, setData] = useState([]);
    // const [isAdded, setIsAdded] = useState(false)

    useEffect(() => {
        getData()
    }, [])
  
  


    const getData = async () => {
        let res = await fetch("https://bibox-app.herokuapp.com/cartoon");
        let d = await res.json();
        console.log(d);
        setData(d.cartoon)
  }
  
  const handleAddToBag = (name, image, price) => {
    const payload = {
      name: name,
      image: image,
      price: price,
    };
    fetch("https://bibox-app.herokuapp.com/bag", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(alert("Added successfully"));
    console.log(payload);
  };



    return (
        <div className ="cartoonDiv">
            {
        data.map((e) => (
        <Center className="center">
        <Box p="5" width="200px" height="250px" borderWidth="1px">
        <Image borderRadius="md" height="150px" width="100%" src={e.image} />
        <Flex align="baseline" mt={2}>
        <Badge colorScheme="pink">{ e.price}</Badge>
          <Text
            ml={2}
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color="pink.800"
          >
            Verified
          </Text>
        </Flex>
              <Flex>
                <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short"> {e.name}</Text>
                <Button onClick={() =>handleAddToBag(e.name, e.image, e.price)}   colorScheme='teal' size="md" marginLeft="30%" variant='ghost'>Add</Button>
          </Flex>
      </Box>
    </Center>
      ))
            }
        </div>
    )
}