import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View``;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const HelpOrderList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  // contentContainerStyle: { padding: 30 },
})``;

export const HelpOrder = styled.View``;
