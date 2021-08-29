import React from 'react';
import {Dimensions} from 'react-native';
import {Box, Text} from '../../theme';

const {width} = Dimensions.get('window');

function Slide({title, body}) {
  return <Box
          {...{width}}
          justifyContent="center"
          alignItems="center"
          marginTop="l"
          >
            <Box height={250} width={200} borderWidth={1} marginBottom="m"></Box>
            <Box justifyContent="center" 
                 alignItems="center"
                 paddingHorizontal="l"
            >
              <Text 
                color="black" 
                variant="hero"
                fontSize={18}
                lineHeight={20}
                marginBottom="s"
              >{title}</Text>
              <Text 
                color="black"
                textAlign="center"
                variant="body"
                fontSize={14}
                fontWeight="400"
              >{body}</Text>
            </Box>
          </Box>;
}

export default Slide;
