import { Button, Container, Text, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Index = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  const startStopTimer = () => {
    setTimerOn(!timerOn);
  };

  const resetTimer = () => {
    setTime(0);
    setTimerOn(false);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl" fontFamily="monospace">
          {("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:
          {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
          {("0" + ((time / 10) % 100)).slice(-2)}
        </Text>
        <Button colorScheme="blue" onClick={startStopTimer}>
          {timerOn ? "Stop" : "Start"}
        </Button>
        <Button colorScheme="red" onClick={resetTimer}>
          Reset
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;