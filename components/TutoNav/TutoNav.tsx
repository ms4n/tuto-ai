/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preserve that ability, always export from Quest to regenerate this file.
 *   To setup element attributes and CSS properties, use the Quest web app
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import { styled } from '@mui/material/styles';
import { TutoNavProps } from 'types';

const TutoNav1: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  justifyContent: `space-between`,
  alignItems: `center`,
  padding: `21px 145px`,
  boxSizing: `border-box`,
  height: 'auto',
});

const Logo: any = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `4.44px`,
  textDecoration: `none`,
  lineHeight: `120.00000476837158%`,
  textTransform: `none`,
  margin: `0px`,
});

const RightSide: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const About: any = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Heebo`,
  fontWeight: `700`,
  fontSize: `17px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `100%`,
  textTransform: `none`,
  margin: `0px`,
});

const OurTeam: any = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Heebo`,
  fontWeight: `700`,
  fontSize: `17px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `100%`,
  textTransform: `none`,
  margin: `0px 0px 0px 62px`,
});

const Learn: any = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Heebo`,
  fontWeight: `700`,
  fontSize: `17px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `100%`,
  textTransform: `none`,
  margin: `0px 0px 0px 62px`,
});

const Btn: any = styled('div')({
  backgroundColor: `rgba(0, 0, 0, 1)`,
  borderRadius: `12px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `19px 46px`,
  boxSizing: `border-box`,
  margin: `0px 0px 0px 62px`,
});

const TryItOut: any = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Heebo`,
  fontWeight: `700`,
  fontSize: `15px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `100%`,
  textTransform: `none`,
  margin: `0px`,
});

function TutoNav(props: TutoNavProps): JSX.Element {
  return (
    <TutoNav1 className={props.className}>
      <Logo>{`TUTO AI`}</Logo>
      <RightSide>
        <About>{`About`}</About>
        <OurTeam>{`Our Team`}</OurTeam>
        <Learn>{`Learn`}</Learn>
        <Btn>
          <TryItOut>{`Try it Out!`}</TryItOut>
        </Btn>
      </RightSide>
    </TutoNav1>
  );
}

export default TutoNav;
