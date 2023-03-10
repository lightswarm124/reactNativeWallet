import React, { useEffect, useCallback } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import styled from 'styled-components';
import { ActivityIndicator, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

// import { T, Spacer } from '../atoms';

// import { getMnemonicSelector } from "../data/accounts/selectors";
// import { getAccount } from "../data/accounts/actions";

const Wrapper = styled(View)`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const InnerWrapper = styled(View)`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

type PropsFromParent = StackNavigationProp & {};

const mapStateToProps = (state: FullState) => {
  return {
    // mnemonic: getMnemonicSelector(state),
  };
};

const mapDispatchToProps = {
  // getAccount,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromParent & PropsFromRedux;

const AuthLoadingScreen = () =>
  // { navigation, mnemonic, getAccount }: Props
  {
    return (
      <Wrapper>
        <InnerWrapper>
          <ActivityIndicator />
          {/* <Spacer />
          <T monospace>Hello World</T>
          <T monospace>OPTN Wallet</T> */}
        </InnerWrapper>
      </Wrapper>
    );
  };

export default connector(AuthLoadingScreen);
