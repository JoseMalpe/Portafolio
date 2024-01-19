import * as React from 'react';
import { styled, ThemeProvider } from '@mui/material/styles';
import { ImageList, ImageListItem } from '@mui/material';


const ImageStyle = styled(ImageList)`
  ${({ theme }) => `
  cursor: pointer;
  transition: ${theme.transitions.create(['transform'], {
  duration: theme.transitions.duration.standard,
})};
  &:hover {
    transform: scale(1.3);
  }
  `}
`;

const TransitionHover = ({ imageUrl }) => {
  return (
    <ThemeProvider theme={{}}>
      <ImageStyle>
        <ImageList sx={{ width: 250 }} cols={1} rowHeight={'auto'} >
          <ImageListItem>
            <img src={imageUrl}
              alt="Dynamic Image"
              width='150px'
            />
          </ImageListItem>
        </ImageList>
      </ImageStyle>
    </ThemeProvider>
  );
};

export default TransitionHover;
