import React from 'react';
import NotFoundImg from '../../images/404-error.png';
import { Box } from '@material-ui/core';
import { StyledTypographyCenter } from '../../styles/shared';

function NotFoundView() {
  return (
    <Box textAlign="center">
      <StyledTypographyCenter variant="h3" component="h1" color="secondary">
        Page not found
      </StyledTypographyCenter>
      <StyledTypographyCenter>
        The page you requested could not be found on this server.
      </StyledTypographyCenter>
      <StyledTypographyCenter>That's all that we know.</StyledTypographyCenter>
      <img alt="Page-not-found" src={NotFoundImg}></img>
    </Box>
  );
}

export default NotFoundView;
