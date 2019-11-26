import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { parseISO, formatRelative } from 'date-fns';
import enUS from 'date-fns/locale/en-US';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import headerLogo from '~/assets/headerLogo.png';

import Background from '~/components/Background';

import api from '~/services/api';

import {
  Container,
  SubmitButton,
  HelpOrderList,
  HelpOrder,
  HelpOrderHeader,
  HelpOrderText,
  HelpOrderTime,
  HelpOrderInfo,
  HelpOrderReadText,
} from './styles';

export default function ListOrder({ navigation }) {
  const [helpOrders, setHelpOrders] = useState([]);

  const studentId = useSelector(state => state.user.user);

  async function loadHelpOrders() {
    const response = await api.get(`/students/${studentId}/help-orders`);

    setHelpOrders(
      response.data.map(order => {
        return {
          ...order,
          formattedDate: formatRelative(parseISO(order.createdAt), new Date(), {
            locale: enUS,
            addSuffix: true,
          }),
        };
      })
    );
  }

  useEffect(() => {
    loadHelpOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleRequestNewHelpOrder() {
    navigation.navigate('NewOrder');
  }

  return (
    <Background>
      <Container>
        <SubmitButton
          onPress={() => {
            handleRequestNewHelpOrder();
          }}
        >
          New help order
        </SubmitButton>
        <HelpOrderList
          data={helpOrders}
          keyExtractor={item => item._id}
          renderItem={({ item }) => (
            <HelpOrder
              onPress={() => navigation.navigate('DetailOrder', { item })}
            >
              <HelpOrderHeader>
                <HelpOrderInfo>
                  <Icon
                    name="check-circle"
                    size={20}
                    color={item.answer ? '#42CB59' : '#999999'}
                  />
                  <HelpOrderReadText answer={item.answer}>
                    {item.answer ? 'Answered' : 'No answer'}
                  </HelpOrderReadText>
                </HelpOrderInfo>
                <HelpOrderTime>{item.formattedDate}</HelpOrderTime>
              </HelpOrderHeader>
              <HelpOrderText>{item.question}</HelpOrderText>
            </HelpOrder>
          )}
        />
      </Container>
    </Background>
  );
}

ListOrder.navigationOptions = {
  headerTitle: <Image source={headerLogo} />,
};
