import React from 'react';
import styled from '@emotion/styled';
import {ReactComponent as DocsIcon} from '../../../content/assets/apollo-basic-logo.svg';

const Wrapper = styled.div({
  display: 'flex',
  fontSize: 24
});

const StyledDocsIcon = styled(DocsIcon)({
  height: '1.5em',
  marginTop: '0.1em'
});

export default function Logo() {
  return (
    <Wrapper>
      <StyledDocsIcon />
    </Wrapper>
  );
}
